import React, { useState } from 'react'
import { colorMap } from './utils.js'
import './style.css'

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