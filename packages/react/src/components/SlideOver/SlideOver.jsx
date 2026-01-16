import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * SlideOver (React)
 * 侧滑面板，支持左右方向、宽度自定义。
 */
const SlideOver = ({ open = false, onClose = () => {}, placement = 'right', width = 400, children, header, footer }) => {
  // ESC 关闭
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    open ? (
      <div className="slideover-wrapper" role="dialog" aria-modal="true">
        <div className="slideover-overlay" onClick={onClose} />
        <div
          className={`slideover-panel slideover-${placement}`}
          style={{ width: typeof width === 'number' ? `${width}px` : width }}
        >
          {header && <header className="slideover-header">{header}</header>}
          <div className="slideover-body">{children}</div>
          {footer && <footer className="slideover-footer">{footer}</footer>}
          <button className="slideover-close" onClick={onClose} aria-label="关闭">✕</button>
        </div>
        {/* 样式注入 */}
        <style>{`
          .slideover-wrapper{position:fixed;inset:0;z-index:3000;display:flex;}
          .slideover-overlay{flex:1 1 auto;background:rgba(0,0,0,0.4);backdrop-filter:blur(2px);} 
          .slideover-panel{position:relative;background:var(--wc-neutral-0);max-height:100vh;overflow-y:auto;display:flex;flex-direction:column;}
          .slideover-left{order:0;} .slideover-right{order:1;}
          .slideover-close{position:absolute;top:8px;right:8px;background:none;border:none;font-size:1.25rem;cursor:pointer;}
          .slideover-header,.slideover-footer{padding:16px;border-bottom:1px solid var(--wc-neutral-200);} 
          .slideover-footer{border-top:1px solid var(--wc-neutral-200);border-bottom:none;}
          .slideover-body{padding:16px;flex:1 1 auto;}
          .slideover-enter{opacity:0;transform:translateX(${placement==='right'?'100%':'-100%'});}
        `}</style>
      </div>
    ) : null,
    document.body
  )
}

export default SlideOver