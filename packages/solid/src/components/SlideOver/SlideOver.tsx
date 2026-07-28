
import { Portal, useOverlayLayer } from '../../interactions'
import { useLocale } from '../../LocaleSolid.tsx'
import './style.css'

/**
 * SlideOver (React)
 * 侧滑面板，支持左右方向、宽度自定义。
 */
const SlideOver = ({ open = false, onClose = () => {}, placement = 'right', width = 400, children, header, footer }) => {
  let panelRef = null
  const { messages } = useLocale()

  const handleClose = () => {
    onClose?.()
  }

  useOverlayLayer({
    open,
    elementRef: panelRef,
    modal: true,
    lockScroll: true,
    restoreFocus: true,
    initialFocus: true,
    closeOnEscape: true,
    closeOnPointerDownOutside: false,
    onEscapeKeyDown: handleClose,
    zIndex: 3000,
  })

  return (
    <Portal>
      {open ? (
        <div class="wc-slideover-wrapper">
          <div class="wc-slideover-overlay" onClick={handleClose} />
          <div
            ref={panelRef}
            class={`wc-slideover-panel wc-slideover-${placement}`}
            style={{ width: typeof width === 'number' ? `${width}px` : width }}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {header && <header class="wc-slideover-header">{header}</header>}
            <div class="wc-slideover-body">{children}</div>
            {footer && <footer class="wc-slideover-footer">{footer}</footer>}
            <button class="wc-slideover-close" type="button" onClick={handleClose} aria-label={messages.closeDialog}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </Portal>
  )
}

export default SlideOver
