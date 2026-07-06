import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'

export default function LicensesPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="licenses" width="max-w-3xl" />
}
