// 根据 react 的导出列表，生成 astro 的薄封装组件（.astro）。
// 每个 .astro 组件转发 props 与 slot 给对应的 React 组件，并透传 client 指令。
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const REACT_INDEX = path.join(ROOT, 'packages/react/src/index.ts')
const ASTRO_COMPONENTS = path.join(ROOT, 'packages/astro/components')

const indexSrc = fs.readFileSync(REACT_INDEX, 'utf8')
fs.mkdirSync(ASTRO_COMPONENTS, { recursive: true })

const wrapperTemplate = (name) => `---
import { ${name} } from '@zeturn/watercolor-react'
const { client = 'load', ...props } = Astro.props
---

<${name} client={client} {...props}>
  <slot />
</${name}>
`

let count = 0
const seen = new Set()

function addWrapper(name, sourcePath) {
  if (seen.has(name)) return
  const isComponentFile = sourcePath.endsWith('.jsx')
  const isProvider = /ThemeReact|LocaleReact/.test(sourcePath)
  if (!isComponentFile && !isProvider) return
  if (name.startsWith('use')) return // 跳过 hook
  if (name === 'defaultLocaleMessages') return // 非组件
  seen.add(name)
  const file = path.join(ASTRO_COMPONENTS, `${name}.astro`)
  fs.writeFileSync(file, wrapperTemplate(name), 'utf8')
  console.log('生成:', path.relative(ROOT, file))
  count++
}

const exportRe = /export\s+\{\s*([^}]+)\s*\}\s+from\s+['"]([^'"]+)['"]/g
let m
while ((m = exportRe.exec(indexSrc)) !== null) {
  const namesPart = m[1]
  const sourcePath = m[2]
  for (let raw of namesPart.split(',')) {
    raw = raw.trim()
    if (!raw) continue
    // 形如 default as X 或 a as b 或 c
    const asMatch = raw.match(/(?:default|[\w$]+)\s+as\s+([\w$]+)/)
    const name = asMatch ? asMatch[1] : raw.replace(/^default$/, '')
    if (!name) continue
    addWrapper(name, sourcePath)
  }
}

console.log(`\n完成。共生成 ${count} 个 astro 薄封装组件。`)
