import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Photo Galleries',
    galleries: [
      { title: 'Pension Paddock Paradise', count: '12 photo(s)' },
      { title: 'Mountain Trail — 25 obstacles', count: '7 photo(s)' },
    ],
    view: 'View gallery',
  },
  fr: {
    heroTitle: 'Galeries Photo',
    galleries: [
      { title: 'Pension Paddock Paradise', count: '12 photo(s)' },
      { title: 'Mountain Trail — 25 dispositifs', count: '7 photo(s)' },
    ],
    view: 'Voir la galerie',
  },
  de: {
    heroTitle: 'Fotogalerien',
    galleries: [
      { title: 'Pension Paddock Paradise', count: '12 Foto(s)' },
      { title: 'Mountain Trail — 25 Hindernisse', count: '7 Foto(s)' },
    ],
    view: 'Galerie ansehen',
  },
} satisfies Record<Locale, unknown>

export default function PhotoGalleriesPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/connected'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} />
      <SubNav items={tabs} active={`/${params.locale}/connected/photo-galleries`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid sm:grid-cols-2 gap-6">
        {c.galleries.map((g) => (
          <div key={g.title} className="rounded-lg overflow-hidden border border-ink/10">
            <ImagePlaceholder ratio="aspect-[4/3]" className="[&_figcaption]:hidden" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold">{g.title}</h3>
                <p className="text-xs text-ink/50">{g.count}</p>
              </div>
              <span className="text-xs font-semibold text-brand-dark">{c.view} &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
