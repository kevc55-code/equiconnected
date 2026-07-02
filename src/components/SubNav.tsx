import Link from 'next/link'
import type { NavLink } from '@/lib/nav'

export default function SubNav({ items, active }: { items: NavLink[]; active: string }) {
  return (
    <div className="bg-brand-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-wrap">
        {items.map((item) => {
          const isActive = item.href === active
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive ? 'bg-brand-darker text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
