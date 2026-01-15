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

function stripTrailingSlash(input) {
  return input.endsWith('/') ? input.slice(0, -1) : input
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
  const vueBase = stripTrailingSlash(process.env.DOCS_PREVIEW_VUE_BASE || '../../vue')
  const reactBase = stripTrailingSlash(process.env.DOCS_PREVIEW_REACT_BASE || '../../react')

  const blocks = []

  if (vueDocsId) {
    blocks.push(`\n<div class="wc-preview">\n  <div class="wc-preview__header">\n    <span class="wc-preview__title">Vue 预览</span>\n    <a class="wc-preview__link" href="${vueBase}/?path=/docs/${vueDocsId}" target="_blank" rel="noreferrer">在 Storybook 中打开</a>\n  </div>\n  <iframe class="wc-preview__frame" src="${vueBase}/iframe.html?id=${vueDocsId}&viewMode=docs" loading="lazy"></iframe>\n</div>\n`)
  }

  if (reactDocsId) {
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
      currentLetter = letter
      lines.push(`\n## ${currentLetter}\n`)
    }
    lines.push(`- [${c.name}](./${c.name})`)
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

    const vueTitle = findStoryTitle('vue', dir.name)
    const reactTitle = findStoryTitle('react', dir.name)
    const vueDocsId = vueTitle ? `${slugifyForStorybook(vueTitle)}--docs` : null
    const reactDocsId = reactTitle ? `${slugifyForStorybook(reactTitle)}--docs` : null

    doc = stripExistingPreview(doc)
    const preview = buildStorybookPreviewBlock({ vueDocsId, reactDocsId })
    doc = insertAfterFrontmatter(doc, preview)

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

  const sidebar = {
    '/components/': [
      {
        text: 'Components',
        items: components.map((c) => ({ text: c.name, link: c.docPath })),
      },
    ],
  }
  writeText(path.join(generatedRoot, 'sidebar.json'), JSON.stringify(sidebar, null, 2) + '\n')

  console.log(`[docs] generated ${components.length} component docs pages`)
}

main()
