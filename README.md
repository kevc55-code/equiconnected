# EquiConnected

Website for the EquiConnected association — promoting harmonious relationships between horses and humans through Paddock Paradise, natural care, horsemanship, Mountain Trail, and equine-assisted coaching.

Built with Next.js 14 (static export) + Tailwind CSS. Deployed on GitHub Pages at equiconnected.org by the workflow in `.github/workflows/deploy.yml`: every push to `master` triggers an automatic rebuild and deploy (~2 minutes). The custom domain is set in `public/CNAME` and in the repo's Settings → Pages.

## Editing the site content (no coding required)

All page text and photos live in the `content/` folder — one JSON file per page, with `en` / `fr` / `de` sections side by side. Editors use **[Pages CMS](https://app.pagescms.org)**, a free editing interface on top of this GitHub repository.

### One-time setup (site owner)

1. Create a free GitHub account for the editor (if they don't have one).
2. Add them as a collaborator on this repository: GitHub → Settings → Collaborators → Add people.
3. The editor signs in at **app.pagescms.org** with their GitHub account and selects this repository. The editing screens are defined by `.pages.yml` in this repo.

### Editing workflow

1. Sign in at app.pagescms.org and open the site.
2. Pick a page under **Site pages**, choose the language section (English / Français / Deutsch), and edit the text fields.
3. To add a photo, use the image field on a block — uploads land in `public/images/` and are referenced automatically.
4. Hit **Save**. This creates a commit; GitHub Actions rebuilds and the change is live in ~2 minutes.

Body text supports simple formatting: a blank line starts a new paragraph, lines starting with `- ` become bullet points, and `**bold**` makes text bold.

Anything structural — new pages, navigation changes, design tweaks — still needs a developer.

## Coming-soon mode and private preview

While **Réglages du site → Site en construction** is ticked in Pages CMS (`comingSoon` in `content/settings.json`), every public page shows a trilingual "coming soon" page and is marked noindex. The full site is always published at the unlisted preview address `https://equiconnected.org/apercu-2d108495/` (also noindex) so the team can review edits. Untick the box to launch.

The deploy runs `npm run build:site` (`scripts/build-site.mjs`), which builds the public site and the preview into `site/`.

## Development

```bash
npm install
npm run dev        # local dev server on :3000
npm run build      # static export to out/
npm run typecheck
```

- Routes live under `src/app/[locale]/` and render content from `content/*.json` via `src/lib/content.ts`.
- Page content is a list of typed blocks rendered by `src/components/Blocks.tsx` (text, split, image, quotes, blockquote, cards, video, team, events, galleries, highlight).
- Navigation labels and UI strings (buttons, footer) are code-owned: `src/lib/nav.ts` and `src/lib/dictionary.ts`.
- Languages: `fr` (default — the bare domain redirects there via `public/index.html`), `en`, `de` — set in `src/lib/i18n.ts`. Each locale is its own root layout (`src/app/[locale]/layout.tsx`) so `<html lang>` is correct.
- `npm run build` also runs `scripts/postbuild.mjs`: it shrinks photos wider than 2000px in `out/images` (originals untouched) and installs the trilingual 404 page from `scripts/404.html`.
- Page titles/descriptions come from each page's CMS hero via `src/lib/metadata.ts`; `sitemap.xml` and `robots.txt` are generated from the menus.

> Note: the French and German content started as AI translations of the English copy. Have a native speaker review before promoting those languages heavily.
