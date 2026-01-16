import React from 'react'
import './style.css'
import { getBadgeClasses } from './utils.js'

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const badgeClasses = getBadgeClasses({ variant, size, dot, className })
  
  return (
    <span className={badgeClasses} {...props}>
      {!dot && children}
    </span>
  )
}

Badge.displayName = 'Badge'

export default Badge 