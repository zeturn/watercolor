import React, { useId, useState } from 'react'
import './style.css'

/**
 * React Checkbox 组件
 * 结构、类名与 Vue 版保持一致，复用相同样式。
 */

const VALID_COLORS = ['primary', 'secondary', 'success', 'warning', 'error', 'info']
const VALID_SIZES = ['sm', 'md', 'lg']

const Checkbox = ({
  checked = false,
  onChange,
  indeterminate = false,
  disabled = false,
  required = false,
  size = 'md',
  color = 'primary',
  label = '',
  labelPlacement = 'end', // 'start' | 'end'
  value = true,
  name,
  className = '',
  ...props
}) => {
  const inputId = useId()
  const [isFocused, setIsFocused] = useState(false)

  // 安全校验
  const safeColor = VALID_COLORS.includes(color) ? color : 'primary'
  const safeSize = VALID_SIZES.includes(size) ? size : 'md'

  /* ========== 类名计算 ========= */
  const containerClasses = [
    'wc-checkbox',
    `wc-checkbox--${safeSize}`,
    (checked || indeterminate) && (indeterminate ? 'wc-checkbox--indeterminate' : 'wc-checkbox--checked'),
    disabled && 'wc-checkbox--disabled',
    isFocused && 'wc-checkbox--focused',
    labelPlacement === 'start' ? 'wc-checkbox--label-start' : 'wc-checkbox--label-end',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const checkmarkClasses = [
    'wc-checkbox__checkmark',
    `wc-checkbox__checkmark--${safeColor}`,
    `wc-checkbox__checkmark--${safeSize}`,
    (checked || indeterminate) && 'wc-checkbox__checkmark--checked',
    indeterminate && 'wc-checkbox__checkmark--indeterminate',
  ]
    .filter(Boolean)
    .join(' ')

  /* ========== 事件处理 ========= */
  const handleInputChange = (e) => {
    if (disabled) return
    const newChecked = e.target.checked
    onChange?.({
      target: {
        name,
        value,
        checked: newChecked,
      },
      preventDefault: () => {},
      stopPropagation: () => {},
    })
  }

  /* ========== 渲染 ========= */
  const icon = indeterminate ? (
    <div className="indeterminate-icon" />
  ) : checked ? (
    <svg
      className="checkmark-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <polyline points="20,6 9,17 4,12" />
    </svg>
  ) : null

  const labelContent = label ? (
    <span className="checkbox-label">{label}</span>
  ) : null

  return (
    <label className={containerClasses} htmlFor={inputId}>
      {labelPlacement === 'start' && labelContent}

      <input
        id={inputId}
        type="checkbox"
        className="wc-checkbox__input"
        checked={checked}
        disabled={disabled}
        required={required}
        value={value}
        name={name}
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-disabled={disabled}
        aria-required={required}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate
        }}
        {...props}
      />

      <span className={checkmarkClasses}>{icon}</span>

      {labelPlacement === 'end' && labelContent}
    </label>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox