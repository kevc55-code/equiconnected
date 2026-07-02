import PageHero from '@/components/PageHero'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Events',
    heroIntro: 'Upcoming sessions and workshops.',
    month: 'JUL',
    day: '19',
    eventTitle: 'Mountain Trail Session',
    eventDetail: 'Group session on the obstacle course — open to all levels.',
    status: 'Open',
    footer:
      'No other events are scheduled for this month. Check back soon, or subscribe to the newsletter below to be notified of new dates.',
  },
  fr: {
    heroTitle: 'Événements',
    heroIntro: 'Prochaines séances et ateliers.',
    month: 'JUIL',
    day: '19',
    eventTitle: 'Séance Mountain Trail',
    eventDetail: 'Séance de groupe sur le parcours d’obstacles — ouverte à tous les niveaux.',
    status: 'Ouvert',
    footer:
      "Aucun autre événement n'est prévu ce mois-ci. Revenez bientôt, ou abonnez-vous à la newsletter ci-dessous pour être informé des nouvelles dates.",
  },
  de: {
    heroTitle: 'Termine',
    heroIntro: 'Kommende Sitzungen und Workshops.',
    month: 'JUL',
    day: '19',
    eventTitle: 'Mountain-Trail-Sitzung',
    eventDetail: 'Gruppensitzung auf dem Hindernisparcours — offen für alle Niveaus.',
    status: 'Offen',
    footer:
      'Diesen Monat sind keine weiteren Termine geplant. Schauen Sie bald wieder vorbei oder abonnieren Sie unten den Newsletter, um über neue Termine informiert zu werden.',
  },
} satisfies Record<Locale, unknown>

export default function EventsPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-4">
          <div className="grid grid-cols-[64px_1fr_auto] gap-5 items-center rounded-lg border border-ink/10 p-5">
            <div className="bg-brand-darker rounded-md text-center py-3">
              <div className="font-serif text-2xl font-semibold text-white leading-none">{c.day}</div>
              <div className="text-[10px] uppercase tracking-wide text-white/60 mt-1">{c.month}</div>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold">{c.eventTitle}</h3>
              <p className="text-sm text-ink/60">{c.eventDetail}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide bg-brand-light text-brand-darker px-3 py-1 rounded-full">
              {c.status}
            </span>
          </div>
        </div>
        <p className="text-sm text-ink/50 mt-8">{c.footer}</p>
      </div>
    </div>
  )
}
