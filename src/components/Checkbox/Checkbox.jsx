import React, { useState } from 'react'
import { 
  getCheckboxClasses, 
  getCheckboxStyles, 
  handleCheckboxChange, 
  handleCheckboxKeyDown, 
  renderCheckboxIcon, 
  generateCheckboxId 
} from './utils.js'
import './style.css'

const Checkbox = ({
  checked = false,
  onChange,
  indeterminate = false,
  disabled = false,
  required = false,
  size = 'md',
  color = 'primary',
  label = '',
  labelPlacement = 'end',
  value = '',
  name = '',
  id = '',
  icon = null,
  checkedIcon = null,
  indeterminateIcon = null,
  className = '',
  style = {},
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const checkboxClasses = getCheckboxClasses({
    size,
    color,
    labelPlacement,
    checked,
    indeterminate,
    disabled,
    isFocused,
    className
  }).join(' ')

  const checkboxStyles = getCheckboxStyles({
    checked,
    indeterminate,
    color,
    style
  })

  const handleChange = (e) => {
    handleCheckboxChange(e, disabled, checked, name, value, onChange)
  }

  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleKeyDown = (e) => {
    handleCheckboxKeyDown(e, handleChange)
  }

  const iconElement = renderCheckboxIcon(
    indeterminate, 
    checked, 
    indeterminateIcon, 
    checkedIcon, 
    icon
  )

  const checkboxId = generateCheckboxId(id, name)

  const checkboxElement = (
    <div
      className="wc-checkbox__container"
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      aria-disabled={disabled}
      aria-required={required}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        type="checkbox"
        className="wc-checkbox__input"
        checked={checked}
        onChange={() => {}} // Controlled by container click
        disabled={disabled}
        required={required}
        value={value}
        name={name}
        id={checkboxId}
        tabIndex={-1}
        {...props}
      />
      <div 
        className="wc-checkbox__box"
        style={checkboxStyles}
      >
        {iconElement}
      </div>
    </div>
  )

  if (label) {
    return (
      <label className={checkboxClasses} htmlFor={checkboxId}>
        {labelPlacement === 'start' && (
          <span className="wc-checkbox__label">{label}</span>
        )}
        {checkboxElement}
        {labelPlacement === 'end' && (
          <span className="wc-checkbox__label">{label}</span>
        )}
      </label>
    )
  }

  return (
    <div className={checkboxClasses}>
      {checkboxElement}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox