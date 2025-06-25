import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button/Button.jsx'
import { 
  getModalClasses, 
  getOverlayClasses,
  handleModalClose,
  handleOverlayClick as utilHandleOverlayClick,
  handleKeyDown as utilHandleKeyDown,
  focusDialog,
  createFocusTrap
} from './utils.js'
import './style.css'

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
  const [isVisible, setIsVisible] = useState(visible || open)
  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)
  const focusTrapCleanup = useRef(null)

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

  const handleClose = () => {
    handleModalClose(setIsVisible, onClose)
  }

  const handleOverlayClick = () => {
    const shouldClose = maskClosable || closeOnOverlay
    const isDisabled = disableBackdropClick
    
    if (shouldClose && !isDisabled) {
      handleClose()
    }
  }

  const handleKeyDown = (e) => {
    const canClose = closable && !disableEscapeKeyDown
    utilHandleKeyDown(e, canClose, handleClose)
  }

  // 焦点管理
  useEffect(() => {
    if (isVisible) {
      // 保存当前焦点元素
      previousActiveElement.current = document.activeElement
      
      // 设置焦点到模态框
      setTimeout(() => {
        if (modalRef.current) {
          focusDialog(modalRef.current)
          // 创建焦点陷阱
          focusTrapCleanup.current = createFocusTrap(modalRef.current)
        }
      }, 100)
      
      // 添加键盘事件监听
      document.addEventListener('keydown', handleKeyDown)
      
      // 滚动锁定
      if (lockScroll) {
        document.body.style.overflow = 'hidden'
      }
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        
        // 清理焦点陷阱
        if (focusTrapCleanup.current) {
          focusTrapCleanup.current()
          focusTrapCleanup.current = null
        }
        
        // 恢复焦点
        if (previousActiveElement.current && previousActiveElement.current.focus) {
          previousActiveElement.current.focus()
        }
        
        // 恢复滚动
        if (lockScroll) {
          document.body.style.overflow = ''
        }
      }
    }
  }, [isVisible, closable, disableEscapeKeyDown, lockScroll])

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
        aria-labelledby={title ? 'modal-title' : undefined}
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
            aria-label="关闭"
          >
            ×
          </Button>
        )}

        {/* 头部 */}
        {(title || header) && (
          <div className="wc-modal__header">
            {header || (
              title && (
                <h3 id="modal-title" className="wc-modal__title">
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

  return createPortal(modalContent, document.body)
}

Modal.displayName = 'Modal'

export default Modal 