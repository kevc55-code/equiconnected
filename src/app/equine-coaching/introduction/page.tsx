import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Equine-Assisted Coaching')!.children!

export const metadata = { title: 'Equine-Assisted Coaching — Introduction' }

export default function CoachingIntroductionPage() {
  return (
    <div>
      <PageHero title="Equine-Assisted Coaching" />
      <SubNav items={tabs} active="/equine-coaching/introduction" />

      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-brand-light rounded-lg p-8 md:p-12 prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">Horses, much better than words</h2>
          <p>Horses are true masters of full presence, anchored in the here and now.</p>
          <p>
            As human beings, we often live in our heads, caught up in our thoughts, worries, and
            expectations. Over time, this disconnects us from our deepest feelings and inner wisdom,
            generating stress, anxiety, doubt, and confusion.
          </p>
          <p>
            Horses gently bring us back to the present moment. Their presence brings{' '}
            <strong>calm and clarity</strong>, helping us step out of the flow of our thoughts and reconnect
            with what truly matters. You can&apos;t fool a horse—they are incredibly sensitive and genuine.
            This is precisely what makes them exceptional coaches.
          </p>
          <p>
            As herd animals, prey animals, and therefore animals of flight, horses are instinctively
            attentive to safety and consequently constantly connected to their environment. They naturally
            seek harmony, including with humans.
          </p>
          <p>
            When our thoughts, emotions, and actions are aligned, the horse feels{' '}
            <strong>safe by our side and is willing to cooperate.</strong> Horses communicate non-verbally and
            react <strong>accurately and without judgment</strong> to the energy we give off. They
            detect—or not—the coherence and authenticity in what we think, feel, and do.
          </p>
          <p>This is why equine-assisted coaching is so powerful and why our motto is:</p>
          <p className="text-center font-serif text-xl font-semibold text-brand-darker">
            Horses, much better than words
          </p>
        </div>
      </div>
    </div>
  )
}
