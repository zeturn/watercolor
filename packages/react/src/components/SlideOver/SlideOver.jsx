import React, { useCallback, useRef } from 'react'
import { Portal, useOverlayLayer } from '../../interactions.jsx'
import './style.css'

/**
 * SlideOver (React)
 * 侧滑面板，支持左右方向、宽度自定义。
 */
const SlideOver = ({ open = false, onClose = () => {}, placement = 'right', width = 400, children, header, footer }) => {
  const panelRef = useRef(null)

  const handleClose = useCallback(() => {
    onClose?.()
  }, [onClose])

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
        <div className="wc-slideover-wrapper">
          <div className="wc-slideover-overlay" onClick={handleClose} />
          <div
            ref={panelRef}
            className={`wc-slideover-panel wc-slideover-${placement}`}
            style={{ width: typeof width === 'number' ? `${width}px` : width }}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {header && <header className="wc-slideover-header">{header}</header>}
            <div className="wc-slideover-body">{children}</div>
            {footer && <footer className="wc-slideover-footer">{footer}</footer>}
            <button className="wc-slideover-close" type="button" onClick={handleClose} aria-label="关闭">
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
