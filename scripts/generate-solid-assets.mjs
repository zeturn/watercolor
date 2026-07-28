// 把 react 组件批量转换为 solid 组件（最佳努力转换，后续需针对有状态组件人工校验）。
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const REACT_COMPONENTS = path.join(ROOT, 'packages/react/src/components')
const SOLID_COMPONENTS = path.join(ROOT, 'packages/solid/src/components')
const REACT_INDEX = path.join(ROOT, 'packages/react/src/index.ts')
const SOLID_INDEX = path.join(ROOT, 'packages/solid/src/index.ts')

function copyIfExists(src, dst) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dst), { recursive: true })
    fs.copyFileSync(src, dst)
    return true
  }
  return false
}

function transformJsx(src) {
  let code = src

  // 1. 移除 react / react-dom 相关 import
  code = code.replace(/import\s+React[^;]*from\s+['"]react['"];?/g, '')
  code = code.replace(/import\s+[^;]*from\s+['"]react['"];?/g, '')
  code = code.replace(/import\s+[^;]*from\s+['"]react-dom['"];?/g, '')
  code = code.replace(/import\s+[^;]*from\s+['"]react\/jsx-runtime['"];?/g, '')
  code = code.replace(/import\s+[^;]*from\s+['"]react\/jsx-dev-runtime['"];?/g, '')

  // 2. 重写本地相对 import 后缀 / 名称
  code = code.replace(/interactions\.jsx(['"])/g, "interactions'")
  code = code.replace(/LocaleReact/g, 'LocaleSolid')
  code = code.replace(/ThemeReact/g, 'ThemeSolid')
  code = code.replace(/createPortal\s+from\s+['"]react-dom['"]/g, "Portal } from 'solid-js/web'")
  // 本地相对 .jsx 引用 -> .tsx
  code = code.replace(/from\s+['"](\.[^'"]*?)\.jsx['"]/g, "from '$1.tsx'")
  code = code.replace(/import\s+['"](\.[^'"]*?)\.jsx['"]/g, "import '$1.tsx'")

  // 3. hooks -> solid 等价物
  code = code.replace(/useState\(/g, 'createSignal(')
  code = code.replace(/useEffect\(/g, 'createEffect(')
  code = code.replace(/useLayoutEffect\(/g, 'createEffect(')
  code = code.replace(/useMemo\(/g, 'createMemo(')
  code = code.replace(/const\s+(\w+)\s*=\s*useRef(?:<[^>]*>)?\([^)]*\)/g, 'let $1 = null')
  code = code.replace(/\.current\b/g, '')
  code = code.replace(/useCallback\(\s*([\s\S]*?),\s*\[[^\]]*\]\s*\)/g, '$1')
  code = code.replace(/useCallback\(/g, '(')
  code = code.replace(/useId\(/g, 'useId(')

  // 4. JSX 属性修正
  code = code.replace(/className=/g, 'class=')
  code = code.replace(/dangerouslySetInnerHTML=\{\{\s*__html:\s*([^}]+?)\s*\}\}/g, 'innerHTML={$1}')
  code = code.replace(/React\./g, '')

  // 5. forwardRef / memo 简化
  code = code.replace(/export default forwardRef\(/g, 'export default (')
  code = code.replace(/export default memo\(/g, 'export default (')
  code = code.replace(/forwardRef\(\(props,\s*ref\)\s*=>/g, '((props) =>')
  code = code.replace(/forwardRef\(/g, '(')
  code = code.replace(/memo\(/g, '(')

  // 6. 安全的信号读取转换：仅处理 JSX 小胡子 {name} / ={name}
  const signalNames = new Set()
  const re = /const\s+\[(\w+),\s*set\w+\]\s*=\s*createSignal\(/g
  let m
  while ((m = re.exec(code)) !== null) signalNames.add(m[1])

  if (signalNames.size) {
    code = code.replace(/\{([A-Za-z_]\w*)\}/g, (mm, id) =>
      signalNames.has(id) ? `{${id}()}` : mm
    )
  }

  // 7. 补充 solid-js / solid-js/web 的 import（按需）
  const needsSolid = /createSignal|createEffect|createMemo|onMount|onCleanup|useId|Show|For|Index/.test(code)
  const needsPortal = /createPortal/.test(code)
  let header = ''
  if (needsSolid) {
    header += "import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'\n"
  }
  if (needsPortal) {
    header += "import { Portal } from 'solid-js/web'\n"
  }
  if (header) code = header + code

  return code
}

let generatedCount = 0
for (const dir of fs.readdirSync(REACT_COMPONENTS)) {
  const reactDir = path.join(REACT_COMPONENTS, dir)
  if (!fs.statSync(reactDir).isDirectory()) continue
  const solidDir = path.join(SOLID_COMPONENTS, dir)
  fs.mkdirSync(solidDir, { recursive: true })

  copyIfExists(path.join(reactDir, 'utils.js'), path.join(solidDir, 'utils.js'))
  copyIfExists(path.join(reactDir, 'style.css'), path.join(solidDir, 'style.css'))

  for (const file of fs.readdirSync(reactDir)) {
    if (!file.endsWith('.jsx')) continue
    const reactFile = path.join(reactDir, file)
    const solidFile = path.join(solidDir, file.replace(/\.jsx$/, '.tsx'))
    const src = fs.readFileSync(reactFile, 'utf8')
    const out = transformJsx(src)
    fs.writeFileSync(solidFile, out, 'utf8')
    generatedCount++
    console.log('生成:', path.relative(ROOT, solidFile))
  }
}

// index.ts：基于 react 的 index.ts，重命名 Theme/Locale 引用 + .jsx -> .tsx
let indexSrc = fs.readFileSync(REACT_INDEX, 'utf8')
indexSrc = indexSrc.replace(/ThemeReact\.tsx/g, 'ThemeSolid')
indexSrc = indexSrc.replace(/LocaleReact\.tsx/g, 'LocaleSolid')
indexSrc = indexSrc.replace(/\.jsx(['"])/g, ".tsx$1")
fs.writeFileSync(SOLID_INDEX, indexSrc, 'utf8')
console.log('生成 index.ts')

console.log(`\n完成。共生成 ${generatedCount} 个 solid 组件文件。`)
