import ContentPage from '@/components/ContentPage'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function PhotoGalleriesPage({ params }: { params: { locale: Locale } }) {
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/connected'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="photo-galleries"
      tabs={tabs}
      activePath={`/${params.locale}/connected/photo-galleries`}
    />
  )
}
