import fs from 'node:fs'
import path from 'node:path'

const workspaceRoot = path.resolve(process.cwd())
const componentsRoot = path.join(workspaceRoot, 'src', 'components')
const docsRoot = path.join(workspaceRoot, 'docs')
const docsComponentsRoot = path.join(docsRoot, 'components')
const generatedRoot = path.join(docsRoot, 'generated')

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
  // Keep original content as much as possible.
  // We only add frontmatter for VitePress sidebar/title.
  const trimmed = markdown.trimStart()
  const hasFrontmatter = trimmed.startsWith('---')
  if (hasFrontmatter) return markdown

  return `---\ntitle: ${componentName}\n---\n\n${markdown}`
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
    const doc = normalizeDocMarkdown(dir.name, raw)

    const outPath = path.join(docsComponentsRoot, `${dir.name}.md`)
    writeText(outPath, doc)

    components.push({
      name: dir.name,
      docPath: `/components/${dir.name}`,
    })
  }

  // Update docs/components/index.md
  const componentsIndexPath = path.join(docsComponentsRoot, 'index.md')
  const markerStart = '<!-- AUTO-GENERATED:COMPONENTS_LIST:START -->'
  const markerEnd = '<!-- AUTO-GENERATED:COMPONENTS_LIST:END -->'

  if (fs.existsSync(componentsIndexPath)) {
    const current = readText(componentsIndexPath)
    const listMd = buildComponentsListMarkdown(components)
    const updated = replaceBetweenMarkers(current, markerStart, markerEnd, listMd)
    writeText(componentsIndexPath, updated)
  }

  // Generate VitePress sidebar
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
