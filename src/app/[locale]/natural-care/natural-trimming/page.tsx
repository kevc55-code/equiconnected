import ContentPage from '@/components/ContentPage'
import { getPrimaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/natural-care/natural-trimming', { slug: 'natural-trimming' })
}

export default function NaturalTrimmingPage({ params }: { params: { locale: Locale } }) {
  const tabs = getPrimaryNav(params.locale).find((i) => i.href.includes('/natural-care'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="natural-trimming"
      tabs={tabs}
      activePath={`/${params.locale}/natural-care/natural-trimming`}
    />
  )
}
