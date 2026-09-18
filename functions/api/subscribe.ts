// Cloudflare Pages Function — POST /api/subscribe
// Runs server-side alongside the static export; never bundled into the
// Next.js build. Reads Supabase connection details from Cloudflare
// environment variables (set in the Pages project dashboard), so no
// secret ever ships to the browser.

interface Env {
  SUPABASE_URL: string
  SUPABASE_ANON_KEY: string
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ALLOWED_LOCALES = new Set(['en', 'fr', 'de'])

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context

  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
    return json({ error: 'not_configured' }, 500)
  }

  let body: { email?: unknown; locale?: unknown; consent?: unknown }
  try {
    body = await request.json()
  } catch {
    return json({ error: 'invalid_body' }, 400)
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const locale = ALLOWED_LOCALES.has(String(body.locale)) ? String(body.locale) : 'en'

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ error: 'invalid_email' }, 400)
  }
  if (body.consent !== true) {
    return json({ error: 'consent_required' }, 400)
  }

  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
    method: 'POST',
    headers: {
      apikey: env.SUPABASE_ANON_KEY,
      authorization: `Bearer ${env.SUPABASE_ANON_KEY}`,
      'content-type': 'application/json',
      prefer: 'return=minimal',
    },
    body: JSON.stringify({ email, locale, source: 'website' }),
  })

  if (res.status === 201) {
    return json({ ok: true }, 200)
  }

  // Postgres unique_violation surfaces as a 409 from PostgREST.
  if (res.status === 409) {
    return json({ ok: true, already: true }, 200)
  }

  return json({ error: 'upstream_error' }, 502)
}
