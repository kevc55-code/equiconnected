import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSettings } from '@/lib/content'
import { locales, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const settings = getSettings()
  return (
    <>
      <Header locale={params.locale} logoSrc={settings.logo || undefined} />
      <main>{children}</main>
      <Footer locale={params.locale} />
    </>
  )
}
