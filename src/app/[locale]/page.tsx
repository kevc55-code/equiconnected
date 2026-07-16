import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import Blocks from '@/components/Blocks'
import SmartImage from '@/components/SmartImage'
import { getContent } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale, 'home')

  return (
    <div>
      <div className="relative">
        <ImagePlaceholder ratio="aspect-[16/7]" className="[&_figcaption]:hidden" />
        <div className="absolute inset-x-0 -bottom-6 flex flex-wrap justify-center gap-3 px-4">
          {(content.quickLinks ?? []).map((link) => (
            <Link
              key={link.href}
              href={`/${params.locale}${link.href}`}
              className="bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-brand py-6 mt-6 text-center">
        <p className="font-serif italic text-white text-xl md:text-2xl">{content.banner}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Blocks blocks={content.blocks} locale={params.locale} />
        {content.photos?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {content.photos.map((photo, i) => (
              <SmartImage key={i} image={photo} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
