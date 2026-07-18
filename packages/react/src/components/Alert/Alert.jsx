import React, { useState } from 'react'
import './style.css'
import { getAlertClasses } from './utils.js'
import { useLocale } from '../../LocaleReact.tsx'

const AlertIcon = ({ type }) => {
  const detail = type === 'success'
    ? <path d="m6.8 10.1 2.1 2.1 4.4-4.6" />
    : type === 'info'
      ? <><path d="M10 9v4" /><path d="M10 6.5h.01" /></>
      : type === 'warning'
        ? <><path d="M10 6.5v4.2" /><path d="M10 13.5h.01" /></>
        : <><path d="m7.5 7.5 5 5" /><path d="m12.5 7.5-5 5" /></>

  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" />
      {detail}
    </svg>
  )
}

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
  const { messages } = useLocale()

  if (!visible) return null

  const handleClose = () => {
    setVisible(false)
    onClose()
  }

  const alertClasses = getAlertClasses(type, variant)
  const classes = [
    ...alertClasses,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} role="alert">
      {showIcon && (
        <div className="wc-alert-icon">
          <AlertIcon type={type} />
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
          aria-label={messages.close}
          onClick={handleClose}
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            <path d="m6 6 8 8M14 6l-8 8" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Alert
