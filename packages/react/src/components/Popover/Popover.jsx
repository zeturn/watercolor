import React, { useState, useRef, useId } from 'react'
import { Portal, useFloatingPosition, useOverlayLayer } from '../../interactions.jsx'
import { useLocale } from '../../LocaleReact'
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
  const { messages } = useLocale()
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

  const closePopover = () => setOpen(false)
  const togglePopover = () => {
    setOpen(!actualOpen)
  }

  const resolvedPlacement = useFloatingPosition({
    open: actualOpen,
    anchorRef: triggerRef,
    floatingRef: popoverRef,
    placement,
    offset,
  })

  useOverlayLayer({
    open: actualOpen,
    elementRef: popoverRef,
    refs: [triggerRef],
    closeOnEscape: true,
    closeOnPointerDownOutside: true,
    onEscapeKeyDown: closePopover,
    onPointerDownOutside: closePopover,
    zIndex: 2000,
  })

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
        <Portal>
          <div
            ref={popoverRef}
            id={popoverId}
            className={`wc-popover-content wc-popover-content--${resolvedPlacement}`.trim()}
            role="dialog"
            aria-label={messages.closePopover}
            tabIndex={-1}
          >
            {children}
          </div>
        </Portal>}
    </div>
  )
}
