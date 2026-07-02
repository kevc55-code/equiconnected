import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { secondaryNav } from '@/lib/nav'

const tabs = secondaryNav.find((i) => i.label === 'Connected')!.children!

const galleries = [
  { title: 'Pension Paddock Paradise', count: 12 },
  { title: 'Mountain Trail — 25 obstacles', count: 7 },
]

export const metadata = { title: 'Photo Galleries' }

export default function PhotoGalleriesPage() {
  return (
    <div>
      <PageHero title="Photo Galleries" />
      <SubNav items={tabs} active="/connected/photo-galleries" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid sm:grid-cols-2 gap-6">
        {galleries.map((g) => (
          <div key={g.title} className="rounded-lg overflow-hidden border border-ink/10">
            <ImagePlaceholder ratio="aspect-[4/3]" className="[&_figcaption]:hidden" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold">{g.title}</h3>
                <p className="text-xs text-ink/50">{g.count} photo(s)</p>
              </div>
              <span className="text-xs font-semibold text-brand-dark">View gallery &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
