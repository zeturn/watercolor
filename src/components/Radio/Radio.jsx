import React, { useState, useContext, createContext, useCallback } from 'react'

const RadioGroupContext = createContext(null)

export function RadioGroup({ value, onChange, name, disabled = false, children, className = '' }) {
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

  return (
    <RadioGroupContext.Provider value={{ value: currentValue, updateValue, name, disabled }}>
      <div className={className}>{children}</div>
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

  const isChecked = group ? group.value === value : checked !== undefined ? checked : undefined

  const inputName = group ? group.name : name
  const isDisabled = group ? group.disabled || disabled : disabled

  const handleChange = (e) => {
    if (isDisabled) return
    if (group) {
      group.updateValue(value)
    } else {
      onChange?.(value)
    }
  }

  return (
    <label
      className={`wc-radio wc-radio--${size}${isDisabled ? ' wc-radio--disabled' : ''} ${className}`.trim()}
    >
      <input
        type="radio"
        className="wc-radio__input"
        name={inputName}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        {...rest}
      />
      <span className={`wc-radio__button wc-radio__button--${color} wc-radio__button--${size}${isChecked ? ' wc-radio__button--checked' : ''}`}></span>
      {(children || label) && <span className="radio-label">{children || label}</span>}
    </label>
  )
}