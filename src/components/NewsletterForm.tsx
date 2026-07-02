'use client'

import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

export default function NewsletterForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  return (
    <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
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
    </form>
  )
}
