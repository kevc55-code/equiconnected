import Link from 'next/link'

// Static-export friendly redirect: next/navigation's redirect() only works
// with JavaScript, so section index pages render a meta refresh plus a link.
export default function RedirectPage({ to }: { to: string }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <meta httpEquiv="refresh" content={`0; url=${to}/`} />
      <Link href={to} className="text-brand-dark underline">
        {to}
      </Link>
    </div>
  )
}
