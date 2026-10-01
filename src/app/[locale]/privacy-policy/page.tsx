import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/privacy-policy', { slug: 'privacy-policy' })
}

export default function PrivacyPolicyPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="privacy-policy" width="max-w-3xl" />
}
