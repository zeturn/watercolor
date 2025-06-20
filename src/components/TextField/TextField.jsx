import React, { useState } from 'react'

const TextField = ({
  value = '',
  onChange,
  type = 'text',
  label = '',
  placeholder = '',
  helperText = '',
  error = false,
  errorMessage = '',
  required = false,
  disabled = false,
  readonly = false,
  autoFocus = false,
  fullWidth = false,
  multiline = false,
  rows = 4,
  maxRows,
  minRows,
  variant = 'filled',
  size = 'md',
  color = 'primary',
  startAdornment = null,
  endAdornment = null,
  maxLength,
  minLength,
  pattern,
  autoComplete = 'off',
  name = '',
  id = '',
  className = '',
  style = {},
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(Boolean(value))

  const handleChange = (e) => {
    const newValue = e.target.value
    setHasValue(Boolean(newValue))
    onChange?.(e)
  }

  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const getTextFieldClasses = () => {
    const classes = ['wc-textfield']
    
    classes.push(`wc-textfield--${variant}`)
    classes.push(`wc-textfield--${size}`)
    
    if (error) classes.push('wc-textfield--error')
    if (disabled) classes.push('wc-textfield--disabled')
    if (readonly) classes.push('wc-textfield--readonly')
    if (isFocused) classes.push('wc-textfield--focused')
    if (hasValue || isFocused) classes.push('wc-textfield--has-value')
    if (fullWidth) classes.push('wc-textfield--full-width')
    if (multiline) classes.push('wc-textfield--multiline')
    
    return classes.concat(className).filter(Boolean).join(' ')
  }

  const getInputStyles = () => {
    const styles = { ...style }
    
    // Use CSS variables for theming
    if (variant === 'outlined') {
      styles.borderColor = error ? 'var(--wc-error-500)' : `var(--wc-${color}-500)`
    } else if (variant === 'filled') {
      styles.backgroundColor = 'var(--wc-neutral-50)'
    }
    
    return styles
  }

  const InputComponent = multiline ? 'textarea' : 'input'
  const inputId = id || name || `textfield-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={getTextFieldClasses()}>
      <div className="wc-textfield__container">
        {label && (
          <label
            htmlFor={inputId}
            className={`wc-textfield__label ${(isFocused || hasValue) ? 'wc-textfield__label--active' : ''}`}
          >
            {label}
            {required && <span className="wc-textfield__required">*</span>}
          </label>
        )}
        
        <div className="wc-textfield__input-container">
          {startAdornment && (
            <div className="wc-textfield__adornment wc-textfield__adornment--start">
              {startAdornment}
            </div>
          )}
          
          <InputComponent
            className="wc-textfield__input"
            style={getInputStyles()}
            id={inputId}
            type={multiline ? undefined : type}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            autoFocus={autoFocus}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            rows={multiline ? rows : undefined}
            autoComplete={autoComplete}
            name={name}
            {...props}
          />
          
          {endAdornment && (
            <div className="wc-textfield__adornment wc-textfield__adornment--end">
              {endAdornment}
            </div>
          )}
        </div>
        
        {variant === 'outlined' && (
          <fieldset className="wc-textfield__fieldset">
            <legend className="wc-textfield__legend">
              {label && (isFocused || hasValue) && (
                <span>{label}{required && '*'}</span>
              )}
            </legend>
          </fieldset>
        )}
      </div>
      
      {(helperText || (error && errorMessage)) && (
        <div className={`wc-textfield__helper-text ${error ? 'wc-textfield__helper-text--error' : ''}`}>
          {error && errorMessage ? errorMessage : helperText}
        </div>
      )}
    </div>
  )
}

TextField.displayName = 'TextField'

export default TextField