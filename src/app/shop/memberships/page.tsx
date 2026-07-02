import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { secondaryNav } from '@/lib/nav'

const tabs = secondaryNav.find((i) => i.label === 'Shop')!.children!

export const metadata = { title: 'Online Memberships' }

export default function MembershipsPage() {
  return (
    <div>
      <PageHero title="Online Memberships" intro="Join EquiConnected and support our mission year-round." />
      <SubNav items={tabs} active="/shop/memberships" />

      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>
          Becoming a member helps fund our work across natural care, horsemanship, Mountain Trail, Paddock
          Paradise consulting, and equine-assisted coaching. Members receive priority booking on workshops
          and are kept up to date through our newsletter.
        </p>
        <p>Membership renewal and sign-up is handled online — use the newsletter form below to get in touch and we&apos;ll send you the current membership options.</p>
      </div>
    </div>
  )
}
