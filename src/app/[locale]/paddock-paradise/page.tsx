import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function PaddockParadiseConceptPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/paddock-paradise'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="paddock-paradise"
      tabs={tabs}
      activePath={`/${params.locale}/paddock-paradise`}
    />
  )
}
