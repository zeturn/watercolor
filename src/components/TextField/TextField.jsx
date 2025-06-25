import React, { useState, useEffect } from 'react'

const TextField = ({
  value = '',
  onChange,
  type = 'text',
  label = '',
  placeholder = '',
  helperText = '',
  error = '',
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

  useEffect(() => {
    setHasValue(Boolean(value))
  }, [value])

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
    
    if (fullWidth) classes.push('wc-textfield--full-width')
    if (multiline) classes.push('wc-textfield--multiline')
    if (className) classes.push(className)
    
    return classes.filter(Boolean).join(' ')
  }

  const getContainerClasses = () => {
    const classes = ['wc-textfield__container']
    
    classes.push(`wc-textfield__container--${variant}`)
    classes.push(`wc-textfield__container--${size}`)
    
    if (error) classes.push('wc-textfield__container--error')
    if (disabled) classes.push('wc-textfield__container--disabled')
    if (isFocused) classes.push('wc-textfield__container--focused')
    if (hasValue) classes.push('wc-textfield__container--has-value')
    
    return classes.filter(Boolean).join(' ')
  }

  const getLabelClasses = () => {
    const classes = ['wc-textfield__label']
    
    classes.push(`wc-textfield__label--${size}`)
    
    if (error) classes.push('wc-textfield__label--error')
    if (isFocused) classes.push('wc-textfield__label--focused')
    
    return classes.filter(Boolean).join(' ')
  }

  const InputComponent = multiline ? 'textarea' : 'input'
  const inputId = id || name || `textfield-${Math.random().toString(36).substr(2, 9)}`
  const hasError = Boolean(error)

  return (
    <div className={getTextFieldClasses()} style={style}>
      {/* 标签 */}
      {label && (
        <label
          htmlFor={inputId}
          className={getLabelClasses()}
        >
          {label}
          {required && <span className="wc-textfield__required">*</span>}
        </label>
      )}
      
      {/* 输入框容器 */}
      <div className={getContainerClasses()}>
        {startAdornment && (
          <div className="wc-textfield__adornment wc-textfield__adornment--start">
            {startAdornment}
          </div>
        )}
        
        <InputComponent
          className={multiline ? "wc-textfield__input wc-textfield__textarea" : "wc-textfield__input"}
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
        
        {/* Outlined 变体的 fieldset */}
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
      
      {/* 帮助文本或错误信息 */}
      {(helperText || hasError) && (
        <div className={`wc-textfield__helper-text ${hasError ? 'wc-textfield__helper-text--error' : ''}`}>
          {hasError ? error : helperText}
        </div>
      )}
    </div>
  )
}

TextField.displayName = 'TextField'

export default TextField