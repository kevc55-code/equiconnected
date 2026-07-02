import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Personal Development Workshops',
    p1: 'At EquiConnected, we offer several workshops in the field of personal development. Via herd dynamics and leadership exercises, you will find out a lot about who you are and where you want to be.',
    p2: 'Each workshop is individually tailored to meet your needs.',
    topics: [
      'The Five Roles of the Masterherder (Linda Kohanov) on Leadership',
      'Women in Connection',
      'The Polyvagal Theory — find out about your nervous system',
    ],
    p3: 'Equine assisted coaching supports personal growth by combining guided coaching with the intuitive presence of horses. Through ground-based interactions, you gain insight into your mindset, communication, and emotional patterns—helping you create meaningful change in both your personal and professional life. It is experiential rather than talk-based. Working alongside horses in a calm, natural environment allows you to slow down, reconnect with yourself, and gain clarity. Horses naturally mirror human behavior, helping you identify strengths, uncover blind spots, and develop confidence, emotional intelligence, and effective communication.',
    outcomes: [
      'Build self-confidence and presence',
      'Improve communication and boundaries',
      'Develop emotional awareness and resilience',
      'Strengthen leadership and decision-making',
      'Gain clarity during life transitions',
    ],
  },
  fr: {
    heroTitle: 'Ateliers de Développement Personnel',
    p1: "Chez EquiConnected, nous proposons plusieurs ateliers dans le domaine du développement personnel. À travers les dynamiques de troupeau et des exercices de leadership, vous en apprendrez beaucoup sur qui vous êtes et où vous voulez aller.",
    p2: 'Chaque atelier est adapté individuellement à vos besoins.',
    topics: [
      'Les cinq rôles du Masterherder (Linda Kohanov) sur le leadership',
      'Femmes en connexion',
      'La théorie polyvagale — découvrez votre système nerveux',
    ],
    p3: "Le coaching assisté par le cheval soutient la croissance personnelle en combinant un coaching guidé avec la présence intuitive des chevaux. À travers des interactions au sol, vous gagnez en compréhension de votre état d'esprit, de votre communication et de vos schémas émotionnels — vous aidant à créer un changement significatif dans votre vie personnelle et professionnelle. C'est une approche expérientielle plutôt que basée sur la parole. Travailler aux côtés des chevaux dans un environnement calme et naturel vous permet de ralentir, de vous reconnecter à vous-même et de gagner en clarté. Les chevaux reflètent naturellement le comportement humain, vous aidant à identifier vos forces, à révéler vos angles morts et à développer confiance en soi, intelligence émotionnelle et communication efficace.",
    outcomes: [
      'Développer la confiance en soi et la présence',
      'Améliorer la communication et les limites',
      'Développer la conscience émotionnelle et la résilience',
      'Renforcer le leadership et la prise de décision',
      'Gagner en clarté lors des transitions de vie',
    ],
  },
  de: {
    heroTitle: 'Workshops zur Persönlichkeitsentwicklung',
    p1: 'Bei EquiConnected bieten wir mehrere Workshops im Bereich der Persönlichkeitsentwicklung an. Durch Herdendynamik und Führungsübungen erfahren Sie viel darüber, wer Sie sind und wohin Sie möchten.',
    p2: 'Jeder Workshop wird individuell auf Ihre Bedürfnisse zugeschnitten.',
    topics: [
      'Die fünf Rollen des Masterherders (Linda Kohanov) zum Thema Führung',
      'Frauen in Verbindung',
      'Die Polyvagal-Theorie — lernen Sie Ihr Nervensystem kennen',
    ],
    p3: 'Pferdegestütztes Coaching unterstützt die persönliche Entwicklung, indem es geführtes Coaching mit der intuitiven Präsenz von Pferden verbindet. Durch bodenbasierte Interaktionen gewinnen Sie Einblick in Ihre Denkweise, Kommunikation und emotionalen Muster — und schaffen so bedeutsame Veränderungen in Ihrem persönlichen und beruflichen Leben. Es ist erfahrungsbasiert statt gesprächsbasiert. Die Arbeit mit Pferden in einer ruhigen, natürlichen Umgebung erlaubt es Ihnen, langsamer zu werden, sich mit sich selbst zu verbinden und Klarheit zu gewinnen. Pferde spiegeln auf natürliche Weise menschliches Verhalten wider und helfen Ihnen, Stärken zu erkennen, blinde Flecken aufzudecken und Selbstvertrauen, emotionale Intelligenz und wirksame Kommunikation zu entwickeln.',
    outcomes: [
      'Selbstvertrauen und Präsenz aufbauen',
      'Kommunikation und Grenzen verbessern',
      'Emotionales Bewusstsein und Resilienz entwickeln',
      'Führung und Entscheidungsfindung stärken',
      'Klarheit bei Lebensübergängen gewinnen',
    ],
  },
} satisfies Record<Locale, unknown>

export default function WorkshopsPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} />
      <SubNav items={tabs} active={`/${params.locale}/equine-coaching/workshops`} />

      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>{c.p1}</p>
        <p>
          <strong>{c.p2}</strong>
        </p>
        <ul>
          {c.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>{c.p3}</p>
        <ul>
          {c.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
