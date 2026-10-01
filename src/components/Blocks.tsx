import Link from 'next/link'
import SmartImage from './SmartImage'
import QuoteCard from './QuoteCard'
import Galleries from './Galleries'
import VideoEmbed from './VideoEmbed'
import { Markdown } from '@/lib/markdown'
import { getDictionary } from '@/lib/dictionary'
import type { Block } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  const t = getDictionary(locale)

  switch (block.type) {
    case 'text':
      return (
        <div className="prose-body">
          {block.heading ? <h2 className="font-serif text-2xl font-semibold mb-3">{block.heading}</h2> : null}
          <Markdown body={block.body} />
        </div>
      )
    case 'split': {
      const image = <SmartImage image={block.image} />
      const text = (
        <div className="prose-body">
          {block.heading ? <h2 className="font-serif text-2xl font-semibold mb-3">{block.heading}</h2> : null}
          <Markdown body={block.body} />
        </div>
      )
      return (
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {block.imageSide === 'right' ? (
            <>
              {text}
              {image}
            </>
          ) : (
            <>
              {image}
              {text}
            </>
          )}
        </div>
      )
    }
    case 'image':
      return <SmartImage image={block.image} />
    case 'quotes':
      return (
        <div className="grid sm:grid-cols-2 gap-6">
          {block.items.map((q) => (
            <QuoteCard key={q.eyebrow} eyebrow={q.eyebrow} lines={q.lines} />
          ))}
        </div>
      )
    case 'blockquote':
      return (
        <blockquote className="border-l-4 border-brand pl-5 italic text-ink-soft font-serif text-lg leading-relaxed">
          &ldquo;{block.text}&rdquo;
          {block.author ? (
            <footer className="mt-2 text-sm not-italic font-sans text-ink/50">— {block.author}</footer>
          ) : null}
        </blockquote>
      )
    case 'cards':
      return (
        <div>
          {block.heading ? (
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">{block.heading}</h2>
          ) : null}
          <div className="grid sm:grid-cols-2 gap-6">
            {block.items.map((card) => {
              const inner = (
                <>
                  <h3 className="font-serif text-xl font-semibold text-brand-darker mb-2">{card.title}</h3>
                  <div className="text-sm text-ink/70 leading-relaxed [&_p]:mb-2">
                    <Markdown body={card.body} />
                  </div>
                  {card.href ? (
                    <span className="inline-block mt-4 text-sm font-semibold text-brand-dark">
                      {t.readMore} &rarr;
                    </span>
                  ) : null}
                </>
              )
              return card.href ? (
                <Link
                  key={card.title}
                  href={`/${locale}${card.href}`}
                  className="block rounded-lg border border-ink/10 p-6 hover:border-brand hover:shadow-md transition-all"
                >
                  {inner}
                </Link>
              ) : (
                <div key={card.title} className="rounded-lg border border-ink/10 p-6">
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      )
    case 'video':
      return <VideoEmbed label={block.label} url={block.url} locale={locale} />
    case 'team':
      return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {block.members.map((member) => (
            <div key={member.name} className="rounded-lg border border-ink/10 p-6 text-center">
              {member.image?.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.image.src}
                  alt={member.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover mb-3"
                />
              ) : (
                <div className="mx-auto h-16 w-16 rounded-full bg-brand-light mb-3" />
              )}
              <h3 className="font-serif font-semibold">{member.name}</h3>
              <p className="text-xs uppercase tracking-wide text-brand-dark mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      )
    case 'events':
      return (
        <div>
          <div className="space-y-4">
            {block.items.map((e) => (
              <div
                key={e.title + e.day}
                className="grid grid-cols-[64px_1fr_auto] gap-5 items-center rounded-lg border border-ink/10 p-5"
              >
                <div className="bg-brand-darker rounded-md text-center py-3">
                  <div className="font-serif text-2xl font-semibold text-white leading-none">{e.day}</div>
                  <div className="text-[10px] uppercase tracking-wide text-white/60 mt-1">{e.month}</div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-ink/60">{e.detail}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide bg-brand-light text-brand-darker px-3 py-1 rounded-full">
                  {e.status}
                </span>
              </div>
            ))}
          </div>
          {block.note ? <p className="text-sm text-ink/50 mt-8">{block.note}</p> : null}
        </div>
      )
    case 'galleries':
      return (
        <Galleries
          items={block.items.map((g) => ({ title: g.title, photos: (g.photos ?? []).filter((p) => p?.src) }))}
          viewLabel={block.viewLabel}
          locale={locale}
        />
      )
    case 'highlight':
      return (
        <div className="prose-body bg-brand-pale rounded-lg p-8">
          {block.heading ? <h2 className="font-serif text-2xl font-semibold mb-3">{block.heading}</h2> : null}
          <Markdown body={block.body} />
        </div>
      )
    default:
      return null
  }
}

export default function Blocks({ blocks, locale }: { blocks: Block[]; locale: Locale }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} locale={locale} />
      ))}
    </div>
  )
}
