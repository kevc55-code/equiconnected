import ContentPage from '@/components/ContentPage'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function TeamPage({ params }: { params: { locale: Locale } }) {
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/useful-information'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="team"
      tabs={tabs}
      activePath={`/${params.locale}/useful-information/team`}
    />
  )
}
