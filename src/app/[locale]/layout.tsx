import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'
import { isComingSoon, isPreview } from '@/lib/launch'
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
    // Keep search engines away from the coming-soon page and the private preview.
    ...(isComingSoon() || isPreview ? { robots: { index: false, follow: false } } : {}),
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
  const bodyClass = `${dmSans.variable} ${garamond.variable} font-sans antialiased bg-white text-ink`

  // Pre-launch: every public page shows the coming-soon page in its language.
  if (isComingSoon()) {
    return (
      <html lang={params.locale}>
        <body className={bodyClass}>
          <ComingSoon locale={params.locale} />
        </body>
      </html>
    )
  }

  return (
    <html lang={params.locale}>
      <body className={bodyClass}>
        <Header locale={params.locale} logoSrc={settings.logo || undefined} />
        <main>{children}</main>
        <Footer locale={params.locale} />
      </body>
    </html>
  )
}
