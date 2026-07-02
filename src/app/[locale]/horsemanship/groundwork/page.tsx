import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Groundwork',
    heroIntro: 'Before the saddle, everything is decided on the ground.',
    caption: "Reading the horse's body language, on the ground",
    p1: "Groundwork is where the relationship is built before any riding takes place. Working at the end of a lead rope or at liberty, we focus on reading the horse's micro-signals — ears, breathing, tension in the neck and back — and adjusting our own energy in response.",
    list: [
      'Clear, consistent pressure-and-release communication.',
      'Leadership built through trust and consistency, never force.',
      'Practical work on loading, leading, and everyday handling.',
      'A calm foundation that carries through directly into ridden work.',
    ],
    p2: 'Sessions are tailored to each horse-and-human pair, whether the goal is resolving a specific issue or simply deepening an already good relationship.',
  },
  fr: {
    heroTitle: 'Travail au Sol',
    heroIntro: 'Avant la selle, tout se joue au sol.',
    caption: 'Lire le langage corporel du cheval, au sol',
    p1: "Le travail au sol est le lieu où se construit la relation avant même de monter en selle. En travaillant en longe ou en liberté, nous nous concentrons sur la lecture des micro-signaux du cheval — oreilles, respiration, tensions dans l'encolure et le dos — et sur l'ajustement de notre propre énergie en conséquence.",
    list: [
      'Une communication claire et cohérente par pression et relâchement.',
      'Un leadership construit par la confiance et la constance, jamais par la force.',
      "Un travail pratique sur l'embarquement, la conduite en main et la manipulation quotidienne.",
      'Une base calme qui se prolonge directement dans le travail monté.',
    ],
    p2: "Les séances sont adaptées à chaque couple cheval-humain, que l'objectif soit de résoudre un problème spécifique ou simplement d'approfondir une relation déjà bonne.",
  },
  de: {
    heroTitle: 'Bodenarbeit',
    heroIntro: 'Vor dem Sattel wird alles am Boden entschieden.',
    caption: 'Die Körpersprache des Pferdes lesen, am Boden',
    p1: 'Bodenarbeit ist der Ort, an dem die Beziehung aufgebaut wird, bevor überhaupt geritten wird. Am Führstrick oder in Freiheit arbeitend, konzentrieren wir uns darauf, die Mikrosignale des Pferdes zu lesen — Ohren, Atmung, Anspannung im Hals und Rücken — und unsere eigene Energie entsprechend anzupassen.',
    list: [
      'Klare, konsistente Kommunikation durch Druck und Nachgeben.',
      'Führung, die durch Vertrauen und Konsequenz aufgebaut wird, niemals durch Zwang.',
      'Praktische Arbeit beim Verladen, Führen und im alltäglichen Umgang.',
      'Eine ruhige Grundlage, die sich direkt in die gerittene Arbeit überträgt.',
    ],
    p2: 'Die Sitzungen werden auf jedes Pferd-Mensch-Paar zugeschnitten, egal ob das Ziel darin besteht, ein bestimmtes Problem zu lösen oder einfach eine bereits gute Beziehung zu vertiefen.',
  },
} satisfies Record<Locale, unknown>

export default function GroundworkPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/horsemanship'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/horsemanship/groundwork`} />

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
