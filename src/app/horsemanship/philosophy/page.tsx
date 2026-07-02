import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Horsemanship')!.children!

export const metadata = { title: 'Horsemanship — Philosophy' }

export default function HorsemanshipPhilosophyPage() {
  return (
    <div>
      <PageHero title="EquiConnected Horsemanship — listening above all" />
      <SubNav items={tabs} active="/horsemanship/philosophy" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose-body">
          <p>
            The EquiConnected Horsemanship relationship is a deep and sincere connection between horse and
            human, based on awareness, trust, presence, and genuine understanding.{' '}
            <strong>Connection comes before training!</strong>
          </p>
          <p>
            It is <strong>the art of listening to the horse&apos;s silent language,</strong> respecting its
            nature, and creating a <strong>relationship based on mutual trust</strong> where both feel safe.
          </p>
          <p>
            The EquiConnected Horsemanship relationship is not about control or obedience, but about
            awareness, communication with gentleness, clarity, and intention. It involves ethical exchanges
            with the horse that invite us to slow down, connect with ourselves, and encounter the horse
            authentically. In turn, the horse reflects our emotions, teaches us patience, and guides us
            toward a more grounded and compassionate way of interacting.
          </p>
          <p>And that&apos;s where the joy of understanding each other well is born.</p>
        </div>
        <ImagePlaceholder caption="Groundwork session" />

        <div className="prose-body md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold mb-3">
            Support and coaching for humans and horses, with a view to a balanced partnership
          </h2>
          <p>
            At EquiConnected, the well-being of both horses and humans is our top priority. Our goal is
            holistic, interspecies well-being. Indeed, your emotional state is felt by the horse long before
            you come into contact with it, and its emotional state—due to its living conditions—will impact
            its ability to give you its best.
          </p>
          <p>
            Our trained team offers Horsemanship relationship coaching. Horses are excellent barometers,
            providing accurate (uncalculated) feedback in the present moment, without judgment. During
            sessions, we listen to the horse, as it will suggest ways to improve a situation. With our horses
            or yours, we strive to foster your relationship with them.
          </p>
          <p>We offer support both internally and on your site within a maximum radius of 30 km.</p>
        </div>
      </div>
    </div>
  )
}
