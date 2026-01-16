import React, { useState } from 'react'
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
  const [isAnimating, setIsAnimating] = useState(false)

  const placementClass = getPlacementClass(placement)

  const handleMouseEnter = () => {
    setShow(true)
    setIsAnimating(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
    setTimeout(() => setIsAnimating(false), 150) // 匹配动画时长
  }

  return (
    <span
      className={`wc-tooltip-wrapper relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {(show || isAnimating) && (
        <div
          className={`wc-tooltip absolute z-50 px-2 py-1 rounded text-xs whitespace-nowrap ${placementClass} ${
            show ? 'tooltip-fade-enter-to' : 'tooltip-fade-leave-to'
          }`}
        >
          {text}
        </div>
      )}
    </span>
  )
} 