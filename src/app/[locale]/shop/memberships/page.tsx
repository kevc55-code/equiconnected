import ContentPage from '@/components/ContentPage'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function MembershipsPage({ params }: { params: { locale: Locale } }) {
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/shop'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="memberships"
      tabs={tabs}
      activePath={`/${params.locale}/shop/memberships`}
      width="max-w-3xl"
    />
  )
}
