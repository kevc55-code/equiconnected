export default function QuoteCard({
  eyebrow,
  lines,
}: {
  eyebrow: string
  lines: string[]
}) {
  return (
    <div className="rounded-lg border border-ink/10 bg-[#f6f2e9] p-6 flex flex-col justify-center min-h-[220px]">
      <span className="inline-block self-start rounded bg-brand-darker px-3 py-1 text-xs font-semibold text-white mb-4">
        {eyebrow}
      </span>
      <div className="space-y-3">
        {lines.map((line, i) => (
          <p key={i} className="font-serif italic text-ink-soft text-lg leading-snug">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
