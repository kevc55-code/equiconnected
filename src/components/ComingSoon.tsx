import Link from 'next/link'
import Logo from './Logo'
import { locales, type Locale } from '@/lib/i18n'

const text: Record<Locale, { heading: string; body: string; contact: string }> = {
  fr: {
    heading: 'Bientôt disponible',
    body: 'Notre nouveau site est en cours de construction. Merci de votre patience, nous revenons très vite !',
    contact: 'Pour nous contacter en attendant :',
  },
  en: {
    heading: 'Coming soon',
    body: 'Our new website is under construction. Thank you for your patience, we will be back very soon!',
    contact: 'To contact us in the meantime:',
  },
  de: {
    heading: 'Demnächst verfügbar',
    body: 'Unsere neue Website befindet sich im Aufbau. Vielen Dank für Ihre Geduld, wir sind bald wieder da!',
    contact: 'So erreichen Sie uns in der Zwischenzeit:',
  },
}

export default function ComingSoon({ locale }: { locale: Locale }) {
  const t = text[locale]
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-darker to-brand-dark text-white flex flex-col items-center justify-center px-4 py-16 text-center">
      <Logo className="h-20 w-20" />
      <p className="mt-4 font-serif text-2xl font-semibold tracking-wide">EquiConnected</p>
      <h1 className="mt-10 font-serif italic text-4xl md:text-5xl font-semibold">{t.heading}</h1>
      <p className="mt-6 max-w-xl text-white/80 leading-relaxed">{t.body}</p>
      <p className="mt-10 text-sm text-white/70">{t.contact}</p>
      <a href="mailto:secretariat@equiconnected.org" className="mt-1 underline hover:text-brand-light">
        secretariat@equiconnected.org
      </a>
      <nav className="mt-12 flex gap-2" aria-label="Language">
        {locales.map((l) => (
          <Link
            key={l}
            href={`/${l}`}
            hrefLang={l}
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              l === locale ? 'bg-white text-brand-darker border-white' : 'border-white/40 text-white/70 hover:text-white'
            }`}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </nav>
    </main>
  )
}
