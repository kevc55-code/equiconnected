import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { secondaryNav } from '@/lib/nav'

const tabs = secondaryNav.find((i) => i.label === 'Useful Information')!.children!

const links = [
  {
    name: 'MTHA France',
    desc: 'The federation offering Mountain Trail practiced with a horsemanship approach.',
  },
  {
    name: 'Jaime Jackson — Paddock Paradise research',
    desc: "The original studies on wild horse movement that shaped the Paddock Paradise concept.",
  },
  {
    name: 'French equine dental technician federation',
    desc: 'The professional body training and grouping equine dental technicians in France.',
  },
]

export const metadata = { title: 'Useful Links' }

export default function UsefulLinksPage() {
  return (
    <div>
      <PageHero title="Useful Links" intro="Organizations and resources referenced across our work." />
      <SubNav items={tabs} active="/useful-information/useful-links" />

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-4">
        {links.map((link) => (
          <div key={link.name} className="rounded-lg border border-ink/10 p-5">
            <h3 className="font-serif font-semibold text-brand-darker">{link.name}</h3>
            <p className="text-sm text-ink/60 mt-1">{link.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
