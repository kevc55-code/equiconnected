import Logo from './Logo'

export default function ImagePlaceholder({
  caption,
  className = '',
  ratio = '4/3',
}: {
  caption?: string
  className?: string
  ratio?: string
}) {
  return (
    <figure className={className}>
      <div
        style={{ aspectRatio: ratio }}
        className="w-full rounded-lg bg-gradient-to-br from-brand-light via-emerald-100 to-brand-light border border-brand/20 flex flex-col items-center justify-center gap-2 text-brand-darker/50"
      >
        <Logo className="h-10 w-10" />
        <span className="text-xs font-medium tracking-wide uppercase">Photo</span>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-ink/60">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
