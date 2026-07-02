import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Useful Links',
    heroIntro: 'Organizations and resources referenced across our work.',
    links: [
      {
        name: 'MTHA France',
        desc: 'The federation offering Mountain Trail practiced with a horsemanship approach.',
      },
      {
        name: 'Jaime Jackson — Paddock Paradise research',
        desc: 'The original studies on wild horse movement that shaped the Paddock Paradise concept.',
      },
      {
        name: 'French equine dental technician federation',
        desc: 'The professional body training and grouping equine dental technicians in France.',
      },
    ],
  },
  fr: {
    heroTitle: 'Liens Utiles',
    heroIntro: 'Organisations et ressources référencées dans notre travail.',
    links: [
      {
        name: 'MTHA France',
        desc: 'La fédération proposant un Mountain Trail pratiqué avec une approche Horsemanship.',
      },
      {
        name: 'Jaime Jackson — recherches sur le Paddock Paradise',
        desc: "Les études d'origine sur le déplacement du cheval sauvage qui ont façonné le concept de Paddock Paradise.",
      },
      {
        name: 'Fédération française des techniciens dentaires équins',
        desc: "L'organisme professionnel qui forme et regroupe les techniciens dentaires équins en France.",
      },
    ],
  },
  de: {
    heroTitle: 'Nützliche Links',
    heroIntro: 'Organisationen und Ressourcen, auf die wir uns in unserer Arbeit beziehen.',
    links: [
      {
        name: 'MTHA France',
        desc: 'Der Verband, der Mountain Trail mit einem Horsemanship-Ansatz anbietet.',
      },
      {
        name: 'Jaime Jackson — Paddock-Paradise-Forschung',
        desc: 'Die ursprünglichen Studien über die Bewegung wild lebender Pferde, die das Paddock-Paradise-Konzept prägten.',
      },
      {
        name: 'Französischer Verband für Pferdezahntechniker',
        desc: 'Die Berufsorganisation, die Pferdezahntechniker in Frankreich ausbildet und organisiert.',
      },
    ],
  },
} satisfies Record<Locale, unknown>

export default function UsefulLinksPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/useful-information'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/useful-information/useful-links`} />

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-4">
        {c.links.map((link) => (
          <div key={link.name} className="rounded-lg border border-ink/10 p-5">
            <h3 className="font-serif font-semibold text-brand-darker">{link.name}</h3>
            <p className="text-sm text-ink/60 mt-1">{link.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
