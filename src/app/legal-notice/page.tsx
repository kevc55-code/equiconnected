import PageHero from '@/components/PageHero'

export const metadata = { title: 'Legal Notice' }

export default function LegalNoticePage() {
  return (
    <div>
      <PageHero title="Legal Notice" />
      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>EquiConnected is an association founded in October 2025, promoting harmonious relationships between horses and humans.</p>
        <p>For any legal inquiries, please reach out via our contact page.</p>
      </div>
    </div>
  )
}
