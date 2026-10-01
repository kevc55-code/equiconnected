import ContentPage from '@/components/ContentPage'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/shop', { slug: 'shop' })
}

export default function ShopPage({ params }: { params: { locale: Locale } }) {
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/shop'))!.children!
  return <ContentPage locale={params.locale} slug="shop" tabs={tabs} activePath={`/${params.locale}/shop`} />
}
