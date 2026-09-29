'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error' | 'invalid_email' | 'consent_required'

// The site is a static export on GitHub Pages, so the browser talks to
// Supabase directly. The publishable key is public by design: row-level
// security on newsletter_subscribers only allows anonymous INSERTs, so it
// can't be used to read, change or delete subscribers.
const SUPABASE_URL = 'https://ubehfckmknwexwsciexx.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_q2NUyGKivimApRM_mQoR2w_K4ol0g1V'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function NewsletterForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim().toLowerCase()
    const consent = (form.elements.namedItem('consent') as HTMLInputElement).checked

    if (!consent) {
      setStatus('consent_required')
      return
    }

    if (!EMAIL_RE.test(email) || email.length > 254) {
      setStatus('invalid_email')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          'content-type': 'application/json',
          prefer: 'return=minimal',
        },
        body: JSON.stringify({ email, locale, source: 'website' }),
      })
      if (res.status === 201) {
        setStatus('success')
        form.reset()
      } else if (res.status === 409) {
        // Postgres unique_violation: this address is already subscribed.
        setStatus('already')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const message =
    status === 'success'
      ? t.subscribeSuccess
      : status === 'already'
        ? t.subscribeAlready
        : status === 'error'
          ? t.subscribeError
          : status === 'invalid_email'
            ? t.subscribeInvalidEmail
            : status === 'consent_required'
              ? t.subscribeConsentRequired
              : null

  const done = status === 'success' || status === 'already'

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <label htmlFor="newsletter-email" className="text-white font-semibold text-sm">
          {t.newsletterLabel}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          disabled={done || status === 'loading'}
          placeholder={t.emailPlaceholder}
          className="rounded px-3 py-2 text-sm text-ink w-56 outline-none disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={done || status === 'loading'}
          className="bg-amber-400 hover:bg-amber-300 transition-colors text-brand-darker font-bold text-sm px-4 py-2 rounded disabled:opacity-70"
        >
          {status === 'loading' ? t.subscribing : t.ok}
        </button>
      </div>
      {!done ? (
        <label className="flex items-start gap-2 text-xs text-white/80 max-w-md cursor-pointer">
          <input name="consent" type="checkbox" required className="mt-0.5" />
          <span>
            {t.newsletterConsent}{' '}
            <Link href={`/${locale}/privacy-policy`} className="underline hover:text-white">
              {t.privacyPolicy}
            </Link>
          </span>
        </label>
      ) : null}
      {message ? (
        <p className={`text-xs ${done ? 'text-white' : 'text-amber-200'}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  )
}
