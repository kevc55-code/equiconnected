import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="terms" width="max-w-3xl" />
}
