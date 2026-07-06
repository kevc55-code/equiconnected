import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function NaturalFoodPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/natural-care'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="natural-food"
      tabs={tabs}
      activePath={`/${params.locale}/natural-care/natural-food`}
    />
  )
}
