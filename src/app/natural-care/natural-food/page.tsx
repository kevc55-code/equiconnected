import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import QuoteCard from '@/components/QuoteCard'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Natural Care')!.children!

export const metadata = { title: 'Natural Food' }

export default function NaturalFoodPage() {
  return (
    <div>
      <PageHero title="Natural Food" intro="Feeding in a way that respects the horse's natural digestive rhythm." />
      <SubNav items={tabs} active="/natural-care/natural-food" />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <QuoteCard
            eyebrow="Friends — Freedom — Forage"
            lines={[
              'The three pillars of equine well-being (even if that’s not always enough on its own).',
              'Without "Forage", the other two collapse. A horse deprived of food cannot be soothed, even surrounded by company or given freedom.',
            ]}
          />
          <ImagePlaceholder caption="Horses foraging together in the shade" />
        </div>

        <div className="prose-body">
          <h2 className="font-serif text-2xl font-semibold mb-3">Our approach to natural food and care</h2>
          <p>
            In the wild, horses graze for approximately 16 hours a day. Long periods without eating can
            disrupt their digestion, potentially leading to serious conditions such as ulcers or colic.
          </p>
          <p>
            They therefore need constant access to a primarily fibrous diet such as hay and straw, which can
            be enriched with leaves and bark from certain trees, for example. This is how their digestive
            system functions and promotes good intestinal health. A regular intake of fiber is essential for
            both their physical health and their overall well-being.
          </p>
          <p>
            We believe it&apos;s important to care for our horses&apos; health in the most natural way
            possible. Our approach focuses on <strong>natural nutrition</strong>, supplemented as needed by
            gentle, holistic treatments that work in harmony with the body. We use{' '}
            <strong>natural and organic supplements, herbs, and homeopathy</strong> to promote balance
            (parasite regulation), overall well-being, and even healing.
          </p>
          <p>
            We only use chemical medications when absolutely necessary, preferring to promote the well-being
            of our horses in a gentle, sustainable way, in harmony with nature. This natural approach helps
            our horses stay strong, balanced, and happy—just the way we like to see them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <QuoteCard
            eyebrow="It's more than feeding"
            lines={[
              'Eating is also about relaxing, staying occupied, interacting.',
              'A horse spends 14 to 18 hours a day chewing in its natural state.',
            ]}
          />
          <QuoteCard
            eyebrow="Rationing"
            lines={[
              'I don’t even know what "rationing" means. A horse doesn’t "gorge" on hay. It self-regulates... as long as it never runs out.',
              'Once it has experienced hunger, it eats quickly, out of fear of scarcity.',
            ]}
          />
        </div>
      </div>
    </div>
  )
}
