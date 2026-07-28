import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import './style.css'

const Fab = ({
  variant = 'circular',
  size = 'md',
  color = 'primary',
  disabled = false,
  label = '',
  icon = '',
  children,
  onClick,
  onFocus,
  onBlur,
  className = '',
  style = {},
  ...props
}) => {
  const [focused, setFocused] = createSignal(false)

  // 验证props
  const validVariants = ['circular', 'extended']
  const validSizes = ['sm', 'md', 'lg']
  const validColors = ['primary', 'secondary', 'inherit']

  if (!validVariants.includes(variant)) {
    console.warn(`Invalid variant "${variant}" for Fab component. Valid variants are: ${validVariants.join(', ')}`)
  }
  if (!validSizes.includes(size)) {
    console.warn(`Invalid size "${size}" for Fab component. Valid sizes are: ${validSizes.join(', ')}`)
  }
  if (!validColors.includes(color)) {
    console.warn(`Invalid color "${color}" for Fab component. Valid colors are: ${validColors.join(', ')}`)
  }

  // 构建CSS类名
  const buttonClasses = [
    'wc-fab',
    `wc-fab--${variant}`,
    `wc-fab--${size}`,
    `wc-fab--${color}`,
    disabled && 'wc-fab--disabled',
    focused && 'wc-fab--focused',
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
      class={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={style}
      {...props}
    >
      {/* Icon */}
      {(icon || children) && (
        <span class="fab-icon">
          {icon ? (
            <span innerHTML={icon} />
          ) : (
            children
          )}
        </span>
      )}
      
      {/* Label (for extended variant) */}
      {variant === 'extended' && label && (
        <span class="fab-label">
          {label}
        </span>
      )}
    </button>
  )
}

Fab.displayName = 'Fab'

export default Fab 