import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Dentistry',
    heroIntro: 'Equine dental technicians: true professionals who listen.',
    caption: 'A dental technician at work, caring for a defective tooth',
    p1a: 'Equine dental technicians, trained and grouped within a federation in France, perform dental care ',
    p1b: 'without sedation',
    p1c: ' using the same professional equipment as a veterinarian who would prefer to sedate the horse with a chemical product.',
    p2: 'A conscientious technician will also know when to hand over to a veterinarian when the situation requires it.',
    h1: 'Signs indicating that a horse needs dental care',
    signs: [
      'The horse spits out partially chewed food (quidding).',
      'The horse is losing weight despite a good diet.',
      'The horse shakes its head.',
      'The horse is drooling excessively or has bad breath.',
      'The horse exhibits facial swelling, nasal discharge, or changes in behavior.',
    ],
    p3: 'Dental problems can manifest as behavioral issues such as head shaking, resistance to the bit, and poor performance under saddle. Dental care is not only reactive (addressing visible problems) but also preventative. Routine checkups allow for the detection of problems before they worsen.',
    p4: 'Combine dental care with a good diet: for example, a fibrous diet such as hay promotes the natural wear of teeth.',
    p5a: 'Regular dental care for horses is not optional; it is essential for their health, performance, and well-being. Without it, horses can suffer from pain, inefficient digestion, behavioral problems, weight loss, and more serious dental diseases. By scheduling routine checkups, filing their teeth when necessary, and working with a qualified professional, you can significantly improve your horse’s quality of life and longevity. ',
    p5b: "Good dental care can extend a horse's life by 5 to 15 years",
    p5c: ' by preventing pain and disease.',
    h2: 'How often should they be done?',
    p6: 'Most adult horses should have a dental examination at least once a year. For young horses, the first dental work can begin around the age of two, carefully monitoring their ability to tolerate the procedure. We select qualified dental technicians who will not use chemical tranquilizers except in more complex cases requiring intervention by an equine veterinarian with sedation.',
    p7: 'Younger horses (who are still losing their milk teeth) or high-performance horses may need a check-up every 6 months.',
    p8: 'For very old horses, the frequency depends on wear and tear, alignment, and risk of disease.',
  },
  fr: {
    heroTitle: 'Dentisterie',
    heroIntro: 'Les techniciens dentaires équins : de véritables professionnels à l’écoute.',
    caption: "Une technicienne dentaire à l'œuvre, ici pour le soin d'une dent défectueuse",
    p1a: 'Les techniciens dentaires équins, formés et regroupés au sein d’une fédération en France, réalisent les soins dentaires ',
    p1b: 'sans sédation',
    p1c: ' en utilisant le même matériel professionnel qu’un vétérinaire, qui préférerait sédater le cheval avec un produit chimique.',
    p2: "Un technicien consciencieux saura aussi passer la main à un vétérinaire lorsque la situation l'exige.",
    h1: "Signes indiquant qu'un cheval a besoin de soins dentaires",
    signs: [
      'Le cheval recrache des aliments partiellement mâchés (embouage).',
      'Le cheval perd du poids malgré une bonne alimentation.',
      'Le cheval secoue la tête.',
      'Le cheval bave excessivement ou a mauvaise haleine.',
      'Le cheval présente un gonflement facial, un écoulement nasal ou des changements de comportement.',
    ],
    p3: "Les problèmes dentaires peuvent se manifester par des troubles du comportement tels que des secousses de tête, une résistance au mors et de mauvaises performances sous la selle. Les soins dentaires ne sont pas seulement réactifs (traiter les problèmes visibles) mais aussi préventifs. Des contrôles réguliers permettent de détecter les problèmes avant qu'ils ne s'aggravent.",
    p4: "Associez les soins dentaires à une bonne alimentation : par exemple, une alimentation fibreuse comme le foin favorise l'usure naturelle des dents.",
    p5a: "Des soins dentaires réguliers pour les chevaux ne sont pas optionnels ; ils sont essentiels à leur santé, leurs performances et leur bien-être. Sans cela, les chevaux peuvent souffrir de douleurs, d'une digestion inefficace, de troubles du comportement, de perte de poids et de maladies dentaires plus graves. En planifiant des contrôles réguliers, en limant les dents si nécessaire et en travaillant avec un professionnel qualifié, vous pouvez significativement améliorer la qualité de vie et la longévité de votre cheval. ",
    p5b: "De bons soins dentaires peuvent prolonger la vie d'un cheval de 5 à 15 ans",
    p5c: ' en prévenant la douleur et la maladie.',
    h2: 'À quelle fréquence faut-il les réaliser ?',
    p6: "La plupart des chevaux adultes devraient bénéficier d'un examen dentaire au moins une fois par an. Chez les jeunes chevaux, les premiers soins dentaires peuvent débuter vers l'âge de deux ans, en surveillant attentivement leur capacité à tolérer l'intervention. Nous sélectionnons des techniciens dentaires qualifiés qui n'utiliseront pas de tranquillisants chimiques, sauf dans les cas plus complexes nécessitant l'intervention d'un vétérinaire équin avec sédation.",
    p7: 'Les jeunes chevaux (qui perdent encore leurs dents de lait) ou les chevaux de haut niveau peuvent nécessiter un contrôle tous les 6 mois.',
    p8: "Pour les chevaux très âgés, la fréquence dépend de l'usure, de l'alignement et du risque de maladie.",
  },
  de: {
    heroTitle: 'Zahnpflege',
    heroIntro: 'Pferdezahntechniker: echte Profis, die zuhören.',
    caption: 'Eine Zahntechnikerin bei der Arbeit, hier bei der Behandlung eines defekten Zahns',
    p1a: 'Pferdezahntechniker, die in Frankreich in einem Verband ausgebildet und organisiert sind, führen die Zahnpflege ',
    p1b: 'ohne Sedierung',
    p1c: ' durch, mit derselben professionellen Ausrüstung wie ein Tierarzt, der das Pferd lieber mit einem chemischen Mittel sedieren würde.',
    p2: 'Ein gewissenhafter Techniker weiß auch, wann er die Behandlung an einen Tierarzt übergeben sollte, wenn die Situation es erfordert.',
    h1: 'Anzeichen dafür, dass ein Pferd Zahnpflege benötigt',
    signs: [
      'Das Pferd spuckt teilweise gekautes Futter aus (Wickeln/Quidding).',
      'Das Pferd verliert trotz guter Ernährung an Gewicht.',
      'Das Pferd schüttelt den Kopf.',
      'Das Pferd sabbert übermäßig oder hat Mundgeruch.',
      'Das Pferd zeigt Gesichtsschwellungen, Nasenausfluss oder Verhaltensänderungen.',
    ],
    p3: 'Zahnprobleme können sich in Verhaltensproblemen wie Kopfschütteln, Widerstand gegen das Gebiss und schlechter Leistung unter dem Sattel äußern. Zahnpflege ist nicht nur reaktiv (sichtbare Probleme behandeln), sondern auch präventiv. Routinemäßige Kontrollen ermöglichen es, Probleme zu erkennen, bevor sie sich verschlimmern.',
    p4: 'Kombinieren Sie Zahnpflege mit einer guten Ernährung: Eine faserreiche Ernährung wie Heu fördert zum Beispiel den natürlichen Zahnabrieb.',
    p5a: 'Regelmäßige Zahnpflege bei Pferden ist keine Option, sondern unerlässlich für ihre Gesundheit, Leistung und ihr Wohlbefinden. Ohne sie können Pferde unter Schmerzen, ineffizienter Verdauung, Verhaltensproblemen, Gewichtsverlust und schwereren Zahnerkrankungen leiden. Durch regelmäßige Kontrollen, das Feilen der Zähne bei Bedarf und die Zusammenarbeit mit einem qualifizierten Fachmann können Sie die Lebensqualität und Langlebigkeit Ihres Pferdes erheblich verbessern. ',
    p5b: 'Gute Zahnpflege kann das Leben eines Pferdes um 5 bis 15 Jahre verlängern',
    p5c: ', indem sie Schmerzen und Krankheiten vorbeugt.',
    h2: 'Wie oft sollte sie durchgeführt werden?',
    p6: 'Die meisten erwachsenen Pferde sollten mindestens einmal im Jahr zahnärztlich untersucht werden. Bei jungen Pferden kann die erste Zahnbehandlung im Alter von etwa zwei Jahren beginnen, wobei ihre Fähigkeit, den Eingriff zu tolerieren, sorgfältig überwacht wird. Wir wählen qualifizierte Zahntechniker aus, die keine chemischen Beruhigungsmittel verwenden, außer bei komplexeren Fällen, die den Eingriff eines Pferdetierarztes mit Sedierung erfordern.',
    p7: 'Jüngere Pferde (die noch Milchzähne verlieren) oder Hochleistungspferde benötigen möglicherweise alle 6 Monate eine Kontrolle.',
    p8: 'Bei sehr alten Pferden hängt die Häufigkeit von Abnutzung, Ausrichtung und Krankheitsrisiko ab.',
  },
} satisfies Record<Locale, unknown>

export default function DentistryPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/natural-care'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/natural-care/dentistry`} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ImagePlaceholder caption={c.caption} />
          <div className="prose-body">
            <p>
              {c.p1a}
              <strong>{c.p1b}</strong>
              {c.p1c}
            </p>
            <p>{c.p2}</p>
          </div>
        </div>

        <div className="prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">{c.h1}</h2>
          <ul>
            {c.signs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p>{c.p3}</p>
          <p>{c.p4}</p>
          <p>
            {c.p5a}
            <strong>{c.p5b}</strong>
            {c.p5c}
          </p>

          <h2 className="font-serif text-2xl font-semibold mb-3 mt-8">{c.h2}</h2>
          <p>{c.p6}</p>
          <p>{c.p7}</p>
          <p>{c.p8}</p>
        </div>
      </div>
    </div>
  )
}
