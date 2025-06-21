import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button/Button.jsx'
import './Dialog.css'

export default function Dialog({
  open = false,
  onClose = () => {},
  children,
  maxWidth = 'sm', // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  fullWidth = false,
  fullScreen = false,
  disableEscapeKeyDown = false,
  disableBackdropClick = false,
  scroll = 'paper', // 'paper' | 'body'
  showCloseButton = true,
}) {
  useEffect(() => {
    if (!open) return

    const handleKey = (e) => {
      if (e.key === 'Escape' && !disableEscapeKeyDown) onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, disableEscapeKeyDown, onClose])

  if (!open) return null

  const dialogClass = `wc-dialog${fullScreen ? ' wc-dialog--fullscreen' : ''}`

  const widthMap = {
    xs: '320px',
    sm: '448px',
    md: '512px',
    lg: '672px',
    xl: '896px',
  }

  const dialogStyles = {}

  if (!fullScreen && maxWidth) {
    dialogStyles.maxWidth = widthMap[maxWidth]
    if (!fullWidth) {
      dialogStyles.margin = '0 auto'
    }
    dialogStyles.marginTop = '32px'
    dialogStyles.marginBottom = '32px'
  }

  dialogStyles.maxHeight = scroll === 'body' ? '100vh' : '90vh'

  const content = (
    <div className="wc-dialog-overlay">
      {/* Backdrop */}
      <div
        className="wc-dialog-backdrop"
        onClick={disableBackdropClick ? undefined : onClose}
      />
      {/* Container */}
      <div className="wc-dialog-container">
        <div className={dialogClass} style={dialogStyles}>
          {showCloseButton && (
            <Button
              variant="text"
              size="sm"
              className="wc-dialog__close"
              onClick={onClose}
            >
              ×
            </Button>
          )}
          <div className="wc-dialog__content">{children}</div>
        </div>
      </div>
    </div>
  )

  return createPortal(content, document.body)
} 