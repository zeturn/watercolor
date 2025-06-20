import React, { useState, useId } from 'react'

const Input = ({
  value,
  onChange,
  type = 'text',
  label = '',
  placeholder = '',
  disabled = false,
  readonly = false,
  required = false,
  error = '',
  helpText = '',
  size = 'md',
  onFocus,
  onBlur,
  className = '',
  ...props
}) => {
  const inputId = useId()
  
  const baseClasses = 'wc-input'
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  }
  
  const inputClasses = [
    baseClasses,
    sizeClasses[size],
    error && 'ring-error-500 focus:ring-error-500',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  ].filter(Boolean).join(' ')
  
  const handleChange = (event) => {
    if (onChange) {
      onChange(event)
    }
  }
  
  return (
    <div className="wc-input-wrapper">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          id={inputId}
          className={inputClasses}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
        
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-error-500" fill="currentColor" viewBox="0 0 20 20">
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-error-500">{error}</p>
      )}
      {!error && helpText && (
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{helpText}</p>
      )}
    </div>
  )
}

Input.displayName = 'Input'

export default Input 