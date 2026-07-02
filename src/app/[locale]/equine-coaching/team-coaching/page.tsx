import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'A powerful, experiential approach to building stronger, more connected teams.',
    h1: 'What Is Team Coaching with Horses?',
    p1: 'Team coaching with horses is an experiential team-development method in which horses help reveal communication styles, leadership behaviors, and group dynamics within a team.',
    p2: 'Because horses are highly sensitive to human energy, intention, and emotional signals, they provide immediate, honest, and non-judgmental feedback about how a team interacts—both individually and collectively.',
    p3: 'During a session, your team works with the horses from the ground (no riding). Through structured exercises, the horse mirrors the group’s behavior in real time. This makes hidden patterns visible, such as unclear roles, tension, lack of trust, or ineffective communication. With the guidance of a skilled facilitator, these insights are translated into practical learning that your team can immediately apply in the workplace.',
    imgCaption: 'A team working together on the ground',
    h2: 'Why It Works',
    whyItWorks: [
      'Horses respond authentically to behavior, not titles or roles.',
      'Their reactions reveal what is happening beneath the surface.',
      'Teams gain clarity they often cannot achieve in a meeting room.',
      'The experience is hands-on, memorable, and deeply impactful.',
    ],
    h3: 'Key Benefits for Teams',
    benefits: [
      'Improved communication and trust',
      'Clearer roles and leadership awareness',
      'Enhanced cooperation and team cohesion',
      'Stronger emotional intelligence',
      'Better problem-solving and adaptability',
      'Immediate, actionable insights',
    ],
    h4: 'Why Organizations Choose This Method',
    p4a: 'Team coaching with horses is highly effective because it combines ',
    p4b: 'experiential learning',
    p4c: ', ',
    p4d: 'emotional awareness',
    p4e: ', and ',
    p4f: 'systemic insight',
    p4g: '. It is ideal for leadership teams, project groups, newly formed teams, or teams experiencing conflict, stagnation, or change.',
  },
  fr: {
    heroTitle: 'Une approche expérientielle puissante pour bâtir des équipes plus fortes et plus connectées.',
    h1: 'Qu’est-ce que le coaching d’équipe avec les chevaux ?',
    p1: "Le coaching d'équipe avec les chevaux est une méthode expérientielle de développement d'équipe dans laquelle les chevaux aident à révéler les styles de communication, les comportements de leadership et les dynamiques de groupe au sein d'une équipe.",
    p2: "Parce que les chevaux sont extrêmement sensibles à l'énergie, à l'intention et aux signaux émotionnels humains, ils offrent un retour immédiat, honnête et sans jugement sur la manière dont une équipe interagit — individuellement et collectivement.",
    p3: "Pendant une séance, votre équipe travaille avec les chevaux au sol (sans monte). À travers des exercices structurés, le cheval reflète en temps réel le comportement du groupe. Cela rend visibles des schémas cachés, tels que des rôles flous, des tensions, un manque de confiance ou une communication inefficace. Avec l'accompagnement d'un facilitateur expérimenté, ces observations sont traduites en apprentissages concrets que votre équipe peut appliquer immédiatement au travail.",
    imgCaption: 'Une équipe travaillant ensemble au sol',
    h2: 'Pourquoi ça fonctionne',
    whyItWorks: [
      'Les chevaux réagissent authentiquement au comportement, pas aux titres ou aux rôles.',
      'Leurs réactions révèlent ce qui se passe sous la surface.',
      'Les équipes gagnent une clarté qu’elles n’obtiennent souvent pas en salle de réunion.',
      "L'expérience est concrète, mémorable et profondément marquante.",
    ],
    h3: 'Principaux bénéfices pour les équipes',
    benefits: [
      'Amélioration de la communication et de la confiance',
      'Clarification des rôles et prise de conscience du leadership',
      "Renforcement de la coopération et de la cohésion d'équipe",
      'Une intelligence émotionnelle renforcée',
      "Une meilleure résolution de problèmes et adaptabilité",
      'Des enseignements immédiats et concrets',
    ],
    h4: 'Pourquoi les organisations choisissent cette méthode',
    p4a: "Le coaching d'équipe avec les chevaux est particulièrement efficace car il combine ",
    p4b: 'apprentissage expérientiel',
    p4c: ', ',
    p4d: 'conscience émotionnelle',
    p4e: ' et ',
    p4f: 'compréhension systémique',
    p4g: ". Il est idéal pour les équipes de direction, les groupes projets, les équipes nouvellement formées, ou les équipes traversant un conflit, une stagnation ou un changement.",
  },
  de: {
    heroTitle: 'Ein kraftvoller, erfahrungsbasierter Ansatz für stärkere, verbundenere Teams.',
    h1: 'Was ist Teamcoaching mit Pferden?',
    p1: 'Teamcoaching mit Pferden ist eine erfahrungsbasierte Teamentwicklungsmethode, bei der Pferde helfen, Kommunikationsstile, Führungsverhalten und Gruppendynamiken innerhalb eines Teams sichtbar zu machen.',
    p2: 'Da Pferde sehr sensibel auf menschliche Energie, Absicht und emotionale Signale reagieren, geben sie unmittelbares, ehrliches und urteilsfreies Feedback darüber, wie ein Team interagiert — sowohl individuell als auch als Gruppe.',
    p3: 'Während einer Sitzung arbeitet Ihr Team mit den Pferden am Boden (kein Reiten). Durch strukturierte Übungen spiegelt das Pferd das Verhalten der Gruppe in Echtzeit wider. Dadurch werden verborgene Muster sichtbar, wie unklare Rollen, Spannungen, mangelndes Vertrauen oder ineffektive Kommunikation. Mit der Anleitung eines erfahrenen Facilitators werden diese Erkenntnisse in praktisches Lernen übersetzt, das Ihr Team sofort am Arbeitsplatz anwenden kann.',
    imgCaption: 'Ein Team arbeitet gemeinsam am Boden',
    h2: 'Warum es funktioniert',
    whyItWorks: [
      'Pferde reagieren authentisch auf Verhalten, nicht auf Titel oder Rollen.',
      'Ihre Reaktionen zeigen, was unter der Oberfläche vor sich geht.',
      'Teams gewinnen eine Klarheit, die sie in einem Besprechungsraum oft nicht erreichen.',
      'Die Erfahrung ist praxisnah, einprägsam und tief wirkungsvoll.',
    ],
    h3: 'Wichtigste Vorteile für Teams',
    benefits: [
      'Verbesserte Kommunikation und Vertrauen',
      'Klarere Rollen und Führungsbewusstsein',
      'Verbesserte Zusammenarbeit und Teamzusammenhalt',
      'Stärkere emotionale Intelligenz',
      'Bessere Problemlösung und Anpassungsfähigkeit',
      'Sofort umsetzbare Erkenntnisse',
    ],
    h4: 'Warum Organisationen diese Methode wählen',
    p4a: 'Teamcoaching mit Pferden ist sehr effektiv, weil es ',
    p4b: 'erfahrungsbasiertes Lernen',
    p4c: ', ',
    p4d: 'emotionales Bewusstsein',
    p4e: ' und ',
    p4f: 'systemische Einsicht',
    p4g: ' vereint. Es eignet sich ideal für Führungsteams, Projektgruppen, neu gebildete Teams oder Teams, die Konflikte, Stagnation oder Veränderung erleben.',
  },
} satisfies Record<Locale, unknown>

export default function TeamCoachingPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} />
      <SubNav items={tabs} active={`/${params.locale}/equine-coaching/team-coaching`} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="prose-body">
            <h2 className="font-serif text-2xl font-semibold mb-3">{c.h1}</h2>
            <p>{c.p1}</p>
            <p>{c.p2}</p>
            <p>{c.p3}</p>
          </div>
          <ImagePlaceholder caption={c.imgCaption} />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="prose-body">
            <h2 className="font-serif text-2xl font-semibold mb-3">{c.h2}</h2>
            <ul>
              {c.whyItWorks.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
          <div className="prose-body">
            <h2 className="font-serif text-2xl font-semibold mb-3">{c.h3}</h2>
            <ul>
              {c.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="prose-body bg-brand-pale rounded-lg p-8">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h4}</h2>
          <p>
            {c.p4a}
            <strong>{c.p4b}</strong>
            {c.p4c}
            <strong>{c.p4d}</strong>
            {c.p4e}
            <strong>{c.p4f}</strong>
            {c.p4g}
          </p>
        </div>
      </div>
    </div>
  )
}
