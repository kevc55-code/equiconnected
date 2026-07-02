import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata = { title: 'Mountain Trail' }

export default function MountainTrailPage() {
  return (
    <div>
      <PageHero
        title="Mountain Trail"
        intro="Complicity and calmness in the movements of the rider/horse pair over natural obstacles."
      />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption="Natural obstacle course" />
        <div className="prose-body">
          <p>The Mountain Trail was created in the United States in 2001 and imported to France in 2017.</p>
          <p>
            This discipline has as its ethos the{' '}
            <strong>
              complicity and calmness in the movements of the rider/horse pair over natural and constructed
              obstacles encountered outdoors (bridges, water crossings, stone courses...)
            </strong>
            .
          </p>
          <p>
            The initial objective of this sport is to prepare the horse and rider for outdoor riding.
            However, all riding styles can benefit from this mental and physical preparation, which
            necessarily involves groundwork fundamentals.
          </p>
          <p>More than just a discipline, a Mountain Trail session is a true assessment of the relationship with one&apos;s horse.</p>
          <p>
            The practice takes place on the ground, mounted, accompanied, on a lead rope, on the right,
            bareback, without a bit, ... In competition, the classes are distinguished as mini horse, young
            horse, long-rein or Horse &amp; Dog... No level required for riders, all equines with or without
            papers can participate.
          </p>
          <p>
            We are members of <strong>MTHA France</strong>, which offers a Mountain Trail respecting a
            Horsemanship approach.
          </p>
        </div>
        <ImagePlaceholder caption="Crossing a bridge obstacle" className="md:col-span-2" ratio="aspect-[21/9]" />
      </div>
    </div>
  )
}
