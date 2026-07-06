import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'

export default function LegalNoticePage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="legal-notice" width="max-w-3xl" />
}
