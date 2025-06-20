import React, { useState, useEffect } from 'react'

const baseClasses = 'wc-copy'

export function Copy({
  text,
  variant = 'default',
  size = 'md',
  showLabel = true,
  showTooltip = true,
  copyLabel = '复制',
  copiedLabel = '已复制',
  tooltipSuccess = '复制成功!',
  tooltipError = '复制失败',
  resetDelay = 2000,
  onCopy = () => {},
  onError = () => {},
  className = '',
  children,
  icon: Icon,
}) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const currentIcon = () => {
    if (copyError) return '❌'
    if (copied) return '✓'
    return '📋'
  }

  const currentLabel = () => {
    if (copyError) return '错误'
    if (copied) return copiedLabel
    return copyLabel
  }

  const tooltipText = () => {
    if (copyError) return tooltipError
    if (copied) return tooltipSuccess
    return ''
  }

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.left = '-999999px'
        ta.style.top = '-999999px'
        document.body.appendChild(ta)
        ta.focus()
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setCopyError(false)
      onCopy(text)
    } catch (e) {
      setCopied(false)
      setCopyError(true)
      onError(e)
    }

    if (showTooltip) {
      setTooltipVisible(true)
      setTimeout(() => setTooltipVisible(false), 1500)
    }

    setTimeout(() => {
      setCopied(false)
      setCopyError(false)
    }, resetDelay)
  }

  const classes = [
    baseClasses,
    `wc-copy--${variant}`,
    `wc-copy--${size}`,
    copied ? 'wc-copy--copied' : '',
    copyError ? 'wc-copy--error' : '',
    className,
  ].filter(Boolean)

  return (
    <div className={classes.join(' ')} onClick={handleCopy}>
      {children ?? <span className="wc-copy-text">{text}</span>}
      <div className="wc-copy-action">
        {Icon ? (
          <Icon className="wc-copy-icon" />
        ) : (
          <span className="wc-copy-icon" dangerouslySetInnerHTML={{ __html: currentIcon() }} />
        )}
        {showLabel && <span className="wc-copy-label">{currentLabel()}</span>}
      </div>
      {showTooltip && tooltipVisible && (
        <div
          className={`wc-copy-tooltip ${copied ? 'wc-copy-tooltip--success' : ''}`}
        >
          {tooltipText()}
        </div>
      )}
    </div>
  )
}

export default Copy