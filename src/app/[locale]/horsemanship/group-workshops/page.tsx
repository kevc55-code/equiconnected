import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Group Workshops',
    heroIntro: 'Learning alongside other horse-and-human pairs, at a shared pace.',
    p1: 'Our group workshops bring together a small number of participants and their horses to practice groundwork exercises together, observe one another, and share feedback in a supportive setting.',
    list: [
      "Small groups, capped to keep everyone's safety and attention in focus.",
      'A mix of demonstration, hands-on practice, and group discussion.',
      'Open to all levels — what matters is willingness to listen and observe.',
      'Horses provided for participants without their own, on request.',
    ],
    caption: 'A group workshop in progress',
  },
  fr: {
    heroTitle: 'Ateliers Collectifs',
    heroIntro: 'Apprendre aux côtés d’autres binômes cheval-humain, à un rythme partagé.',
    p1: 'Nos ateliers collectifs réunissent un petit nombre de participants et leurs chevaux pour pratiquer ensemble des exercices de travail au sol, s’observer mutuellement et échanger des retours dans un cadre bienveillant.',
    list: [
      "Des petits groupes, limités pour garder l'attention et la sécurité de chacun.",
      'Un mélange de démonstration, de pratique et de discussion en groupe.',
      "Ouvert à tous les niveaux — ce qui compte, c'est la volonté d'écouter et d'observer.",
      'Des chevaux mis à disposition pour les participants qui n’en ont pas, sur demande.',
    ],
    caption: 'Un atelier collectif en cours',
  },
  de: {
    heroTitle: 'Gruppenworkshops',
    heroIntro: 'Gemeinsam lernen mit anderen Pferd-Mensch-Paaren, in einem geteilten Tempo.',
    p1: 'Unsere Gruppenworkshops bringen eine kleine Anzahl von Teilnehmern und ihren Pferden zusammen, um gemeinsam Bodenarbeitsübungen zu praktizieren, einander zu beobachten und Feedback in einem unterstützenden Rahmen auszutauschen.',
    list: [
      'Kleine Gruppen, begrenzt, um Sicherheit und Aufmerksamkeit für alle zu gewährleisten.',
      'Eine Mischung aus Vorführung, praktischer Übung und Gruppendiskussion.',
      'Offen für alle Niveaus — entscheidend ist die Bereitschaft zuzuhören und zu beobachten.',
      'Pferde werden auf Anfrage für Teilnehmer ohne eigenes Pferd zur Verfügung gestellt.',
    ],
    caption: 'Ein Gruppenworkshop im Gange',
  },
} satisfies Record<Locale, unknown>

export default function GroupWorkshopsPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/horsemanship'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/horsemanship/group-workshops`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose-body">
          <p>{c.p1}</p>
          <ul>
            {c.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <ImagePlaceholder caption={c.caption} />
      </div>
    </div>
  )
}
