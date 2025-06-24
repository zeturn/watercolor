import React, { useState } from 'react'
import { getAlertClasses, getIconContent } from './utils.js'
import './style.css'

export function Alert({
  type = 'info',
  variant = 'standard',
  title = '',
  closable = false,
  showIcon = true,
  className = '',
  children,
  onClose = () => {},
}) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleClose = () => {
    setVisible(false)
    onClose()
  }

  const alertClasses = getAlertClasses(type, variant)
  const iconContent = getIconContent(type)

  const classes = [
    ...alertClasses,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} role="alert">
      {showIcon && (
        <div className="wc-alert-icon">
          <span>{iconContent}</span>
        </div>
      )}
      <div className="wc-alert-content">
        {title && <div className="wc-alert-title">{title}</div>}
        <div className="wc-alert-message">
          {children}
        </div>
      </div>
      {closable && (
        <button
          type="button"
          className="wc-alert-close"
          aria-label="关闭"
          onClick={handleClose}
        >
          ×
        </button>
      )}
    </div>
  )
}

export default Alert 