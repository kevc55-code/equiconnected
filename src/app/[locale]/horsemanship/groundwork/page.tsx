import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function GroundworkPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/horsemanship'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="groundwork"
      tabs={tabs}
      activePath={`/${params.locale}/horsemanship/groundwork`}
    />
  )
}
