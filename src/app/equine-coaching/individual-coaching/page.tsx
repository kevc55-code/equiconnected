import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Equine-Assisted Coaching')!.children!

export const metadata = { title: 'Individual Coaching' }

export default function IndividualCoachingPage() {
  return (
    <div>
      <PageHero title="Individual Coaching" intro="One-to-one sessions on the ground, with a horse as your mirror." />
      <SubNav items={tabs} active="/equine-coaching/individual-coaching" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption="An individual ground session" />
        <div className="prose-body">
          <p>
            No riding, no prior horse experience needed. Individual sessions take place on the ground, in a
            secure space, where you and a horse work through simple exercises together. How the horse
            responds — moving away, staying close, hesitating, following — reflects your posture,
            confidence, and the way you communicate without realizing it.
          </p>
          <ul>
            <li>Confidence, self-assurance, and stress management</li>
            <li>Working through a specific personal or professional transition</li>
            <li>Understanding recurring patterns in how you relate to others</li>
            <li>A private, judgment-free space to slow down and reconnect with yourself</li>
          </ul>
          <p>Sessions are tailored around what brings you, and paced to what feels right for you and the horse.</p>
        </div>
      </div>
    </div>
  )
}
