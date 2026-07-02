import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Paddock Paradise')!.children!

export const metadata = { title: 'Create Your Paddock Paradise' }

export default function CreatePaddockParadisePage() {
  return (
    <div>
      <PageHero
        title="Create Your Paddock Paradise"
        intro="Turning any property into a track system starts with observing your land, your horses, and how the two can move together."
      />
      <SubNav items={tabs} active="/paddock-paradise/create-your-paddock-paradise" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption="Sketching a track layout on site" />
        <div className="prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">Where to start</h2>
          <p>
            Every property is different, so every track is designed around what is already there: existing
            fence lines, natural shade, slopes, and water sources. The goal is to turn the whole space into a
            <strong> journey</strong> rather than a single open field.
          </p>
          <ul>
            <li>Map the perimeter and identify natural obstacles to work with, not against.</li>
            <li>Space hay, water, and shelter stations far apart to encourage constant movement.</li>
            <li>Vary the ground surface — sand, gravel, packed earth — to condition healthy hooves.</li>
            <li>Add loafing and rolling areas along the track for rest and social contact.</li>
          </ul>
        </div>

        <div className="prose-body md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold mb-3">How we can help</h2>
          <p>
            We offer on-site visits to walk your land with you, sketch a first track layout, and talk through
            fencing, footing, and station placement that fits your budget and your herd. Whether you are
            starting from a bare pasture or adapting an existing paddock, the aim is always the same: more
            steps, more foraging, more natural behavior.
          </p>
        </div>
      </div>
    </div>
  )
}
