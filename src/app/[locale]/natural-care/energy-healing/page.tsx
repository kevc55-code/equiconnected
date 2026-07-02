import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Energy Healing',
    heroIntro: "Equine shiatsu — a holistic approach to the horse within its environment.",
    caption: 'Mother-daughter shiatsu session',
    p1a: 'Of Japanese origin, ',
    p1b: 'shiatsu',
    p1c: ' means "finger pressure."',
    p2: 'A session will combine work on the meridians, acupuncture points and relaxation techniques such as percussion, palpation and rolling, stretching and flexion.',
    p3a: 'Equine shiatsu is a ',
    p3b: 'holistic approach',
    p3c: " to the horse within its environment. It works on the horse's ",
    p3d: 'overall balance',
    p3e: ' to facilitate harmonious movement. The resulting relaxation promotes physical and emotional well-being.',
    p4: "The horse's quality of life and performance will be improved.",
    p5: 'By offering shiatsu to your horse, you allow it to:',
    benefits: [
      'Better adapting to seasonal or environmental changes',
      "Developing one's gait",
      'Calming down during stressful situations',
      "Developing one's physical and psychological well-being",
      'Preparing before competitions',
      'Recovering after exertion',
    ],
  },
  fr: {
    heroTitle: 'Soin Énergétique',
    heroIntro: 'Le shiatsu équin — une approche holistique du cheval dans son environnement.',
    caption: 'Séance de shiatsu mère-fille',
    p1a: "D'origine japonaise, le ",
    p1b: 'shiatsu',
    p1c: ' signifie « pression des doigts ».',
    p2: 'Une séance combine un travail sur les méridiens, les points d’acupuncture et des techniques de relaxation telles que la percussion, la palpation et le roulement, les étirements et la flexion.',
    p3a: 'Le shiatsu équin est une ',
    p3b: 'approche holistique',
    p3c: ' du cheval dans son environnement. Il travaille sur l’',
    p3d: 'équilibre global',
    p3e: ' du cheval pour faciliter un mouvement harmonieux. La détente qui en résulte favorise le bien-être physique et émotionnel.',
    p4: 'La qualité de vie et les performances du cheval en seront améliorées.',
    p5: 'En offrant le shiatsu à votre cheval, vous lui permettez de :',
    benefits: [
      'Mieux s’adapter aux changements saisonniers ou environnementaux',
      'Développer ses allures',
      'Se calmer dans les situations stressantes',
      'Développer son bien-être physique et psychologique',
      'Se préparer avant les compétitions',
      "Récupérer après l'effort",
    ],
  },
  de: {
    heroTitle: 'Energetische Heilung',
    heroIntro: 'Pferde-Shiatsu — ein ganzheitlicher Ansatz für das Pferd in seiner Umgebung.',
    caption: 'Shiatsu-Sitzung von Mutter und Tochter',
    p1a: 'Ursprünglich aus Japan, bedeutet ',
    p1b: 'Shiatsu',
    p1c: ' „Fingerdruck".',
    p2: 'Eine Sitzung kombiniert Arbeit an den Meridianen, Akupunkturpunkten und Entspannungstechniken wie Perkussion, Palpation und Rollen, Dehnung und Flexion.',
    p3a: 'Pferde-Shiatsu ist ein ',
    p3b: 'ganzheitlicher Ansatz',
    p3c: ' für das Pferd in seiner Umgebung. Es wirkt auf das ',
    p3d: 'Gesamtgleichgewicht',
    p3e: ' des Pferdes, um eine harmonische Bewegung zu fördern. Die daraus resultierende Entspannung fördert das körperliche und emotionale Wohlbefinden.',
    p4: 'Die Lebensqualität und Leistungsfähigkeit des Pferdes werden verbessert.',
    p5: 'Indem Sie Ihrem Pferd Shiatsu anbieten, ermöglichen Sie ihm:',
    benefits: [
      'Sich besser an saisonale oder umweltbedingte Veränderungen anzupassen',
      'Seine Gangart weiterzuentwickeln',
      'Sich in stressigen Situationen zu beruhigen',
      'Sein körperliches und psychisches Wohlbefinden zu entwickeln',
      'Sich vor Wettkämpfen vorzubereiten',
      'Sich nach Anstrengung zu erholen',
    ],
  },
} satisfies Record<Locale, unknown>

export default function EnergyHealingPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/natural-care'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/natural-care/energy-healing`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption={c.caption} />
        <div className="prose-body">
          <p>
            {c.p1a}
            <strong>{c.p1b}</strong>
            {c.p1c}
          </p>
          <p>{c.p2}</p>
          <p>
            {c.p3a}
            <strong>{c.p3b}</strong>
            {c.p3c}
            <strong>{c.p3d}</strong>
            {c.p3e}
          </p>
          <p>
            <strong>{c.p4}</strong>
          </p>
          <p>{c.p5}</p>
          <ul>
            {c.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
