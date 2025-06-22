import React, { useState, useEffect } from 'react'
import { 
  getToastClasses, 
  getToastStyles, 
  getToastIcon, 
  handleToastClose,
  setToastTimer 
} from './utils.js'
import './style.css'

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

  const toastClasses = getToastClasses(type, position, className)
  const toastStyles = getToastStyles(type, visible)

  const handleClose = () => {
    handleToastClose(setVisible, onClose)
  }

  useEffect(() => {
    const timer = setToastTimer(duration, handleClose)
    return () => {
      if (timer) clearTimeout(timer)
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
          {getToastIcon(type)}
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