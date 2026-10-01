import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/mountain-trail', { slug: 'mountain-trail' })
}

export default function MountainTrailPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="mountain-trail" />
}
