import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const frameworkRoots = {
  vue: join(root, 'packages/vue/src/components'),
  react: join(root, 'packages/react/src/components')
}

const componentNames = readdirSync(frameworkRoots.vue, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()

const count = (source, expression) => source.match(expression)?.length ?? 0
const readStyle = (framework, component) =>
  readFileSync(join(frameworkRoots[framework], component, 'style.css'), 'utf8')

const rows = componentNames.map((component) => {
  const vue = readStyle('vue', component)
  const react = readStyle('react', component)

  return {
    component,
    parity: vue === react,
    colors: count(vue, /#[\da-f]{3,8}\b|rgba?\(/gi),
    themeBranches: count(vue, /\.dark\b|prefers-color-scheme/g),
    borders: count(vue, /\bborder(?:-(?:top|right|bottom|left))?\s*:/g),
    shadows: count(vue, /\bbox-shadow\s*:/g)
  }
})

const totals = rows.reduce(
  (result, row) => ({
    parityMismatches: result.parityMismatches + Number(!row.parity),
    colors: result.colors + row.colors,
    themeBranches: result.themeBranches + row.themeBranches,
    borders: result.borders + row.borders,
    shadows: result.shadows + row.shadows
  }),
  { parityMismatches: 0, colors: 0, themeBranches: 0, borders: 0, shadows: 0 }
)

console.table(rows)
console.log(`Components: ${rows.length}`)
console.log(`Vue/React style mismatches: ${totals.parityMismatches}`)
console.log(`Hardcoded color expressions: ${totals.colors}`)
console.log(`Component theme branches: ${totals.themeBranches}`)
console.log(`Border declarations: ${totals.borders}`)
console.log(`Shadow declarations: ${totals.shadows}`)
