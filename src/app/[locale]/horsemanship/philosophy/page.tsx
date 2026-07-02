import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'EquiConnected Horsemanship — listening above all',
    p1a: 'The EquiConnected Horsemanship relationship is a deep and sincere connection between horse and human, based on awareness, trust, presence, and genuine understanding. ',
    p1b: 'Connection comes before training!',
    p2a: 'It is ',
    p2b: "the art of listening to the horse's silent language,",
    p2c: ' respecting its nature, and creating a ',
    p2d: 'relationship based on mutual trust',
    p2e: ' where both feel safe.',
    p3: 'The EquiConnected Horsemanship relationship is not about control or obedience, but about awareness, communication with gentleness, clarity, and intention. It involves ethical exchanges with the horse that invite us to slow down, connect with ourselves, and encounter the horse authentically. In turn, the horse reflects our emotions, teaches us patience, and guides us toward a more grounded and compassionate way of interacting.',
    p4: "And that's where the joy of understanding each other well is born.",
    imgCaption: 'Groundwork session',
    h2: 'Support and coaching for humans and horses, with a view to a balanced partnership',
    p5: "At EquiConnected, the well-being of both horses and humans is our top priority. Our goal is holistic, interspecies well-being. Indeed, your emotional state is felt by the horse long before you come into contact with it, and its emotional state—due to its living conditions—will impact its ability to give you its best.",
    p6: 'Our trained team offers Horsemanship relationship coaching. Horses are excellent barometers, providing accurate (uncalculated) feedback in the present moment, without judgment. During sessions, we listen to the horse, as it will suggest ways to improve a situation. With our horses or yours, we strive to foster your relationship with them.',
    p7: 'We offer support both internally and on your site within a maximum radius of 30 km.',
  },
  fr: {
    heroTitle: "Horsemanship EquiConnected — l'écoute avant tout",
    p1a: 'La relation Horsemanship EquiConnected est une connexion profonde et sincère entre le cheval et l’humain, fondée sur la conscience, la confiance, la présence et une compréhension authentique. ',
    p1b: 'La connexion avant la formation !',
    p2a: "C'est ",
    p2b: "l'art d'écouter le langage silencieux du cheval,",
    p2c: ' de respecter sa nature, et de créer une ',
    p2d: 'relation fondée sur la confiance mutuelle',
    p2e: ' où chacun se sent en sécurité.',
    p3: "La relation Horsemanship EquiConnected ne porte pas sur le contrôle ou l'obéissance, mais sur la conscience, la communication en douceur, la clarté et l'intention. Elle implique des échanges éthiques avec le cheval qui nous invitent à ralentir, à nous connecter à nous-mêmes et à rencontrer le cheval de manière authentique. En retour, le cheval reflète nos émotions, nous enseigne la patience et nous guide vers une manière d'interagir plus ancrée et plus bienveillante.",
    p4: "Et c'est là que naît la joie de bien se comprendre.",
    imgCaption: 'Séance de travail au sol',
    h2: "Accompagnement et coaching pour humains et chevaux, dans une perspective de partenariat équilibré",
    p5: "Chez EquiConnected, le bien-être des chevaux comme des humains est notre priorité absolue. Notre objectif est un bien-être holistique et interspécifique. En effet, votre état émotionnel est ressenti par le cheval bien avant que vous n'entriez en contact avec lui, et son état émotionnel — lié à ses conditions de vie — influencera sa capacité à vous donner le meilleur de lui-même.",
    p6: "Notre équipe formée propose un coaching relationnel Horsemanship. Les chevaux sont d'excellents baromètres, offrant un retour précis (non calculé) dans l'instant présent, sans jugement. Pendant les séances, nous écoutons le cheval, car il suggérera des pistes pour améliorer une situation. Avec nos chevaux ou les vôtres, nous nous efforçons de favoriser votre relation avec eux.",
    p7: "Nous proposons un accompagnement à la fois en interne et sur votre site dans un rayon maximum de 30 km.",
  },
  de: {
    heroTitle: 'EquiConnected Horsemanship — Zuhören vor allem anderen',
    p1a: 'Die EquiConnected-Horsemanship-Beziehung ist eine tiefe und aufrichtige Verbindung zwischen Pferd und Mensch, basierend auf Achtsamkeit, Vertrauen, Präsenz und echtem Verständnis. ',
    p1b: 'Verbindung kommt vor Training!',
    p2a: 'Es ist ',
    p2b: 'die Kunst, die stille Sprache des Pferdes zu verstehen,',
    p2c: ' seine Natur zu respektieren und eine ',
    p2d: 'Beziehung auf gegenseitigem Vertrauen',
    p2e: ' aufzubauen, in der sich beide sicher fühlen.',
    p3: 'Bei der EquiConnected-Horsemanship-Beziehung geht es nicht um Kontrolle oder Gehorsam, sondern um Achtsamkeit, sanfte Kommunikation, Klarheit und Intention. Sie beinhaltet ethische Begegnungen mit dem Pferd, die uns einladen, langsamer zu werden, mit uns selbst in Verbindung zu treten und dem Pferd authentisch zu begegnen. Im Gegenzug spiegelt das Pferd unsere Emotionen wider, lehrt uns Geduld und führt uns zu einer geerdeteren und einfühlsameren Art der Interaktion.',
    p4: 'Und genau daraus entsteht die Freude, sich gut zu verstehen.',
    imgCaption: 'Bodenarbeit-Sitzung',
    h2: 'Begleitung und Coaching für Mensch und Pferd — im Sinne einer ausgeglichenen Partnerschaft',
    p5: 'Bei EquiConnected steht das Wohlbefinden von Pferd und Mensch an oberster Stelle. Unser Ziel ist ganzheitliches, artenübergreifendes Wohlbefinden. Ihr emotionaler Zustand wird vom Pferd nämlich schon lange gespürt, bevor Sie mit ihm in Kontakt treten, und sein emotionaler Zustand — bedingt durch seine Lebensbedingungen — beeinflusst seine Fähigkeit, Ihnen sein Bestes zu geben.',
    p6: 'Unser geschultes Team bietet Horsemanship-Beziehungscoaching an. Pferde sind ausgezeichnete Barometer und liefern präzises (unberechnetes) Feedback im gegenwärtigen Moment, ohne Urteil. Während der Sitzungen hören wir dem Pferd zu, denn es schlägt Wege vor, eine Situation zu verbessern. Mit unseren oder Ihren Pferden bemühen wir uns, Ihre Beziehung zu ihnen zu fördern.',
    p7: 'Wir bieten Begleitung sowohl bei uns vor Ort als auch bei Ihnen in einem Umkreis von maximal 30 km.',
  },
} satisfies Record<Locale, unknown>

export default function HorsemanshipPhilosophyPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/horsemanship'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} />
      <SubNav items={tabs} active={`/${params.locale}/horsemanship/philosophy`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose-body">
          <p>
            {c.p1a}
            <strong>{c.p1b}</strong>
          </p>
          <p>
            {c.p2a}
            <strong>{c.p2b}</strong>
            {c.p2c}
            <strong>{c.p2d}</strong>
            {c.p2e}
          </p>
          <p>{c.p3}</p>
          <p>{c.p4}</p>
        </div>
        <ImagePlaceholder caption={c.imgCaption} />

        <div className="prose-body md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h2}</h2>
          <p>{c.p5}</p>
          <p>{c.p6}</p>
          <p>{c.p7}</p>
        </div>
      </div>
    </div>
  )
}
