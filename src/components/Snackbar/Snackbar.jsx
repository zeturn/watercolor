import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const iconMap = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕'
}

export default function Snackbar({
  open = false,
  message = '',
  title = '',
  severity = 'info',
  variant = 'filled',
  autoHideDuration = 6000,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  action: actionLabel = '',
  closable = true,
  showIcon = true,
  showProgress = false,
  onClose = () => {},
  onAction = () => {},
  children,
}) {
  const [visible, setVisible] = useState(open)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    setVisible(open)
    if (open) {
      setProgress(100)
    }
  }, [open])

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
    setVisible(false)
    onClose()
  }

  const handleAction = () => {
    onAction()
  }

  if (!visible) return null

  const baseClasses = 'fixed z-50 w-full max-w-sm bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-4 transition-all duration-300 ease-in-out'
  const classes = [baseClasses]
  
  // Position classes
  const { vertical, horizontal } = anchorOrigin
  classes.push(vertical === 'top' ? 'top-4' : 'bottom-4')
  
  if (horizontal === 'left') classes.push('left-4')
  else if (horizontal === 'right') classes.push('right-4')
  else classes.push('left-1/2 transform -translate-x-1/2')
  
  // Variant styles
  if (variant === 'filled') {
    const colorMap = {
      success: 'bg-success-500 border-success-500',
      info: 'bg-primary-500 border-primary-500',
      warning: 'bg-warning-500 border-warning-500',
      error: 'bg-error-500 border-error-500',
    }
    classes.push(colorMap[severity])
  } else if (variant === 'outlined') {
    const colorMap = {
      success: 'border-success-500 text-success-600 dark:text-success-400 border-l-4',
      info: 'border-primary-500 text-primary-600 dark:text-primary-400 border-l-4',
      warning: 'border-warning-500 text-warning-600 dark:text-warning-400 border-l-4',
      error: 'border-error-500 text-error-600 dark:text-error-400 border-l-4',
    }
    classes.push(colorMap[severity])
  } else {
    classes.push('text-neutral-900 dark:text-neutral-100')
  }

  const actionClasses =
    variant === 'filled'
      ? 'hover:bg-white hover:bg-opacity-20 focus:ring-white text-sm font-medium px-3 py-1 rounded-md transition-colors'
      : {
          success: 'text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20',
          info: 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
          warning: 'text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/20',
          error: 'text-error-600 dark:text-error-400 hover:bg-error-50 dark:hover:bg-error-900/20',
        }[severity] + ' text-sm font-medium px-3 py-1 rounded-md transition-colors'

  const closeButtonClasses =
    variant === 'filled'
      ? 'inline-flex rounded-md p-1 hover:bg-white hover:bg-opacity-20 transition-colors'
      : 'inline-flex rounded-md p-1 text-neutral-400 hover:text-neutral-500 transition-colors'

  const iconClasses = variant === 'filled' 
    ? 'text-gray' 
    : {
        success: 'text-success-500',
        info: 'text-primary-500',
        warning: 'text-warning-500',
        error: 'text-error-500'
      }[severity]

  const node = (
    <div className={classes.join(' ')} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="flex items-start gap-3 w-full">
        {/* Icon */}
        {showIcon && (
          <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center font-bold text-lg ${iconClasses}`}>
            {iconMap[severity]}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-semibold text-sm mb-1 leading-tight">
              {title}
            </div>
          )}
          {children || <div className="text-sm">{message}</div>}
        </div>
        
        {/* Action */}
        {(actionLabel || children?.action) && (
          <div className="flex-shrink-0">
            {children?.action || (
              <button className={actionClasses} onClick={handleAction} type="button">
                {actionLabel}
              </button>
            )}
          </div>
        )}
        
        {/* Close Button */}
        {closable && (
          <div className="flex-shrink-0">
            <button className={closeButtonClasses} onClick={handleClose} aria-label="关闭" type="button">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      {/* Progress Bar */}
      {showProgress && autoHideDuration > 0 && (
        <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
          <div 
            className={`h-1 rounded-full transition-all duration-100 ${
              variant === 'filled' 
                ? 'bg-white bg-opacity-30' 
                : {
                    success: 'bg-success-500',
                    info: 'bg-primary-500',
                    warning: 'bg-warning-500',
                    error: 'bg-error-500'
                  }[severity]
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  )

  return createPortal(node, document.body)
} 