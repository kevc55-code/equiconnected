import ContentPage from '@/components/ContentPage'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function UsefulLinksPage({ params }: { params: { locale: Locale } }) {
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/useful-information'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="useful-links"
      tabs={tabs}
      activePath={`/${params.locale}/useful-information/useful-links`}
      width="max-w-3xl"
    />
  )
}
