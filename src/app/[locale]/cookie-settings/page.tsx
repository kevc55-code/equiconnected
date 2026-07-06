import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'

export default function CookieSettingsPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="cookie-settings" width="max-w-3xl" />
}
