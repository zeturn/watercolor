import React, { useState } from 'react'

export default function Tooltip({
  text,
  placement = 'top', // 'top' | 'bottom' | 'left' | 'right'
  children,
  className = '',
}) {
  const [show, setShow] = useState(false)

  const placementClass = {
    top: 'mb-1 left-1/2 -translate-x-1/2 bottom-full',
    bottom: 'mt-1 left-1/2 -translate-x-1/2 top-full',
    left: 'mr-1 right-full top-1/2 -translate-y-1/2',
    right: 'ml-1 left-full top-1/2 -translate-y-1/2',
  }[placement]

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