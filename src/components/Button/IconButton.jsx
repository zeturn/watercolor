import React, { useState } from 'react'
import './style.css'

const IconButton = ({
  color = 'default',
  size = 'md',
  edge = false,
  disabled = false,
  icon = '',
  children,
  onClick,
  onFocus,
  onBlur,
  className = '',
  style = {},
  ...props
}) => {
  const [focused, setFocused] = useState(false)

  // 验证props
  const validColors = ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success']
  const validSizes = ['sm', 'md', 'lg']
  const validEdges = [false, 'start', 'end']

  if (!validColors.includes(color)) {
    console.warn(`Invalid color "${color}" for IconButton component. Valid colors are: ${validColors.join(', ')}`)
  }
  if (!validSizes.includes(size)) {
    console.warn(`Invalid size "${size}" for IconButton component. Valid sizes are: ${validSizes.join(', ')}`)
  }
  if (!validEdges.includes(edge)) {
    console.warn(`Invalid edge "${edge}" for IconButton component. Valid edges are: ${validEdges.join(', ')}`)
  }

  // 构建CSS类名
  const buttonClasses = [
    'wc-icon-button',
    `wc-icon-button--${color}`,
    `wc-icon-button--${size}`,
    edge && `wc-icon-button--edge-${edge}`,
    disabled && 'wc-icon-button--disabled',
    focused && 'wc-icon-button--focused',
    className
  ].filter(Boolean).join(' ')

  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  const handleFocus = (event) => {
    setFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event) => {
    setFocused(false)
    onBlur?.(event)
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={style}
      {...props}
    >
      <span className="icon-button-icon">
        {icon ? (
          <span dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          children
        )}
      </span>
    </button>
  )
}

IconButton.displayName = 'IconButton'

export default IconButton 