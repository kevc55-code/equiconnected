import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { getPrimaryNav, getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const titles: Record<Locale, string> = {
  en: 'Site Map',
  fr: 'Plan du site',
  de: 'Sitemap',
}

export default function SiteMapPage({ params }: { params: { locale: Locale } }) {
  const all = [...getPrimaryNav(params.locale), ...getSecondaryNav(params.locale)]
  return (
    <div>
      <PageHero title={titles[params.locale]} />
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
