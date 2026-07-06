import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function WorkshopsPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="workshops"
      tabs={tabs}
      activePath={`/${params.locale}/equine-coaching/workshops`}
      width="max-w-3xl"
    />
  )
}
