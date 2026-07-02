import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Constellations / Systemic Coaching',
    heroIntro: 'When words are not enough, horses reveal what lies beneath.',
    p1: 'Horse-assisted systemic constellations help uncover the hidden dynamics shaping your life, relationships, or work. We are all part of systems—family, organizations, and communities—and unconscious patterns within these systems often shape our experience more than we realize.',
    h1: 'Why Horse-Assisted Constellations?',
    p2: 'Unlike traditional approaches, horse-assisted constellations do not analyze or force change. They allow insight to arise naturally—through presence, movement, and resonance.',
    p3: 'Customers often experience clarity around:',
    experiences: [
      'recurring emotional or relational patterns',
      'unexplained anxiety, tension, or exhaustion',
      'difficulty with boundaries, decisions, or self-expression',
      'strong reactions to certain people or situations',
    ],
    p4: 'By addressing the root cause rather than the symptom, lasting shifts become possible.',
    h2: 'How It Works',
    p5: 'A constellation creates a living, spatial representation of your inner system.',
    p6: 'Horses act as intuitive representatives, responding to subtle systemic tension with honesty and precision. Their behavior reflects what is happening beneath the surface, often revealing the deeper question behind your original concern.',
    p7: 'No prior experience with horses is needed.',
    h3: 'Organizational & Leadership Constellations',
    p8: 'Horse-assisted constellations are also powerful in professional settings. They support clarity and alignment around:',
    organizational: [
      'leadership and decision-making',
      'team dynamics and recurring conflict',
      'stalled growth or lack of direction',
      'organizational stress and imbalance',
    ],
    p9: 'Horses offer immediate, unbiased feedback—making systemic issues visible without judgment.',
    h4: 'Experience the Power of the Herd',
    p10: 'Horse-assisted constellation work offers a grounded, deeply transformative experience that reconnects you with clarity, balance, and flow—both personally and professionally.',
  },
  fr: {
    heroTitle: 'Constellations / Coaching Systémique',
    heroIntro: 'Quand les mots ne suffisent plus, les chevaux révèlent ce qui se cache en dessous.',
    p1: "Les constellations systémiques assistées par le cheval aident à révéler les dynamiques cachées qui façonnent votre vie, vos relations ou votre travail. Nous faisons tous partie de systèmes — famille, organisations, communautés — et des schémas inconscients au sein de ces systèmes façonnent souvent notre vécu plus que nous ne le réalisons.",
    h1: 'Pourquoi les constellations assistées par le cheval ?',
    p2: "Contrairement aux approches traditionnelles, les constellations assistées par le cheval n'analysent pas et ne forcent pas le changement. Elles laissent la prise de conscience émerger naturellement — par la présence, le mouvement et la résonance.",
    p3: 'Les personnes accompagnées trouvent souvent de la clarté autour de :',
    experiences: [
      'schémas émotionnels ou relationnels récurrents',
      'anxiété, tension ou épuisement inexpliqués',
      "difficultés à poser des limites, à décider ou à s'exprimer",
      'réactions fortes face à certaines personnes ou situations',
    ],
    p4: "En s'attaquant à la cause profonde plutôt qu'au symptôme, des changements durables deviennent possibles.",
    h2: 'Comment ça fonctionne',
    p5: 'Une constellation crée une représentation vivante et spatiale de votre système intérieur.',
    p6: "Les chevaux agissent comme des représentants intuitifs, réagissant avec honnêteté et précision aux tensions systémiques subtiles. Leur comportement reflète ce qui se passe sous la surface, révélant souvent la question plus profonde derrière votre préoccupation initiale.",
    p7: "Aucune expérience préalable avec les chevaux n'est nécessaire.",
    h3: 'Constellations organisationnelles et de leadership',
    p8: 'Les constellations assistées par le cheval sont également puissantes en contexte professionnel. Elles favorisent la clarté et l’alignement autour de :',
    organizational: [
      'le leadership et la prise de décision',
      'les dynamiques d’équipe et les conflits récurrents',
      'une croissance bloquée ou un manque de direction',
      'le stress organisationnel et les déséquilibres',
    ],
    p9: 'Les chevaux offrent un retour immédiat et impartial — rendant visibles les enjeux systémiques sans jugement.',
    h4: 'Vivez le pouvoir du troupeau',
    p10: "Le travail de constellation assisté par le cheval offre une expérience ancrée et profondément transformatrice qui vous reconnecte à la clarté, à l'équilibre et à la fluidité — tant sur le plan personnel que professionnel.",
  },
  de: {
    heroTitle: 'Konstellationen / Systemisches Coaching',
    heroIntro: 'Wenn Worte nicht ausreichen, offenbaren Pferde, was darunter liegt.',
    p1: 'Pferdegestützte systemische Aufstellungen helfen, die verborgenen Dynamiken aufzudecken, die Ihr Leben, Ihre Beziehungen oder Ihre Arbeit prägen. Wir sind alle Teil von Systemen — Familie, Organisationen und Gemeinschaften — und unbewusste Muster innerhalb dieser Systeme prägen unser Erleben oft stärker, als uns bewusst ist.',
    h1: 'Warum pferdegestützte Aufstellungen?',
    p2: 'Anders als traditionelle Ansätze analysieren pferdegestützte Aufstellungen nicht und erzwingen keine Veränderung. Sie lassen Einsicht auf natürliche Weise entstehen — durch Präsenz, Bewegung und Resonanz.',
    p3: 'Kunden erleben häufig Klarheit in Bezug auf:',
    experiences: [
      'wiederkehrende emotionale oder Beziehungsmuster',
      'unerklärliche Angst, Anspannung oder Erschöpfung',
      'Schwierigkeiten mit Grenzen, Entscheidungen oder Selbstausdruck',
      'starke Reaktionen auf bestimmte Personen oder Situationen',
    ],
    p4: 'Indem die eigentliche Ursache statt des Symptoms angegangen wird, werden dauerhafte Veränderungen möglich.',
    h2: 'Wie es funktioniert',
    p5: 'Eine Aufstellung schafft eine lebendige, räumliche Darstellung Ihres inneren Systems.',
    p6: 'Pferde fungieren als intuitive Stellvertreter und reagieren mit Ehrlichkeit und Präzision auf feine systemische Spannungen. Ihr Verhalten spiegelt wider, was unter der Oberfläche geschieht, und offenbart oft die tiefere Frage hinter Ihrem ursprünglichen Anliegen.',
    p7: 'Vorerfahrung mit Pferden ist nicht erforderlich.',
    h3: 'Organisations- und Führungsaufstellungen',
    p8: 'Pferdegestützte Aufstellungen sind auch im beruflichen Umfeld wirkungsvoll. Sie unterstützen Klarheit und Ausrichtung bei:',
    organizational: [
      'Führung und Entscheidungsfindung',
      'Teamdynamiken und wiederkehrenden Konflikten',
      'stockendem Wachstum oder fehlender Richtung',
      'organisatorischem Stress und Ungleichgewicht',
    ],
    p9: 'Pferde bieten unmittelbares, unvoreingenommenes Feedback — sie machen systemische Themen sichtbar, ohne zu urteilen.',
    h4: 'Erleben Sie die Kraft der Herde',
    p10: 'Pferdegestützte Aufstellungsarbeit bietet eine geerdete, tief transformative Erfahrung, die Sie sowohl persönlich als auch beruflich wieder mit Klarheit, Balance und Fluss verbindet.',
  },
} satisfies Record<Locale, unknown>

export default function ConstellationsPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/equine-coaching/constellations`} />

      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>{c.p1}</p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">{c.h1}</h2>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
        <ul>
          {c.experiences.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <p>{c.p4}</p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">{c.h2}</h2>
        <p>{c.p5}</p>
        <p>{c.p6}</p>
        <p>{c.p7}</p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">{c.h3}</h2>
        <p>{c.p8}</p>
        <ul>
          {c.organizational.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <p>{c.p9}</p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">{c.h4}</h2>
        <p>{c.p10}</p>
      </div>
    </div>
  )
}
