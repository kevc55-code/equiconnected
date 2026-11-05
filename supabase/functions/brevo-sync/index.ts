// Keeps Brevo (the tool that sends the newsletter) in step with the
// `newsletter_subscribers` table. Two directions:
//
//   1. PUSH  new subscribers (brevo_synced_at is null) -> added to the Brevo list.
//   2. PULL  people who unsubscribed (or whose address bounced) in Brevo ->
//            unsubscribed_at is set here, so the two lists never drift apart.
//
// It is called (a) by a database trigger right after someone subscribes and
// (b) by an hourly pg_cron job. It takes no input: it only ever works on what
// is already in the table, so calling it with junk or too often does no harm.
// That is why it needs no login (verify_jwt = false); a throttle on the pull
// side stops anyone from making it hammer Brevo.
//
// Secrets (Supabase dashboard -> Edge Functions -> Secrets), never in the repo:
//   BREVO_API_KEY   a Brevo API key (v3)
//   BREVO_LIST_ID   numeric id of the Brevo list that receives subscribers
// Until both are set the function does nothing and subscribers simply wait.
import { createClient } from 'npm:@supabase/supabase-js@2'

const BREVO = 'https://api.brevo.com/v3'
const PULL_EVERY_MS = 10 * 60 * 1000
const PUSH_BATCH = 100
const MAX_PUSH_BATCHES = 5
const MAX_PULL_PAGES = 20

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

Deno.serve(async () => {
  const apiKey = Deno.env.get('BREVO_API_KEY')
  const listId = Number(Deno.env.get('BREVO_LIST_ID'))
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    return json({ status: 'not_configured' })
  }

  const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
    auth: { persistSession: false },
  })
  const brevo = (path: string, init: RequestInit = {}) =>
    fetch(`${BREVO}${path}`, {
      ...init,
      headers: { 'api-key': apiKey, accept: 'application/json', 'content-type': 'application/json', ...init.headers },
    })

  const result = { pushed: 0, push_failed: 0, unsubscribed: 0, pulled: false, error: null as string | null }

  // ---- 1. PUSH new subscribers -------------------------------------------------
  pushLoop: for (let batch = 0; batch < MAX_PUSH_BATCHES; batch++) {
    const { data: pending, error } = await sb
      .from('newsletter_subscribers')
      .select('id, email, locale')
      .is('brevo_synced_at', null)
      .is('unsubscribed_at', null)
      .order('consented_at', { ascending: true })
      .limit(PUSH_BATCH)
    if (error) {
      result.error = `read pending: ${error.message}`
      break
    }
    if (!pending?.length) break

    let progressed = 0
    for (const row of pending) {
      const body = {
        email: row.email,
        attributes: { LANGUAGE: String(row.locale ?? '').toUpperCase() },
        listIds: [listId],
        updateEnabled: true,
      }
      let res = await brevo('/contacts', { method: 'POST', body: JSON.stringify(body) })
      // The LANGUAGE attribute must exist in Brevo. If it does not, still add the
      // person (that is what matters) and say so in the logs.
      if (res.status === 400 && /attribute/i.test(await res.clone().text())) {
        console.error(`brevo-sync: attribute LANGUAGE rejected for ${row.id}; adding without it`)
        res = await brevo('/contacts', {
          method: 'POST',
          body: JSON.stringify({ email: row.email, listIds: [listId], updateEnabled: true }),
        })
      }
      if (res.ok) {
        await sb.from('newsletter_subscribers').update({ brevo_synced_at: new Date().toISOString() }).eq('id', row.id)
        result.pushed++
        progressed++
      } else {
        result.push_failed++
        // Log the status and Brevo's error code, never the address.
        console.error(`brevo-sync: push failed for ${row.id}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`)
        if (res.status === 401 || res.status === 403) {
          result.error = 'Brevo refused the API key'
          break pushLoop
        }
      }
    }
    if (progressed === 0) break // nothing moved: retry on the next run, do not spin
  }

  // ---- 2. PULL unsubscribes (throttled) ------------------------------------------
  const { data: state } = await sb.from('newsletter_sync_state').select('at').eq('key', 'brevo_last_pull').maybeSingle()
  const lastPull = state?.at ? new Date(state.at).getTime() : 0
  if (Date.now() - lastPull >= PULL_EVERY_MS) {
    const started = Date.now()
    const since = new Date(lastPull ? lastPull - 2 * 60 * 1000 : Date.UTC(2020, 0, 1)).toISOString()

    const gone = new Set<string>() // lower-cased addresses Brevo will no longer email
    let complete = false
    for (let page = 0; page < MAX_PULL_PAGES; page++) {
      const qs = new URLSearchParams({ limit: '500', offset: String(page * 500), sort: 'asc', modifiedSince: since })
      const res = await brevo(`/contacts?${qs}`)
      if (!res.ok) {
        console.error(`brevo-sync: pull failed: HTTP ${res.status}`)
        result.error ??= `Brevo pull failed (HTTP ${res.status})`
        break
      }
      const payload = await res.json()
      const contacts: Array<{ email?: string; emailBlacklisted?: boolean; listUnsubscribed?: number[] }> =
        payload.contacts ?? []
      for (const c of contacts) {
        if (c.email && (c.emailBlacklisted || (c.listUnsubscribed ?? []).includes(listId))) {
          gone.add(c.email.toLowerCase())
        }
      }
      if (contacts.length < 500) {
        complete = true
        break
      }
    }

    if (gone.size) {
      // Compare in code (not SQL ilike) so characters such as "_" in an address are not wildcards.
      for (let from = 0; ; from += 1000) {
        const { data: active, error } = await sb
          .from('newsletter_subscribers')
          .select('id, email')
          .is('unsubscribed_at', null)
          .order('id')
          .range(from, from + 999)
        if (error || !active?.length) break
        const ids = active.filter((r) => gone.has(r.email.toLowerCase())).map((r) => r.id)
        if (ids.length) {
          await sb.from('newsletter_subscribers').update({ unsubscribed_at: new Date().toISOString() }).in('id', ids)
          result.unsubscribed += ids.length
        }
        if (active.length < 1000) break
      }
    }

    if (complete) {
      await sb.from('newsletter_sync_state').upsert({ key: 'brevo_last_pull', at: new Date(started).toISOString() })
      result.pulled = true
    }
  }

  return json(result, result.error ? 502 : 200)
})
