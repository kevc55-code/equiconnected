import PageHero from '@/components/PageHero'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    title: 'Cookie Settings',
    p1: 'This site uses cookies only for essential site functionality. No tracking cookies are set.',
  },
  fr: {
    title: 'Paramétrer vos cookies',
    p1: "Ce site utilise des cookies uniquement pour son fonctionnement essentiel. Aucun cookie de suivi n'est déposé.",
  },
  de: {
    title: 'Cookie-Einstellungen',
    p1: 'Diese Website verwendet Cookies nur für die wesentliche Funktionalität. Es werden keine Tracking-Cookies gesetzt.',
  },
} satisfies Record<Locale, unknown>

export default function CookieSettingsPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  return (
    <div>
      <PageHero title={c.title} />
      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>{c.p1}</p>
      </div>
    </div>
  )
}
