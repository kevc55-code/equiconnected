import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/equine-coaching/introduction', { slug: 'coaching-introduction' })
}

export default function CoachingIntroductionPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/equine-coaching'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="coaching-introduction"
      tabs={tabs}
      activePath={`/${params.locale}/equine-coaching/introduction`}
      width="max-w-3xl"
    />
  )
}
