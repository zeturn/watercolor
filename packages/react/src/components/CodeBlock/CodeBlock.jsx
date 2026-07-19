import React, { useMemo, useState } from 'react'
import './style.css'
import { copyCodeToClipboard, getDiffState, getDisplayLanguage, getVisibleLine, normalizeLanguage, tokenizeLine } from './utils.js'

const CopyIcon = () => (
  <svg className="wc-code-block__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 8h10v12H8z" />
    <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const CheckIcon = () => (
  <svg className="wc-code-block__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
)

export default function CodeBlock({
  code = '',
  language = 'text',
  title,
  showLanguage = true,
  showLineNumbers = true,
  showCopyButton = true,
  diff = false,
  wrap = false,
  maxHeight,
  className = '',
  style,
  onCopy,
  ...props
}) {
  const normalizedLanguage = normalizeLanguage(diff ? 'diff' : language)
  const [copied, setCopied] = useState(false)
  const lines = useMemo(() => String(code ?? '').replace(/\n$/, '').split('\n'), [code])

  const handleCopy = async () => {
    const ok = await copyCodeToClipboard(String(code ?? ''))
    if (ok) {
      setCopied(true)
      onCopy?.(String(code ?? ''))
      window.setTimeout(() => setCopied(false), 1400)
    }
  }

  return (
    <figure
      className={[
        'wc-code-block',
        wrap && 'wc-code-block--wrap',
        diff && 'wc-code-block--diff',
        className,
      ].filter(Boolean).join(' ')}
      style={style}
      {...props}
    >
      <figcaption className="wc-code-block__header">
        <span className="wc-code-block__title">{title || (showLanguage ? getDisplayLanguage(normalizedLanguage) : 'Code')}</span>
        <div className="wc-code-block__actions">
          {showLanguage && title && <span className="wc-code-block__language">{getDisplayLanguage(normalizedLanguage)}</span>}
          {showCopyButton && (
            <button
              className="wc-code-block__copy"
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Copied code' : 'Copy code'}
              title={copied ? '已复制' : '复制代码'}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          )}
        </div>
      </figcaption>

      <pre className="wc-code-block__pre" style={maxHeight ? { maxHeight } : undefined}>
        <code className={`language-${normalizedLanguage}`}>
          {lines.map((line, index) => {
            const state = getDiffState(line, diff)
            const visibleLine = getVisibleLine(line, diff)
            return (
              <span className={`wc-code-block__line wc-code-block__line--${state}`} key={`${index}-${line}`}>
                {showLineNumbers && <span className="wc-code-block__number">{index + 1}</span>}
                {diff && <span className="wc-code-block__marker">{state === 'added' ? '+' : state === 'removed' ? '−' : ' '}</span>}
                <span className="wc-code-block__code">
                  {tokenizeLine(visibleLine, normalizedLanguage).map((token, tokenIndex) => (
                    <span className={`wc-code-token wc-code-token--${token.type}`} key={`${tokenIndex}-${token.value}`}>{token.value}</span>
                  ))}
                  {visibleLine === '' ? '\n' : null}
                </span>
              </span>
            )
          })}
        </code>
      </pre>
    </figure>
  )
}
