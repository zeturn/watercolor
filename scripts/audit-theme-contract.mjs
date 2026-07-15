import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const coreFiles = [
  'packages/core/src/styles/primitives.css',
  'packages/core/src/styles/semantic.css',
  'packages/core/src/styles/modes.css',
]
const coreCss = coreFiles.map(read).join('\n')
const componentCss = fs.readdirSync(path.join(root, 'packages/vue/src/components'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(root, 'packages/vue/src/components', entry.name, 'style.css'))
  .filter(fs.existsSync)
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n')

const definitions = new Set([...coreCss.matchAll(/(--wc-[\w-]+)\s*:/g)].map((match) => match[1]))
const usages = new Set([...componentCss.matchAll(/var\((--wc-[\w-]+)/g)].map((match) => match[1]))
const componentLocalPrefixes = [
  '--wc-alert-', '--wc-appbar-', '--wc-avatar-', '--wc-badge-', '--wc-banner-',
  '--wc-blockquote-', '--wc-button-', '--wc-card-', '--wc-checkbox-', '--wc-chip-',
  '--wc-circular-', '--wc-copy-', '--wc-divider-', '--wc-grid-', '--wc-pagination-',
  '--wc-paper-', '--wc-radio-', '--wc-slider-', '--wc-snackbar-', '--wc-status-', '--wc-switch-',
]
const missing = [...usages].filter((token) =>
  !definitions.has(token) && !componentLocalPrefixes.some((prefix) => token.startsWith(prefix)),
)

const frameworkEntries = [
  'packages/vue/src/styles/index.css',
  'packages/react/src/styles/index.css',
]
const invalidEntries = frameworkEntries.filter((file) =>
  read(file).trim() !== "@import '@zeturn/watercolor-core/theme.css';",
)
const modeCss = read('packages/core/src/styles/modes.css')
const primitiveModeOverrides = [...modeCss.matchAll(/--wc-(?:primary|secondary|neutral|success|warning|error|info|purple|pink|teal|indigo|orange|cyan)-\d+\s*:/g)]
const defaultModeTokens = new Set([...read('packages/core/src/styles/semantic.css').matchAll(/(--wc-mode-[\w-]+)\s*:/g)].map((match) => match[1]))
const darkBlock = modeCss.match(/\[data-theme='dark'\][^{]*\{([^}]*)\}/s)?.[1] ?? ''
const darkModeTokens = new Set([...darkBlock.matchAll(/(--wc-mode-[\w-]+)\s*:/g)].map((match) => match[1]))
const incompleteDarkMode = [...defaultModeTokens].filter((token) => !darkModeTokens.has(token))

if (missing.length || invalidEntries.length || primitiveModeOverrides.length || incompleteDarkMode.length) {
  if (missing.length) console.error('Undefined component tokens:', missing.join(', '))
  if (invalidEntries.length) console.error('Framework theme entry is not thin:', invalidEntries.join(', '))
  if (primitiveModeOverrides.length) console.error('Mode layer redefines stable primitive tokens.')
  if (incompleteDarkMode.length) console.error('Dark mode misses semantic mappings:', incompleteDarkMode.join(', '))
  process.exit(1)
}

console.log(`Theme contract OK: ${usages.size} component token usages are defined; ${defaultModeTokens.size} mode tokens are complete; framework CSS has one source.`)
