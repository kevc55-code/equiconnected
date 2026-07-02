import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer>
      <div className="bg-brand px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <NewsletterForm />
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
          <Link href="/site-map" className="hover:text-white">Site Map</Link>
          <Link href="/licenses" className="hover:text-white">Licenses</Link>
          <Link href="/legal-notice" className="hover:text-white">Legal Notice</Link>
          <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          <Link href="/cookie-settings" className="hover:text-white">Cookie Settings</Link>
        </div>
        <p className="text-center text-[11px] text-white/50 mt-3">
          &copy; {new Date().getFullYear()} EquiConnected — Association founded October 2025
        </p>
      </div>
    </footer>
  )
}
