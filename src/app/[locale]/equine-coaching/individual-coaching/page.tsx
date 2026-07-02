import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Individual Coaching',
    heroIntro: 'One-to-one sessions on the ground, with a horse as your mirror.',
    caption: 'An individual ground session',
    p1: 'No riding, no prior horse experience needed. Individual sessions take place on the ground, in a secure space, where you and a horse work through simple exercises together. How the horse responds — moving away, staying close, hesitating, following — reflects your posture, confidence, and the way you communicate without realizing it.',
    list: [
      'Confidence, self-assurance, and stress management',
      'Working through a specific personal or professional transition',
      'Understanding recurring patterns in how you relate to others',
      'A private, judgment-free space to slow down and reconnect with yourself',
    ],
    p2: 'Sessions are tailored around what brings you, and paced to what feels right for you and the horse.',
  },
  fr: {
    heroTitle: 'Coaching Individuel',
    heroIntro: 'Des séances individuelles au sol, avec un cheval comme miroir.',
    caption: 'Une séance individuelle au sol',
    p1: "Aucune monte, aucune expérience préalable du cheval requise. Les séances individuelles se déroulent au sol, dans un espace sécurisé, où vous travaillez avec un cheval au fil d'exercices simples. La manière dont le cheval réagit — s'éloigner, rester proche, hésiter, suivre — reflète votre posture, votre assurance et votre façon de communiquer sans même vous en rendre compte.",
    list: [
      'Confiance en soi, assurance et gestion du stress',
      'Traverser une transition personnelle ou professionnelle spécifique',
      'Comprendre les schémas récurrents dans votre manière de vous relier aux autres',
      'Un espace privé, sans jugement, pour ralentir et vous reconnecter à vous-même',
    ],
    p2: "Les séances sont adaptées à ce qui vous amène, et rythmées selon ce qui convient à vous et au cheval.",
  },
  de: {
    heroTitle: 'Einzelcoaching',
    heroIntro: 'Einzelsitzungen am Boden, mit einem Pferd als Spiegel.',
    caption: 'Eine individuelle Bodensitzung',
    p1: 'Kein Reiten, keine Vorerfahrung mit Pferden nötig. Einzelsitzungen finden am Boden statt, in einem sicheren Raum, in dem Sie gemeinsam mit einem Pferd einfache Übungen durchführen. Wie das Pferd reagiert — sich entfernt, in der Nähe bleibt, zögert, folgt — spiegelt Ihre Haltung, Ihr Selbstvertrauen und die Art wider, wie Sie kommunizieren, ohne es zu merken.',
    list: [
      'Selbstvertrauen, Sicherheit und Stressbewältigung',
      'Die Bewältigung eines bestimmten persönlichen oder beruflichen Übergangs',
      'Das Verstehen wiederkehrender Muster in Ihrer Art, sich zu anderen zu verhalten',
      'Ein privater, urteilsfreier Raum, um langsamer zu werden und sich mit sich selbst zu verbinden',
    ],
    p2: 'Die Sitzungen werden auf das ausgerichtet, was Sie mitbringen, und im Tempo gestaltet, das für Sie und das Pferd stimmig ist.',
  },
} satisfies Record<Locale, unknown>

export default function IndividualCoachingPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/equine-coaching/individual-coaching`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption={c.caption} />
        <div className="prose-body">
          <p>{c.p1}</p>
          <ul>
            {c.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{c.p2}</p>
        </div>
      </div>
    </div>
  )
}
