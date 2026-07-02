import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Paddock Paradise')!.children!

export const metadata = { title: 'Paddock Paradise — Concept' }

export default function PaddockParadiseConceptPage() {
  return (
    <div>
      <PageHero
        title="Paddock Paradise"
        intro="A natural horse management system based on tracks, designed to replicate how horses live and move in the wild."
      />
      <SubNav items={tabs} active="/paddock-paradise" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose-body md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold mb-3">Concept</h2>
          <p>
            In the early 1980s, farrier Jaime Jackson spent several years studying wild horses in the Great
            Basin National Park in North America. By carefully observing their movement patterns, social
            structures, and hoof health in a dry, rocky desert environment, he identified key factors that
            contribute to the horses&apos; long-term health and well-being.
          </p>
          <p>
            These observations formed the basis of the Paddock Paradise® concept, which Jackson later
            documented and developed in his books. The system relies on{' '}
            <strong>supporting the horse&apos;s natural biology</strong> rather than adapting the horse to
            traditional management systems.
          </p>

          <h2 className="font-serif text-2xl font-semibold mb-3 mt-8">What is a Paddock Paradise®?</h2>
          <h3 className="font-semibold text-ink mb-2">Origin</h3>
          <p>
            A Paddock Paradise® is a natural horse management system based on tracks, designed to replicate
            how horses live and move in the wild. Instead of living in large open pastures, horses are guided
            along a looped track that encourages continuous movement, natural foraging, and social
            interaction.
          </p>
          <p>
            The track includes <strong>varied terrain</strong>, <strong>hay and water stations</strong>,{' '}
            <strong>rest areas</strong>, and <strong>enrichment zones</strong>. This layout promotes:
          </p>
          <ul>
            <li>Healthier hooves</li>
            <li>Improved physical fitness</li>
            <li>Mental stimulation</li>
            <li>More natural social behavior</li>
          </ul>
          <p>
            Access to green grass represents a departure from the concept. It allows horses to let off steam
            and roll around in a limited time frame, which is highly appreciated. Compared to conventional
            grazing systems, a Paddock Paradise® offers a{' '}
            <strong>more stimulating and biologically appropriate environment.</strong>
          </p>
        </div>
        <ImagePlaceholder caption="Aerial view of a track system" className="md:col-span-2" ratio="aspect-[21/9]" />
      </div>
    </div>
  )
}
