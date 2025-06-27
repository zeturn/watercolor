import React, { useState, useRef, useEffect } from 'react'
import { getDatePickerClasses } from './utils.js'
import './style.css'

export function DatePicker({
  value,
  onChange = () => {},
  placeholder = '请选择日期',
  disabled = false,
  size = 'md',
  variant = 'default',
  className = '',
}) {
  const inputRef = useRef(null)
  const sizes = {
    sm: 'p-1.5 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg',
  }
  const variants = {
    default: 'border',
    outlined: 'border-2',
    filled: 'bg-[var(--wc-neutral-50)]',
  }
  const classes = [
    'wc-datepicker-input',
    sizes[size] || sizes.md,
    variants[variant] || variants.default,
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className,
  ].join(' ')

  const handleChange = (e) => {
    const dateStr = e.target.value
    onChange(dateStr ? new Date(dateStr) : null)
  }

  return (
    <input
      ref={inputRef}
      type="date"
      className={classes}
      value={value ? new Date(value).toISOString().substring(0, 10) : ''}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}

export default DatePicker