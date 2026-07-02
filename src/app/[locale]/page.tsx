import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import type { Locale } from '@/lib/i18n'

const quickLinks: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: 'Horsemanship', href: '/en/horsemanship/philosophy' },
    { label: 'Mountain Trail', href: '/en/mountain-trail' },
    { label: 'Natural care', href: '/en/natural-care/natural-food' },
    { label: 'Paddock Paradise', href: '/en/paddock-paradise' },
  ],
  fr: [
    { label: 'Horsemanship', href: '/fr/horsemanship/philosophy' },
    { label: 'Mountain Trail', href: '/fr/mountain-trail' },
    { label: 'Soins naturels', href: '/fr/natural-care/natural-food' },
    { label: 'Paddock Paradise', href: '/fr/paddock-paradise' },
  ],
  de: [
    { label: 'Horsemanship', href: '/de/horsemanship/philosophy' },
    { label: 'Mountain Trail', href: '/de/mountain-trail' },
    { label: 'Natürliche Pflege', href: '/de/natural-care/natural-food' },
    { label: 'Paddock Paradise', href: '/de/paddock-paradise' },
  ],
}

const content = {
  en: {
    banner: 'Listening to the horse above all',
    shelterCaption: 'Horses resting in the shelter',
    eyebrow: 'Our approach',
    title: 'Base line',
    p1a: 'The EquiConnected',
    p1b: " association was founded in October 2025. Its main goal is to promote ",
    p1c: 'harmonious relationships between horses and humans',
    p1d: ". Indeed, what rider hasn't dreamed of getting along with their horse to the point of becoming one with their mount?",
    p2: 'Our respective journeys left us wanting more in the area of connecting with animals, so we observed horses a lot, opened our minds to other possibilities by drawing inspiration from the connection some people have with their horses in freedom and, above all, by experiencing the immense joy that this new approach provides.',
    p3: 'Clearly, the horse deserves to be better understood as a sensitive animal. It has much to teach us if we know how to listen to it.',
    p4a: 'To do this we were inspired by ',
    p4b: "Maslow's famous pyramid",
    p4c: ', which we adapted',
    p4d: 'for horses.',
    p5: 'Our support is geared towards this goal, by meeting the fundamental needs of horses, enabling them to be available for harmonious interspecies relationships such as:',
    list: ['Equine-assisted coaching', 'Horsemanship', 'Mountain Trail'],
    p6a: 'The ',
    p6b: 'horse',
    p6c: ' is housed and cared for ',
    p6d: 'naturally.',
    horseCaption: 'A horse resting under the trees',
    videoLabel: 'Video: "What They LOVE That Humans Ignore" — Inside Horses',
    servicesTitle: 'Our support services',
    services: [
      {
        title: 'Equine-assisted coaching',
        href: '/en/equine-coaching/introduction',
        body: 'Horses are true masters of full presence, anchored in the here and now. As human beings, we often live in our heads, caught up in our thoughts, worries, and expectations. Working alongside horses helps us step out of the flow of our thoughts and reconnect with what truly matters.',
      },
      {
        title: 'Horsemanship',
        href: '/en/horsemanship/philosophy',
        body: 'A deep and sincere connection between horse and human, based on awareness, trust, presence, and genuine understanding. Connection comes before training — it is the art of listening to the horse’s silent language.',
      },
      {
        title: 'Mountain Trail',
        href: '/en/mountain-trail',
        body: 'Complicity and calmness in the movements of the rider/horse pair over natural and constructed obstacles encountered outdoors, practiced on the ground, mounted, accompanied, on a lead rope, bareback, without a bit.',
      },
      {
        title: 'Paddock Paradise',
        href: '/en/paddock-paradise',
        body: 'A natural horse management system based on tracks, designed to replicate how horses live and move in the wild — supporting healthier hooves, improved fitness, mental stimulation, and natural social behavior.',
      },
    ],
    readMore: 'Read more',
  },
  fr: {
    banner: "L'écoute du cheval avant tout",
    shelterCaption: "Des chevaux au repos sous l'abri",
    eyebrow: 'Notre approche',
    title: 'Ligne directrice',
    p1a: "L'association EquiConnected",
    p1b: ' a été fondée en octobre 2025. Son objectif principal est de promouvoir des ',
    p1c: 'relations harmonieuses entre chevaux et humains',
    p1d: " . En effet, quel cavalier n'a jamais rêvé de s'entendre avec son cheval au point de ne faire qu'un avec sa monture ?",
    p2: "Nos parcours respectifs nous ont donné envie d'aller plus loin dans la connexion avec les animaux. Nous avons donc beaucoup observé les chevaux, ouvert notre esprit à d'autres possibilités en nous inspirant de la connexion que certaines personnes entretiennent avec leurs chevaux en liberté et, surtout, en faisant l'expérience de l'immense joie que procure cette nouvelle approche.",
    p3: "De toute évidence, le cheval mérite d'être mieux compris en tant qu'animal sensible. Il a beaucoup à nous apprendre si nous savons l'écouter.",
    p4a: 'Pour cela, nous nous sommes inspirées de la ',
    p4b: 'célèbre pyramide de Maslow',
    p4c: ', que nous avons ',
    p4d: 'adaptée aux chevaux.',
    p5: "Notre accompagnement vise cet objectif, en répondant aux besoins fondamentaux des chevaux afin qu'ils soient disponibles pour des relations interspécifiques harmonieuses telles que :",
    list: ['Coaching équin', 'Horsemanship', 'Mountain Trail'],
    p6a: 'Le ',
    p6b: 'cheval',
    p6c: ' est hébergé et soigné de manière ',
    p6d: 'naturelle.',
    horseCaption: 'Un cheval au repos sous les arbres',
    videoLabel: 'Vidéo : « What They LOVE That Humans Ignore » — Inside Horses',
    servicesTitle: "Nos services d'accompagnement",
    services: [
      {
        title: 'Coaching équin',
        href: '/fr/equine-coaching/introduction',
        body: "Les chevaux sont de véritables maîtres de la pleine présence, ancrés dans l'ici et maintenant. En tant qu'êtres humains, nous vivons souvent dans notre tête, pris par nos pensées, nos inquiétudes et nos attentes. Travailler aux côtés des chevaux nous aide à sortir du flot de nos pensées et à renouer avec l'essentiel.",
      },
      {
        title: 'Horsemanship',
        href: '/fr/horsemanship/philosophy',
        body: "Une connexion profonde et sincère entre le cheval et l'humain, fondée sur la conscience, la confiance, la présence et une compréhension authentique. La connexion avant la formation — c'est l'art d'écouter le langage silencieux du cheval.",
      },
      {
        title: 'Mountain Trail',
        href: '/fr/mountain-trail',
        body: "Complicité et calme dans les déplacements du couple cavalier/cheval sur des obstacles naturels et construits rencontrés en extérieur, pratiqués à pied, monté, accompagné, en longe, à cru, sans mors.",
      },
      {
        title: 'Paddock Paradise',
        href: '/fr/paddock-paradise',
        body: "Un système naturel de gestion des chevaux basé sur des pistes, conçu pour reproduire la vie et les déplacements du cheval à l'état sauvage — favorisant des sabots plus sains, une meilleure forme physique, une stimulation mentale et un comportement social naturel.",
      },
    ],
    readMore: 'En savoir plus',
  },
  de: {
    banner: 'Dem Pferd zuhören, vor allem anderen',
    shelterCaption: 'Pferde ruhen im Unterstand',
    eyebrow: 'Unser Ansatz',
    title: 'Leitlinie',
    p1a: 'Der Verein EquiConnected',
    p1b: ' wurde im Oktober 2025 gegründet. Sein Hauptziel ist die Förderung ',
    p1c: 'harmonischer Beziehungen zwischen Pferd und Mensch',
    p1d: '. Welcher Reiter hat nicht schon davon geträumt, mit seinem Pferd so sehr im Einklang zu sein, dass beide eins werden?',
    p2: 'Unsere jeweiligen Wege ließen in uns den Wunsch nach mehr Verbindung zu Tieren wachsen. So beobachteten wir Pferde intensiv, öffneten uns neuen Möglichkeiten, ließen uns von der Verbindung inspirieren, die manche Menschen mit ihren frei lebenden Pferden pflegen, und erlebten vor allem die immense Freude, die dieser neue Ansatz schenkt.',
    p3: 'Das Pferd verdient es eindeutig, als empfindsames Wesen besser verstanden zu werden. Es hat uns viel zu lehren, wenn wir ihm zuzuhören wissen.',
    p4a: 'Dazu ließen wir uns von ',
    p4b: "Maslows berühmter Pyramide",
    p4c: ' inspirieren, die wir ',
    p4d: 'für Pferde angepasst haben.',
    p5: 'Unsere Begleitung ist auf dieses Ziel ausgerichtet, indem sie die grundlegenden Bedürfnisse der Pferde erfüllt und sie so für harmonische Beziehungen zwischen den Arten verfügbar macht, wie zum Beispiel:',
    list: ['Pferdegestütztes Coaching', 'Horsemanship', 'Mountain Trail'],
    p6a: 'Das ',
    p6b: 'Pferd',
    p6c: ' wird auf ',
    p6d: 'natürliche Weise untergebracht und versorgt.',
    horseCaption: 'Ein Pferd ruht unter den Bäumen',
    videoLabel: 'Video: „What They LOVE That Humans Ignore" — Inside Horses',
    servicesTitle: 'Unsere Angebote',
    services: [
      {
        title: 'Pferdegestütztes Coaching',
        href: '/de/equine-coaching/introduction',
        body: 'Pferde sind wahre Meister der vollen Präsenz, verankert im Hier und Jetzt. Als Menschen leben wir oft in unserem Kopf, gefangen in Gedanken, Sorgen und Erwartungen. Die Arbeit mit Pferden hilft uns, aus diesem Gedankenstrom auszusteigen und uns wieder mit dem Wesentlichen zu verbinden.',
      },
      {
        title: 'Horsemanship',
        href: '/de/horsemanship/philosophy',
        body: 'Eine tiefe und aufrichtige Verbindung zwischen Pferd und Mensch, basierend auf Achtsamkeit, Vertrauen, Präsenz und echtem Verständnis. Verbindung kommt vor Training — es ist die Kunst, die stille Sprache des Pferdes zu verstehen.',
      },
      {
        title: 'Mountain Trail',
        href: '/de/mountain-trail',
        body: 'Einvernehmen und Ruhe in den Bewegungen des Reiter-Pferd-Paares über natürliche und errichtete Hindernisse im Freien, geübt zu Fuß, geritten, begleitet, am Führstrick, ungesattelt, ohne Gebiss.',
      },
      {
        title: 'Paddock Paradise',
        href: '/de/paddock-paradise',
        body: 'Ein natürliches Haltungssystem auf Trails, das nachbildet, wie Pferde in freier Wildbahn leben und sich bewegen — für gesündere Hufe, bessere Fitness, geistige Anregung und natürliches Sozialverhalten.',
      },
    ],
    readMore: 'Mehr erfahren',
  },
} satisfies Record<Locale, unknown>

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]

  return (
    <div>
      <div className="relative">
        <ImagePlaceholder ratio="aspect-[16/7]" className="[&_figcaption]:hidden" />
        <div className="absolute inset-x-0 -bottom-6 flex flex-wrap justify-center gap-3 px-4">
          {quickLinks[params.locale].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-brand py-6 mt-6 text-center">
        <p className="font-serif italic text-white text-xl md:text-2xl">{c.banner}</p>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <ImagePlaceholder caption={c.shelterCaption} ratio="aspect-[21/9]" />
      </section>

      <section className="bg-brand-pale">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
          <div className="prose-body">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark">{c.eyebrow}</span>
            <h2 className="font-serif text-3xl font-semibold mt-1 mb-4">{c.title}</h2>
            <p>
              <strong>{c.p1a}</strong>
              {c.p1b}
              <strong>{c.p1c}</strong>
              {c.p1d}
            </p>
            <p>{c.p2}</p>
            <p>{c.p3}</p>
            <p>
              {c.p4a}
              <strong>{c.p4b}</strong>
              {c.p4c}
              <strong>{c.p4d}</strong>
            </p>
            <p>{c.p5}</p>
            <ul>
              {c.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              {c.p6a}
              <strong>{c.p6b}</strong>
              {c.p6c}
              <strong>{c.p6d}</strong>
            </p>
          </div>
          <div className="space-y-6">
            <ImagePlaceholder caption={c.horseCaption} />
            <div className="aspect-video rounded-lg bg-ink flex items-center justify-center text-white/60 text-sm text-center px-4">
              {c.videoLabel}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold mb-8 text-center">{c.servicesTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {c.services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block rounded-lg border border-ink/10 p-6 hover:border-brand hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-xl font-semibold text-brand-darker mb-2">{service.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{service.body}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-brand-dark">{c.readMore} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
