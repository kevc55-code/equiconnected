'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1 border-l border-white/20 pl-4">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathname.replace(`/${locale}`, `/${l}`)}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors ${
            l === locale
              ? 'bg-white text-brand-darker border-white'
              : 'border-white/40 text-white/70 hover:border-white hover:text-white'
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
