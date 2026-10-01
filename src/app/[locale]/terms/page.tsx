import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/terms', { slug: 'terms' })
}

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="terms" width="max-w-3xl" />
}
