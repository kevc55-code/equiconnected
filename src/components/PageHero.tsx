export default function PageHero({
  title,
  intro,
}: {
  title: string
  intro?: string
}) {
  return (
    <div className="bg-gradient-to-br from-brand-darker to-brand-dark px-6 py-14 text-center">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white italic">{title}</h1>
      {intro ? (
        <p className="mt-4 max-w-2xl mx-auto text-white/80 text-sm md:text-base leading-relaxed">
          {intro}
        </p>
      ) : null}
    </div>
  )
}
