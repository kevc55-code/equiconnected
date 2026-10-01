import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/legal-notice', { slug: 'legal-notice' })
}

export default function LegalNoticePage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="legal-notice" width="max-w-3xl" />
}
