import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './style.css'

/**
 * SlideOver (React)
 * 侧滑面板，支持左右方向、宽度自定义。
 */
const SlideOver = ({ open = false, onClose = () => {}, placement = 'right', width = 400, children, header, footer }) => {
  const panelRef = useRef(null)
  const previousActiveElement = useRef(null)

  // ESC 关闭
  useEffect(() => {
    if (!open) return
    previousActiveElement.current = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => panelRef.current?.focus())
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      previousActiveElement.current?.focus?.()
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    open ? (
      <div className="wc-slideover-wrapper">
        <div className="wc-slideover-overlay" onClick={onClose} />
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
          <button className="wc-slideover-close" type="button" onClick={onClose} aria-label="关闭">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>
    ) : null,
    document.body
  )
}

export default SlideOver
