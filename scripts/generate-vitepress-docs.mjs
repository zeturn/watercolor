import fs from 'node:fs'
import path from 'node:path'

const workspaceRoot = path.resolve(process.cwd())
const componentsRoot = path.join(workspaceRoot, 'src', 'components')
const docsRoot = path.join(workspaceRoot, 'docs')
const docsComponentsRoot = path.join(docsRoot, 'components')
const generatedRoot = path.join(docsRoot, 'generated')
const storiesVueRoot = path.join(workspaceRoot, 'stories-vue')
const storiesReactRoot = path.join(workspaceRoot, 'stories-react')

const PREVIEW_START = '<!-- AUTO-GENERATED:PREVIEW:START -->'
const PREVIEW_END = '<!-- AUTO-GENERATED:PREVIEW:END -->'
const SUMMARY_START = '<!-- AUTO-GENERATED:SUMMARY:START -->'
const SUMMARY_END = '<!-- AUTO-GENERATED:SUMMARY:END -->'

function stripTrailingSlash(input) {
  return input.endsWith('/') ? input.slice(0, -1) : input
}

function splitMarkdownTableRow(line) {
  const trimmed = line.trim()
  const core = trimmed.replace(/^\|/, '').replace(/\|$/, '')
  const cells = []
  let current = ''
  for (let i = 0; i < core.length; i++) {
    const ch = core[i]
    const prev = core[i - 1]
    if (ch === '|' && prev !== '\\') {
      cells.push(current.trim().replace(/\\\|/g, '|'))
      current = ''
      continue
    }
    current += ch
  }
  cells.push(current.trim().replace(/\\\|/g, '|'))
  return cells
}

function extractMarkdownTableAfterHeading(markdown, headingMatchers) {
  const lines = markdown.split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const heading = line.match(/^#{2,4}\s+(.+)\s*$/)
    if (!heading) continue

    const headingText = heading[1].trim()
    const matched = headingMatchers.some((re) => re.test(headingText))
    if (!matched) continue

    // Seek table header
    let j = i + 1
    while (j < lines.length && lines[j].trim() === '') j++

    if (j + 1 >= lines.length) return null

    const headerLine = lines[j]
    const sepLine = lines[j + 1]
    const looksLikeTableHeader = headerLine.includes('|')
    const looksLikeSeparator = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(sepLine)

    if (!looksLikeTableHeader || !looksLikeSeparator) return null

    const header = splitMarkdownTableRow(headerLine)
    const rows = []
    let k = j + 2
    while (k < lines.length) {
      const rowLine = lines[k]
      if (!rowLine.trim().startsWith('|')) break
      if (!rowLine.includes('|')) break
      rows.push(splitMarkdownTableRow(rowLine))
      k++
    }

    return { header, rows }
  }

  return null
}

function normalizePropsTable(table) {
  if (!table) return null
  const headerLower = table.header.map((h) => h.toLowerCase().replace(/\s+/g, ''))

  const idxName = headerLower.findIndex((h) => h.includes('prop') || h === 'name' || h.includes('属性') || h.includes('参数'))
  const idxType = headerLower.findIndex((h) => h.includes('type') || h.includes('类型'))
  const idxDefault = headerLower.findIndex((h) => h.includes('default') || h.includes('默认'))
  const idxDesc = headerLower.findIndex((h) => h.includes('description') || h.includes('desc') || h.includes('说明') || h.includes('描述'))

  const pick = (row, idx, fallbackIdx) => {
    const realIdx = idx >= 0 ? idx : fallbackIdx
    return row[realIdx] ?? ''
  }

  const normalized = table.rows.map((r) => {
    return {
      name: pick(r, idxName, 0),
      type: pick(r, idxType, 1),
      default: pick(r, idxDefault, 2),
      description: pick(r, idxDesc, Math.min(3, r.length - 1)),
    }
  })

  return normalized
}

function normalizeEventsTable(table) {
  if (!table) return null
  const headerLower = table.header.map((h) => h.toLowerCase().replace(/\s+/g, ''))
  const idxName = headerLower.findIndex((h) => h.includes('event') || h === 'name' || h.includes('事件'))
  const idxDesc = headerLower.findIndex((h) => h.includes('description') || h.includes('desc') || h.includes('说明') || h.includes('描述'))

  const pick = (row, idx, fallbackIdx) => {
    const realIdx = idx >= 0 ? idx : fallbackIdx
    return row[realIdx] ?? ''
  }

  const normalized = table.rows.map((r) => {
    return {
      name: pick(r, idxName, 0),
      description: pick(r, idxDesc, Math.min(1, r.length - 1)),
    }
  })

  return normalized
}

function buildQuickSummaryBlock({ props, events, limit = 10 }) {
  const hasProps = Array.isArray(props) && props.length > 0
  const hasEvents = Array.isArray(events) && events.length > 0
  if (!hasProps && !hasEvents) return ''

  const lines = []
  lines.push('## 快速摘要')
  lines.push('')
  lines.push(SUMMARY_START)
  lines.push('')
  lines.push('> 以下内容从组件 README 的表格自动抽取（可能只展示前几项）。')
  lines.push('')

  if (hasProps) {
    const slice = props.slice(0, limit)
    lines.push('### Props')
    lines.push('')
    lines.push('| Name | Type | Default | Description |')
    lines.push('| --- | --- | --- | --- |')
    for (const p of slice) {
      lines.push(`| ${p.name || ''} | ${p.type || ''} | ${p.default || ''} | ${p.description || ''} |`)
    }
    lines.push('')
  }

  if (hasEvents) {
    const slice = events.slice(0, limit)
    lines.push('### Events')
    lines.push('')
    lines.push('| Event | Description |')
    lines.push('| --- | --- |')
    for (const e of slice) {
      lines.push(`| ${e.name || ''} | ${e.description || ''} |`)
    }
    lines.push('')
  }

  lines.push(SUMMARY_END)
  lines.push('')
  return lines.join('\n')
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true })
}

function isDirectory(p) {
  try {
    return fs.statSync(p).isDirectory()
  } catch {
    return false
  }
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
}

function writeText(filePath, content) {
  ensureDir(path.dirname(filePath))
  fs.writeFileSync(filePath, content)
}

function listComponentDirs() {
  if (!fs.existsSync(componentsRoot)) return []
  return fs
    .readdirSync(componentsRoot)
    .map((name) => ({ name, fullPath: path.join(componentsRoot, name) }))
    .filter((e) => isDirectory(e.fullPath))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function normalizeDocMarkdown(componentName, markdown) {
  const trimmed = markdown.trimStart()
  const hasFrontmatter = trimmed.startsWith('---')
  if (hasFrontmatter) return markdown
  return `---\ntitle: ${componentName}\n---\n\n${markdown}`
}

function slugifyForStorybook(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
}

function findStoryTitle(framework, componentName) {
  const root = framework === 'vue' ? storiesVueRoot : storiesReactRoot
  const candidates = framework === 'vue'
    ? [
        `${componentName}.stories.js`,
        `${componentName}.stories.ts`,
      ]
    : [
        `${componentName}.stories.jsx`,
        `${componentName}.stories.tsx`,
        `${componentName}.stories.js`,
        `${componentName}.stories.ts`,
      ]

  for (const filename of candidates) {
    const fullPath = path.join(root, filename)
    if (!fs.existsSync(fullPath)) continue
    const content = readText(fullPath)
    const match = content.match(/\btitle\s*:\s*['\"]([^'\"]+)['\"]/)
    if (!match) continue
    return match[1]
  }

  return null
}

function buildStorybookPreviewBlock({ vueDocsId, reactDocsId }) {
  const vueBaseEnv = process.env.DOCS_PREVIEW_VUE_BASE
  const reactBaseEnv = process.env.DOCS_PREVIEW_REACT_BASE
  const vueBase = vueBaseEnv ? stripTrailingSlash(vueBaseEnv) : null
  const reactBase = reactBaseEnv ? stripTrailingSlash(reactBaseEnv) : null

  const blocks = []

  if (vueDocsId && vueBase) {
    blocks.push(`\n<div class="wc-preview">\n  <div class="wc-preview__header">\n    <span class="wc-preview__title">Vue 预览</span>\n    <a class="wc-preview__link" href="${vueBase}/?path=/docs/${vueDocsId}" target="_blank" rel="noreferrer">在 Storybook 中打开</a>\n  </div>\n  <iframe class="wc-preview__frame" src="${vueBase}/iframe.html?id=${vueDocsId}&viewMode=docs" loading="lazy"></iframe>\n</div>\n`)
  }

  if (reactDocsId && reactBase) {
    blocks.push(`\n<div class="wc-preview">\n  <div class="wc-preview__header">\n    <span class="wc-preview__title">React 预览</span>\n    <a class="wc-preview__link" href="${reactBase}/?path=/docs/${reactDocsId}" target="_blank" rel="noreferrer">在 Storybook 中打开</a>\n  </div>\n  <iframe class="wc-preview__frame" src="${reactBase}/iframe.html?id=${reactDocsId}&viewMode=docs" loading="lazy"></iframe>\n</div>\n`)
  }

  if (blocks.length === 0) return ''

  return [
    '## 组件预览',
    '',
    PREVIEW_START,
    ...blocks,
    PREVIEW_END,
    '',
  ].join('\n')
}

function stripExistingPreview(markdown) {
  const startIdx = markdown.indexOf(PREVIEW_START)
  const endIdx = markdown.indexOf(PREVIEW_END)
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) return markdown

  // Remove the whole preview section, including the heading line if it is right above the marker.
  const before = markdown.slice(0, startIdx)
  const after = markdown.slice(endIdx + PREVIEW_END.length)
  return `${before}${after}`
}

function stripExistingSummary(markdown) {
  const startIdx = markdown.indexOf(SUMMARY_START)
  const endIdx = markdown.indexOf(SUMMARY_END)
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) return markdown

  const before = markdown.slice(0, startIdx)
  const after = markdown.slice(endIdx + SUMMARY_END.length)
  return `${before}${after}`
}

function insertAfterFrontmatter(markdown, insertion) {
  if (!insertion) return markdown
  const trimmed = markdown.trimStart()
  if (!trimmed.startsWith('---')) {
    return `${insertion}\n\n${markdown}`
  }

  const lines = markdown.split(/\r?\n/)
  if (lines[0] !== '---') {
    return `${insertion}\n\n${markdown}`
  }

  let endIndex = -1
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      endIndex = i
      break
    }
  }
  if (endIndex === -1) {
    return `${insertion}\n\n${markdown}`
  }

  const before = lines.slice(0, endIndex + 1).join('\n')
  const after = lines.slice(endIndex + 1).join('\n')
  return `${before}\n\n${insertion}\n\n${after.trimStart()}`
}

function buildComponentsListMarkdown(components) {
  if (components.length === 0) {
    return '> 未发现任何组件 README（src/components/**/README.md）。\n'
  }

  const lines = []
  let currentLetter = ''

  for (const c of components) {
    const letter = c.name[0]?.toUpperCase() || '#'
    if (letter !== currentLetter) {
      if (currentLetter) {
        lines.push('</div>')
      }
      currentLetter = letter
      lines.push(`\n## ${currentLetter}\n`)
      lines.push('<div class="wc-components-grid">')
    }
    lines.push(`<a class="wc-components-card" href="./${c.name}">${c.name}</a>`)
  }

  if (currentLetter) {
    lines.push('</div>')
  }

  return `${lines.join('\n')}\n`
}

function replaceBetweenMarkers(fileContent, markerStart, markerEnd, replacement) {
  const startIdx = fileContent.indexOf(markerStart)
  const endIdx = fileContent.indexOf(markerEnd)
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    return fileContent
  }
  const before = fileContent.slice(0, startIdx + markerStart.length)
  const after = fileContent.slice(endIdx)
  return `${before}\n\n${replacement}\n${after}`
}

function main() {
  ensureDir(docsComponentsRoot)
  ensureDir(generatedRoot)

  const componentDirs = listComponentDirs()

  const components = []
  for (const dir of componentDirs) {
    const readmePath = path.join(dir.fullPath, 'README.md')
    if (!fs.existsSync(readmePath)) continue

    const raw = readText(readmePath)
    let doc = normalizeDocMarkdown(dir.name, raw)

    // Extract Props/Events quick summary from README tables
    const propsTable = extractMarkdownTableAfterHeading(raw, [
      /^props$/i,
      /^properties$/i,
      /^(props|prop)\b/i,
      /^(\s*)属性(\s*)$/,
      /^(\s*)参数(\s*)$/,
    ])
    const eventsTable = extractMarkdownTableAfterHeading(raw, [
      /^events$/i,
      /^(\s*)事件(\s*)$/,
    ])
    const props = normalizePropsTable(propsTable)
    const events = normalizeEventsTable(eventsTable)

    const vueTitle = findStoryTitle('vue', dir.name)
    const reactTitle = findStoryTitle('react', dir.name)
    const vueDocsId = vueTitle ? `${slugifyForStorybook(vueTitle)}--docs` : null
    const reactDocsId = reactTitle ? `${slugifyForStorybook(reactTitle)}--docs` : null

    doc = stripExistingPreview(doc)
    doc = stripExistingSummary(doc)
    const preview = buildStorybookPreviewBlock({ vueDocsId, reactDocsId })
    const summary = buildQuickSummaryBlock({ props, events })
    const topBlocks = [preview, summary].filter(Boolean).join('\n\n')
    doc = insertAfterFrontmatter(doc, topBlocks)

    const outPath = path.join(docsComponentsRoot, `${dir.name}.md`)
    writeText(outPath, doc)

    components.push({
      name: dir.name,
      docPath: `/components/${dir.name}`,
    })
  }

  const componentsIndexPath = path.join(docsComponentsRoot, 'index.md')
  const markerStart = '<!-- AUTO-GENERATED:COMPONENTS_LIST:START -->'
  const markerEnd = '<!-- AUTO-GENERATED:COMPONENTS_LIST:END -->'

  if (fs.existsSync(componentsIndexPath)) {
    const current = readText(componentsIndexPath)
    const listMd = buildComponentsListMarkdown(components)
    const updated = replaceBetweenMarkers(current, markerStart, markerEnd, listMd)
    writeText(componentsIndexPath, updated)
  }

  const groups = new Map()
  for (const c of components) {
    const letter = c.name[0]?.toUpperCase() || '#'
    if (!groups.has(letter)) groups.set(letter, [])
    groups.get(letter).push(c)
  }
  const sortedLetters = Array.from(groups.keys()).sort((a, b) => a.localeCompare(b))
  const sidebar = {
    '/components/': sortedLetters.map((letter) => ({
      text: letter,
      collapsed: true,
      items: groups.get(letter).map((c) => ({ text: c.name, link: c.docPath })),
    })),
  }
  writeText(path.join(generatedRoot, 'sidebar.json'), JSON.stringify(sidebar, null, 2) + '\n')

  console.log(`[docs] generated ${components.length} component docs pages`)
}

main()
