import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSettings } from '@/lib/content'
import { locales, type Locale } from '@/lib/i18n'
import { SITE_NAME, SITE_URL, siteDescription, tagline } from '@/lib/metadata'
import '../globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
})

const garamond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — ${tagline[params.locale]}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: siteDescription[params.locale],
    icons: { icon: '/icon.svg' },
  }
}

// Each locale is its own root layout so <html lang> matches the page language.
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const settings = getSettings()
  return (
    <html lang={params.locale}>
      <body className={`${dmSans.variable} ${garamond.variable} font-sans antialiased bg-white text-ink`}>
        <Header locale={params.locale} logoSrc={settings.logo || undefined} />
        <main>{children}</main>
        <Footer locale={params.locale} />
      </body>
    </html>
  )
}
