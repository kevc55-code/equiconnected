import ContentPage from '@/components/ContentPage'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/cookie-settings', { slug: 'cookie-settings' })
}

export default function CookieSettingsPage({ params }: { params: { locale: Locale } }) {
  return <ContentPage locale={params.locale} slug="cookie-settings" width="max-w-3xl" />
}
