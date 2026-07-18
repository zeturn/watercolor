import React from 'react'
import './style.css'
import { getStatusClasses, getStatusText } from './utils.js'

const Status = ({
  status = 'default',
  size = 'md',
  showText = false,
  animated = false,
  animationType = 'auto',
  className = '',
  ...props
}) => {
  const statusClasses = getStatusClasses({ status, size, showText, animated, animationType, className })
  const statusTextContent = getStatusText(status)

  return (
    <span
      className={statusClasses}
      role="status"
      title={statusTextContent}
      aria-label={statusTextContent}
      {...props}
    >
      {showText && <span className="wc-status__text">{statusTextContent}</span>}
    </span>
  )
}

Status.displayName = 'Status'

export default Status
