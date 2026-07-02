import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import Logo from '@/components/Logo'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'The Team',
    heroIntro: 'The people behind EquiConnected.',
    team: [
      { name: 'Myriam Hertzog', role: 'Co-President' },
      { name: 'Erika Ver Berne', role: 'Co-President' },
      { name: 'Virginie Tièche', role: 'Secretary' },
      { name: 'Xavier Wittig', role: 'Treasurer' },
      { name: 'Agnès Gamp', role: 'Assessor' },
      { name: 'Laure Flota', role: 'Social Media' },
    ],
  },
  fr: {
    heroTitle: "L'Équipe",
    heroIntro: "Les personnes derrière EquiConnected.",
    team: [
      { name: 'Myriam Hertzog', role: 'Co-Présidente' },
      { name: 'Erika Ver Berne', role: 'Co-Présidente' },
      { name: 'Virginie Tièche', role: 'Secrétaire' },
      { name: 'Xavier Wittig', role: 'Trésorier' },
      { name: 'Agnès Gamp', role: 'Assesseure' },
      { name: 'Laure Flota', role: 'Réseaux sociaux' },
    ],
  },
  de: {
    heroTitle: 'Das Team',
    heroIntro: 'Die Menschen hinter EquiConnected.',
    team: [
      { name: 'Myriam Hertzog', role: 'Ko-Präsidentin' },
      { name: 'Erika Ver Berne', role: 'Ko-Präsidentin' },
      { name: 'Virginie Tièche', role: 'Schriftführerin' },
      { name: 'Xavier Wittig', role: 'Schatzmeister' },
      { name: 'Agnès Gamp', role: 'Beisitzerin' },
      { name: 'Laure Flota', role: 'Soziale Medien' },
    ],
  },
} satisfies Record<Locale, unknown>

export default function TeamPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/useful-information'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/useful-information/team`} />

      <div className="max-w-5xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {c.team.map((member) => (
          <div key={member.name} className="rounded-lg border border-ink/10 p-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-brand-light flex items-center justify-center text-brand mb-3">
              <Logo className="h-9 w-9" />
            </div>
            <h3 className="font-serif font-semibold">{member.name}</h3>
            <p className="text-xs uppercase tracking-wide text-brand-dark mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
