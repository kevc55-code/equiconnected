import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import Logo from '@/components/Logo'
import { secondaryNav } from '@/lib/nav'

const tabs = secondaryNav.find((i) => i.label === 'Useful Information')!.children!

const team = [
  { name: 'Myriam Hertzog', role: 'Co-President' },
  { name: 'Erika Ver Berne', role: 'Co-President' },
  { name: 'Virginie Tièche', role: 'Secretary' },
  { name: 'Xavier Wittig', role: 'Treasurer' },
  { name: 'Agnès Gamp', role: 'Assessor' },
  { name: 'Laure Flota', role: 'Social Media' },
]

export const metadata = { title: 'The Team' }

export default function TeamPage() {
  return (
    <div>
      <PageHero title="The Team" intro="The people behind EquiConnected." />
      <SubNav items={tabs} active="/useful-information/team" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member) => (
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
