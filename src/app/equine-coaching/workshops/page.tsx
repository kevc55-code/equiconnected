import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Equine-Assisted Coaching')!.children!

const topics = [
  'The Five Roles of the Masterherder (Linda Kohanov) on Leadership',
  'Women in Connection',
  'The Polyvagal Theory — find out about your nervous system',
]

const outcomes = [
  'Build self-confidence and presence',
  'Improve communication and boundaries',
  'Develop emotional awareness and resilience',
  'Strengthen leadership and decision-making',
  'Gain clarity during life transitions',
]

export const metadata = { title: 'Personal Development Workshops' }

export default function WorkshopsPage() {
  return (
    <div>
      <PageHero title="Personal Development Workshops" />
      <SubNav items={tabs} active="/equine-coaching/workshops" />

      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>
          At EquiConnected, we offer several workshops in the field of personal development. Via herd
          dynamics and leadership exercises, you will find out a lot about who you are and where you want to
          be.
        </p>
        <p>
          <strong>Each workshop is individually tailored to meet your needs.</strong>
        </p>
        <ul>
          {topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>
          Equine assisted coaching supports personal growth by combining guided coaching with the intuitive
          presence of horses. Through ground-based interactions, you gain insight into your mindset,
          communication, and emotional patterns—helping you create meaningful change in both your personal
          and professional life. It is experiential rather than talk-based. Working alongside horses in a
          calm, natural environment allows you to slow down, reconnect with yourself, and gain clarity.
          Horses naturally mirror human behavior, helping you identify strengths, uncover blind spots, and
          develop confidence, emotional intelligence, and effective communication.
        </p>
        <ul>
          {outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
