import React, { useId } from 'react'
import './style.css' // 引入组件样式

const Switch = ({
  checked = false,
  onChange,
  label = '',
  description = '',
  disabled = false,
  required = false,
  color = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const labelId = useId()

  const validColors = ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
  const safeColor = validColors.includes(color) ? color : 'primary'
  const validSizes = ['sm', 'md', 'lg']
  const safeSize = validSizes.includes(size) ? size : 'md'

  const switchClasses = [
    'wc-switch',
    `wc-switch--${safeColor}`,
    safeSize !== 'md' && `wc-switch--${safeSize}`,
    disabled && 'wc-switch--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleInputChange = (e) => {
    if (disabled || !onChange) return
    onChange(e.target.checked)
  }

  return (
    <div className="wc-switch-wrapper">
      {/* Label */}
      {label && (
        <label
          id={labelId}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Switch & Description */}
      <div className="flex items-center gap-3">
        <label className={switchClasses} aria-disabled={disabled}>
          <input
            type="checkbox"
            className="wc-switch__input"
            checked={checked}
            disabled={disabled}
            aria-labelledby={labelId}
            role="switch"
            onChange={handleInputChange}
            {...props}
          />
          <span className="wc-switch__track">
            <span className="wc-switch__thumb" />
          </span>
        </label>

        {description && (
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

Switch.displayName = 'Switch'

export default Switch 