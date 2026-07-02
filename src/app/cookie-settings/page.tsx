import PageHero from '@/components/PageHero'

export const metadata = { title: 'Cookie Settings' }

export default function CookieSettingsPage() {
  return (
    <div>
      <PageHero title="Cookie Settings" />
      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>This site uses cookies only for essential site functionality. No tracking cookies are set.</p>
      </div>
    </div>
  )
}
