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
const controllerSource = read('packages/core/src/theme/controller.ts')
const configSource = read('packages/core/src/theme/config.ts')
const themeContractErrors = []

if (!controllerSource.includes("export const THEME_MODES = ['light', 'dark', 'system']")) themeContractErrors.push('ThemeMode runtime contract is missing')
if (controllerSource.includes('setItem(LEGACY_THEME_STORAGE_KEY')) themeContractErrors.push('controller still writes the legacy storage key')
if (!controllerSource.includes('storage?.setItem(key, legacyMode)')) themeContractErrors.push('legacy storage migration is missing')
for (const api of ['applyCSSTheme()', 'toggleDarkMode()', 'isDarkMode()']) {
  if (!configSource.includes(`warnThemeDeprecation('${api}'`)) themeContractErrors.push(`${api} has no deprecation warning`)
}
if (!controllerSource.includes("warnThemeDeprecation('createThemeManager()'")) themeContractErrors.push('createThemeManager() has no deprecation warning')
for (const framework of ['vue', 'react']) {
  const provider = read(`packages/${framework}/src/${framework === 'vue' ? 'ThemeVUE.ts' : 'ThemeReact.tsx'}`)
  const story = `packages/${framework}/stories/ThemeContract.stories.${framework === 'vue' ? 'js' : 'jsx'}`
  if (!provider.includes('createThemeController')) themeContractErrors.push(`${framework} provider bypasses the shared controller`)
  if (!fs.existsSync(path.join(root, story))) themeContractErrors.push(`${framework} theme contract story is missing`)
}
const recommendedDocs = ['docs/guide/theming.md', 'docs/guide/usage.md', 'docs/guide/installation.md'].map(read).join('\n')
if (!recommendedDocs.includes('ThemeProvider') || !recommendedDocs.includes('useTheme')) themeContractErrors.push('recommended theme documentation is incomplete')
if (/toggleDarkMode\s*\(/.test(recommendedDocs)) themeContractErrors.push('recommended documentation still calls toggleDarkMode()')

if (missing.length || invalidEntries.length || primitiveModeOverrides.length || incompleteDarkMode.length || themeContractErrors.length) {
  if (missing.length) console.error('Undefined component tokens:', missing.join(', '))
  if (invalidEntries.length) console.error('Framework theme entry is not thin:', invalidEntries.join(', '))
  if (primitiveModeOverrides.length) console.error('Mode layer redefines stable primitive tokens.')
  if (incompleteDarkMode.length) console.error('Dark mode misses semantic mappings:', incompleteDarkMode.join(', '))
  if (themeContractErrors.length) console.error('Theme API contract errors:', themeContractErrors.join(', '))
  process.exit(1)
}

console.log(`Theme contract OK: ${usages.size} component token usages, ${defaultModeTokens.size} mode tokens, one Provider model, migrated storage.`)
