import ContentPage from '@/components/ContentPage'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata(params.locale, '/useful-information/access-contact', { slug: 'access-contact' })
}

export default function AccessContactPage({ params }: { params: { locale: Locale } }) {
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/useful-information'))!.children!
  return (
    <ContentPage
      locale={params.locale}
      slug="access-contact"
      tabs={tabs}
      activePath={`/${params.locale}/useful-information/access-contact`}
      width="max-w-3xl"
    />
  )
}
