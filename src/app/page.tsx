import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const quickLinks = [
  { label: 'Horsemanship', href: '/horsemanship/philosophy' },
  { label: 'Mountain Trail', href: '/mountain-trail' },
  { label: 'Natural care', href: '/natural-care/natural-food' },
  { label: 'Paddock Paradise', href: '/paddock-paradise' },
]

const services = [
  {
    title: 'Equine-assisted coaching',
    href: '/equine-coaching/introduction',
    body: 'Horses are true masters of full presence, anchored in the here and now. As human beings, we often live in our heads, caught up in our thoughts, worries, and expectations. Working alongside horses helps us step out of the flow of our thoughts and reconnect with what truly matters.',
  },
  {
    title: 'Horsemanship',
    href: '/horsemanship/philosophy',
    body: 'A deep and sincere connection between horse and human, based on awareness, trust, presence, and genuine understanding. Connection comes before training — it is the art of listening to the horse’s silent language.',
  },
  {
    title: 'Mountain Trail',
    href: '/mountain-trail',
    body: 'Complicity and calmness in the movements of the rider/horse pair over natural and constructed obstacles encountered outdoors, practiced on the ground, mounted, accompanied, on a lead rope, bareback, without a bit.',
  },
  {
    title: 'Paddock Paradise',
    href: '/paddock-paradise',
    body: 'A natural horse management system based on tracks, designed to replicate how horses live and move in the wild — supporting healthier hooves, improved fitness, mental stimulation, and natural social behavior.',
  },
]

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <ImagePlaceholder ratio="aspect-[16/7]" className="[&_figcaption]:hidden" />
        <div className="absolute inset-x-0 -bottom-6 flex flex-wrap justify-center gap-3 px-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-brand py-6 mt-6 text-center">
        <p className="font-serif italic text-white text-xl md:text-2xl">
          Listening to the horse above all
        </p>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <ImagePlaceholder caption="Horses resting in the shelter" ratio="aspect-[21/9]" />
      </section>

      <section className="bg-brand-pale">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
          <div className="prose-body">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Our approach</span>
            <h2 className="font-serif text-3xl font-semibold mt-1 mb-4">Base line</h2>
            <p>
              <strong>The EquiConnected</strong> association was founded in October 2025. Its main goal is to
              promote <strong>harmonious relationships between horses and humans</strong>. Indeed, what rider
              hasn&apos;t dreamed of getting along with their horse to the point of becoming one with their mount?
            </p>
            <p>
              Our respective journeys left us wanting more in the area of connecting with animals, so we
              observed horses a lot, opened our minds to other possibilities by drawing inspiration from the
              connection some people have with their horses in freedom and, above all, by experiencing the
              immense joy that this new approach provides.
            </p>
            <p>
              Clearly, the horse deserves to be better understood as a sensitive animal. It has much to teach
              us if we know how to listen to it.
            </p>
            <p>
              To do this we were inspired by <strong>Maslow&apos;s famous pyramid</strong>, which we adapted{' '}
              <strong>for horses.</strong>
            </p>
            <p>
              Our support is geared towards this goal, by meeting the fundamental needs of horses, enabling
              them to be available for harmonious interspecies relationships such as:
            </p>
            <ul>
              <li>Equine-assisted coaching</li>
              <li>Horsemanship</li>
              <li>Mountain Trail</li>
            </ul>
            <p>
              The <strong>horse</strong> is housed and cared for <strong>naturally.</strong>
            </p>
          </div>
          <div className="space-y-6">
            <ImagePlaceholder caption="A horse resting under the trees" />
            <div className="aspect-video rounded-lg bg-ink flex items-center justify-center text-white/60 text-sm">
              Video: &ldquo;What They LOVE That Humans Ignore&rdquo; — Inside Horses
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold mb-8 text-center">Our support services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block rounded-lg border border-ink/10 p-6 hover:border-brand hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-xl font-semibold text-brand-darker mb-2">{service.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{service.body}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-brand-dark">Read more &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
