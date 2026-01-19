import fs from 'node:fs'
import path from 'node:path'

const workspaceRoot = path.resolve(process.cwd())
const componentsRoots = [
  path.join(workspaceRoot, 'packages', 'vue', 'src', 'components'),
  path.join(workspaceRoot, 'packages', 'react', 'src', 'components'),
]
const docsRoot = path.join(workspaceRoot, 'docs')
const docsComponentsRoot = path.join(docsRoot, 'components')
const generatedRoot = path.join(docsRoot, 'generated')
const storiesVueRoot = path.join(workspaceRoot, 'stories-vue')
const storiesReactRoot = path.join(workspaceRoot, 'stories-react')

const PREVIEW_START = '<!-- AUTO-GENERATED:PREVIEW:START -->'
const PREVIEW_END = '<!-- AUTO-GENERATED:PREVIEW:END -->'
const SUMMARY_START = '<!-- AUTO-GENERATED:SUMMARY:START -->'
const SUMMARY_END = '<!-- AUTO-GENERATED:SUMMARY:END -->'

function stripSectionByMarkers(markdown, markerStart, markerEnd) {
  const lines = markdown.split(/\r?\n/)
  const startLineIndex = lines.findIndex((l) => l.includes(markerStart))
  const endLineIndex = lines.findIndex((l) => l.includes(markerEnd))

  if (startLineIndex === -1 || endLineIndex === -1 || endLineIndex < startLineIndex) {
    return markdown
  }

  // If there is a heading immediately above the marker block, remove it too.
  let removeStart = startLineIndex
  let k = startLineIndex - 1
  while (k >= 0 && lines[k].trim() === '') k--
  if (k >= 0 && /^#{2,4}\s+/.test(lines[k].trim())) {
    removeStart = k
  }

  let removeEnd = endLineIndex + 1
  // Consume at most one blank line after the marker block.
  if (removeEnd < lines.length && lines[removeEnd].trim() === '') {
    removeEnd += 1
  }

  const kept = [...lines.slice(0, removeStart), ...lines.slice(removeEnd)]
  return kept.join('\n')
}

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
  lines.push('## Quick Summary')
  lines.push('')
  lines.push(SUMMARY_START)
  lines.push('')
  lines.push('> Auto-extracted from the component README tables (may show only the first few rows).')
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
  const entries = []
  const seen = new Set()

  for (const root of componentsRoots) {
    if (!fs.existsSync(root)) continue
    const subdirs = fs
      .readdirSync(root)
      .map((name) => ({ name, fullPath: path.join(root, name) }))
      .filter((e) => isDirectory(e.fullPath))
      .sort((a, b) => a.name.localeCompare(b.name))

    for (const entry of subdirs) {
      if (seen.has(entry.name)) continue
      seen.add(entry.name)
      entries.push(entry)
    }
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name))
}

function normalizeDocMarkdown(componentName, markdown) {
  const trimmed = markdown.trimStart()
  const hasFrontmatter = trimmed.startsWith('---')
  if (hasFrontmatter) return markdown
  return `---\ntitle: ${componentName}\n---\n\n${markdown}`
}

function ensureH1AfterFrontmatter(componentName, markdown) {
  const lines = markdown.split(/\r?\n/)
  let i = 0

  if (lines[0] === '---') {
    for (let j = 1; j < lines.length; j++) {
      if (lines[j] === '---') {
        i = j + 1
        break
      }
    }
  }

  while (i < lines.length && lines[i].trim() === '') i++

  if (i < lines.length && /^#\s+/.test(lines[i])) {
    return markdown
  }

  const before = lines.slice(0, i)
  const after = lines.slice(i)
  return [...before, '', `# ${componentName}`, '', ...after].join('\n')
}

function insertAfterFirstH1(markdown, insertion) {
  if (!insertion) return markdown

  const lines = markdown.split(/\r?\n/)
  let i = 0

  if (lines[0] === '---') {
    for (let j = 1; j < lines.length; j++) {
      if (lines[j] === '---') {
        i = j + 1
        break
      }
    }
  }

  for (let j = i; j < lines.length; j++) {
    if (/^#\s+/.test(lines[j])) {
      const insertAt = j + 1
      const before = lines.slice(0, insertAt)
      const after = lines.slice(insertAt)
      return [...before, '', insertion, '', ...after].join('\n')
    }
  }

  // Fallback: if no H1 exists (should not happen after ensureH1AfterFrontmatter), append at end.
  return `${markdown.trimEnd()}\n\n${insertion}\n`
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
    blocks.push(`\n<div class="wc-preview">\n  <div class="wc-preview__header">\n    <span class="wc-preview__title">Vue Preview</span>\n    <a class="wc-preview__link" href="${vueBase}/?path=/docs/${vueDocsId}" target="_blank" rel="noreferrer">Open in Storybook</a>\n  </div>\n  <iframe class="wc-preview__frame" src="${vueBase}/iframe.html?id=${vueDocsId}&viewMode=docs" loading="lazy"></iframe>\n</div>\n`)
  }

  if (reactDocsId && reactBase) {
    blocks.push(`\n<div class="wc-preview">\n  <div class="wc-preview__header">\n    <span class="wc-preview__title">React Preview</span>\n    <a class="wc-preview__link" href="${reactBase}/?path=/docs/${reactDocsId}" target="_blank" rel="noreferrer">Open in Storybook</a>\n  </div>\n  <iframe class="wc-preview__frame" src="${reactBase}/iframe.html?id=${reactDocsId}&viewMode=docs" loading="lazy"></iframe>\n</div>\n`)
  }

  if (blocks.length === 0) return ''

  return [
    '## Component Preview',
    '',
    PREVIEW_START,
    ...blocks,
    PREVIEW_END,
    '',
  ].join('\n')
}

function stripExistingPreview(markdown) {
  return stripSectionByMarkers(markdown, PREVIEW_START, PREVIEW_END)
}

function stripExistingSummary(markdown) {
  return stripSectionByMarkers(markdown, SUMMARY_START, SUMMARY_END)
}

function normalizeGeneratedDocsMarkdown(componentName, markdown) {
  let out = markdown

  // Fix common package references (old docs used watercolor-ui/* or @zeturn/watercolor).
  out = out.replaceAll('`watercolor-ui/react`', '`@zeturn/watercolor-react`')
  out = out.replaceAll('`watercolor-ui/vue`', '`@zeturn/watercolor-vue`')
  out = out.replaceAll("'watercolor-ui/react'", "'@zeturn/watercolor-react'")
  out = out.replaceAll('"watercolor-ui/react"', '"@zeturn/watercolor-react"')
  out = out.replaceAll("'watercolor-ui/vue'", "'@zeturn/watercolor-vue'")
  out = out.replaceAll('"watercolor-ui/vue"', '"@zeturn/watercolor-vue"')

  // Replace legacy installer command with the actual framework packages.
  out = out.replace(
    /npm\s+(?:i|install)\s+watercolor-ui\b/g,
    'npm i @zeturn/watercolor-react\n# or\nnpm i @zeturn/watercolor-vue',
  )

  // Small typo fixes that have leaked into docs.
  out = out.replaceAll('Subiscting...', 'Submitting...')
  out = out.replaceAll('"subisc"', '"submit"')
  out = out.replaceAll("'subisc'", "'submit'")

  // Code-fence aware normalization: map @zeturn/watercolor -> framework package
  // and replace internal watercolor-ui/* imports with named imports.
  const lines = out.split(/\r?\n/)
  const result = []
  let inFence = false
  let fenceLang = ''
  let frameworkHint = null

  const inferFramework = (lang, hint) => {
    const l = (lang || '').toLowerCase()
    if (l.includes('vue')) return 'vue'
    if (l.includes('tsx') || l.includes('jsx')) return 'react'
    if (hint) return hint
    return null
  }

  for (const line of lines) {
    const headingMatch = line.match(/^###\s+(React|Vue\s*3|Vue)\b/i)
    if (headingMatch) {
      const t = headingMatch[1].toLowerCase()
      frameworkHint = t.startsWith('react') ? 'react' : 'vue'
    }

    const fenceMatch = line.match(/^```\s*([A-Za-z0-9_-]+)?\s*$/)
    if (fenceMatch) {
      if (!inFence) {
        inFence = true
        fenceLang = fenceMatch[1] || ''
      } else {
        inFence = false
        fenceLang = ''
      }
      result.push(line)
      continue
    }

    if (!inFence) {
      result.push(line)
      continue
    }

    const framework = inferFramework(fenceLang, frameworkHint)
    let updated = line

    // Upgrade @zeturn/watercolor to the correct framework package.
    if (framework === 'react') {
      updated = updated.replaceAll("'@zeturn/watercolor'", "'@zeturn/watercolor-react'")
      updated = updated.replaceAll('"@zeturn/watercolor"', '"@zeturn/watercolor-react"')
    }
    if (framework === 'vue') {
      updated = updated.replaceAll("'@zeturn/watercolor'", "'@zeturn/watercolor-vue'")
      updated = updated.replaceAll('"@zeturn/watercolor"', '"@zeturn/watercolor-vue"')
    }

    // Replace internal watercolor-ui path imports with named imports.
    if (framework === 'react') {
      updated = updated.replace(
        /^\s*import\s+([A-Za-z0-9_$]+)\s+from\s+['"]watercolor-ui\/[^'"]+['"]\s*;?\s*$/,
        "import { $1 } from '@zeturn/watercolor-react'",
      )
    }
    if (framework === 'vue') {
      updated = updated.replace(
        /^\s*import\s+([A-Za-z0-9_$]+)\s+from\s+['"]watercolor-ui\/[^'"]+['"]\s*;?\s*$/,
        "import { $1 } from '@zeturn/watercolor-vue'",
      )
    }

    // Remove component-scoped internal style imports; docs should recommend importing the package style once.
    if (/^\s*import\s+['"]watercolor-ui\/src\/components\/.+\/style\.css['"]\s*;?\s*$/.test(updated)) {
      updated = ''
    }

    result.push(updated)
  }

  return result.join('\n')
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
    return '> No component READMEs found under `packages/*/src/components/**/README.md`.\n'
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

    doc = normalizeGeneratedDocsMarkdown(dir.name, doc)

    // Ensure the visible title is always rendered first.
    doc = ensureH1AfterFrontmatter(dir.name, doc)

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
    doc = insertAfterFirstH1(doc, topBlocks)

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
