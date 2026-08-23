import { createSignal, createEffect } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import './style.css'
import { getTextFieldClasses } from './utils.js'

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
  const [isFocused, setIsFocused] = createSignal(false)
  const [hasValue, setHasValue] = createSignal(Boolean(value))

  createEffect(() => {
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
    <div class={getTextFieldClasses()} style={style}>
      {/* 标签 */}
      {label && (
        <label
          htmlFor={inputId}
          class={getLabelClasses()}
        >
          {label}
          {required && <span class="wc-textfield__required">*</span>}
        </label>
      )}
      
      {/* 输入框容器 */}
      <div class={getContainerClasses()}>
        {startAdornment && (
          <div class="wc-textfield__adornment wc-textfield__adornment--start">
            {startAdornment}
          </div>
        )}
        
        <Dynamic
          component={InputComponent}
          class={multiline ? "wc-textfield__input wc-textfield__textarea" : "wc-textfield__input"}
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
        
        {(endAdornment || hasError) && (
          <div class="wc-textfield__adornment wc-textfield__adornment--end">
            {hasError && (
              <svg
                class="wc-textfield__error-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {endAdornment}
          </div>
        )}
      </div>
      
      {/* 帮助文本或错误信息 */}
      {(helperText || hasError) && (
        <div class={`wc-textfield__helper-text ${hasError ? 'wc-textfield__helper-text--error' : ''}`}>
          {hasError ? error : helperText}
        </div>
      )}
    </div>
  )
}

TextField.displayName = 'TextField'

export default TextField