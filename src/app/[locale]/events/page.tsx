import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/events', { slug: 'events' })
}

export default function EventsPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="events" width="max-w-3xl" />
}
