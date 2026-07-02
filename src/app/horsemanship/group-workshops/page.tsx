import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Horsemanship')!.children!

export const metadata = { title: 'Horsemanship — Group Workshops' }

export default function GroupWorkshopsPage() {
  return (
    <div>
      <PageHero title="Group Workshops" intro="Learning alongside other horse-and-human pairs, at a shared pace." />
      <SubNav items={tabs} active="/horsemanship/group-workshops" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose-body">
          <p>
            Our group workshops bring together a small number of participants and their horses to practice
            groundwork exercises together, observe one another, and share feedback in a supportive setting.
          </p>
          <ul>
            <li>Small groups, capped to keep everyone&apos;s safety and attention in focus.</li>
            <li>A mix of demonstration, hands-on practice, and group discussion.</li>
            <li>Open to all levels — what matters is willingness to listen and observe.</li>
            <li>Horses provided for participants without their own, on request.</li>
          </ul>
        </div>
        <ImagePlaceholder caption="A group workshop in progress" />
      </div>
    </div>
  )
}
