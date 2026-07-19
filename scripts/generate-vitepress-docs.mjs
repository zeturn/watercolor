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
const GUIDE_START = '<!-- AUTO-GENERATED:GUIDE:START -->'
const GUIDE_END = '<!-- AUTO-GENERATED:GUIDE:END -->'

const componentCategories = {
  Accordion: 'navigation',
  Alert: 'feedback',
  AppBar: 'navigation',
  Autocomplete: 'form',
  Avatar: 'display',
  Badge: 'feedback',
  Banner: 'feedback',
  Blockquote: 'display',
  Box: 'layout',
  Breadcrumb: 'navigation',
  Button: 'action',
  Card: 'layout',
  Checkbox: 'form',
  Chip: 'feedback',
  CircularProgress: 'feedback',
  ColorPicker: 'form',
  CodeBlock: 'display',
  Container: 'layout',
  Inline: 'layout',
  Copy: 'feedback',
  DatePicker: 'form',
  Divider: 'layout',
  Feature: 'display',
  Feed: 'data',
  FileInput: 'form',
  Form: 'form',
  Grid: 'layout',
  HoverCard: 'overlay',
  Icon: 'display',
  ImageGallery: 'display',
  Input: 'form',
  List: 'data',
  Menu: 'navigation',
  Modal: 'overlay',
  NumberAnimation: 'display',
  Pagination: 'navigation',
  Page: 'layout',
  Paper: 'layout',
  Popover: 'overlay',
  PricingTable: 'data',
  Progress: 'feedback',
  Radio: 'form',
  Rating: 'form',
  Select: 'form',
  Skeleton: 'feedback',
  SlideOver: 'overlay',
  Split: 'layout',
  Stack: 'layout',
  Slider: 'form',
  Snackbar: 'feedback',
  Status: 'feedback',
  Switch: 'form',
  Table: 'data',
  Tabs: 'navigation',
  TextField: 'form',
  Toolbar: 'navigation',
  Tooltip: 'overlay',
  TypingText: 'display',
  Typography: 'display',
  VideoPlayer: 'display',
  Watermark: 'display',
}

const componentDescriptions = {
  Accordion: '用于按需展开和收起内容，适合 FAQ、设置面板和多段说明。',
  Alert: '用于表达成功、警告、错误和信息提示，适合页面内静态反馈。',
  AppBar: '用于页面或模块顶部导航，适合放品牌、标题和主操作。',
  Autocomplete: '用于候选项较多时的快速搜索和选择。',
  Avatar: '用于展示用户、团队或品牌头像。',
  Badge: '用于表达轻量状态、数字或标签。',
  Banner: '用于页面级提示，适合公告、活动和全局提醒。',
  Blockquote: '用于引用内容、推荐语或强调文本。',
  Box: '用于快速组织布局和间距，是最基础的容器之一。',
  Breadcrumb: '用于展示当前页面在信息架构中的位置。',
  Button: '用于触发动作，是业务页面中最常见的交互入口。',
  Card: '用于组织卡片式内容块，适合仪表盘和列表项。',
  Checkbox: '用于多选场景和布尔配置。',
  Chip: '用于展示轻量标签，也可做筛选项或已选项。',
  CircularProgress: '用于圆形加载或进度反馈。',
  ColorPicker: '用于颜色选择、主题设置和配色编辑。',
  CodeBlock: '用于展示代码片段、配置示例和轻量 diff，适合文档、开发者工具和调试界面。',
  Container: '既有页面的兼容容器；新页面外壳优先使用 Page。',
  Copy: '用于一键复制内容，适合邀请码、命令或链接。',
  DatePicker: '用于日期输入和日期范围相关业务。',
  Divider: '用于分隔信息区块，增强结构层次。',
  Feature: '用于功能卖点展示、产品说明和宣传模块。',
  Feed: '用于按时间顺序展示动态、日志或活动记录。',
  FileInput: '用于上传文件、图片和附件。',
  Form: '用于组织输入控件和提交动作。',
  Grid: '用于响应式栅格布局。',
  HoverCard: '用于悬停时展示补充信息。',
  Icon: '用于统一接入图标库，适合按钮、状态和菜单。',
  ImageGallery: '用于展示图片列表、预览和切换。',
  Inline: '用于水平对齐、分布与可控换行，不添加视觉表面。',
  Input: '用于单行或多行文本输入。',
  List: '用于展示结构化列表信息。',
  Menu: '用于操作菜单、下拉菜单和上下文菜单。',
  Modal: '用于承载需要用户明确关注的弹层内容。',
  NumberAnimation: '用于数字滚动、统计卡片和运营看板。',
  Pagination: '用于分页切换和长列表导航。',
  Page: '用于控制页面内容宽度与 gutter，不添加视觉表面。',
  Paper: '用于提供轻量背景承载层。',
  Popover: '用于点击后展示补充操作或上下文内容。',
  PricingTable: '用于套餐、价格和版本能力对比。',
  Progress: '用于线性进度反馈。',
  Radio: '用于单选场景。',
  Rating: '用于评分输入和星级展示。',
  Select: '用于从固定选项中选择一个值。',
  Skeleton: '用于内容加载时的骨架屏占位。',
  SlideOver: '用于从侧边滑出的操作面板。',
  Split: '用于双区域比例布局，并在命名断点折叠为单列。',
  Stack: '用于建立纵向节奏与统一间距。',
  Slider: '用于区间或连续值选择。',
  Snackbar: '用于短暂、非阻塞的通知反馈。',
  Status: '用于表达状态语义，例如成功、处理中、失败。',
  Switch: '用于即时开关型配置。',
  Table: '用于展示结构化表格数据。',
  Tabs: '用于在同层级内容之间切换。',
  TextField: '用于更强调表单语义的文本输入场景。',
  Toolbar: '用于集中放置一组紧密相关的操作。',
  Tooltip: '用于补充说明按钮、图标和缩写。',
  TypingText: '用于打字机效果和营销型文字呈现。',
  Typography: '用于统一标题、正文和辅助文本样式。',
  VideoPlayer: '用于视频预览和内容播放。',
  Watermark: '用于添加品牌水印、版权或安全标识。',
}

const categoryUseCases = {
  action: ['主按钮、次按钮和危险操作', '表单提交或工具栏操作', '和 Icon、Snackbar、Modal 组合使用'],
  form: ['表单录入和筛选条件', '受控状态和校验信息展示', '与 Form、Button、Alert 组合构建业务表单'],
  feedback: ['状态提示和异步反馈', '弱提示与强提示分层展示', '与 Button、Modal、Table 组合呈现操作结果'],
  navigation: ['页面层级导航', '模块切换和结构组织', '和 AppBar、Breadcrumb、Tabs、Menu 一起使用'],
  overlay: ['悬停提示、轻量浮层或强交互弹层', '由外部状态控制打开和关闭', '与 Button、List、Table 组合触发上下文操作'],
  layout: ['页面布局和区块承载', '建立留白、宽度和结构层次', '作为其他组件的组合容器'],
  data: ['接口数据展示', '列表、价格、日志和表格型内容', '与 Pagination、Skeleton、Empty State 搭配使用'],
  display: ['品牌化展示和内容呈现', '列表项视觉增强', '与 Card、Typography、Button 组合构建营销或信息模块'],
}

function getReactExampleMarkup(componentName) {
  const snippets = {
    Alert: '<Alert type="success" title="操作成功">内容已保存</Alert>',
    Button: '<Button variant="primary">立即操作</Button>',
    Card: '<Card title="标题">这里是内容</Card>',
    CodeBlock: '<CodeBlock language="json" code={`{\\n  "theme": "watercolor"\\n}`} />',
    Icon: '<Icon library="lucide" name="search" />',
    Input: '<Input placeholder="请输入内容" />',
    Modal: '<Modal open title="确认操作">这里是弹层内容</Modal>',
    Select: '<Select options={[{ label: "选项 A", value: "a" }]} />',
    Table: '<Table columns={[{ key: "name", title: "姓名" }]} data={[{ name: "Ada" }]} />',
    Tabs: '<Tabs tabs={[{ label: "概览", value: "overview" }]} value="overview" />',
    TextField: '<TextField label="标题" placeholder="请输入内容" />',
    Tooltip: '<Tooltip content="补充说明"><button>悬停查看</button></Tooltip>',
  }

  return snippets[componentName] || `<${componentName} />`
}

function getVueExampleMarkup(componentName) {
  const snippets = {
    Alert: '<Alert type="success" title="操作成功">内容已保存</Alert>',
    Button: '<Button variant="primary">立即操作</Button>',
    Card: '<Card title="标题">这里是内容</Card>',
    CodeBlock: '<CodeBlock language="json" :code="`{\\n  &quot;theme&quot;: &quot;watercolor&quot;\\n}`" />',
    Icon: '<Icon library="lucide" name="search" />',
    Input: '<Input placeholder="请输入内容" />',
    Modal: '<Modal open title="确认操作">这里是弹层内容</Modal>',
    Select: '<Select :options="[{ label: \'选项 A\', value: \'a\' }]" />',
    Table: '<Table :columns="[{ key: \'name\', title: \'姓名\' }]" :data="[{ name: \'Ada\' }]" />',
    Tabs: '<Tabs :tabs="[{ label: \'概览\', value: \'overview\' }]" value="overview" />',
    TextField: '<TextField label="标题" placeholder="请输入内容" />',
    Tooltip: '<Tooltip content="补充说明"><button>悬停查看</button></Tooltip>',
  }

  return snippets[componentName] || `<${componentName} />`
}

function renderCodeGroupBlock(componentName) {
  return [
    '::: code-group',
    '',
    `\`\`\`tsx [React]`,
    `import { ${componentName} } from '@zeturn/watercolor-react'`,
    `import '@zeturn/watercolor-react/style.css'`,
    '',
    `export function Example() {`,
    `  return ${getReactExampleMarkup(componentName)}`,
    `}`,
    `\`\`\``,
    '',
    `\`\`\`vue [Vue]`,
    `<script setup>`,
    `import { ${componentName} } from '@zeturn/watercolor-vue'`,
    `import '@zeturn/watercolor-vue/style.css'`,
    `</script>`,
    '',
    `<template>`,
    `  ${getVueExampleMarkup(componentName)}`,
    `</template>`,
    `\`\`\``,
    '',
    ':::',
  ].join('\n')
}

function buildTipsFromProps(componentName, props, events) {
  const tips = []
  const names = new Set((props || []).map((item) => (item.name || '').replace(/`/g, '').trim()))
  const eventNames = new Set((events || []).map((item) => (item.name || '').replace(/`/g, '').trim()))

  if (names.has('value')) {
    tips.push('把组件值放在业务状态里管理，React 使用受控模式，Vue 优先使用 `v-model`。')
  }
  if (names.has('open')) {
    tips.push('弹层开关推荐由外部状态控制，关闭动作统一收敛到一个回调里。')
  }
  if (names.has('options') || names.has('items')) {
    tips.push('在传入选项前先完成业务字段映射，避免在渲染阶段重复做数据转换。')
  }
  if (names.has('variant') || names.has('type')) {
    tips.push('优先把语义放进 `variant` 或 `type`，不要只依赖自定义 class 去表达状态。')
  }
  if (names.has('size')) {
    tips.push('在同一页面里尽量统一尺寸策略，避免相邻组件视觉节奏不一致。')
  }
  if (eventNames.size > 0) {
    tips.push('重要交互建议同时处理 loading、disabled 和成功/失败反馈，不要只处理点击事件本身。')
  }
  if (componentName === 'Icon') {
    tips.push('只安装实际会用到的图标库，未安装对应包时会回退到占位渲染。')
  }
  if (componentName === 'Watermark') {
    tips.push('水印适合用于导出预览、后台截图和敏感信息页面，不建议给所有普通页面默认开启。')
  }

  return tips.slice(0, 4)
}

function buildUsageGuideBlock(componentName, props, events) {
  const category = componentCategories[componentName] || 'display'
  const description = componentDescriptions[componentName] || `${componentName} 组件文档。`
  const useCases = categoryUseCases[category] || categoryUseCases.display
  const tips = buildTipsFromProps(componentName, props, events)

  const lines = []
  lines.push('## 使用说明')
  lines.push('')
  lines.push(GUIDE_START)
  lines.push('')
  lines.push(description)
  lines.push('')
  lines.push('### 适合用在')
  lines.push('')
  for (const item of useCases) {
    lines.push(`- ${item}`)
  }
  lines.push('')
  lines.push('### 导入与最小示例')
  lines.push('')
  lines.push(renderCodeGroupBlock(componentName))
  lines.push('')
  lines.push('### 集成建议')
  lines.push('')
  lines.push('- 样式文件只在应用入口引入一次。')
  lines.push('- 业务状态、接口请求和权限控制放在页面或容器层处理，不要堆进展示组件。')
  lines.push('- 如果这一页有 Storybook 预览，优先先看顶部预览，再对照下方 Props 和 Events。')
  lines.push('')
  if (tips.length > 0) {
    lines.push('### 使用提示')
    lines.push('')
    for (const item of tips) {
      lines.push(`- ${item}`)
    }
    lines.push('')
  }
  lines.push(GUIDE_END)
  lines.push('')
  return lines.join('\n')
}

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

function stripExistingGuide(markdown) {
  return stripSectionByMarkers(markdown, GUIDE_START, GUIDE_END)
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

    doc = stripExistingGuide(doc)
    doc = stripExistingPreview(doc)
    doc = stripExistingSummary(doc)
    const preview = buildStorybookPreviewBlock({ vueDocsId, reactDocsId })
    const summary = buildQuickSummaryBlock({ props, events })
    const guide = buildUsageGuideBlock(dir.name, props, events)
    const topBlocks = [guide, preview, summary].filter(Boolean).join('\n\n')
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
