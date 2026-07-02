'use client'

import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">
            {t.firstName}
          </label>
          <input className="w-full rounded border border-ink/15 px-3 py-2 text-sm" type="text" required />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">
            {t.lastName}
          </label>
          <input className="w-full rounded border border-ink/15 px-3 py-2 text-sm" type="text" required />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">{t.email}</label>
        <input className="w-full rounded border border-ink/15 px-3 py-2 text-sm" type="email" required />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">{t.message}</label>
        <textarea className="w-full rounded border border-ink/15 px-3 py-2 text-sm min-h-[120px]" required />
      </div>
      <button
        type="submit"
        className="bg-brand hover:bg-brand-dark transition-colors text-white font-semibold text-sm px-6 py-3 rounded"
      >
        {t.send}
      </button>
    </form>
  )
}
