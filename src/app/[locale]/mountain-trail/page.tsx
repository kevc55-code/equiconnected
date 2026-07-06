import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'

export default function MountainTrailPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="mountain-trail" />
}
