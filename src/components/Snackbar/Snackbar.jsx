import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Snackbar({
  open = false,
  message = '',
  severity = 'info',
  variant = 'filled',
  autoHideDuration = 6000,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  action: actionLabel = '',
  closable = true,
  onClose = () => {},
  onAction = () => {},
  children,
}) {
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    setVisible(open)
  }, [open])

  useEffect(() => {
    if (!visible) return
    if (autoHideDuration <= 0) return
    const timer = setTimeout(() => {
      handleClose()
    }, autoHideDuration)
    return () => clearTimeout(timer)
  }, [visible, autoHideDuration])

  const handleClose = () => {
    setVisible(false)
    onClose()
  }

  const handleAction = () => {
    onAction()
  }

  if (!visible) return null

  const baseClasses = 'fixed z-50 max-w-sm w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-4'
  const classes = [baseClasses]
  const { vertical, horizontal } = anchorOrigin
  classes.push(vertical === 'top' ? 'top-4' : 'bottom-4')
  if (horizontal === 'left') classes.push('left-4')
  else if (horizontal === 'right') classes.push('right-4')
  else classes.push('left-1/2 transform -translate-x-1/2')
  if (variant === 'filled') {
    const map = {
      success: 'bg-success-500 text-white border-success-500',
      info: 'bg-primary-500 text-white border-primary-500',
      warning: 'bg-warning-500 text-white border-warning-500',
      error: 'bg-error-500 text-white border-error-500',
    }
    classes.push(map[severity])
  } else if (variant === 'outlined') {
    const map = {
      success: 'border-success-500 text-success-600 dark:text-success-400',
      info: 'border-primary-500 text-primary-600 dark:text-primary-400',
      warning: 'border-warning-500 text-warning-600 dark:text-warning-400',
      error: 'border-error-500 text-error-600 dark:text-error-400',
    }
    classes.push(map[severity])
  } else {
    classes.push('text-neutral-900 dark:text-neutral-100')
  }

  const actionClasses =
    variant === 'filled'
      ? 'text-white hover:bg-white hover:bg-opacity-20 focus:ring-white text-sm font-medium px-3 py-1 rounded-md'
      : {
          success:
            'text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20',
          info: 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
          warning:
            'text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/20',
          error: 'text-error-600 dark:text-error-400 hover:bg-error-50 dark:hover:bg-error-900/20',
        }[severity] +
        ' text-sm font-medium px-3 py-1 rounded-md'

  const closeButtonClasses =
    variant === 'filled'
      ? 'inline-flex rounded-md p-1 text-white hover:bg-white hover:bg-opacity-20'
      : 'inline-flex rounded-md p-1 text-neutral-400 hover:text-neutral-500'

  const node = (
    <div className={classes.join(' ')} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 min-w-0 mr-3">
          {children || <p className="text-sm font-medium">{message}</p>}
        </div>
        {(actionLabel || children?.action) && (
          <div className="flex-shrink-0">
            {children?.action || (
              <button className={actionClasses} onClick={handleAction} type="button">
                {actionLabel}
              </button>
            )}
          </div>
        )}
        {closable && (
          <div className="flex-shrink-0 ml-3">
            <button className={closeButtonClasses} onClick={handleClose} aria-label="关闭" type="button">
              ✖️
            </button>
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(node, document.body)
} 