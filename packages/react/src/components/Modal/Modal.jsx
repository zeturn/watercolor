import React, { useState, useEffect, useId, useRef, useCallback } from 'react'
import Button from '../Button/Button.jsx'
import { Portal, useOverlayLayer } from '../../interactions.jsx'
import { useLocale } from '../../LocaleReact.tsx'
import './style.css'
import { 
  getModalClasses, 
  getOverlayClasses,
  handleModalClose,
} from './utils.js'

const Modal = ({
  // 基础属性
  visible = false,
  open = false, // 兼容 Dialog 的 open 属性
  title = '',
  size = 'md',
  maxWidth = null, // 兼容 Dialog 的 maxWidth
  
  // 显示控制
  closable = true,
  showCloseButton = true, // 兼容 Dialog 的 showCloseButton
  maskClosable = true,
  closeOnOverlay = true, // 兼容 Dialog 的命名
  disableBackdropClick = false, // 兼容 Dialog
  disableEscapeKeyDown = false, // 兼容 Dialog
  
  // 布局
  centered = true,
  fullWidth = false,
  fullScreen = false,
  position = 'center', // top, center, bottom
  
  // 滚动
  scroll = 'paper', // paper | body
  lockScroll = true,
  
  // 样式
  zIndex = 1000,
  showOverlay = true,
  className = '',
  
  // 回调
  onClose,
  
  // 内容
  children,
  header,
  footer,
  
  ...props
}) => {
  const modalId = useId()
  const [isVisible, setIsVisible] = useState(visible || open)
  const modalRef = useRef(null)
  const { messages } = useLocale()

  // 统一处理 visible 和 open
  const isOpen = visible || open
  
  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  // 计算实际使用的尺寸（优先使用 maxWidth，然后是 size）
  const actualSize = maxWidth || size
  
  // 计算样式类名
  const modalClasses = getModalClasses({
    size: actualSize,
    fullWidth,
    fullScreen,
    scroll,
    position,
    className
  })
  
  const overlayClasses = getOverlayClasses({
    centered: position === 'center' || centered,
    position
  })

  const handleClose = useCallback(() => {
    handleModalClose(setIsVisible, onClose)
  }, [onClose])

  const handleOverlayClick = useCallback(() => {
    const shouldClose = maskClosable && closeOnOverlay
    const isDisabled = disableBackdropClick
    
    if (shouldClose && !isDisabled) {
      handleClose()
    }
  }, [closeOnOverlay, disableBackdropClick, handleClose, maskClosable])

  useOverlayLayer({
    open: isVisible,
    elementRef: modalRef,
    modal: true,
    lockScroll,
    restoreFocus: true,
    initialFocus: true,
    closeOnEscape: closable && !disableEscapeKeyDown,
    closeOnPointerDownOutside: false,
    onEscapeKeyDown: handleClose,
    zIndex,
  })

  if (!isVisible) return null

  // 决定是否显示关闭按钮
  const shouldShowCloseButton = closable && (showCloseButton !== false)

  const modalContent = (
    <div 
      className={overlayClasses}
      style={{ zIndex }}
      onClick={handleOverlayClick}
      data-testid="modal-overlay"
    >
      {/* 遮罩层 */}
      {showOverlay && (
        <div className="wc-modal__overlay" />
      )}
      
      {/* 模态框主体 */}
      <div
        ref={modalRef}
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${modalId}-title` : undefined}
        tabIndex={-1}
        {...props}
      >
        {/* 关闭按钮 */}
        {shouldShowCloseButton && (
          <Button
            variant="text"
            size="sm"
            className="wc-modal__close"
            onClick={handleClose}
            aria-label={messages.closeDialog}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </Button>
        )}

        {/* 头部 */}
        {(title || header) && (
          <div className="wc-modal__header">
            {header || (
              title && (
                <h3 id={`${modalId}-title`} className="wc-modal__title">
                  {title}
                </h3>
              )
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

  return <Portal>{modalContent}</Portal>
}

Modal.displayName = 'Modal'

export default Modal
