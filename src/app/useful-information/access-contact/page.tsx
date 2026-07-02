import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ContactForm from '@/components/ContactForm'
import { secondaryNav } from '@/lib/nav'

const tabs = secondaryNav.find((i) => i.label === 'Useful Information')!.children!

export const metadata = { title: 'Access & Contact' }

export default function AccessContactPage() {
  return (
    <div>
      <PageHero title="Access & Contact" intro="We offer support both on-site and at your location within a 30 km radius." />
      <SubNav items={tabs} active="/useful-information/access-contact" />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <ContactForm />
      </div>
    </div>
  )
}
