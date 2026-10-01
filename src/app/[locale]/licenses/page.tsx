import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/licenses', { slug: 'licenses' })
}

export default function LicensesPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="licenses" width="max-w-3xl" />
}
