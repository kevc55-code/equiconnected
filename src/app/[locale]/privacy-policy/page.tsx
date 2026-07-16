import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'

export default function PrivacyPolicyPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="privacy-policy" width="max-w-3xl" />
}
