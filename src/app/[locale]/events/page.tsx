import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'

export default function EventsPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="events" width="max-w-3xl" />
}
