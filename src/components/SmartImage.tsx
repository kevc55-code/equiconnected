import ImagePlaceholder from './ImagePlaceholder'
import type { Img } from '@/lib/content'

// Renders a real photo when the CMS has one, otherwise the styled placeholder.
export default function SmartImage({ image, className = '' }: { image: Img; className?: string }) {
  const ratio = image.ratio || 'aspect-[4/3]'
  if (!image.src) {
    return <ImagePlaceholder caption={image.caption} ratio={ratio} className={className} />
  }
  return (
    <figure className={className}>
      <div className={`${ratio} w-full rounded-lg overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} alt={image.caption || ''} className="w-full h-full object-cover" />
      </div>
      {image.caption ? <figcaption className="mt-2 text-sm text-ink/60">{image.caption}</figcaption> : null}
    </figure>
  )
}
