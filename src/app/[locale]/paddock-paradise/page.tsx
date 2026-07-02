import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Paddock Paradise',
    heroIntro:
      'A natural horse management system based on tracks, designed to replicate how horses live and move in the wild.',
    h1: 'Concept',
    p1: "In the early 1980s, farrier Jaime Jackson spent several years studying wild horses in the Great Basin National Park in North America. By carefully observing their movement patterns, social structures, and hoof health in a dry, rocky desert environment, he identified key factors that contribute to the horses' long-term health and well-being.",
    p2a: 'These observations formed the basis of the Paddock Paradise® concept, which Jackson later documented and developed in his books. The system relies on ',
    p2b: "supporting the horse's natural biology",
    p2c: ' rather than adapting the horse to traditional management systems.',
    h2: 'What is a Paddock Paradise®?',
    h3: 'Origin',
    p3: 'A Paddock Paradise® is a natural horse management system based on tracks, designed to replicate how horses live and move in the wild. Instead of living in large open pastures, horses are guided along a looped track that encourages continuous movement, natural foraging, and social interaction.',
    p4a: 'The track includes ',
    p4b: 'varied terrain',
    p4c: ', ',
    p4d: 'hay and water stations',
    p4e: ', ',
    p4f: 'rest areas',
    p4g: ', and ',
    p4h: 'enrichment zones',
    p4i: '. This layout promotes:',
    list: ['Healthier hooves', 'Improved physical fitness', 'Mental stimulation', 'More natural social behavior'],
    p5a: 'Access to green grass represents a departure from the concept. It allows horses to let off steam and roll around in a limited time frame, which is highly appreciated. Compared to conventional grazing systems, a Paddock Paradise® offers a ',
    p5b: 'more stimulating and biologically appropriate environment.',
    imgCaption: 'Aerial view of a track system',
  },
  fr: {
    heroTitle: 'Paddock Paradise',
    heroIntro:
      "Un système naturel de gestion des chevaux basé sur des pistes, conçu pour reproduire la vie et les déplacements du cheval à l'état sauvage.",
    h1: 'Concept',
    p1: "Au début des années 1980, le maréchal-ferrant Jaime Jackson a passé plusieurs années à étudier les chevaux sauvages du Great Basin National Park, en Amérique du Nord. En observant attentivement leurs déplacements, leur organisation sociale et la santé de leurs sabots dans un environnement désertique, sec et rocailleux, il a identifié les facteurs clés de leur santé et de leur bien-être à long terme.",
    p2a: "Ces observations ont formé la base du concept Paddock Paradise®, que Jackson a ensuite documenté et développé dans ses livres. Le système repose sur le fait de ",
    p2b: 'soutenir la biologie naturelle du cheval',
    p2c: " plutôt que d'adapter le cheval aux systèmes de gestion traditionnels.",
    h2: "Qu'est-ce qu'un Paddock Paradise® ?",
    h3: 'Origine',
    p3: "Un Paddock Paradise® est un système naturel de gestion des chevaux basé sur des pistes, conçu pour reproduire la vie et les déplacements du cheval à l'état sauvage. Au lieu de vivre dans de grands pâturages ouverts, les chevaux sont guidés le long d'une piste en boucle qui encourage le mouvement continu, la recherche naturelle de nourriture et l'interaction sociale.",
    p4a: 'La piste comprend un ',
    p4b: 'terrain varié',
    p4c: ', des ',
    p4d: "postes de foin et d'eau",
    p4e: ', des ',
    p4f: 'zones de repos',
    p4g: ', et des ',
    p4h: "zones d'enrichissement",
    p4i: '. Cet aménagement favorise :',
    list: ['Des sabots plus sains', 'Une meilleure condition physique', 'Une stimulation mentale', 'Un comportement social plus naturel'],
    p5a: "L'accès à l'herbe verte représente un écart au concept. Il permet aux chevaux de se défouler et de se rouler pendant un temps limité, ce qui est très apprécié. Comparé aux systèmes de pâturage conventionnels, un Paddock Paradise® offre un ",
    p5b: 'environnement plus stimulant et biologiquement approprié.',
    imgCaption: "Vue aérienne d'un système de pistes",
  },
  de: {
    heroTitle: 'Paddock Paradise',
    heroIntro:
      'Ein natürliches Haltungssystem auf Trails, das nachbildet, wie Pferde in freier Wildbahn leben und sich bewegen.',
    h1: 'Konzept',
    p1: 'In den frühen 1980er-Jahren verbrachte der Hufschmied Jaime Jackson mehrere Jahre damit, wild lebende Pferde im Great Basin National Park in Nordamerika zu untersuchen. Durch sorgfältige Beobachtung ihrer Bewegungsmuster, Sozialstrukturen und Hufgesundheit in einer trockenen, felsigen Wüstenumgebung identifizierte er Schlüsselfaktoren für die langfristige Gesundheit und das Wohlbefinden der Pferde.',
    p2a: 'Diese Beobachtungen bildeten die Grundlage des Paddock-Paradise®-Konzepts, das Jackson später in seinen Büchern dokumentierte und weiterentwickelte. Das System beruht darauf, die ',
    p2b: 'natürliche Biologie des Pferdes zu unterstützen',
    p2c: ', anstatt das Pferd an traditionelle Haltungssysteme anzupassen.',
    h2: 'Was ist ein Paddock Paradise®?',
    h3: 'Ursprung',
    p3: 'Ein Paddock Paradise® ist ein natürliches Haltungssystem auf Trails, das nachbildet, wie Pferde in freier Wildbahn leben und sich bewegen. Statt auf großen offenen Weiden zu leben, werden Pferde entlang eines Rundwegs geführt, der kontinuierliche Bewegung, natürliches Fressverhalten und soziale Interaktion fördert.',
    p4a: 'Der Trail umfasst ',
    p4b: 'abwechslungsreiches Gelände',
    p4c: ', ',
    p4d: 'Heu- und Wasserstationen',
    p4e: ', ',
    p4f: 'Ruhezonen',
    p4g: ' und ',
    p4h: 'Anreicherungszonen',
    p4i: '. Dieses Layout fördert:',
    list: ['Gesündere Hufe', 'Bessere körperliche Fitness', 'Geistige Anregung', 'Natürlicheres Sozialverhalten'],
    p5a: 'Der Zugang zu grünem Gras stellt eine Abweichung vom Konzept dar. Er erlaubt es den Pferden, sich in einem begrenzten Zeitfenster auszutoben und zu wälzen, was sehr geschätzt wird. Im Vergleich zu konventionellen Weidesystemen bietet ein Paddock Paradise® eine ',
    p5b: 'anregendere und biologisch angemessenere Umgebung.',
    imgCaption: 'Luftaufnahme eines Trail-Systems',
  },
} satisfies Record<Locale, unknown>

export default function PaddockParadiseConceptPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/paddock-paradise'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/paddock-paradise`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose-body md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h1}</h2>
          <p>{c.p1}</p>
          <p>
            {c.p2a}
            <strong>{c.p2b}</strong>
            {c.p2c}
          </p>

          <h2 className="font-serif text-2xl font-semibold mb-3 mt-8">{c.h2}</h2>
          <h3 className="font-semibold text-ink mb-2">{c.h3}</h3>
          <p>{c.p3}</p>
          <p>
            {c.p4a}
            <strong>{c.p4b}</strong>
            {c.p4c}
            <strong>{c.p4d}</strong>
            {c.p4e}
            <strong>{c.p4f}</strong>
            {c.p4g}
            <strong>{c.p4h}</strong>
            {c.p4i}
          </p>
          <ul>
            {c.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            {c.p5a}
            <strong>{c.p5b}</strong>
          </p>
        </div>
        <ImagePlaceholder caption={c.imgCaption} className="md:col-span-2" ratio="aspect-[21/9]" />
      </div>
    </div>
  )
}
