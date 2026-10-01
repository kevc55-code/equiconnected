'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { getPrimaryNav, getSecondaryNav, type NavItem } from '@/lib/nav'
import { locales, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'

function NavRow({ items, variant = 'primary' }: { items: NavItem[]; variant?: 'primary' | 'secondary' }) {
  const linkClass =
    variant === 'primary'
      ? 'block px-3 py-3 text-xs md:text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10 transition-colors'
      : 'block px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-white/60 hover:bg-white/10 hover:text-white/90 transition-colors'

  // Dropdowns open on hover and on keyboard focus (focus-within), so
  // keyboard users can reach the sub-pages too.
  return (
    <ul className="flex flex-wrap items-center">
      {items.map((item) => (
        <li key={item.label} className="relative group">
          <Link href={item.href} className={linkClass} aria-haspopup={item.children ? 'true' : undefined}>
            {item.label}
          </Link>
          {item.children ? (
            <div className="absolute left-0 top-full min-w-[240px] bg-brand-darker shadow-lg z-30 border border-white/10 hidden group-hover:block group-focus-within:block">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 text-xs font-medium uppercase tracking-wide text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

function MobileNav({ locale, onNavigate }: { locale: Locale; onNavigate: () => void }) {
  const pathname = usePathname()
  const all = [...getPrimaryNav(locale), ...getSecondaryNav(locale)]
  return (
    <div className="bg-brand-darker px-4 py-4 space-y-1">
      {all.map((item) => (
        <div key={item.label}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="block py-2 text-sm font-semibold uppercase tracking-wide text-white"
          >
            {item.label}
          </Link>
          {item.children ? (
            <div className="pl-4 border-l border-white/20 space-y-1 mb-2">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className="block py-1.5 text-xs uppercase tracking-wide text-white/70"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
      <div className="pt-3 flex gap-2">
        {locales.map((l) => (
          <Link
            key={l}
            href={pathname.replace(`/${locale}`, `/${l}`)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              l === locale ? 'bg-white text-brand-darker border-white' : 'border-white/40 text-white/70'
            }`}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Header({ locale, logoSrc }: { locale: Locale; logoSrc?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const primaryNav = getPrimaryNav(locale)
  const secondaryNav = getSecondaryNav(locale)

  return (
    <header className="sticky top-0 z-40 bg-brand shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center gap-3 py-2 text-white">
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoSrc} alt="EquiConnected" className="h-10 w-auto max-w-[120px] object-contain" />
          ) : (
            <Logo className="h-9 w-9" />
          )}
          <span className="font-serif text-lg font-semibold tracking-wide hidden sm:inline">
            EquiConnected
          </span>
        </Link>
        <button
          className="md:hidden text-white p-2"
          aria-label={getDictionary(locale).menuToggle}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:flex items-center gap-4">
          <nav>
            <NavRow items={primaryNav} variant="primary" />
          </nav>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
      <div className="hidden md:block border-t border-white/10 bg-brand-darker">
        <div className="max-w-6xl mx-auto">
          <NavRow items={secondaryNav} variant="secondary" />
        </div>
      </div>
      {mobileOpen ? <MobileNav locale={locale} onNavigate={() => setMobileOpen(false)} /> : null}
    </header>
  )
}
