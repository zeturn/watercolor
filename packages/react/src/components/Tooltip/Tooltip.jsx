import React, { useId, useState } from 'react'
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

  const placementClass = getPlacementClass(placement)

  const handleMouseEnter = () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
  }

  return (
    <span
      className={`wc-tooltip-wrapper ${className}`.trim()}
      aria-describedby={show ? tooltipId : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {show && (
        <div
          id={tooltipId}
          className={`wc-tooltip ${placementClass}`}
          role="tooltip"
        >
          {text}
        </div>
      )}
    </span>
  )
}
