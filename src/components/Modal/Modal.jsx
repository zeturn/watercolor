import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { 
  getModalClasses, 
  getOverlayClasses,
  handleModalClose,
  handleOverlayClick as utilHandleOverlayClick,
  handleKeyDown as utilHandleKeyDown
} from './utils.js'
import './style.css'

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

  const modalClasses = getModalClasses(size, centered, className)
  const overlayClasses = getOverlayClasses(centered)

  const handleClose = () => {
    handleModalClose(setIsVisible, onClose)
  }

  const handleOverlayClick = () => {
    utilHandleOverlayClick(maskClosable, handleClose)
  }

  const handleKeyDown = (e) => {
    utilHandleKeyDown(e, closable, handleClose)
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
      className={overlayClasses}
      onClick={handleOverlayClick}
    >
      <div
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* 头部 */}
        {(title || header || closable) && (
          <div className="wc-modal__header">
            {header || (
              title && (
                <h3 className="wc-modal__title">
                  {title}
                </h3>
              )
            )}
            {closable && (
              <button
                className="wc-modal__close"
                onClick={handleClose}
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* 内容 */}
        <div className="wc-modal__body">
          {children}
        </div>

        {/* 底部 */}
        {footer && (
          <div className="wc-modal__footer">
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