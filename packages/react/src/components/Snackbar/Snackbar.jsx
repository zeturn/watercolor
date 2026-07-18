import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './style.css'
import { useLocale } from '../../LocaleReact.tsx'

const StatusIcon = ({ severity }) => {
  const detail = severity === 'success'
    ? <path d="m6.8 10.1 2.1 2.1 4.4-4.6" />
    : severity === 'info'
      ? <><path d="M10 9v4" /><path d="M10 6.5h.01" /></>
      : severity === 'warning'
        ? <><path d="M10 6.5v4.2" /><path d="M10 13.5h.01" /></>
        : <><path d="m7.5 7.5 5 5" /><path d="m12.5 7.5-5 5" /></>

  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" />
      {detail}
    </svg>
  )
}

export default function Snackbar({
  open = false,
  modelValue = undefined, // align with Vue v-model prop
  message = '',
  title = '',
  severity = 'info',
  variant = 'standard',
  autoHideDuration = 6000,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  action: actionLabel = '',
  closable = true,
  showIcon = true,
  showProgress = false,
  onClose = () => {},
  onUpdateModelValue, // emit when modelValue changes
  onAction = () => {},
  children,
}) {
  const { messages } = useLocale()
  // Determine controlled vs uncontrolled mode
  const isControlled = modelValue !== undefined
  const [visible, setVisible] = useState(isControlled ? modelValue : open)
  const [progress, setProgress] = useState(100)

  // Sync prop changes
  useEffect(() => {
    const incoming = isControlled ? modelValue : open
    setVisible(incoming)
    if (incoming) {
      setProgress(100)
    }
  }, [open, modelValue])

  useEffect(() => {
    if (!visible || autoHideDuration <= 0) return

    const startTime = Date.now()
    const timer = setTimeout(() => {
      handleClose()
    }, autoHideDuration)

    // Progress bar animation
    if (showProgress) {
      const progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const remaining = Math.max(0, 100 - (elapsed / autoHideDuration) * 100)
        setProgress(remaining)

        if (remaining <= 0) {
          clearInterval(progressTimer)
        }
      }, 50)

      return () => {
        clearTimeout(timer)
        clearInterval(progressTimer)
      }
    }

    return () => clearTimeout(timer)
  }, [visible, autoHideDuration, showProgress])

  const handleClose = () => {
    if (isControlled) {
      onUpdateModelValue?.(false)
    } else {
      setVisible(false)
    }
    onClose()
  }

  const handleAction = () => {
    onAction()
  }

  if (!visible) return null

  /* ------------------------------------------------------------------
   * Adopt Watercolor CSS classes (wc-*) instead of Tailwind utilities.
   * This guarantees that the component works in Storybook without the
   * Tailwind runtime and stays visually consistent with the Vue version.
   * ------------------------------------------------------------------ */

  // Watercolor style classes
  const classes = [
    'wc-snackbar',
    `wc-snackbar--${variant}`,
    `wc-snackbar--${severity}`,
  ]

  // Inline positioning (20px margin = var(--wc-snackbar-margin))
  const positionStyle = { position: 'fixed', zIndex: 1400 }
  const { vertical, horizontal } = anchorOrigin

  if (vertical === 'top') positionStyle.top = '20px'
  else positionStyle.bottom = '20px'

  if (horizontal === 'left') positionStyle.left = '20px'
  else if (horizontal === 'right') positionStyle.right = '20px'
  else {
    positionStyle.left = '50%'
    positionStyle.transform = 'translateX(-50%)'
  }

  // Inner element classes derived from style.css
  const iconClasses = 'wc-snackbar__icon'
  const actionClasses = 'wc-snackbar__action'
  const closeButtonClasses = 'wc-snackbar__close'

  const node = (
    <div
      className={classes.join(' ')}
      style={positionStyle}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {showIcon && <div className={iconClasses}><StatusIcon severity={severity} /></div>}

      <div className="wc-snackbar__content">
        {title && <div className="wc-snackbar__title">{title}</div>}
        {children || <div className="wc-snackbar__message">{message}</div>}
      </div>

      {(actionLabel || children?.action) && (
        <div className="wc-snackbar__actions">
          {children?.action || (
            <button type="button" className={actionClasses} onClick={handleAction}>
              {actionLabel}
            </button>
          )}
        </div>
      )}

      {closable && (
        <button
          type="button"
          className={closeButtonClasses}
          aria-label={messages.close}
          onClick={handleClose}
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            <path d="m6 6 8 8M14 6l-8 8" />
          </svg>
        </button>
      )}

      {showProgress && autoHideDuration > 0 && (
        <div className="wc-snackbar__progress">
          <div className="wc-snackbar__progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  )

  return createPortal(node, document.body)
}
