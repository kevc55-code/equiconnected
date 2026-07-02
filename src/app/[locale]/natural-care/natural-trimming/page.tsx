import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Natural Trimming',
    heroIntro: "A holistic hoof care program built on the model of the wild horse.",
    quote:
      "It's important to understand that wild horses and all domestic horses, wherever they are found, are in fact all Equus caballus. What applies in nature also applies to horses bred by humans. The only difference between them lies in the nature of their experience.",
    quoteAuthor: '— Jaime Jackson',
    p1a: 'Natural Hoof Care (NHC) offers a holistic hoof care program designed to achieve optimal hooves health and longevity within a natural boarding environment, such as the ',
    p1b: 'Paddock Paradise (PP)',
    p1c: ", a unique monitoring system. A PP mimics the horse's natural lifestyle, including its hooves.",
    p2: 'Recommendations for natural horse boarding follow the model of the wild horse. A horse’s health is reflected in its hooves, and optimal results can only be achieved by naturalizing our horses’ lives by providing them with a "reasonably natural diet," much like they forage in the wild. This means avoiding foods and medications—which disrupt their rather delicate digestive system—that are directly responsible for colic and laminitis, as well as riding and training methods that are harmful because they violate the horse’s natural gaits.',
    h1: 'Good to know',
    h2: 'The importance of a bare hoof — the mechanism',
    p3: 'When a horse places its hoof on the ground, the conical wall of the hoof expands; when it lifts, the hoof returns to its closed shape. This expansion and compression act like a pump, a phenomenon known as the "hoof mechanism." Blood is thus pumped through the hoof, which is crucial for the blood supply throughout the horse’s leg, all the way to the heart, ensuring its longevity.',
    p4: 'The hoof is very important for a horse. That’s why it has a very good blood supply. The growth, maintenance, and healing of all hoof tissues depend heavily on a continuous supply of nutrients via the blood.',
    p5: 'It is estimated that approximately one liter of blood is pumped through the hooves in five stages.',
    h3: 'Blood supply to the hoof is severely disrupted in many domestic horses due to',
    list: [
      {
        strong: 'A lack of exercise.',
        rest: ' The hoof mechanism only functions when the horse is walking (barefoot). When a horse is immobile, there is no pumping action, and waste/toxins carried by the lymphatic system are virtually eliminated. Wild horses never remain immobile for long periods, unlike stable horses.',
      },
      {
        strong: 'An incorrect hoof shape.',
        rest: " Horses are often trimmed into a shape that doesn't correspond to what nature intended. Almost any deviation from the hoof's natural shape disrupts its function.",
      },
    ],
    imgCaption: 'Barefoot trim in progress',
  },
  fr: {
    heroTitle: 'Parage Naturel',
    heroIntro: 'Un programme de soin des sabots holistique fondé sur le modèle du cheval sauvage.',
    quote:
      "Il est important de comprendre que les chevaux sauvages et tous les chevaux domestiques, où qu'ils se trouvent, sont en fait tous des Equus caballus. Ce qui s'applique dans la nature s'applique aussi aux chevaux élevés par l'humain. La seule différence entre eux réside dans la nature de leur vécu.",
    quoteAuthor: '— Jaime Jackson',
    p1a: "Le parage naturel (Natural Hoof Care, NHC) propose un programme de soin des sabots holistique conçu pour obtenir une santé et une longévité optimales des sabots dans un environnement de vie naturel, comme le ",
    p1b: 'Paddock Paradise (PP)',
    p1c: ", un système de suivi unique. Un PP reproduit le mode de vie naturel du cheval, y compris pour ses sabots.",
    p2: "Les recommandations pour un hébergement naturel du cheval suivent le modèle du cheval sauvage. La santé d'un cheval se reflète dans ses sabots, et des résultats optimaux ne peuvent être obtenus qu'en naturalisant la vie de nos chevaux en leur offrant une « alimentation raisonnablement naturelle », proche de ce qu'ils trouveraient à l'état sauvage. Cela signifie éviter les aliments et médicaments — qui perturbent leur système digestif plutôt fragile — directement responsables de coliques et de fourbure, ainsi que les méthodes d'équitation et de dressage nuisibles car elles violent les allures naturelles du cheval.",
    h1: 'Bon à savoir',
    h2: 'L\'importance du pied nu — le mécanisme',
    p3: "Lorsqu'un cheval pose son sabot au sol, la paroi conique du sabot se dilate ; lorsqu'il le lève, le sabot reprend sa forme fermée. Cette expansion et cette compression agissent comme une pompe, un phénomène appelé « mécanisme du sabot ». Le sang est ainsi pompé à travers le sabot, ce qui est essentiel à l'irrigation sanguine de tout le membre du cheval, jusqu'au cœur, garantissant sa longévité.",
    p4: "Le sabot est très important pour un cheval. C'est pourquoi il bénéficie d'une très bonne irrigation sanguine. La croissance, l'entretien et la guérison de tous les tissus du sabot dépendent fortement d'un apport continu de nutriments par le sang.",
    p5: "On estime qu'environ un litre de sang est pompé à travers les sabots en cinq étapes.",
    h3: "L'irrigation sanguine du sabot est fortement perturbée chez de nombreux chevaux domestiques en raison",
    list: [
      {
        strong: "D'un manque d'exercice.",
        rest: " Le mécanisme du sabot ne fonctionne que lorsque le cheval marche (pieds nus). Lorsqu'un cheval est immobile, il n'y a pas d'action de pompage, et les déchets/toxines transportés par le système lymphatique sont pratiquement éliminés. Les chevaux sauvages ne restent jamais immobiles longtemps, contrairement aux chevaux au box.",
      },
      {
        strong: "D'une forme de sabot incorrecte.",
        rest: " Les chevaux sont souvent parés dans une forme qui ne correspond pas à ce que la nature a prévu. Presque tout écart par rapport à la forme naturelle du sabot perturbe sa fonction.",
      },
    ],
    imgCaption: 'Parage pieds nus en cours',
  },
  de: {
    heroTitle: 'Natürlicher Hufschnitt',
    heroIntro: 'Ein ganzheitliches Hufpflegeprogramm nach dem Vorbild des wild lebenden Pferdes.',
    quote:
      'Es ist wichtig zu verstehen, dass wild lebende Pferde und alle domestizierten Pferde, wo auch immer sie sich befinden, tatsächlich alle Equus caballus sind. Was in der Natur gilt, gilt auch für vom Menschen gezüchtete Pferde. Der einzige Unterschied zwischen ihnen liegt in der Art ihrer Erfahrung.',
    quoteAuthor: '— Jaime Jackson',
    p1a: 'Natural Hoof Care (NHC) bietet ein ganzheitliches Hufpflegeprogramm, das auf optimale Hufgesundheit und Langlebigkeit in einer natürlichen Haltungsumgebung wie dem ',
    p1b: 'Paddock Paradise (PP)',
    p1c: ' ausgerichtet ist, einem einzigartigen Überwachungssystem. Ein PP ahmt den natürlichen Lebensstil des Pferdes nach, einschließlich seiner Hufe.',
    p2: 'Empfehlungen für die natürliche Pferdehaltung folgen dem Vorbild des wild lebenden Pferdes. Die Gesundheit eines Pferdes spiegelt sich in seinen Hufen wider, und optimale Ergebnisse lassen sich nur erzielen, indem man das Leben unserer Pferde naturalisiert und ihnen eine „vernünftig natürliche Ernährung" bietet, ähnlich der Futtersuche in freier Wildbahn. Das bedeutet, Futter und Medikamente zu vermeiden — die ihr eher empfindliches Verdauungssystem stören — die direkt für Koliken und Hufrehe verantwortlich sind, sowie Reit- und Trainingsmethoden, die schädlich sind, weil sie die natürlichen Gangarten des Pferdes verletzen.',
    h1: 'Gut zu wissen',
    h2: 'Die Bedeutung des unbeschlagenen Hufes — der Mechanismus',
    p3: 'Wenn ein Pferd seinen Huf auf den Boden setzt, dehnt sich die kegelförmige Hufwand aus; hebt es ihn, kehrt der Huf in seine geschlossene Form zurück. Diese Ausdehnung und Kompression wirkt wie eine Pumpe, ein Phänomen, das als „Hufmechanismus" bekannt ist. Blut wird so durch den Huf gepumpt, was für die Durchblutung des gesamten Beins bis zum Herzen entscheidend ist und seine Langlebigkeit sichert.',
    p4: 'Der Huf ist für ein Pferd sehr wichtig. Deshalb verfügt er über eine sehr gute Durchblutung. Wachstum, Erhaltung und Heilung aller Hufgewebe hängen stark von einer kontinuierlichen Nährstoffversorgung über das Blut ab.',
    p5: 'Schätzungen zufolge wird etwa ein Liter Blut in fünf Phasen durch die Hufe gepumpt.',
    h3: 'Die Durchblutung des Hufes ist bei vielen domestizierten Pferden erheblich gestört, aufgrund von',
    list: [
      {
        strong: 'Bewegungsmangel.',
        rest: ' Der Hufmechanismus funktioniert nur, wenn das Pferd geht (unbeschlagen). Ist ein Pferd bewegungslos, gibt es keine Pumpwirkung, und über das Lymphsystem transportierte Abfallstoffe/Giftstoffe werden praktisch nicht mehr ausgeschieden. Wild lebende Pferde bleiben nie lange bewegungslos, im Gegensatz zu Stallpferden.',
      },
      {
        strong: 'Einer falschen Hufform.',
        rest: ' Pferde werden oft in eine Form geschnitten, die nicht der von der Natur vorgesehenen entspricht. Fast jede Abweichung von der natürlichen Hufform stört seine Funktion.',
      },
    ],
    imgCaption: 'Barhufbearbeitung im Gange',
  },
} satisfies Record<Locale, unknown>

export default function NaturalTrimmingPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/natural-care'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/natural-care/natural-trimming`} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <blockquote className="border-l-4 border-brand pl-5 italic text-ink-soft font-serif text-lg leading-relaxed">
          &ldquo;{c.quote}&rdquo;
          <footer className="mt-2 text-sm not-italic font-sans text-ink/50">{c.quoteAuthor}</footer>
        </blockquote>

        <div className="prose-body">
          <p>
            {c.p1a}
            <strong>{c.p1b}</strong>
            {c.p1c}
          </p>
          <p>{c.p2}</p>

          <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">{c.h1}</h2>
          <h3 className="font-semibold text-ink mb-2">{c.h2}</h3>
          <p>{c.p3}</p>
          <p>{c.p4}</p>
          <p>{c.p5}</p>

          <h3 className="font-semibold text-ink mb-2 mt-6">{c.h3}</h3>
          <ul>
            {c.list.map((item) => (
              <li key={item.strong}>
                <strong>{item.strong}</strong>
                {item.rest}
              </li>
            ))}
          </ul>
        </div>

        <ImagePlaceholder caption={c.imgCaption} ratio="aspect-[16/8]" />
      </div>
    </div>
  )
}
