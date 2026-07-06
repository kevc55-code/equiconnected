import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function ConstellationsPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="constellations"
      tabs={tabs}
      activePath={`/${params.locale}/equine-coaching/constellations`}
      width="max-w-3xl"
    />
  )
}
