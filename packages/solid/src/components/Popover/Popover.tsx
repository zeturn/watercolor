import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import { Portal, useFloatingPosition, useOverlayLayer } from '../../interactions'
import { useLocale } from '../../LocaleSolid'
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
  const [internalOpen, setInternalOpen] = createSignal(false)
  const isControlled = open !== undefined && open !== null

  let triggerRef = null
  let popoverRef = null

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
    cloneElement(trigger, {
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
      class="wc-popover-trigger"
      onClick={togglePopover}
      aria-expanded={actualOpen}
      aria-haspopup="dialog"
      aria-controls={popoverId}
    >
      {triggerText}
    </button>
  )

  return (
    <div class={`wc-popover-container ${className}`.trim()}>
      {triggerNode}
      {actualOpen &&
        <Portal>
          <div
            ref={popoverRef}
            id={popoverId}
            class={`wc-popover-content wc-popover-content--${resolvedPlacement}`.trim()}
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
