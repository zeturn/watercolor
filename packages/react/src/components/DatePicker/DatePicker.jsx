import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import {
  formatDate,
  generateCalendarDays,
  isToday,
  isSameDate,
  getDatePickerClasses,
  getDayClasses,
} from './utils.js'

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
  format = 'YYYY-MM-DD',
  showToday = true,
  minDate = null,
  maxDate = null,
  className = '',
  ...rest
}) {
  const wrapperRef = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState(() =>
    value ? new Date(value) : new Date()
  )
  const [internal, setInternal] = useState(value ? new Date(value) : null)

  // update internal when value prop changes
  useEffect(() => {
    setInternal(value ? new Date(value) : null)
  }, [value])

  // click outside handler
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const inputDisplay = internal ? formatDate(internal, format) : ''

  const toggleOpen = () => {
    if (disabled) return
    setOpen((v) => !v)
  }

  const changeMonth = (delta) => {
    setCurrentDate((d) => {
      const nd = new Date(d)
      nd.setMonth(nd.getMonth() + delta)
      return nd
    })
  }

  const handleSelect = (day) => {
    if (disabledDay(day)) return
    const selected = new Date(day.date)
    setInternal(selected)
    onChange(selected)
    setOpen(false)
  }

  const selectToday = () => {
    const today = new Date()
    setInternal(today)
    onChange(today)
    setOpen(false)
  }

  const clearDate = () => {
    setInternal(null)
    onChange(null)
    setOpen(false)
  }

  // helpers
  const disabledDay = (day) => {
    const { date } = day
    if (minDate) {
      const min = minDate instanceof Date ? minDate : new Date(minDate)
      if (date < min) return true
    }
    if (maxDate) {
      const max = maxDate instanceof Date ? maxDate : new Date(maxDate)
      if (date > max) return true
    }
    return false
  }

  const calendarDays = generateCalendarDays(currentDate)
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  const monthYear = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`

  // class names
  const wrapperClasses = [
    getDatePickerClasses(size, variant, disabled, false, isOpen),
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="wc-datepicker" ref={wrapperRef} {...rest}>
      <div className={wrapperClasses} onClick={toggleOpen}>
        <input
          type="text"
          className="wc-datepicker-input"
          value={inputDisplay}
          placeholder={placeholder}
          disabled={disabled}
          readOnly
        />
        <span className="wc-datepicker-icon">📅</span>
      </div>

      {isOpen && (
        <div className="wc-datepicker-dropdown" style={{ zIndex: 1000 }}>
          {/* header */}
          <div className="wc-datepicker-header">
            <button
              type="button"
              className="wc-datepicker-nav"
              onClick={() => changeMonth(-1)}
            >
              ‹
            </button>
            <span className="wc-datepicker-title">{monthYear}</span>
            <button
              type="button"
              className="wc-datepicker-nav"
              onClick={() => changeMonth(1)}
            >
              ›
            </button>
          </div>

          {/* weekdays */}
          <div className="wc-datepicker-weekdays">
            {weekdays.map((w) => (
              <div key={w} className="wc-datepicker-weekday">
                {w}
              </div>
            ))}
          </div>

          {/* days grid */}
          <div className="wc-datepicker-days">
            {calendarDays.map((day) => {
              const classes = getDayClasses(day, internal)
              const isDisabled = disabledDay(day)
              return (
                <button
                  key={`${day.month}-${day.day}`}
                  type="button"
                  className={classes}
                  disabled={isDisabled}
                  onClick={() => handleSelect(day)}
                >
                  {day.day}
                </button>
              )
            })}
          </div>

          {showToday && (
            <div className="wc-datepicker-footer">
              <button
                type="button"
                className="wc-datepicker-today"
                onClick={selectToday}
              >
                今天
              </button>
              <button
                type="button"
                className="wc-datepicker-clear"
                onClick={clearDate}
              >
                清除
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default DatePicker