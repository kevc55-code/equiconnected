import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Mountain Trail',
    heroIntro: 'Complicity and calmness in the movements of the rider/horse pair over natural obstacles.',
    caption: 'Natural obstacle course',
    p1: 'The Mountain Trail was created in the United States in 2001 and imported to France in 2017.',
    p2a: 'This discipline has as its ethos the ',
    p2b: 'complicity and calmness in the movements of the rider/horse pair over natural and constructed obstacles encountered outdoors (bridges, water crossings, stone courses...)',
    p2c: '.',
    p3: 'The initial objective of this sport is to prepare the horse and rider for outdoor riding. However, all riding styles can benefit from this mental and physical preparation, which necessarily involves groundwork fundamentals.',
    p4: "More than just a discipline, a Mountain Trail session is a true assessment of the relationship with one's horse.",
    p5: "The practice takes place on the ground, mounted, accompanied, on a lead rope, on the right, bareback, without a bit, ... In competition, the classes are distinguished as mini horse, young horse, long-rein or Horse & Dog... No level required for riders, all equines with or without papers can participate.",
    p6a: 'We are members of ',
    p6b: 'MTHA France',
    p6c: ', which offers a Mountain Trail respecting a Horsemanship approach.',
    caption2: 'Crossing a bridge obstacle',
  },
  fr: {
    heroTitle: 'Mountain Trail',
    heroIntro: 'Complicité et calme dans les déplacements du couple cavalier/cheval sur des obstacles naturels.',
    caption: 'Parcours d’obstacles naturels',
    p1: 'Le Mountain Trail a été créé aux États-Unis en 2001 et importé en France en 2017.',
    p2a: "Cette discipline a pour éthique la ",
    p2b: "complicité et le calme dans les déplacements du couple cavalier/cheval sur des obstacles naturels et construits rencontrés en extérieur (ponts, passages d'eau, parcours de pierres...)",
    p2c: '.',
    p3: "L'objectif initial de ce sport est de préparer le cheval et le cavalier à la randonnée extérieure. Cependant, tous les styles d'équitation peuvent bénéficier de cette préparation mentale et physique, qui implique nécessairement les fondamentaux du travail au sol.",
    p4: "Plus qu'une simple discipline, une séance de Mountain Trail est une véritable évaluation de la relation avec son cheval.",
    p5: "La pratique se déroule à pied, monté, accompagné, en longe, à droite, à cru, sans mors... En compétition, les catégories se distinguent en mini poney, jeune cheval, longues rênes ou Horse & Dog... Aucun niveau n'est requis pour les cavaliers, tous les équidés avec ou sans papiers peuvent participer.",
    p6a: 'Nous sommes membres de ',
    p6b: 'MTHA France',
    p6c: ', qui propose un Mountain Trail respectueux d’une approche Horsemanship.',
    caption2: "Franchissement d'un obstacle de type pont",
  },
  de: {
    heroTitle: 'Mountain Trail',
    heroIntro: 'Einvernehmen und Ruhe in den Bewegungen des Reiter-Pferd-Paares über natürliche Hindernisse.',
    caption: 'Natürlicher Hindernisparcours',
    p1: 'Der Mountain Trail wurde 2001 in den USA entwickelt und 2017 nach Frankreich gebracht.',
    p2a: 'Das Ethos dieser Disziplin ist das ',
    p2b: 'Einvernehmen und die Ruhe in den Bewegungen des Reiter-Pferd-Paares über natürliche und errichtete Hindernisse im Freien (Brücken, Wasserdurchquerungen, Steinparcours...)',
    p2c: '.',
    p3: 'Das ursprüngliche Ziel dieses Sports ist es, Pferd und Reiter auf das Ausreiten im Freien vorzubereiten. Doch alle Reitstile können von dieser mentalen und körperlichen Vorbereitung profitieren, die zwangsläufig Bodenarbeit-Grundlagen einschließt.',
    p4: 'Mehr als nur eine Disziplin ist eine Mountain-Trail-Sitzung eine echte Bestandsaufnahme der Beziehung zum eigenen Pferd.',
    p5: 'Die Praxis findet zu Fuß, geritten, begleitet, am Führstrick, an der rechten Seite, ungesattelt, ohne Gebiss statt... Im Wettkampf unterscheiden sich die Klassen in Minipferd, Jungpferd, Langzügel oder Horse & Dog... Für Reiter ist kein Niveau erforderlich, alle Pferde mit oder ohne Papiere können teilnehmen.',
    p6a: 'Wir sind Mitglied von ',
    p6b: 'MTHA France',
    p6c: ', das einen Mountain Trail im Einklang mit einem Horsemanship-Ansatz anbietet.',
    caption2: 'Überquerung eines Brückenhindernisses',
  },
} satisfies Record<Locale, unknown>

export default function MountainTrailPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption={c.caption} />
        <div className="prose-body">
          <p>{c.p1}</p>
          <p>
            {c.p2a}
            <strong>{c.p2b}</strong>
            {c.p2c}
          </p>
          <p>{c.p3}</p>
          <p>{c.p4}</p>
          <p>{c.p5}</p>
          <p>
            {c.p6a}
            <strong>{c.p6b}</strong>
            {c.p6c}
          </p>
        </div>
        <ImagePlaceholder caption={c.caption2} className="md:col-span-2" ratio="aspect-[21/9]" />
      </div>
    </div>
  )
}
