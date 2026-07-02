import PageHero from '@/components/PageHero'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    title: 'Terms & Conditions',
    p1: 'General terms and conditions of use and sale for EquiConnected events, workshops, and shop.',
  },
  fr: {
    title: 'CGUV',
    p1: 'Conditions générales d’utilisation et de vente pour les événements, ateliers et la boutique EquiConnected.',
  },
  de: {
    title: 'AGB',
    p1: 'Allgemeine Nutzungs- und Verkaufsbedingungen für Veranstaltungen, Workshops und den Shop von EquiConnected.',
  },
} satisfies Record<Locale, unknown>

export default function TermsPage({ params }: { params: { locale: Locale } }) {
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
