// Checks that the French, English and German versions of every page have the
// same structure. Photos and layout are set once in the French section and
// shared with the other languages by block position, so the three languages
// must have the same blocks, in the same order, with the same number of
// items (cards, team members, events, galleries...).
//
// Run by `npm run build:site` before every build. A mismatch stops the
// deploy, so the live site stays on its last good version, and the person
// who saved gets GitHub's failed-run email with the report below.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2] ?? 'content'
const LANGS = ['fr', 'en', 'de']
const NAMES = { fr: 'français', en: 'anglais', de: 'allemand' }
const LIST_KEY = { cards: 'items', quotes: 'items', events: 'items', galleries: 'items', team: 'members' }
const problems = []

function report(file, label, fr, en) {
  problems.push({ file, label, fr, en })
}

for (const file of readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'settings.json').sort()) {
  const data = JSON.parse(readFileSync(join(dir, file), 'utf8'))
  const label = data.label || file
  const missing = LANGS.filter((l) => !data[l])
  if (missing.length) {
    report(file, label, `Section manquante : ${missing.map((l) => NAMES[l]).join(', ')}.`, `Missing section: ${missing.join(', ')}.`)
    continue
  }
  const base = data.fr.blocks ?? []
  for (const lang of ['en', 'de']) {
    const blocks = data[lang].blocks ?? []
    if (blocks.length !== base.length) {
      report(
        file,
        label,
        `Le français a ${base.length} bloc(s), ${NAMES[lang]} en a ${blocks.length}. Ajoutez ou supprimez le même bloc, à la même place, dans les trois langues.`,
        `French has ${base.length} block(s), ${lang} has ${blocks.length}. Add or remove the same block, in the same position, in all three languages.`,
      )
      continue
    }
    base.forEach((block, i) => {
      const other = blocks[i]
      if (block.type !== other.type) {
        report(
          file,
          label,
          `Bloc n°${i + 1} : « ${block.type} » en français mais « ${other.type} » en ${NAMES[lang]}. L'ordre des blocs doit être identique.`,
          `Block #${i + 1}: "${block.type}" in French but "${other.type}" in ${lang}. Blocks must be in the same order.`,
        )
        return
      }
      // Only block types that really use a list are compared; the CMS form
      // can leave stray empty lists on other block types, which are ignored.
      const listKey = LIST_KEY[block.type]
      for (const key of listKey ? [listKey] : []) {
        const a = block[key]?.length ?? 0
        const b = other[key]?.length ?? 0
        if (a !== b) {
          report(
            file,
            label,
            `Bloc n°${i + 1} (${block.type}) : ${a} élément(s) en français, ${b} en ${NAMES[lang]} (${key}). Même nombre, même ordre.`,
            `Block #${i + 1} (${block.type}): ${a} item(s) in French, ${b} in ${lang} (${key}). Same count, same order.`,
          )
        }
      }
    })
  }
}

if (problems.length === 0) {
  console.log(`check-content: les trois langues ont la même structure / all three languages line up.`)
  process.exit(0)
}

console.error('\ncheck-content: les langues ne sont pas alignées / languages are out of step\n')
for (const p of problems) {
  console.error(`  ✗ ${p.label} (${p.file})\n      ${p.fr}\n      ${p.en}\n`)
  if (process.env.GITHUB_ACTIONS) {
    console.error(`::error file=${join(dir, p.file).replace(/\\/g, '/')},title=Langues non alignées / Languages out of step::${p.fr} — ${p.en}`)
  }
}
console.error(
  'Le site en ligne reste inchangé tant que ce n\'est pas corrigé. / The live site stays unchanged until this is fixed.\n' +
    'Corrigez la page dans le CMS puis enregistrez de nouveau. / Fix the page in the CMS, then save again.\n',
)
process.exit(1)
