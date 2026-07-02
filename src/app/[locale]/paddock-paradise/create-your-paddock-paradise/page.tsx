import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Create Your Paddock Paradise',
    heroIntro:
      'Turning any property into a track system starts with observing your land, your horses, and how the two can move together.',
    h1: 'Where to start',
    p1a: 'Every property is different, so every track is designed around what is already there: existing fence lines, natural shade, slopes, and water sources. The goal is to turn the whole space into a',
    p1b: ' journey',
    p1c: ' rather than a single open field.',
    list1: [
      'Map the perimeter and identify natural obstacles to work with, not against.',
      'Space hay, water, and shelter stations far apart to encourage constant movement.',
      'Vary the ground surface — sand, gravel, packed earth — to condition healthy hooves.',
      'Add loafing and rolling areas along the track for rest and social contact.',
    ],
    h2: 'How we can help',
    p2: 'We offer on-site visits to walk your land with you, sketch a first track layout, and talk through fencing, footing, and station placement that fits your budget and your herd. Whether you are starting from a bare pasture or adapting an existing paddock, the aim is always the same: more steps, more foraging, more natural behavior.',
    imgCaption: 'Sketching a track layout on site',
  },
  fr: {
    heroTitle: 'Créez votre Paddock Paradise',
    heroIntro:
      'Transformer une propriété en système de pistes commence par observer votre terrain, vos chevaux, et la manière dont les deux peuvent évoluer ensemble.',
    h1: 'Par où commencer',
    p1a: "Chaque propriété est différente, c'est pourquoi chaque piste est conçue autour de l'existant : clôtures déjà en place, ombre naturelle, pentes et points d'eau. L'objectif est de transformer tout l'espace en un",
    p1b: ' parcours',
    p1c: " plutôt qu'en un simple champ ouvert.",
    list1: [
      'Cartographiez le périmètre et identifiez les obstacles naturels avec lesquels composer.',
      "Espacez largement les postes de foin, d'eau et d'abri pour encourager un mouvement constant.",
      'Variez la nature du sol — sable, gravier, terre battue — pour conditionner des sabots sains.',
      'Ajoutez des zones de repos et de reddition le long de la piste pour le repos et le contact social.',
    ],
    h2: 'Comment nous pouvons vous aider',
    p2: "Nous proposons des visites sur site pour parcourir votre terrain avec vous, esquisser un premier tracé de piste, et discuter des clôtures, du revêtement au sol et de l'emplacement des postes en fonction de votre budget et de votre troupeau. Que vous partiez d'un pâturage nu ou que vous adaptiez un paddock existant, l'objectif reste le même : plus de pas, plus de fourrage, plus de comportement naturel.",
    imgCaption: 'Esquisse du tracé de la piste sur site',
  },
  de: {
    heroTitle: 'Ihr Paddock Paradise gestalten',
    heroIntro:
      'Ein Grundstück in ein Trail-System zu verwandeln beginnt damit, Ihr Land, Ihre Pferde und ihr gemeinsames Bewegungsmuster zu beobachten.',
    h1: 'Wo Sie anfangen sollten',
    p1a: 'Jedes Grundstück ist anders, deshalb wird jeder Trail um das Vorhandene herum gestaltet: bestehende Zäune, natürlicher Schatten, Gefälle und Wasserquellen. Ziel ist es, den gesamten Raum in eine',
    p1b: ' Wegstrecke',
    p1c: ' zu verwandeln statt in eine einzige offene Weide.',
    list1: [
      'Kartieren Sie den Umfang und identifizieren Sie natürliche Hindernisse, mit denen Sie arbeiten können.',
      'Platzieren Sie Heu-, Wasser- und Unterstellstationen weit auseinander, um ständige Bewegung zu fördern.',
      'Variieren Sie den Untergrund — Sand, Kies, festgetretene Erde — um gesunde Hufe zu konditionieren.',
      'Fügen Sie entlang des Trails Ruhe- und Wälzzonen für Erholung und sozialen Kontakt hinzu.',
    ],
    h2: 'Wie wir helfen können',
    p2: 'Wir bieten Vor-Ort-Besuche an, um gemeinsam mit Ihnen Ihr Grundstück zu begehen, einen ersten Trail-Entwurf zu skizzieren und Zäune, Bodenbelag und Stationsplatzierung passend zu Ihrem Budget und Ihrer Herde zu besprechen. Ob Sie von einer kahlen Weide ausgehen oder einen bestehenden Paddock anpassen — das Ziel bleibt immer dasselbe: mehr Schritte, mehr Futtersuche, mehr natürliches Verhalten.',
    imgCaption: 'Skizzieren eines Trail-Layouts vor Ort',
  },
} satisfies Record<Locale, unknown>

export default function CreatePaddockParadisePage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/paddock-paradise'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/paddock-paradise/create-your-paddock-paradise`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption={c.imgCaption} />
        <div className="prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h1}</h2>
          <p>
            {c.p1a}
            <strong>{c.p1b}</strong>
            {c.p1c}
          </p>
          <ul>
            {c.list1.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="prose-body md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h2}</h2>
          <p>{c.p2}</p>
        </div>
      </div>
    </div>
  )
}
