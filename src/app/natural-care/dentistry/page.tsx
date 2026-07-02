import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Natural Care')!.children!

const signs = [
  'The horse spits out partially chewed food (quidding).',
  'The horse is losing weight despite a good diet.',
  'The horse shakes its head.',
  'The horse is drooling excessively or has bad breath.',
  'The horse exhibits facial swelling, nasal discharge, or changes in behavior.',
]

export const metadata = { title: 'Dentistry' }

export default function DentistryPage() {
  return (
    <div>
      <PageHero title="Dentistry" intro="Equine dental technicians: true professionals who listen." />
      <SubNav items={tabs} active="/natural-care/dentistry" />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ImagePlaceholder caption="A dental technician at work, caring for a defective tooth" />
          <div className="prose-body">
            <p>
              Equine dental technicians, trained and grouped within a federation in France, perform dental
              care <strong>without sedation</strong> using the same professional equipment as a veterinarian
              who would prefer to sedate the horse with a chemical product.
            </p>
            <p>
              A conscientious technician will also know when to hand over to a veterinarian when the
              situation requires it.
            </p>
          </div>
        </div>

        <div className="prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">Signs indicating that a horse needs dental care</h2>
          <ul>
            {signs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p>
            Dental problems can manifest as behavioral issues such as head shaking, resistance to the bit,
            and poor performance under saddle. Dental care is not only reactive (addressing visible problems)
            but also preventative. Routine checkups allow for the detection of problems before they worsen.
          </p>
          <p>
            Combine dental care with a good diet: for example, a fibrous diet such as hay promotes the
            natural wear of teeth.
          </p>
          <p>
            Regular dental care for horses is not optional; it is essential for their health, performance,
            and well-being. Without it, horses can suffer from pain, inefficient digestion, behavioral
            problems, weight loss, and more serious dental diseases. By scheduling routine checkups, filing
            their teeth when necessary, and working with a qualified professional, you can significantly
            improve your horse&apos;s quality of life and longevity.{' '}
            <strong>Good dental care can extend a horse&apos;s life by 5 to 15 years</strong> by preventing
            pain and disease.
          </p>

          <h2 className="font-serif text-2xl font-semibold mb-3 mt-8">How often should they be done?</h2>
          <p>
            Most adult horses should have a dental examination at least once a year. For young horses, the
            first dental work can begin around the age of two, carefully monitoring their ability to
            tolerate the procedure. We select qualified dental technicians who will not use chemical
            tranquilizers except in more complex cases requiring intervention by an equine veterinarian with
            sedation.
          </p>
          <p>
            Younger horses (who are still losing their milk teeth) or high-performance horses may need a
            check-up every 6 months.
          </p>
          <p>For very old horses, the frequency depends on wear and tear, alignment, and risk of disease.</p>
        </div>
      </div>
    </div>
  )
}
