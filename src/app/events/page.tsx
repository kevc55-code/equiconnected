import PageHero from '@/components/PageHero'

const events = [
  {
    day: '19',
    month: 'JUL',
    title: 'Mountain Trail Session',
    detail: 'Group session on the obstacle course — open to all levels.',
    status: 'Open',
  },
]

export const metadata = { title: 'Events' }

export default function EventsPage() {
  return (
    <div>
      <PageHero title="Events" intro="Upcoming sessions and workshops." />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {events.map((e) => (
            <div
              key={e.title + e.day}
              className="grid grid-cols-[64px_1fr_auto] gap-5 items-center rounded-lg border border-ink/10 p-5"
            >
              <div className="bg-brand-darker rounded-md text-center py-3">
                <div className="font-serif text-2xl font-semibold text-white leading-none">{e.day}</div>
                <div className="text-[10px] uppercase tracking-wide text-white/60 mt-1">{e.month}</div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-ink/60">{e.detail}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide bg-brand-light text-brand-darker px-3 py-1 rounded-full">
                {e.status}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink/50 mt-8">
          No other events are scheduled for this month. Check back soon, or subscribe to the newsletter
          below to be notified of new dates.
        </p>
      </div>
    </div>
  )
}
