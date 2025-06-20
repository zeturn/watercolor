import React from 'react'

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const validVariants = ['primary', 'secondary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
  const safeVariant = validVariants.includes(variant) ? variant : 'primary'
  
  const baseClasses = 'wc-badge'
  const variantClass = `wc-badge--${safeVariant}`
  
  const sizeClasses = {
    sm: dot ? 'w-2 h-2 p-0' : 'px-2 py-0.5 text-xs',
    md: dot ? 'w-2.5 h-2.5 p-0' : 'px-2.5 py-0.5 text-xs',
    lg: dot ? 'w-3 h-3 p-0' : 'px-3 py-1 text-sm'
  }
  
  const dotClass = dot ? 'rounded-full' : ''
  
  const badgeClasses = [
    baseClasses,
    variantClass,
    sizeClasses[size],
    dotClass,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <span className={badgeClasses} {...props}>
      {!dot && children}
    </span>
  )
}

Badge.displayName = 'Badge'

export default Badge 