import React, { useState, useEffect } from 'react'

const Toast = ({
  message,
  title = '',
  type = 'info',
  duration = 4000,
  closable = true,
  showIcon = true,
  position = 'top-right',
  onClose,
  className = '',
  ...props
}) => {
  const [visible, setVisible] = useState(true)

  const colorMap = {
    info: { bg: '#e8f4ff', text: '#0070f3', border: '#1a8cff' },
    success: { bg: '#ecfdf5', text: '#047857', border: '#10b981' },
    warning: { bg: '#fffbeb', text: '#b45309', border: '#f59e0b' },
    error: { bg: '#fef2f2', text: '#b91c1c', border: '#ef4444' }
  }

  const iconMap = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕'
  }

  const toastClasses = [
    'wc-toast',
    `wc-toast--${type}`,
    `wc-toast--${position}`,
    className
  ].filter(Boolean).join(' ')

  const toastStyles = {
    backgroundColor: colorMap[type]?.bg || colorMap.info.bg,
    color: colorMap[type]?.text || colorMap.info.text,
    borderLeftColor: colorMap[type]?.border || colorMap.info.border,
    display: visible ? 'flex' : 'none'
  }

  const handleClose = () => {
    setVisible(false)
    if (onClose) {
      setTimeout(() => {
        onClose()
      }, 300)
    }
  }

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration])

  if (!visible) return null

  return (
    <div
      className={toastClasses}
      style={toastStyles}
      {...props}
    >
      {showIcon && (
        <div className="wc-toast__icon">
          {iconMap[type] || iconMap.info}
        </div>
      )}
      
      <div className="wc-toast__content">
        {title && <div className="wc-toast__title">{title}</div>}
        <div className="wc-toast__message">{message}</div>
      </div>
      
      {closable && (
        <button
          className="wc-toast__close"
          onClick={handleClose}
        >
          ×
        </button>
      )}
    </div>
  )
}

Toast.displayName = 'Toast'

export default Toast 