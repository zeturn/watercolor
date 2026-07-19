import { useState, useEffect } from 'react'
import { Table, TableHead, TableRow, TableCell } from '@zeturn/watercolor-react'

// 轻量 Markdown 渲染器 - 支持标题、代码块、表格、列表、段落
export default function Markdown({ content }) {
  const lines = content.split('\n')
  const elements = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // 代码块
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // skip closing ```
      elements.push(
        <pre key={key++} className="code-block my-4">
          <code className={lang ? `language-${lang}` : ''}>{codeLines.join('\n')}</code>
        </pre>
      )
      continue
    }

    // 表格
    if (line.trim().startsWith('|') && i + 1 < lines.length && lines[i + 1].includes('|---')) {
      const headerCells = parseTableRow(line)
      i += 2 // skip header and separator
      const rows = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(parseTableRow(lines[i]))
        i++
      }
      elements.push(
        <div key={key++} className="overflow-x-auto my-4 rounded-xl border border-base-200">
          <Table size="sm">
            <Table.Head>
              <Table.Row>
                {headerCells.map((c, j) => <Table.Cell key={j} component="th">{renderInline(c)}</Table.Cell>)}
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {rows.map((r, ri) => (
                <Table.Row key={ri}>
                  {r.map((c, j) => <Table.Cell key={j}>{renderInline(c)}</Table.Cell>)}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )
      continue
    }

    // 标题
    if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-xl font-semibold mt-8 mb-3 text-base-content">{renderInline(line.slice(4))}</h3>)
      i++
      continue
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold mt-10 mb-4 text-base-content">{renderInline(line.slice(3))}</h2>)
      i++
      continue
    }
    if (line.startsWith('# ')) {
      elements.push(<h1 key={key++} className="text-3xl font-bold mb-4">{renderInline(line.slice(2))}</h1>)
      i++
      continue
    }

    // 无序列表
    if (line.match(/^\s*[-*]\s/)) {
      const items = []
      while (i < lines.length && lines[i].match(/^\s*[-*]\s/)) {
        items.push(lines[i].replace(/^\s*[-*]\s/, ''))
        i++
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1 my-3 text-base-content/70 marker:text-primary">
          {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
        </ul>
      )
      continue
    }

    // 有序列表
    if (line.match(/^\s*\d+\.\s/)) {
      const items = []
      while (i < lines.length && lines[i].match(/^\s*\d+\.\s/)) {
        items.push(lines[i].replace(/^\s*\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-1 my-3 text-base-content/70 marker:text-primary">
          {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
        </ol>
      )
      continue
    }

    // 空行
    if (line.trim() === '') {
      i++
      continue
    }

    // 普通段落
    elements.push(<p key={key++} className="my-3 text-base-content/80 leading-relaxed">{renderInline(line)}</p>)
    i++
  }

  return <div className="max-w-none">{elements}</div>
}

// 解析表格行
function parseTableRow(line) {
  return line.split('|').map(c => c.trim()).filter((c, idx, arr) => !(idx === 0 && c === '') && !(idx === arr.length - 1 && c === ''))
}

// 行内渲染：支持 `code` 和 **bold**
function renderInline(text) {
  const parts = []
  const regex = /(`[^`]+`|\*\*[^*]+\*\*)/g
  let lastIndex = 0
  let match
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const token = match[0]
    if (token.startsWith('`')) {
      parts.push(<code key={key++} className="px-1.5 py-0.5 rounded bg-base-200 text-primary font-mono text-sm">{token.slice(1, -1)}</code>)
    } else if (token.startsWith('**')) {
      parts.push(<strong key={key++} className="font-semibold text-base-content">{token.slice(2, -2)}</strong>)
    }
    lastIndex = match.index + token.length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}
