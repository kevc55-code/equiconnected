import PageHero from '@/components/PageHero'

export const metadata = { title: 'Terms & Conditions' }

export default function TermsPage() {
  return (
    <div>
      <PageHero title="Terms & Conditions" />
      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>General terms and conditions of use and sale for EquiConnected events, workshops, and shop.</p>
      </div>
    </div>
  )
}
