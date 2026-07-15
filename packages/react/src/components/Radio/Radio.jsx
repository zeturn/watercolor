import React, { useState, useContext, createContext, useCallback } from 'react'
import './style.css'

const RadioGroupContext = createContext(null)

export function RadioGroup({
  value,
  onChange,
  name,
  disabled = false,
  label = '',
  row = false,
  required = false,
  error = '',
  helperText = '',
  size = 'md',
  color = 'primary',
  children,
  className = '',
}) {
  const [internalValue, setInternalValue] = useState(value)
  const isControlled = value !== undefined

  const currentValue = isControlled ? value : internalValue

  const updateValue = useCallback(
    (val) => {
      if (disabled) return
      if (!isControlled) setInternalValue(val)
      onChange?.(val)
    },
    [disabled, isControlled, onChange]
  )

  // ====== 类名计算 ======
  const groupClasses = ['wc-radio-group', className].filter(Boolean).join(' ')
  const contentClasses = [
    'wc-radio-group-content',
    row && 'wc-radio-group-content--row',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <RadioGroupContext.Provider
      value={{ value: currentValue, updateValue, name, disabled, size, color }}
    >
      <div className={groupClasses}>
        {label && (
          <label className="wc-radio-group-label">
            {label}
            {required && <span className="wc-radio-group__required">*</span>}
          </label>
        )}

        <div className={contentClasses}>{children}</div>

        {(error || helperText) && (
          <div className="wc-radio-group__message">
            {error ? (
              <p className="wc-radio-group__error">{error}</p>
            ) : (
              <p className="wc-radio-group__helper">{helperText}</p>
            )}
          </div>
        )}
      </div>
    </RadioGroupContext.Provider>
  )
}

export default function Radio({
  value,
  checked,
  onChange,
  label,
  name,
  disabled = false,
  color = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const group = useContext(RadioGroupContext)

  /* ========== 状态计算 ========= */
  const isChecked = group ? group.value === value : checked !== undefined ? checked : undefined

  const inputName = group ? group.name : name
  const isDisabled = group ? group.disabled || disabled : disabled

  // 继承 group 的 size / color（若组件自身未显式指定）
  const finalSize = size || (group && group.size) || 'md'
  const finalColor = color || (group && group.color) || 'primary'

  /* ========== 焦点管理 ========= */
  const [focused, setFocused] = useState(false)

  /* ========== 类名计算 ========= */
  const containerClasses = [
    'wc-radio',
    `wc-radio--${finalSize}`,
    isDisabled && 'wc-radio--disabled',
    focused && 'wc-radio--focused',
    isChecked && 'wc-radio--checked',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const radioButtonClasses = [
    'wc-radio__button',
    `wc-radio__button--${finalColor}`,
    `wc-radio__button--${finalSize}`,
    isChecked && 'wc-radio__button--checked',
  ]
    .filter(Boolean)
    .join(' ')

  /* ========== 事件处理 ========= */
  const handleChange = () => {
    if (isDisabled) return
    if (group) {
      group.updateValue(value)
    } else {
      onChange?.(value)
    }
  }

  /* ========== 渲染 ========= */
  const labelContent = children || label

  return (
    <label className={containerClasses}>
      <input
        type="radio"
        className="wc-radio__input"
        name={inputName}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      <span className={radioButtonClasses}>
        {isChecked && <span className="radio-dot" />}
      </span>
      {labelContent && <span className="radio-label">{labelContent}</span>}
    </label>
  )
}

Radio.displayName = 'Radio'
RadioGroup.displayName = 'RadioGroup'
