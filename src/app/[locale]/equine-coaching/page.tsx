import RedirectPage from '@/components/RedirectPage'
import { localizePath, type Locale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return { robots: { index: false }, alternates: { canonical: localizePath(params.locale, '/equine-coaching/introduction') } }
}

export default function EquineCoachingIndex({ params }: { params: { locale: Locale } }) {
  return <RedirectPage to={localizePath(params.locale, '/equine-coaching/introduction')} />
}
