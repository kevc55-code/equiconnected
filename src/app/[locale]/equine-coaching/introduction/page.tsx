import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Equine-Assisted Coaching',
    h1: 'Horses, much better than words',
    p1: 'Horses are true masters of full presence, anchored in the here and now.',
    p2: 'As human beings, we often live in our heads, caught up in our thoughts, worries, and expectations. Over time, this disconnects us from our deepest feelings and inner wisdom, generating stress, anxiety, doubt, and confusion.',
    p3a: 'Horses gently bring us back to the present moment. Their presence brings ',
    p3b: 'calm and clarity',
    p3c: ", helping us step out of the flow of our thoughts and reconnect with what truly matters. You can't fool a horse—they are incredibly sensitive and genuine. This is precisely what makes them exceptional coaches.",
    p4: 'As herd animals, prey animals, and therefore animals of flight, horses are instinctively attentive to safety and consequently constantly connected to their environment. They naturally seek harmony, including with humans.',
    p5a: 'When our thoughts, emotions, and actions are aligned, the horse feels ',
    p5b: 'safe by our side and is willing to cooperate.',
    p5c: ' Horses communicate non-verbally and react ',
    p5d: 'accurately and without judgment',
    p5e: ' to the energy we give off. They detect—or not—the coherence and authenticity in what we think, feel, and do.',
    p6: 'This is why equine-assisted coaching is so powerful and why our motto is:',
    motto: 'Horses, much better than words',
  },
  fr: {
    heroTitle: 'Coaching Équin',
    h1: 'Les chevaux, bien mieux que les mots',
    p1: "Les chevaux sont de véritables maîtres de la pleine présence, ancrés dans l'ici et maintenant.",
    p2: "En tant qu'êtres humains, nous vivons souvent dans notre tête, pris par nos pensées, nos inquiétudes et nos attentes. Avec le temps, cela nous coupe de nos ressentis profonds et de notre sagesse intérieure, générant stress, anxiété, doute et confusion.",
    p3a: 'Les chevaux nous ramènent doucement dans le moment présent. Leur présence apporte ',
    p3b: 'calme et clarté',
    p3c: ", nous aidant à sortir du flot de nos pensées pour nous reconnecter à l'essentiel. On ne peut pas tromper un cheval — ils sont extrêmement sensibles et authentiques. C'est précisément ce qui fait d'eux des coachs exceptionnels.",
    p4: "Animaux de troupeau, animaux de proie et donc de fuite, les chevaux sont instinctivement attentifs à la sécurité et par conséquent connectés en permanence à leur environnement. Ils recherchent naturellement l'harmonie, y compris avec les humains.",
    p5a: 'Lorsque nos pensées, nos émotions et nos actions sont alignées, le cheval se sent ',
    p5b: 'en sécurité à nos côtés et accepte de coopérer.',
    p5c: ' Les chevaux communiquent de manière non verbale et réagissent ',
    p5d: 'avec justesse et sans jugement',
    p5e: " à l'énergie que nous dégageons. Ils détectent — ou non — la cohérence et l'authenticité dans ce que nous pensons, ressentons et faisons.",
    p6: "C'est pourquoi le coaching assisté par le cheval est si puissant — et pourquoi notre devise est :",
    motto: 'Les chevaux, bien mieux que les mots',
  },
  de: {
    heroTitle: 'Pferdegestütztes Coaching',
    h1: 'Pferde, viel besser als Worte',
    p1: 'Pferde sind wahre Meister der vollen Präsenz, verankert im Hier und Jetzt.',
    p2: 'Als Menschen leben wir oft in unserem Kopf, gefangen in Gedanken, Sorgen und Erwartungen. Mit der Zeit trennt uns das von unseren tiefsten Gefühlen und unserer inneren Weisheit und erzeugt Stress, Angst, Zweifel und Verwirrung.',
    p3a: 'Pferde bringen uns sanft in den gegenwärtigen Moment zurück. Ihre Präsenz bringt ',
    p3b: 'Ruhe und Klarheit',
    p3c: ' und hilft uns, aus dem Strom unserer Gedanken auszusteigen und uns wieder mit dem Wesentlichen zu verbinden. Man kann ein Pferd nicht täuschen — sie sind unglaublich sensibel und aufrichtig. Genau das macht sie zu außergewöhnlichen Coaches.',
    p4: 'Als Herdentiere, Fluchttiere und somit Beutetiere sind Pferde instinktiv auf Sicherheit bedacht und daher ständig mit ihrer Umgebung verbunden. Sie suchen von Natur aus Harmonie, auch mit Menschen.',
    p5a: 'Wenn unsere Gedanken, Gefühle und Handlungen im Einklang sind, fühlt sich das Pferd ',
    p5b: 'an unserer Seite sicher und ist bereit zu kooperieren.',
    p5c: ' Pferde kommunizieren nonverbal und reagieren ',
    p5d: 'genau und ohne Urteil',
    p5e: ' auf die Energie, die wir ausstrahlen. Sie erkennen — oder auch nicht — die Kohärenz und Authentizität in dem, was wir denken, fühlen und tun.',
    p6: 'Deshalb ist pferdegestütztes Coaching so kraftvoll — und deshalb lautet unser Motto:',
    motto: 'Pferde, viel besser als Worte',
  },
} satisfies Record<Locale, unknown>

export default function CoachingIntroductionPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} />
      <SubNav items={tabs} active={`/${params.locale}/equine-coaching/introduction`} />

      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-brand-light rounded-lg p-8 md:p-12 prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h1}</h2>
          <p>{c.p1}</p>
          <p>{c.p2}</p>
          <p>
            {c.p3a}
            <strong>{c.p3b}</strong>
            {c.p3c}
          </p>
          <p>{c.p4}</p>
          <p>
            {c.p5a}
            <strong>{c.p5b}</strong>
            {c.p5c}
            <strong>{c.p5d}</strong>
            {c.p5e}
          </p>
          <p>{c.p6}</p>
          <p className="text-center font-serif text-xl font-semibold text-brand-darker">{c.motto}</p>
        </div>
      </div>
    </div>
  )
}
