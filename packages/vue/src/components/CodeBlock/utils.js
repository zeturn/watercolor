const KEYWORDS = {
  javascript: ['await', 'async', 'break', 'case', 'catch', 'class', 'const', 'continue', 'default', 'else', 'export', 'extends', 'finally', 'for', 'from', 'function', 'if', 'import', 'let', 'new', 'return', 'switch', 'throw', 'try', 'typeof', 'var', 'while'],
  typescript: ['await', 'async', 'break', 'case', 'catch', 'class', 'const', 'continue', 'default', 'else', 'export', 'extends', 'finally', 'for', 'from', 'function', 'if', 'import', 'interface', 'let', 'new', 'return', 'type', 'switch', 'throw', 'try', 'typeof', 'var', 'while'],
  python: ['and', 'as', 'async', 'await', 'class', 'def', 'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'if', 'import', 'in', 'is', 'lambda', 'None', 'not', 'or', 'pass', 'raise', 'return', 'True', 'try', 'while', 'with', 'yield'],
  json: ['true', 'false', 'null'],
  css: ['important', 'media', 'supports'],
  shell: ['cd', 'cp', 'curl', 'echo', 'export', 'git', 'grep', 'mkdir', 'npm', 'pnpm', 'rm', 'yarn'],
}

export function normalizeLanguage(language = '') {
  const value = String(language || '').trim().toLowerCase()
  if (value === 'js' || value === 'jsx') return 'javascript'
  if (value === 'ts' || value === 'tsx') return 'typescript'
  if (value === 'py') return 'python'
  if (value === 'sh' || value === 'bash' || value === 'zsh') return 'shell'
  return value || 'text'
}

export function getDisplayLanguage(language = '') {
  const normalized = normalizeLanguage(language)
  const labels = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    json: 'JSON',
    shell: 'Shell',
    css: 'CSS',
    html: 'HTML',
    diff: 'Diff',
    text: 'Text',
  }
  return labels[normalized] || normalized.toUpperCase()
}

export function getDiffState(line = '', diff = false) {
  if (!diff) return 'context'
  if (line.startsWith('+') && !line.startsWith('+++')) return 'added'
  if (line.startsWith('-') && !line.startsWith('---')) return 'removed'
  return 'context'
}

export function getVisibleLine(line = '', diff = false) {
  const state = getDiffState(line, diff)
  return state === 'added' || state === 'removed' ? line.slice(1) : line
}

function pushText(tokens, value) {
  if (value) tokens.push({ type: 'text', value })
}

export function tokenizeLine(line = '', language = 'text') {
  const normalized = normalizeLanguage(language)
  const keywords = KEYWORDS[normalized] || []
  const keywordPattern = keywords.length ? keywords.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') : null
  const pattern = new RegExp([
    '(?<comment>#.*$|//.*$|/\\*[\\s\\S]*?\\*/)',
    "(?<string>`[^`]*`|\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*')",
    '(?<number>\\b\\d+(?:\\.\\d+)?\\b)',
    normalized === 'json' ? '(?<key>"(?:\\\\.|[^"\\\\])*"(?=\\s*:))' : null,
    keywordPattern ? `(?<keyword>\\b(?:${keywordPattern})\\b)` : null,
    '(?<operator>[{}()[\\].,;:+\\-*/%=<>!|&]+)',
  ].filter(Boolean).join('|'), 'g')

  const tokens = []
  let index = 0
  for (const match of line.matchAll(pattern)) {
    if (match.index > index) pushText(tokens, line.slice(index, match.index))
    const groups = match.groups || {}
    const type = Object.entries(groups).find(([, value]) => value !== undefined)?.[0] || 'text'
    tokens.push({ type, value: match[0] })
    index = match.index + match[0].length
  }
  pushText(tokens, line.slice(index))
  return tokens
}

export async function copyCodeToClipboard(code) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(code)
    return true
  }
  if (typeof document === 'undefined') return false
  const textarea = document.createElement('textarea')
  textarea.value = code
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const ok = document.execCommand('copy')
  document.body.removeChild(textarea)
  return ok
}
