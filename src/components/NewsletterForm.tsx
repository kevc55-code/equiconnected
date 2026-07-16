'use client'

import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

export default function NewsletterForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center gap-2">
        <label htmlFor="newsletter-email" className="text-white font-semibold text-sm">
          {t.newsletterLabel}
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder={t.emailPlaceholder}
          className="rounded px-3 py-2 text-sm text-ink w-56 outline-none"
        />
        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-300 transition-colors text-brand-darker font-bold text-sm px-4 py-2 rounded"
        >
          {t.ok}
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs text-white/80 max-w-md cursor-pointer">
        <input type="checkbox" required className="mt-0.5" />
        <span>
          {t.newsletterConsent}{' '}
          <Link href={`/${locale}/privacy-policy`} className="underline hover:text-white">
            {t.privacyPolicy}
          </Link>
        </span>
      </label>
    </form>
  )
}
