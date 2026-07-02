import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Equine-Assisted Coaching')!.children!

const whyItWorks = [
  'Horses respond authentically to behavior, not titles or roles.',
  'Their reactions reveal what is happening beneath the surface.',
  'Teams gain clarity they often cannot achieve in a meeting room.',
  'The experience is hands-on, memorable, and deeply impactful.',
]

const benefits = [
  'Improved communication and trust',
  'Clearer roles and leadership awareness',
  'Enhanced cooperation and team cohesion',
  'Stronger emotional intelligence',
  'Better problem-solving and adaptability',
  'Immediate, actionable insights',
]

export const metadata = { title: 'Team Coaching' }

export default function TeamCoachingPage() {
  return (
    <div>
      <PageHero
        title="A powerful, experiential approach to building stronger, more connected teams."
      />
      <SubNav items={tabs} active="/equine-coaching/team-coaching" />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="prose-body">
            <h2 className="font-serif text-2xl font-semibold mb-3">What Is Team Coaching with Horses?</h2>
            <p>
              Team coaching with horses is an experiential team-development method in which horses help
              reveal communication styles, leadership behaviors, and group dynamics within a team.
            </p>
            <p>
              Because horses are highly sensitive to human energy, intention, and emotional signals, they
              provide immediate, honest, and non-judgmental feedback about how a team interacts—both
              individually and collectively.
            </p>
            <p>
              During a session, your team works with the horses from the ground (no riding). Through
              structured exercises, the horse mirrors the group&apos;s behavior in real time. This makes
              hidden patterns visible, such as unclear roles, tension, lack of trust, or ineffective
              communication. With the guidance of a skilled facilitator, these insights are translated into
              practical learning that your team can immediately apply in the workplace.
            </p>
          </div>
          <ImagePlaceholder caption="A team working together on the ground" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="prose-body">
            <h2 className="font-serif text-2xl font-semibold mb-3">Why It Works</h2>
            <ul>
              {whyItWorks.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
          <div className="prose-body">
            <h2 className="font-serif text-2xl font-semibold mb-3">Key Benefits for Teams</h2>
            <ul>
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="prose-body bg-brand-pale rounded-lg p-8">
          <h2 className="font-serif text-2xl font-semibold mb-3">Why Organizations Choose This Method</h2>
          <p>
            Team coaching with horses is highly effective because it combines{' '}
            <strong>experiential learning</strong>, <strong>emotional awareness</strong>, and{' '}
            <strong>systemic insight</strong>. It is ideal for leadership teams, project groups, newly formed
            teams, or teams experiencing conflict, stagnation, or change.
          </p>
        </div>
      </div>
    </div>
  )
}
