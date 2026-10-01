// Builds what GitHub Pages publishes, into site/:
//   site/                  the public site (coming-soon page while the
//                          "Site en construction" switch is on)
//   site/<PREVIEW_PATH>/   the full site, always, for the team to review
// The preview path is unlisted and marked noindex — not secret, since this
// repository is public, but not linked or findable through search engines.
import { execSync } from 'node:child_process'
import { cp, rm, rename, writeFile } from 'node:fs/promises'

export const PREVIEW_PATH = 'apercu-2d108495'

const run = (env = {}) =>
  execSync('npm run build', { stdio: 'inherit', env: { ...process.env, ...env } })

await rm('site', { recursive: true, force: true })

run({ NEXT_PUBLIC_BASE_PATH: '' })
await rename('out', 'site')

run({ NEXT_PUBLIC_BASE_PATH: `/${PREVIEW_PATH}` })
// The preview only needs its pages and assets: images, icon and the 404 page
// are served from the public site's root.
for (const file of ['CNAME', 'images', 'icon.svg', '404.html', 'robots.txt', 'sitemap.xml']) {
  await rm(`out/${file}`, { recursive: true, force: true })
}
// Entry page of the preview: go to the French preview home.
await writeFile(
  'out/index.html',
  `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="robots" content="noindex">` +
    `<meta http-equiv="refresh" content="0; url=/${PREVIEW_PATH}/fr/"><title>Aperçu — EquiConnected</title></head>` +
    `<body><a href="/${PREVIEW_PATH}/fr/">Aperçu du site</a></body></html>\n`,
)
await cp('out', `site/${PREVIEW_PATH}`, { recursive: true })
await rm('out', { recursive: true, force: true })

console.log(`build-site: public site in site/, full preview in site/${PREVIEW_PATH}/`)
