import Link from 'next/link'
import NewsletterForm from './NewsletterForm'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  return (
    <footer>
      <div className="bg-brand px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <NewsletterForm locale={locale} />
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="h-8 w-8 rounded flex items-center justify-center bg-[#1877F2] text-white text-sm font-bold"
            >
              f
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="h-8 w-8 rounded flex items-center justify-center bg-[#FF0000] text-white text-sm font-bold"
            >
              ▶
            </a>
          </div>
        </div>
      </div>
      <div className="bg-brand-dark px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80">
          <Link href={`/${locale}/site-map`} className="hover:text-white">{t.siteMap}</Link>
          <Link href={`/${locale}/licenses`} className="hover:text-white">{t.licenses}</Link>
          <Link href={`/${locale}/legal-notice`} className="hover:text-white">{t.legalNotice}</Link>
          <Link href={`/${locale}/privacy-policy`} className="hover:text-white">{t.privacyPolicy}</Link>
          <Link href={`/${locale}/terms`} className="hover:text-white">{t.terms}</Link>
          <Link href={`/${locale}/cookie-settings`} className="hover:text-white">{t.cookieSettings}</Link>
        </div>
        <p className="text-center text-[11px] text-white/50 mt-3">
          &copy; {new Date().getFullYear()} {t.founded}
        </p>
      </div>
    </footer>
  )
}
