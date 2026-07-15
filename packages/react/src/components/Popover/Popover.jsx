import React, { useState, useRef, useEffect, useCallback, useId } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

/**
 * Popover – React 组件
 * Props
 *  open        受控布尔
 *  onOpenChange (open:boolean)=>void
 *  trigger     React 节点（可选）
 *  placement   top | bottom | left | right
 *  offset      number px
 */
export default function Popover({
  open,
  onOpenChange,
  triggerText = '打开弹窗',
  trigger,
  placement = 'bottom',
  offset = 8,
  children,
  className = '',
}) {
  const popoverId = useId()
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = open !== undefined && open !== null

  const triggerRef = useRef(null)
  const popoverRef = useRef(null)

  const actualOpen = isControlled ? open : internalOpen

  const setOpen = (state) => {
    if (!isControlled) {
      setInternalOpen(state)
    }
    onOpenChange?.(state)
  }

  const openPopover = () => setOpen(true)
  const closePopover = () => setOpen(false)
  const togglePopover = () => {
    setOpen(!actualOpen)
  }

  const positionPopover = useCallback(() => {
    const triggerEl = triggerRef.current
    const popEl = popoverRef.current
    if (!triggerEl || !popEl) return

    const triggerRect = triggerEl.getBoundingClientRect()
    const popRect = popEl.getBoundingClientRect()

    let top = 0
    let left = 0
    switch (placement) {
      case 'top':
        top = triggerRect.top - popRect.height - offset
        left = triggerRect.left + (triggerRect.width - popRect.width) / 2
        break
      case 'bottom':
        top = triggerRect.bottom + offset
        left = triggerRect.left + (triggerRect.width - popRect.width) / 2
        break
      case 'left':
        top = triggerRect.top + (triggerRect.height - popRect.height) / 2
        left = triggerRect.left - popRect.width - offset
        break
      case 'right':
        top = triggerRect.top + (triggerRect.height - popRect.height) / 2
        left = triggerRect.right + offset
        break
      default:
        break
    }

    popEl.style.top = `${top + window.scrollY}px`
    popEl.style.left = `${left + window.scrollX}px`
  }, [placement, offset])

  // Sync controlled state
  useEffect(() => {
    if (isControlled && open !== undefined) {
      // Sync controlled state
    }
  }, [isControlled, open])

  // Position on open/resize/scroll
  useEffect(() => {
    if (actualOpen) {
      positionPopover()
      window.addEventListener('resize', positionPopover)
      window.addEventListener('scroll', positionPopover)
      document.addEventListener('mousedown', handleOutside)
    }

    return () => {
      window.removeEventListener('resize', positionPopover)
      window.removeEventListener('scroll', positionPopover)
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [actualOpen, positionPopover])

  const handleOutside = (e) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target) && !triggerRef.current.contains(e.target)) {
      closePopover()
    }
  }

  // Render
  const triggerNode = trigger ? (
    React.cloneElement(trigger, {
      ref: triggerRef,
      onClick: togglePopover,
      'aria-expanded': actualOpen,
      'aria-haspopup': 'dialog',
      'aria-controls': popoverId,
    })
  ) : (
    <button
      ref={triggerRef}
      type="button"
      className="wc-popover-trigger"
      onClick={togglePopover}
      aria-expanded={actualOpen}
      aria-haspopup="dialog"
      aria-controls={popoverId}
    >
      {triggerText}
    </button>
  )

  return (
    <div className={`wc-popover-container ${className}`.trim()}>
      {triggerNode}
      {actualOpen &&
        ReactDOM.createPortal(
          <div
            ref={popoverRef}
            id={popoverId}
            className={`wc-popover-content wc-popover-content--${placement}`.trim()}
            role="dialog"
            aria-label="弹出内容"
            tabIndex={-1}
            onKeyDown={(event) => event.key === 'Escape' && closePopover()}
          >
            {children}
          </div>,
          document.body
        )}
    </div>
  )
}
