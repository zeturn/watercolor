import { createSignal, createEffect, mergeProps, splitProps, Show } from 'solid-js'
import { useId } from '../../useId'

import Button from '../Button/Button.tsx'
import { Portal, useOverlayLayer } from '../../interactions'
import { useLocale } from '../../LocaleSolid.tsx'
import './style.css'
import {
  getModalClasses,
  getOverlayClasses,
  handleModalClose,
} from './utils.js'

const Modal = (rawProps) => {
  const props = mergeProps({
    visible: false,
    open: false, // 兼容 Dialog 的 open 属性
    title: '',
    size: 'md',
    maxWidth: null, // 兼容 Dialog 的 maxWidth
    closable: true,
    showCloseButton: true, // 兼容 Dialog 的 showCloseButton
    maskClosable: true,
    closeOnOverlay: true, // 兼容 Dialog 的命名
    disableBackdropClick: false, // 兼容 Dialog
    disableEscapeKeyDown: false, // 兼容 Dialog
    centered: true,
    fullWidth: false,
    fullScreen: false,
    position: 'center', // top, center, bottom
    scroll: 'paper', // paper | body
    lockScroll: true,
    zIndex: 1000,
    showOverlay: true,
    className: '',
  }, rawProps)

  const [local, rest] = splitProps(props, [
    'visible', 'open', 'title', 'size', 'maxWidth', 'closable', 'showCloseButton',
    'maskClosable', 'closeOnOverlay', 'disableBackdropClick', 'disableEscapeKeyDown',
    'centered', 'fullWidth', 'fullScreen', 'position', 'scroll', 'lockScroll',
    'zIndex', 'showOverlay', 'className', 'onClose', 'children', 'header', 'footer',
  ])

  const modalId = useId()
  const { messages } = useLocale()
  let modalRef = null

  // 统一处理 visible 和 open
  const isOpen = () => local.visible || local.open
  const [isVisible, setIsVisible] = createSignal(isOpen())

  createEffect(() => {
    setIsVisible(isOpen())
  })

  // 计算实际使用的尺寸（优先使用 maxWidth，然后是 size）
  const modalClasses = () => getModalClasses({
    size: local.maxWidth || local.size,
    fullWidth: local.fullWidth,
    fullScreen: local.fullScreen,
    scroll: local.scroll,
    position: local.position,
    className: local.className,
  })

  const overlayClasses = () => getOverlayClasses({
    centered: local.position === 'center' || local.centered,
    position: local.position,
  })

  const handleClose = () => {
    handleModalClose(setIsVisible, local.onClose)
  }

  const handleOverlayClick = () => {
    const shouldClose = local.maskClosable && local.closeOnOverlay
    if (shouldClose && !local.disableBackdropClick) {
      handleClose()
    }
  }

  useOverlayLayer({
    open: isVisible,
    elementRef: () => modalRef,
    modal: true,
    get lockScroll() { return local.lockScroll },
    restoreFocus: true,
    initialFocus: true,
    get closeOnEscape() { return local.closable && !local.disableEscapeKeyDown },
    closeOnPointerDownOutside: false,
    onEscapeKeyDown: handleClose,
    get zIndex() { return local.zIndex },
  })

  // 决定是否显示关闭按钮
  const shouldShowCloseButton = () => local.closable && (local.showCloseButton !== false)

  return (
    <Show when={isVisible()}>
      <Portal>
        <div
          class={overlayClasses()}
          style={{ 'z-index': local.zIndex }}
          onClick={handleOverlayClick}
          data-testid="modal-overlay"
        >
          {/* 遮罩层 */}
          <Show when={local.showOverlay}>
            <div class="wc-modal__overlay" />
          </Show>

          {/* 模态框主体 */}
          <div
            ref={(el) => { modalRef = el }}
            class={modalClasses()}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={local.title ? `${modalId}-title` : undefined}
            tabIndex={-1}
            {...rest}
          >
            {/* 关闭按钮 */}
            <Show when={shouldShowCloseButton()}>
              <Button
                variant="text"
                size="sm"
                class="wc-modal__close"
                onClick={handleClose}
                aria-label={messages.closeDialog}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </Button>
            </Show>

            {/* 头部 */}
            <Show when={local.title || local.header}>
              <div class="wc-modal__header">
                {local.header || (
                  local.title && (
                    <h3 id={`${modalId}-title`} class="wc-modal__title">
                      {local.title}
                    </h3>
                  )
                )}
              </div>
            </Show>

            {/* 内容 */}
            <div class="wc-modal__body">
              {local.children}
            </div>

            {/* 底部 */}
            <Show when={local.footer}>
              <div class="wc-modal__footer">
                {local.footer}
              </div>
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  )
}

Modal.displayName = 'Modal'

export default Modal
