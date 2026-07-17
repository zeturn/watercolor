import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const layoutPath = path.join(root, 'packages/core/src/styles/layout.css')
const layoutCss = fs.readFileSync(layoutPath, 'utf8')
const contractPath = path.join(root, 'packages/core/src/composition/index.ts')
const contract = fs.readFileSync(contractPath, 'utf8')
const forbidden = [
  ['color', /(?:^|[;{]\s*)color\s*:/gm],
  ['background', /background(?:-color)?\s*:/g],
  ['border', /border(?:-[\w-]+)?\s*:/g],
  ['radius', /border-radius\s*:/g],
  ['shadow', /box-shadow\s*:/g],
]
const violations = forbidden.filter(([, expression]) => expression.test(layoutCss)).map(([name]) => name)
const primitives = ['Page', 'Stack', 'Inline', 'Split']
const missing = []
const mismatches = []
const contractErrors = []

const requiredContracts = [
  'COMPOSITION_GAPS', 'COMPOSITION_ALIGNS', 'PAGE_SIZES', 'PAGE_GUTTERS',
  'INLINE_JUSTIFY', 'SPLIT_RATIOS', 'SPLIT_COLLAPSE',
]
for (const name of requiredContracts) {
  if (!contract.includes(`export const ${name}`)) contractErrors.push(`missing ${name}`)
}

const optionList = (source, name) => source.match(new RegExp(`export const ${name} = (\\[[^\\n]+\\])`))?.[1]
for (const framework of ['vue', 'react']) {
  const frameworkContract = fs.readFileSync(path.join(root, `packages/${framework}/src/composition.ts`), 'utf8')
  for (const name of requiredContracts) {
    if (optionList(frameworkContract, name) !== optionList(contract, name)) {
      contractErrors.push(`${framework} ${name} differs from core`)
    }
  }
}

for (const primitive of primitives) {
  const vueStyle = path.join(root, 'packages/vue/src/components', primitive, 'style.css')
  const reactStyle = path.join(root, 'packages/react/src/components', primitive, 'style.css')
  if (!fs.existsSync(vueStyle) || !fs.existsSync(reactStyle)) {
    missing.push(primitive)
    continue
  }
  if (fs.readFileSync(vueStyle, 'utf8') !== fs.readFileSync(reactStyle, 'utf8')) mismatches.push(primitive)

  const vueSource = fs.readFileSync(path.join(root, 'packages/vue/src/components', primitive, `${primitive}.vue`), 'utf8')
  const reactSource = fs.readFileSync(path.join(root, 'packages/react/src/components', primitive, `${primitive}.jsx`), 'utf8')
  if (!vueSource.includes('PropType') || !vueSource.includes('validator:')) contractErrors.push(`${primitive} Vue props are not typed and validated`)
  if (!reactSource.includes('PropTypes.oneOf')) contractErrors.push(`${primitive} React props are not runtime validated`)
}

const vueModes = fs.readFileSync(path.join(root, 'packages/vue/.storybook/modes.js'), 'utf8')
const reactModes = fs.readFileSync(path.join(root, 'packages/react/.storybook/modes.js'), 'utf8')
if (vueModes !== reactModes) mismatches.push('Storybook modes')
for (const mode of ['light desktop', 'dark desktop', 'light mobile', 'dark mobile']) {
  if (!vueModes.includes(`'${mode}'`)) contractErrors.push(`missing visual mode ${mode}`)
}
for (const framework of ['vue', 'react']) {
  const recipes = fs.readFileSync(path.join(root, `packages/${framework}/stories/Recipes.stories.${framework === 'vue' ? 'js' : 'jsx'}`), 'utf8')
  if (!recipes.includes('chromatic: { modes: pageModes')) contractErrors.push(`${framework} recipes do not use the visual matrix`)
}

if (violations.length || missing.length || mismatches.length || contractErrors.length) {
  if (violations.length) console.error('Composition CSS contains visual styling:', violations.join(', '))
  if (missing.length) console.error('Missing cross-framework primitives:', missing.join(', '))
  if (mismatches.length) console.error('Primitive style parity failed:', mismatches.join(', '))
  if (contractErrors.length) console.error('Composition contract failed:', contractErrors.join(', '))
  process.exit(1)
}

console.log(`Composition layer OK: ${primitives.length} typed cross-framework primitives, no visual styling, 4 visual modes.`)
