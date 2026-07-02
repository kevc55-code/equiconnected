import PageHero from '@/components/PageHero'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    title: 'Legal Notice',
    p1: 'EquiConnected is an association founded in October 2025, promoting harmonious relationships between horses and humans.',
    p2: 'For any legal inquiries, please reach out via our contact page.',
  },
  fr: {
    title: 'Mentions légales',
    p1: "EquiConnected est une association fondée en octobre 2025, promouvant des relations harmonieuses entre chevaux et humains.",
    p2: 'Pour toute question juridique, merci de nous contacter via notre page de contact.',
  },
  de: {
    title: 'Impressum',
    p1: 'EquiConnected ist ein im Oktober 2025 gegründeter Verein, der harmonische Beziehungen zwischen Pferd und Mensch fördert.',
    p2: 'Bei rechtlichen Fragen kontaktieren Sie uns bitte über unsere Kontaktseite.',
  },
} satisfies Record<Locale, unknown>

export default function LegalNoticePage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  return (
    <div>
      <PageHero title={c.title} />
      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
      </div>
    </div>
  )
}
