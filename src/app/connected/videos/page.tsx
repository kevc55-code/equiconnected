import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { secondaryNav } from '@/lib/nav'

const tabs = secondaryNav.find((i) => i.label === 'Connected')!.children!

export const metadata = { title: 'Videos' }

export default function VideosPage() {
  return (
    <div>
      <PageHero title="Videos" />
      <SubNav items={tabs} active="/connected/videos" />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="aspect-video rounded-lg bg-ink flex items-center justify-center text-white/60 text-sm text-center px-6">
          &ldquo;What They LOVE That Humans Ignore&rdquo; — Inside Horses
        </div>
      </div>
    </div>
  )
}
