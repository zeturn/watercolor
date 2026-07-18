import React, { useId, useRef, useState } from 'react'
import { Portal, useFloatingPosition } from '../../interactions.jsx'
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

  const [show, setShow] = useState(false)
  const tooltipId = useId()
  const triggerRef = useRef(null)
  const tooltipRef = useRef(null)

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
      className={`wc-tooltip-wrapper ${className}`.trim()}
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
            className={`wc-tooltip ${placementClass}`}
            role="tooltip"
          >
            {text}
          </div>
        </Portal>
      )}
    </span>
  )
}
