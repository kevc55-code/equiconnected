import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { primaryNav } from '@/lib/nav'

const tabs = primaryNav.find((i) => i.label === 'Natural Care')!.children!

export const metadata = { title: 'Natural Trimming' }

export default function NaturalTrimmingPage() {
  return (
    <div>
      <PageHero
        title="Natural Trimming"
        intro="A holistic hoof care program built on the model of the wild horse."
      />
      <SubNav items={tabs} active="/natural-care/natural-trimming" />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <blockquote className="border-l-4 border-brand pl-5 italic text-ink-soft font-serif text-lg leading-relaxed">
          &ldquo;It&apos;s important to understand that wild horses and all domestic horses, wherever they are
          found, are in fact all Equus caballus. What applies in nature also applies to horses bred by
          humans. The only difference between them lies in the nature of their experience.&rdquo;
          <footer className="mt-2 text-sm not-italic font-sans text-ink/50">— Jaime Jackson</footer>
        </blockquote>

        <div className="prose-body">
          <p>
            Natural Hoof Care (NHC) offers a holistic hoof care program designed to achieve optimal hooves
            health and longevity within a natural boarding environment, such as the{' '}
            <strong>Paddock Paradise (PP)</strong>, a unique monitoring system. A PP mimics the horse&apos;s
            natural lifestyle, including its hooves.
          </p>
          <p>
            Recommendations for natural horse boarding follow the model of the wild horse. A horse&apos;s
            health is reflected in its hooves, and optimal results can only be achieved by naturalizing our
            horses&apos; lives by providing them with a &ldquo;reasonably natural diet,&rdquo; much like they
            forage in the wild. This means avoiding foods and medications—which disrupt their rather delicate
            digestive system—that are directly responsible for colic and laminitis, as well as riding and
            training methods that are harmful because they violate the horse&apos;s natural gaits.
          </p>

          <h2 className="font-serif text-2xl font-semibold mt-8 mb-2">Good to know</h2>
          <h3 className="font-semibold text-ink mb-2">The importance of a bare hoof — the mechanism</h3>
          <p>
            When a horse places its hoof on the ground, the conical wall of the hoof expands; when it lifts,
            the hoof returns to its closed shape. This expansion and compression act like a pump, a
            phenomenon known as the &ldquo;hoof mechanism.&rdquo; Blood is thus pumped through the hoof,
            which is crucial for the blood supply throughout the horse&apos;s leg, all the way to the heart,
            ensuring its longevity.
          </p>
          <p>
            The hoof is very important for a horse. That&apos;s why it has a very good blood supply. The
            growth, maintenance, and healing of all hoof tissues depend heavily on a continuous supply of
            nutrients via the blood.
          </p>
          <p>It is estimated that approximately one liter of blood is pumped through the hooves in five stages.</p>

          <h3 className="font-semibold text-ink mb-2 mt-6">
            Blood supply to the hoof is severely disrupted in many domestic horses due to
          </h3>
          <ul>
            <li>
              <strong>A lack of exercise.</strong> The hoof mechanism only functions when the horse is
              walking (barefoot). When a horse is immobile, there is no pumping action, and waste/toxins
              carried by the lymphatic system are virtually eliminated. Wild horses never remain immobile for
              long periods, unlike stable horses.
            </li>
            <li>
              <strong>An incorrect hoof shape.</strong> Horses are often trimmed into a shape that
              doesn&apos;t correspond to what nature intended. Almost any deviation from the hoof&apos;s
              natural shape disrupts its function.
            </li>
          </ul>
        </div>

        <ImagePlaceholder caption="Barefoot trim in progress" ratio="aspect-[16/8]" />
      </div>
    </div>
  )
}
