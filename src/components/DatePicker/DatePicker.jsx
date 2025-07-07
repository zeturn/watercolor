import React, { useRef } from 'react'
import {
  formatDate,
  getDatePickerClasses,
} from './utils.js'
import './style.css'

/**
 * DatePicker (React)
 * 与 Vue 版本保持统一的 API / 样式，但基于浏览器原生 <input type="date"> 实现。
 */
export function DatePicker({
  value = null,
  onChange = () => {},
  placeholder = '请选择日期',
  disabled = false,
  size = 'md',
  variant = 'default',
  format = 'YYYY-MM-DD', // 仅用于显示/解析
  showToday = true, // 未在原生实现中使用，仅占位保持 API 一致
  minDate = null,
  maxDate = null,
  className = '',
  ...rest
}) {
  const inputRef = useRef(null)

  // 统一的包装器类名，保证样式一致
  const wrapperClasses = [
    getDatePickerClasses(size, variant, disabled, false, false),
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const toInputValue = (date) =>
    date ? formatDate(new Date(date), 'YYYY-MM-DD') : ''

  const handleNativeChange = (e) => {
    const dateStr = e.target.value
    onChange(dateStr ? new Date(dateStr) : null)
  }

  return (
    <div className="wc-datepicker" {...rest}>
      <div className={wrapperClasses} onClick={() => inputRef.current?.focus()}>
        <input
          ref={inputRef}
          type="date"
          className="wc-datepicker-input"
          value={toInputValue(value)}
          placeholder={placeholder}
          disabled={disabled}
          min={minDate ? toInputValue(minDate) : undefined}
          max={maxDate ? toInputValue(maxDate) : undefined}
          onChange={handleNativeChange}
        />
        <span className="wc-datepicker-icon">📅</span>
      </div>
    </div>
  )
}

export default DatePicker