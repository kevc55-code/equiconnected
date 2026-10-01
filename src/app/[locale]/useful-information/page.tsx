import RedirectPage from '@/components/RedirectPage'
import { localizePath, type Locale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return { robots: { index: false }, alternates: { canonical: localizePath(params.locale, '/useful-information/team') } }
}

export default function UsefulInformationIndex({ params }: { params: { locale: Locale } }) {
  return <RedirectPage to={localizePath(params.locale, '/useful-information/team')} />
}
