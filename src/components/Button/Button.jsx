import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}) => {
  // 验证variant
  const validVariants = ['primary', 'secondary', 'filled', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
  const safeVariant = validVariants.includes(variant) ? variant : 'primary'
  const baseClasses = 'wc-btn'
  const variantClass = `wc-btn--${safeVariant}`
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  const buttonClasses = [
    baseClasses,
    variantClass,
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  ].filter(Boolean).join(' ')
  
  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button 