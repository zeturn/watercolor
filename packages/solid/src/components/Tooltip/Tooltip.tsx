import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import { Portal, useFloatingPosition } from '../../interactions'
import './style.css'
import { getPlacementClass, validatePlacement } from './utils'

export default function Tooltip({
  text,
  placement = 'top', // 'top' | 'bottom' | 'left' | 'right'
  children,
  className = '',
}) {
  // 验证 placement prop
  if (!validatePlacement(placement)) {
    console.warn(`Invalid tooltip placement: ${placement}. Using 'top' as default.`)
  }

  const [show, setShow] = createSignal(false)
  const tooltipId = useId()
  let triggerRef = null
  let tooltipRef = null

  const resolvedPlacement = useFloatingPosition({
    open: show,
    anchorRef: triggerRef,
    floatingRef: tooltipRef,
    placement,
    offset: 8,
  })
  const placementClass = getPlacementClass(resolvedPlacement)

  const handleMouseEnter = () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
  }

  return (
    <span
      ref={triggerRef}
      class={`wc-tooltip-wrapper ${className}`.trim()}
      aria-describedby={show ? tooltipId : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {show && (
        <Portal>
          <div
            ref={tooltipRef}
            id={tooltipId}
            class={`wc-tooltip ${placementClass}`}
            role="tooltip"
          >
            {text}
          </div>
        </Portal>
      )}
    </span>
  )
}
