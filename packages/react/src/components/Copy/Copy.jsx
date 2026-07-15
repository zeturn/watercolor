import React, { useState } from 'react'
import './style.css'
import { 
  getCopyClasses, 
  getCurrentLabel, 
  getTooltipText,
  getTooltipClasses,
  handleCopyOperation 
} from './utils.js'

const CopyStateIcon = ({ copied, error }) => {
  if (copied) {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" />
        <path d="m6.8 10.1 2.1 2.1 4.4-4.6" />
      </svg>
    )
  }

  if (error) {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" />
        <path d="m7.5 7.5 5 5M12.5 7.5l-5 5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <rect x="6.5" y="6.5" width="9" height="9" rx="2" />
      <path d="M13.5 6.5v-1A2 2 0 0 0 11.5 3.5h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" />
    </svg>
  )
}

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

  const copyClasses = getCopyClasses({
    variant,
    size,
    copied,
    copyError,
    className
  }).join(' ')

  const currentLabel = getCurrentLabel(copied, copyError, copyLabel, copiedLabel)
  const tooltipText = getTooltipText(copied, copyError, tooltipSuccess, tooltipError)
  const tooltipClasses = getTooltipClasses(copied, copyError)

  const handleCopy = async () => {
    await handleCopyOperation(
      text,
      onCopy,
      onError,
      setCopied,
      setCopyError,
      setTooltipVisible,
      showTooltip,
      resetDelay
    )
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCopy()
    }
  }

  return (
    <div className={copyClasses} role="button" tabIndex="0" aria-label={currentLabel} onClick={handleCopy} onKeyDown={handleKeyDown}>
      {children ?? <span className="wc-copy-text">{text}</span>}
      <div className="wc-copy-action">
        {Icon ? (
          <Icon className="wc-copy-icon" />
        ) : (
          <span className="wc-copy-icon"><CopyStateIcon copied={copied} error={copyError} /></span>
        )}
        {showLabel && <span className="wc-copy-label">{currentLabel}</span>}
      </div>
      {showTooltip && tooltipVisible && (
        <div className={tooltipClasses} role="status">
          {tooltipText}
        </div>
      )}
    </div>
  )
}

export default Copy
