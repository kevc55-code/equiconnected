import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { primaryNav, secondaryNav } from '@/lib/nav'

export const metadata = { title: 'Site Map' }

export default function SiteMapPage() {
  const all = [...primaryNav, ...secondaryNav]
  return (
    <div>
      <PageHero title="Site Map" />
      <div className="max-w-3xl mx-auto px-4 py-12 grid sm:grid-cols-2 gap-8">
        {all.map((item) => (
          <div key={item.label}>
            <Link href={item.href} className="font-serif font-semibold text-brand-darker hover:underline">
              {item.label}
            </Link>
            {item.children ? (
              <ul className="mt-2 space-y-1">
                {item.children.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-sm text-ink/60 hover:text-brand-dark">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
