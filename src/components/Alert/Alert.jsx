import React, { useState } from 'react'

const colorMap = {
  success: {
    standard: 'bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800 text-success-800 dark:text-success-200',
    filled: 'bg-success-500 border-success-500 text-white',
    outlined: 'bg-transparent border-success-500 text-success-600 dark:text-success-400',
  },
  info: {
    standard: 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-800 dark:text-primary-200',
    filled: 'bg-primary-500 border-primary-500 text-white',
    outlined: 'bg-transparent border-primary-500 text-primary-600 dark:text-primary-400',
  },
  warning: {
    standard: 'bg-warning-50 dark:bg-warning-900/20 border-warning-200 dark:border-warning-800 text-warning-800 dark:text-warning-200',
    filled: 'bg-warning-500 border-warning-500 text-white',
    outlined: 'bg-transparent border-warning-500 text-warning-600 dark:text-warning-400',
  },
  error: {
    standard: 'bg-error-50 dark:bg-error-900/20 border-error-200 dark:border-error-800 text-error-800 dark:text-error-200',
    filled: 'bg-error-500 border-error-500 text-white',
    outlined: 'bg-transparent border-error-500 text-error-600 dark:text-error-400',
  },
}

export function Alert({
  severity = 'info',
  variant = 'standard',
  title = '',
  closable = false,
  hideIcon = false,
  className = '',
  children,
  onClose = () => {},
}) {
  const [closed, setClosed] = useState(false)

  if (closed) return null

  const handleClose = () => {
    setClosed(true)
    onClose()
  }

  const classes = [
    'flex items-start p-4 rounded-lg border transition-all duration-200',
    colorMap[severity][variant],
    className,
  ].join(' ')

  return (
    <div className={classes} role="alert">
      {!hideIcon && <span className="mr-2">⚠️</span>}
      <div className="flex-1 min-w-0">
        {title && <div className="font-medium mb-1">{title}</div>}
        <div className="text-sm">{children}</div>
      </div>
      {closable && (
        <button
          type="button"
          className="ml-3 inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
          onClick={handleClose}
        >
          ✖️
        </button>
      )}
    </div>
  )
}

export default Alert 