import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({
  visible = false,
  title = '',
  size = 'md',
  closable = true,
  maskClosable = true,
  centered = false,
  onClose,
  children,
  header,
  footer,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(visible)

  useEffect(() => {
    setIsVisible(visible)
  }, [visible])

  const modalClasses = [
    'wc-modal',
    `wc-modal--${size}`,
    centered ? 'wc-modal--centered' : '',
    className
  ].filter(Boolean).join(' ')

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) {
      setTimeout(() => {
        onClose()
      }, 300)
    }
  }

  const handleOverlayClick = () => {
    if (maskClosable) {
      handleClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && closable) {
      handleClose()
    }
  }

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isVisible, closable])

  if (!isVisible) return null

  const modalContent = (
    <div 
      className="wc-modal-overlay" 
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}
    >
      <div
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          width: '100%',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
          maxWidth: size === 'sm' ? '400px' : 
                   size === 'md' ? '500px' : 
                   size === 'lg' ? '700px' : 
                   size === 'xl' ? '900px' : '500px'
        }}
        {...props}
      >
        {/* 头部 */}
        {(title || header || closable) && (
          <div 
            className="wc-modal__header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px 24px 0 24px',
              borderBottom: '1px solid #e4e4e7',
              marginBottom: '24px',
              paddingBottom: '16px'
            }}
          >
            {header || (
              title && (
                <h3 
                  className="wc-modal__title"
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#18181b',
                    margin: 0
                  }}
                >
                  {title}
                </h3>
              )
            )}
            {closable && (
              <button
                className="wc-modal__close"
                onClick={handleClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#71717a',
                  transition: 'color 0.2s ease',
                  padding: 0,
                  lineHeight: 1
                }}
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* 内容 */}
        <div 
          className="wc-modal__body"
          style={{
            padding: '0 24px',
            color: '#3f3f46',
            lineHeight: 1.6
          }}
        >
          {children}
        </div>

        {/* 底部 */}
        {footer && (
          <div 
            className="wc-modal__footer"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              padding: '24px 24px 24px 24px',
              borderTop: '1px solid #e4e4e7',
              marginTop: '24px',
              paddingTop: '16px'
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

Modal.displayName = 'Modal'

export default Modal 