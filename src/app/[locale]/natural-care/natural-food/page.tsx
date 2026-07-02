import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import QuoteCard from '@/components/QuoteCard'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Natural Food',
    heroIntro: "Feeding in a way that respects the horse's natural digestive rhythm.",
    quote1Eyebrow: 'Friends — Freedom — Forage',
    quote1: [
      'The three pillars of equine well-being (even if that’s not always enough on its own).',
      'Without "Forage", the other two collapse. A horse deprived of food cannot be soothed, even surrounded by company or given freedom.',
    ],
    shadeCaption: 'Horses foraging together in the shade',
    h1: 'Our approach to natural food and care',
    p1: 'In the wild, horses graze for approximately 16 hours a day. Long periods without eating can disrupt their digestion, potentially leading to serious conditions such as ulcers or colic.',
    p2: 'They therefore need constant access to a primarily fibrous diet such as hay and straw, which can be enriched with leaves and bark from certain trees, for example. This is how their digestive system functions and promotes good intestinal health. A regular intake of fiber is essential for both their physical health and their overall well-being.',
    p3a: "We believe it's important to care for our horses' health in the most natural way possible. Our approach focuses on ",
    p3b: 'natural nutrition',
    p3c: ', supplemented as needed by gentle, holistic treatments that work in harmony with the body. We use ',
    p3d: 'natural and organic supplements, herbs, and homeopathy',
    p3e: ' to promote balance (parasite regulation), overall well-being, and even healing.',
    p4: 'We only use chemical medications when absolutely necessary, preferring to promote the well-being of our horses in a gentle, sustainable way, in harmony with nature. This natural approach helps our horses stay strong, balanced, and happy—just the way we like to see them.',
    quote2Eyebrow: "It's more than feeding",
    quote2: [
      'Eating is also about relaxing, staying occupied, interacting.',
      'A horse spends 14 to 18 hours a day chewing in its natural state.',
    ],
    quote3Eyebrow: 'Rationing',
    quote3: [
      'I don’t even know what "rationing" means. A horse doesn’t "gorge" on hay. It self-regulates... as long as it never runs out.',
      'Once it has experienced hunger, it eats quickly, out of fear of scarcity.',
    ],
  },
  fr: {
    heroTitle: 'Alimentation Naturelle',
    heroIntro: 'Nourrir en respectant le rythme digestif naturel du cheval.',
    quote1Eyebrow: 'Amis — Liberté — Fourrage',
    quote1: [
      "Les trois piliers du bien-être équin (même si cela ne suffit pas toujours à lui seul).",
      "Sans le « Fourrage », les deux autres s'effondrent. Un cheval frustré de nourriture ne peut pas être apaisé, même entouré ou en liberté.",
    ],
    shadeCaption: "Des chevaux qui broutent ensemble à l'ombre",
    h1: 'Notre approche de l’alimentation et des soins naturels',
    p1: "À l'état sauvage, les chevaux pâturent environ 16 heures par jour. De longues périodes sans manger peuvent perturber leur digestion, pouvant entraîner des affections graves comme les ulcères ou les coliques.",
    p2: "Ils ont donc besoin d'un accès constant à une alimentation principalement fibreuse telle que le foin et la paille, qui peut être enrichie de feuilles et d'écorces de certains arbres, par exemple. C'est ainsi que leur système digestif fonctionne et favorise une bonne santé intestinale. Un apport régulier en fibres est essentiel à la fois pour leur santé physique et leur bien-être général.",
    p3a: "Nous pensons qu'il est important de prendre soin de la santé de nos chevaux de la manière la plus naturelle possible. Notre approche se concentre sur une ",
    p3b: 'alimentation naturelle',
    p3c: ', complétée si besoin par des soins doux et holistiques qui travaillent en harmonie avec le corps. Nous utilisons des ',
    p3d: 'compléments naturels et biologiques, des plantes et l’homéopathie',
    p3e: ' pour favoriser l’équilibre (régulation parasitaire), le bien-être général, et même la guérison.',
    p4: "Nous n'utilisons des médicaments chimiques qu'en cas de nécessité absolue, préférant favoriser le bien-être de nos chevaux de manière douce et durable, en harmonie avec la nature. Cette approche naturelle aide nos chevaux à rester forts, équilibrés et heureux — exactement comme nous aimons les voir.",
    quote2Eyebrow: "C'est plus que nourrir",
    quote2: [
      "Manger, c'est aussi se détendre, s'occuper, interagir.",
      "Un cheval passe 14 à 18 heures par jour à mastiquer à l'état naturel.",
    ],
    quote3Eyebrow: 'Le rationnement',
    quote3: [
      "Je ne sais même pas ce que veut dire « rationner ». Un cheval ne se « gave » pas de foin. Il s'autorégule... à condition de ne jamais en manquer.",
      'Quand il a connu la faim, il mange vite, par peur du manque.',
    ],
  },
  de: {
    heroTitle: 'Natürliche Fütterung',
    heroIntro: 'Fütterung im Einklang mit dem natürlichen Verdauungsrhythmus des Pferdes.',
    quote1Eyebrow: 'Freunde — Freiheit — Futter',
    quote1: [
      'Die drei Säulen des Pferdewohls (auch wenn das allein nicht immer genügt).',
      'Ohne "Futter" brechen die beiden anderen zusammen. Ein Pferd, dem Futter fehlt, kann nicht beruhigt werden, selbst umgeben von Artgenossen oder in Freiheit.',
    ],
    shadeCaption: 'Pferde fressen gemeinsam im Schatten',
    h1: 'Unser Ansatz für natürliche Fütterung und Pflege',
    p1: 'In freier Wildbahn grasen Pferde etwa 16 Stunden am Tag. Lange Phasen ohne Futter können ihre Verdauung stören und zu ernsten Erkrankungen wie Magengeschwüren oder Koliken führen.',
    p2: 'Sie benötigen daher ständigen Zugang zu einer überwiegend faserreichen Ernährung wie Heu und Stroh, die zum Beispiel mit Blättern und Rinde bestimmter Bäume angereichert werden kann. So funktioniert ihr Verdauungssystem und die Darmgesundheit wird gefördert. Eine regelmäßige Faserzufuhr ist sowohl für die körperliche Gesundheit als auch für das allgemeine Wohlbefinden unerlässlich.',
    p3a: 'Wir glauben, dass es wichtig ist, uns so natürlich wie möglich um die Gesundheit unserer Pferde zu kümmern. Unser Ansatz konzentriert sich auf ',
    p3b: 'natürliche Ernährung',
    p3c: ', ergänzt bei Bedarf durch sanfte, ganzheitliche Behandlungen, die im Einklang mit dem Körper wirken. Wir verwenden ',
    p3d: 'natürliche und biologische Nahrungsergänzungen, Kräuter und Homöopathie',
    p3e: ', um das Gleichgewicht (Parasitenregulierung), das allgemeine Wohlbefinden und sogar die Heilung zu fördern.',
    p4: 'Wir setzen chemische Medikamente nur ein, wenn es unbedingt nötig ist, und fördern das Wohlbefinden unserer Pferde lieber auf sanfte, nachhaltige Weise im Einklang mit der Natur. Dieser natürliche Ansatz hilft unseren Pferden, stark, ausgeglichen und glücklich zu bleiben — genau so, wie wir sie sehen möchten.',
    quote2Eyebrow: 'Es ist mehr als Fütterung',
    quote2: [
      'Fressen bedeutet auch, sich zu entspannen, beschäftigt zu sein, zu interagieren.',
      'Ein Pferd verbringt in seinem natürlichen Zustand 14 bis 18 Stunden am Tag mit Kauen.',
    ],
    quote3Eyebrow: 'Die Rationierung',
    quote3: [
      'Ich weiß nicht einmal, was "rationieren" bedeuten soll. Ein Pferd "überfrisst" sich nicht an Heu. Es reguliert sich selbst... solange es nie ausgeht.',
      'Hat es einmal Hunger erlebt, frisst es schnell, aus Angst vor Mangel.',
    ],
  },
} satisfies Record<Locale, unknown>

export default function NaturalFoodPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/natural-care'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/natural-care/natural-food`} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <QuoteCard eyebrow={c.quote1Eyebrow} lines={c.quote1} />
          <ImagePlaceholder caption={c.shadeCaption} />
        </div>

        <div className="prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h1}</h2>
          <p>{c.p1}</p>
          <p>{c.p2}</p>
          <p>
            {c.p3a}
            <strong>{c.p3b}</strong>
            {c.p3c}
            <strong>{c.p3d}</strong>
            {c.p3e}
          </p>
          <p>{c.p4}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <QuoteCard eyebrow={c.quote2Eyebrow} lines={c.quote2} />
          <QuoteCard eyebrow={c.quote3Eyebrow} lines={c.quote3} />
        </div>
      </div>
    </div>
  )
}
