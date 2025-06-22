import React, { useState } from 'react'
import { getPlacementClass } from './utils'
import './style.css'

export default function Tooltip({
  text,
  placement = 'top', // 'top' | 'bottom' | 'left' | 'right'
  children,
  className = '',
}) {
  const [show, setShow] = useState(false)

  const placementClass = getPlacementClass(placement)

  return (
    <span
      className={`wc-tooltip-wrapper relative inline-block ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={`wc-tooltip absolute z-50 px-2 py-1 rounded text-xs whitespace-nowrap ${placementClass}`}
        >
          {text}
        </div>
      )}
    </span>
  )
} 