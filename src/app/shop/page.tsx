import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import Logo from '@/components/Logo'
import { secondaryNav } from '@/lib/nav'

const tabs = secondaryNav.find((i) => i.label === 'Shop')!.children!

export const metadata = { title: 'Shop' }

export default function ShopPage() {
  return (
    <div>
      <PageHero title="Shop" intro="Support the association and its mission." />
      <SubNav items={tabs} active="/shop" />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="max-w-xs rounded-lg border border-ink/10 overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-square bg-brand-light flex items-center justify-center text-brand">
            <Logo className="h-24 w-24" />
          </div>
          <div className="p-4">
            <p className="text-sm font-medium">
              Support an association valorizing the human-horse relationship
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
