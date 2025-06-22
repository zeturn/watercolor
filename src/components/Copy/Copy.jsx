import React, { useState, useEffect } from 'react'
import { 
  getCopyClasses, 
  getCurrentIcon, 
  getCurrentLabel, 
  getTooltipText,
  getTooltipClasses,
  handleCopyOperation 
} from './utils.js'
import './style.css'

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

  const currentIcon = getCurrentIcon(copied, copyError)
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

  return (
    <div className={copyClasses} onClick={handleCopy}>
      {children ?? <span className="wc-copy-text">{text}</span>}
      <div className="wc-copy-action">
        {Icon ? (
          <Icon className="wc-copy-icon" />
        ) : (
          <span className="wc-copy-icon" dangerouslySetInnerHTML={{ __html: currentIcon }} />
        )}
        {showLabel && <span className="wc-copy-label">{currentLabel}</span>}
      </div>
      {showTooltip && tooltipVisible && (
        <div className={tooltipClasses}>
          {tooltipText}
        </div>
      )}
    </div>
  )
}

export default Copy