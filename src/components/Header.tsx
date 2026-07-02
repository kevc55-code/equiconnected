'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { primaryNav, secondaryNav, type NavItem } from '@/lib/nav'

function NavRow({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul className="flex flex-wrap items-center">
      {items.map((item) => (
        <li
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setOpen(item.label)}
          onMouseLeave={() => item.children && setOpen(null)}
        >
          <Link
            href={item.href}
            className="block px-4 py-3 text-xs md:text-sm font-semibold uppercase tracking-wide text-white/90 hover:bg-white/10 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
          {item.children && open === item.label ? (
            <div className="absolute left-0 top-full min-w-[240px] bg-brand-darker shadow-lg z-30 border border-white/10">
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

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const all = [...primaryNav, ...secondaryNav]
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
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-brand shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 py-2 text-white">
          <Logo className="h-9 w-9" />
          <span className="font-serif text-lg font-semibold tracking-wide hidden sm:inline">
            EquiConnected
          </span>
        </Link>
        <button
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:block">
          <NavRow items={primaryNav} />
        </nav>
      </div>
      <div className="hidden md:block border-t border-white/10 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <NavRow items={secondaryNav} />
        </div>
      </div>
      {mobileOpen ? <MobileNav onNavigate={() => setMobileOpen(false)} /> : null}
    </header>
  )
}
