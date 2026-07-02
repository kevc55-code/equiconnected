import PageHero from '@/components/PageHero'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    title: 'Licenses',
    p1: 'Information about membership licenses and affiliations, including MTHA France.',
  },
  fr: {
    title: 'Licences',
    p1: "Informations sur les licences d'adhésion et les affiliations, dont MTHA France.",
  },
  de: {
    title: 'Lizenzen',
    p1: 'Informationen zu Mitgliedschaftslizenzen und Verbandszugehörigkeiten, einschließlich MTHA France.',
  },
} satisfies Record<Locale, unknown>

export default function LicensesPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  return (
    <div>
      <PageHero title={c.title} />
      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>{c.p1}</p>
      </div>
    </div>
  )
}
