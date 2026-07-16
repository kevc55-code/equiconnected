import type { ReactNode } from 'react'

// Minimal markdown: paragraphs separated by blank lines, "- " list items,
// **bold**, *italic*, and [text](url) links. Enough for CMS-edited body
// text without a dependency.
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const [, label, href] = link
      const external = /^https?:\/\//.test(href)
      return (
        <a
          key={i}
          href={href}
          className="text-brand-dark underline hover:text-brand-darker"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      )
    }
    return part
  })
}

export function Markdown({ body }: { body: string }) {
  const chunks = body.split(/\n{2,}/).map((c) => c.trim()).filter(Boolean)
  return (
    <>
      {chunks.map((chunk, i) => {
        const lines = chunk.split('\n')
        if (lines.every((l) => l.startsWith('- '))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.slice(2))}</li>
              ))}
            </ul>
          )
        }
        return <p key={i}>{renderInline(chunk)}</p>
      })}
    </>
  )
}
