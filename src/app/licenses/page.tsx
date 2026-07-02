import PageHero from '@/components/PageHero'

export const metadata = { title: 'Licenses' }

export default function LicensesPage() {
  return (
    <div>
      <PageHero title="Licenses" />
      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>Information about membership licenses and affiliations, including MTHA France.</p>
      </div>
    </div>
  )
}
