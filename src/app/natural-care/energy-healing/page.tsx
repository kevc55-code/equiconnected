import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Natural Care')!.children!

const benefits = [
  'Better adapting to seasonal or environmental changes',
  "Developing one's gait",
  'Calming down during stressful situations',
  "Developing one's physical and psychological well-being",
  'Preparing before competitions',
  'Recovering after exertion',
]

export const metadata = { title: 'Energy Healing' }

export default function EnergyHealingPage() {
  return (
    <div>
      <PageHero title="Energy Healing" intro="Equine shiatsu — a holistic approach to the horse within its environment." />
      <SubNav items={tabs} active="/natural-care/energy-healing" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <ImagePlaceholder caption="Mother-daughter shiatsu session" />
        <div className="prose-body">
          <p>
            Of Japanese origin, <strong>shiatsu</strong> means &ldquo;finger pressure.&rdquo;
          </p>
          <p>
            A session will combine work on the meridians, acupuncture points and relaxation techniques such
            as percussion, palpation and rolling, stretching and flexion.
          </p>
          <p>
            Equine shiatsu is a <strong>holistic approach</strong> to the horse within its environment. It
            works on the horse&apos;s <strong>overall balance</strong> to facilitate harmonious movement. The
            resulting relaxation promotes physical and emotional well-being.
          </p>
          <p>
            <strong>The horse&apos;s quality of life and performance will be improved.</strong>
          </p>
          <p>By offering shiatsu to your horse, you allow it to:</p>
          <ul>
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
