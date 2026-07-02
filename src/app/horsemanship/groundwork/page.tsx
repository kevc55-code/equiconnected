import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Horsemanship')!.children!

export const metadata = { title: 'Horsemanship — Groundwork' }

export default function GroundworkPage() {
  return (
    <div>
      <PageHero title="Groundwork" intro="Before the saddle, everything is decided on the ground." />
      <SubNav items={tabs} active="/horsemanship/groundwork" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption="Reading the horse's body language, on the ground" />
        <div className="prose-body">
          <p>
            Groundwork is where the relationship is built before any riding takes place. Working at the end
            of a lead rope or at liberty, we focus on reading the horse&apos;s micro-signals — ears,
            breathing, tension in the neck and back — and adjusting our own energy in response.
          </p>
          <ul>
            <li>Clear, consistent pressure-and-release communication.</li>
            <li>Leadership built through trust and consistency, never force.</li>
            <li>Practical work on loading, leading, and everyday handling.</li>
            <li>A calm foundation that carries through directly into ridden work.</li>
          </ul>
          <p>
            Sessions are tailored to each horse-and-human pair, whether the goal is resolving a specific
            issue or simply deepening an already good relationship.
          </p>
        </div>
      </div>
    </div>
  )
}
