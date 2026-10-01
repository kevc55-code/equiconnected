import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/horsemanship/group-workshops', { slug: 'group-workshops' })
}

export default function GroupWorkshopsPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/horsemanship'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="group-workshops"
      tabs={tabs}
      activePath={`/${params.locale}/horsemanship/group-workshops`}
    />
  )
}
