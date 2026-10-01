import ContentPage from '@/components/ContentPage'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/connected/videos', { slug: 'videos' })
}

export default function VideosPage({ params }: { params: { locale: Locale } }) {
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/connected'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="videos"
      tabs={tabs}
      activePath={`/${params.locale}/connected/videos`}
      width="max-w-3xl"
    />
  )
}
