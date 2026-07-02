import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: {
    default: 'EquiConnected — Horses, Much Better Than Words',
    template: '%s | EquiConnected',
  },
  description:
    'EquiConnected is an association promoting harmonious relationships between horses and humans through Paddock Paradise, natural care, horsemanship, Mountain Trail, and equine-assisted coaching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${garamond.variable} font-sans antialiased bg-white text-ink`}>
        {children}
      </body>
    </html>
  )
}
