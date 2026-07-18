import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const frameworks = ['react', 'vue']
const components = ['AppBar', 'Autocomplete', 'List', 'PricingTable', 'Select', 'Table']

const allowedSelectorPatterns = [
  /:focus/,
  /--focus/,
  /--focused/,
  /--error/,
  /--outlined/,
  /--elevated/,
  /--elevation/,
  /--standard/,
  /--open/,
  /--drop-target/,
  /--divider/,
  /__dropdown/,
  /__popover/,
  /__menu/,
  /loading/i,
  /--loading/,
  /--popular/,
  /--selected/,
  /--sortable/,
  /--sticky/,
  /--sticky-/,
  /--no-border/,
  /@media\s*\(prefers-contrast:\s*high\)/,
]

const allowedZeroValues = /^(?:0|none|transparent|inherit|initial|unset|.*currentColor.*)$/i

function extractRules(css) {
  const rules = []
  const pattern = /([^{}]+)\{([^{}]+)\}/g
  let match
  while ((match = pattern.exec(css))) {
    rules.push({
      selector: match[1].trim().replace(/\s+/g, ' '),
      body: match[2],
    })
  }
  return rules
}

function declarations(body, property) {
  const result = []
  const pattern = new RegExp(`(^|;)\\s*(${property})\\s*:\\s*([^;]+)`, 'gi')
  let match
  while ((match = pattern.exec(body))) {
    result.push({ property: match[2], value: match[3].trim() })
  }
  return result
}

function isAllowed(selector, value) {
  if (allowedZeroValues.test(value)) return true
  return allowedSelectorPatterns.some((pattern) => pattern.test(selector))
}

const violations = []

for (const framework of frameworks) {
  for (const component of components) {
    const file = join(root, 'packages', framework, 'src/components', component, 'style.css')
    const css = readFileSync(file, 'utf8')
    for (const rule of extractRules(css)) {
      for (const declaration of declarations(rule.body, 'box-shadow')) {
        if (!isAllowed(rule.selector, declaration.value)) {
          violations.push(`${framework}/${component}: default shadow in "${rule.selector}" -> ${declaration.value}`)
        }
      }
      for (const declaration of declarations(rule.body, 'border(?:-(?:top|right|bottom|left))?')) {
        if (!isAllowed(rule.selector, declaration.value)) {
          violations.push(`${framework}/${component}: default border in "${rule.selector}" -> ${declaration.value}`)
        }
      }
    }
  }
}

if (violations.length) {
  console.error(`Minimal visual audit failed:\n${violations.map((item) => `- ${item}`).join('\n')}`)
  process.exit(1)
}

console.log(`Minimal visual audit OK: ${components.length} high-risk components keep default states borderless and shadowless.`)
