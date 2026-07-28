import { createSignal, createEffect } from 'solid-js'
import { useId } from '../../useId'

import { useOverlayLayer } from '../../interactions'
import { useLocale } from '../../LocaleSolid'
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
  const { messages } = useLocale()
  let wrapperRef = null
  let dropdownRef = null
  const inputId = useId()
  const [isOpen, setOpen] = createSignal(false)
  const [currentDate, setCurrentDate] = createSignal(() =>
    value ? new Date(value) : new Date()
  )
  const [internal, setInternal] = createSignal(value ? new Date(value) : null)

  // update internal when value prop changes
  createEffect(() => {
    setInternal(value ? new Date(value) : null)
  }, [value])

  useOverlayLayer({
    open: isOpen,
    elementRef: dropdownRef,
    refs: [wrapperRef],
    closeOnEscape: true,
    closeOnPointerDownOutside: true,
    onEscapeKeyDown: () => setOpen(false),
    onPointerDownOutside: () => setOpen(false),
    zIndex: 1000,
  })

  const inputDisplay = internal ? formatDate(internal, format) : ''

  const toggleOpen = () => {
    if (disabled) return
    setOpen((v) => !v)
  }

  const handleInputKeyDown = (event) => {
    if (disabled) return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
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
    <div class="wc-datepicker" ref={wrapperRef} {...rest}>
      <div class={wrapperClasses} onClick={toggleOpen}>
        <input
          type="text"
          id={inputId}
          class="wc-datepicker-input"
          value={inputDisplay}
          placeholder={placeholder}
          disabled={disabled}
          readOnly
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={isOpen()}
          aria-controls={`${inputId}-calendar`}
          onKeyDown={handleInputKeyDown}
        />
        <span class="wc-datepicker-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
        </span>
      </div>

      {isOpen && (
        <div ref={dropdownRef} class="wc-datepicker-dropdown" id={`${inputId}-calendar`} role="dialog" aria-label={messages.openCalendar}>
          {/* header */}
          <div class="wc-datepicker-header">
            <button
              type="button"
              class="wc-datepicker-nav"
              aria-label={messages.previousMonth}
              onClick={() => changeMonth(-1)}
            >
              ‹
            </button>
            <span class="wc-datepicker-title">{monthYear}</span>
            <button
              type="button"
              class="wc-datepicker-nav"
              aria-label={messages.nextMonth}
              onClick={() => changeMonth(1)}
            >
              ›
            </button>
          </div>

          {/* weekdays */}
          <div class="wc-datepicker-weekdays">
            {weekdays.map((w) => (
              <div key={w} class="wc-datepicker-weekday">
                {w}
              </div>
            ))}
          </div>

          {/* days grid */}
          <div class="wc-datepicker-days">
            {calendarDays.map((day) => {
              const classes = getDayClasses(day, internal)
              const isDisabled = disabledDay(day)
              return (
                <button
                  key={`${day.month}-${day.day}`}
                  type="button"
                  class={classes}
                  disabled={isDisabled}
                  aria-label={formatDate(day.date, 'YYYY-MM-DD')}
                  aria-selected={isSameDate(day.date, internal)}
                  aria-current={isToday(day.date) ? 'date' : undefined}
                  onClick={() => handleSelect(day)}
                >
                  {day.day}
                </button>
              )
            })}
          </div>

          {showToday && (
            <div class="wc-datepicker-footer">
              <button
                type="button"
                class="wc-datepicker-today"
                onClick={selectToday}
              >
                今天
              </button>
              <button
                type="button"
                class="wc-datepicker-clear"
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
