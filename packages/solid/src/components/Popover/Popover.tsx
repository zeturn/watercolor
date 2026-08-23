import { createSignal } from 'solid-js'
import { useId } from '../../useId'

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

  const isOpen = () => (isControlled ? !!open : internalOpen())

  const setOpen = (state) => {
    if (!isControlled) {
      setInternalOpen(state)
    }
    onOpenChange?.(state)
  }

  const closePopover = () => setOpen(false)
  const togglePopover = () => {
    setOpen(!isOpen())
  }

  const resolvedPlacement = useFloatingPosition({
    open: isOpen,
    anchorRef: () => triggerRef,
    floatingRef: () => popoverRef,
    placement,
    offset,
  })

  useOverlayLayer({
    open: isOpen,
    elementRef: () => popoverRef,
    refs: () => [triggerRef],
    closeOnEscape: true,
    closeOnPointerDownOutside: true,
    onEscapeKeyDown: closePopover,
    onPointerDownOutside: closePopover,
    zIndex: 2000,
  })

  // Render: Solid has no cloneElement, so custom triggers are wrapped in a
  // span carrying the interaction handlers and aria attributes.
  const triggerNode = () => trigger ? (
    <span
      ref={(el) => { triggerRef = el }}
      class="wc-popover-trigger"
      onClick={togglePopover}
      aria-expanded={isOpen()}
      aria-haspopup="dialog"
      aria-controls={popoverId}
    >
      {trigger}
    </span>
  ) : (
    <button
      ref={(el) => { triggerRef = el }}
      type="button"
      class="wc-popover-trigger"
      onClick={togglePopover}
      aria-expanded={isOpen()}
      aria-haspopup="dialog"
      aria-controls={popoverId}
    >
      {triggerText}
    </button>
  )

  return (
    <div class={`wc-popover-container ${className}`.trim()}>
      {triggerNode()}
      {isOpen() &&
        <Portal>
          <div
            ref={(el) => { popoverRef = el }}
            id={popoverId}
            class={`wc-popover-content wc-popover-content--${resolvedPlacement()}`.trim()}
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
