import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/paddock-paradise/create-your-paddock-paradise', { slug: 'create-your-paddock-paradise' })
}

export default function CreatePaddockParadisePage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/paddock-paradise'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="create-your-paddock-paradise"
      tabs={tabs}
      activePath={`/${params.locale}/paddock-paradise/create-your-paddock-paradise`}
    />
  )
}
