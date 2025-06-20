import React, { useState } from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  href = null,
  target = '_self',
  startIcon = null,
  endIcon = null,
  rounded = true,
  uppercase = false,
  ripple = true,
  onClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  className = '',
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  // Validate variant
  const validVariants = ['primary', 'secondary', 'filled', 'outlined', 'text', 'success', 'warning', 'error', 'info', 'purple', 'orange', 'cyan', 'pink']
  const safeVariant = validVariants.includes(variant) ? variant : 'primary'

  // Build classes
  const buttonClasses = [
    'wc-btn',
    `wc-btn--${safeVariant}`,
    `wc-btn--${size}`,
    disabled || loading ? 'wc-btn--disabled' : '',
    loading ? 'wc-btn--loading' : '',
    fullWidth ? 'wc-btn--full-width' : '',
    uppercase ? 'wc-btn--uppercase' : '',
    getRoundedClass(rounded),
    className
  ].filter(Boolean).join(' ')

  // Build styles
  const buttonStyles = {
    ...getVariantStyles(safeVariant),
    ...style
  }

  function getRoundedClass(rounded) {
    if (rounded === false || rounded === 'none') return 'wc-btn--rounded-none'
    if (typeof rounded === 'string') return `wc-btn--rounded-${rounded}`
    return 'wc-btn--rounded'
  }

  function getVariantStyles(variant) {
    const styles = {}
    
    // Use CSS variables for theming
    if (variant === 'primary') {
      styles.backgroundColor = 'var(--wc-primary-500)'
      styles.color = 'white'
    } else if (variant === 'secondary') {
      styles.backgroundColor = 'var(--wc-secondary-500)'
      styles.color = 'white'
    } else if (variant === 'outlined') {
      styles.backgroundColor = 'transparent'
      styles.color = 'var(--wc-primary-500)'
      styles.border = '1px solid var(--wc-primary-500)'
    } else if (variant === 'text') {
      styles.backgroundColor = 'transparent'
      styles.color = 'var(--wc-primary-500)'
    } else if (['success', 'warning', 'error', 'info'].includes(variant)) {
      styles.backgroundColor = `var(--wc-${variant}-500)`
      styles.color = 'white'
    }
    
    return styles
  }

  const handleClick = (event) => {
    if (!disabled && !loading) {
      if (href) {
        window.open(href, target)
      }
      onClick?.(event)
    }
  }

  const handleMouseOver = (event) => {
    setIsHovered(true)
    onMouseOver?.(event)
  }

  const handleMouseOut = (event) => {
    setIsHovered(false)
    onMouseOut?.(event)
  }

  const handleFocus = (event) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  const LoadingIcon = () => (
    <span className="wc-btn__loading">
      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
  )

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      type={type}
      style={buttonStyles}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {loading && <LoadingIcon />}
      {startIcon && !loading && (
        <span className="wc-btn__start-icon">{startIcon}</span>
      )}
      <span className={`wc-btn__content ${loading ? 'opacity-0' : ''}`}>
        {children}
      </span>
      {endIcon && !loading && (
        <span className="wc-btn__end-icon">{endIcon}</span>
      )}
    </button>
  )
}

Button.displayName = 'Button'

export default Button 