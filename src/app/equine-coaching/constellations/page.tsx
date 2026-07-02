import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Equine-Assisted Coaching')!.children!

const experiences = [
  'recurring emotional or relational patterns',
  'unexplained anxiety, tension, or exhaustion',
  'difficulty with boundaries, decisions, or self-expression',
  'strong reactions to certain people or situations',
]

const organizational = [
  'leadership and decision-making',
  'team dynamics and recurring conflict',
  'stalled growth or lack of direction',
  'organizational stress and imbalance',
]

export const metadata = { title: 'Constellations / Systemic Coaching' }

export default function ConstellationsPage() {
  return (
    <div>
      <PageHero title="Constellations / Systemic Coaching" intro="When words are not enough, horses reveal what lies beneath." />
      <SubNav items={tabs} active="/equine-coaching/constellations" />

      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>
          Horse-assisted systemic constellations help uncover the hidden dynamics shaping your life,
          relationships, or work. We are all part of systems—family, organizations, and communities—and
          unconscious patterns within these systems often shape our experience more than we realize.
        </p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">Why Horse-Assisted Constellations?</h2>
        <p>
          Unlike traditional approaches, horse-assisted constellations do not analyze or force change. They
          allow insight to arise naturally—through presence, movement, and resonance.
        </p>
        <p>Customers often experience clarity around:</p>
        <ul>
          {experiences.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <p>By addressing the root cause rather than the symptom, lasting shifts become possible.</p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">How It Works</h2>
        <p>A constellation creates a living, spatial representation of your inner system.</p>
        <p>
          Horses act as intuitive representatives, responding to subtle systemic tension with honesty and
          precision. Their behavior reflects what is happening beneath the surface, often revealing the
          deeper question behind your original concern.
        </p>
        <p>No prior experience with horses is needed.</p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">Organizational &amp; Leadership Constellations</h2>
        <p>
          Horse-assisted constellations are also powerful in professional settings. They support clarity and
          alignment around:
        </p>
        <ul>
          {organizational.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <p>Horses offer immediate, unbiased feedback—making systemic issues visible without judgment.</p>

        <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">Experience the Power of the Herd</h2>
        <p>
          Horse-assisted constellation work offers a grounded, deeply transformative experience that
          reconnects you with clarity, balance, and flow—both personally and professionally.
        </p>
      </div>
    </div>
  )
}
