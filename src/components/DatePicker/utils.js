/**
 * DatePicker 共用工具函数
 */

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @param {string} format - 格式字符串，如 'YYYY-MM-DD'
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  if (!date || !(date instanceof Date)) return ''
  
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
}

/**
 * 解析日期字符串
 * @param {string} dateStr - 日期字符串
 * @returns {Date|null} 日期对象或null
 */
export function parseDate(dateStr) {
  if (!dateStr) return null
  const date = new Date(dateStr)
  return isNaN(date.getTime()) ? null : date
}

/**
 * 检查是否为今天
 * @param {Date} date - 要检查的日期
 * @returns {boolean} 是否为今天
 */
export function isToday(date) {
  if (!date) return false
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

/**
 * 检查两个日期是否相同
 * @param {Date} date1 - 第一个日期
 * @param {Date} date2 - 第二个日期
 * @returns {boolean} 是否相同
 */
export function isSameDate(date1, date2) {
  if (!date1 || !date2) return false
  return date1.toDateString() === date2.toDateString()
}

/**
 * 获取月份的天数
 * @param {number} year - 年份
 * @param {number} month - 月份 (0-11)
 * @returns {number} 该月天数
 */
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

/**
 * 获取月份第一天是星期几
 * @param {number} year - 年份
 * @param {number} month - 月份 (0-11)
 * @returns {number} 星期几 (0-6)
 */
export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

/**
 * 生成日历数据
 * @param {Date} currentDate - 当前显示的日期
 * @returns {Array} 日历数据数组
 */
export function generateCalendarDays(currentDate) {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const firstDayWeekday = firstDay.getDay()
  const daysInMonth = lastDay.getDate()
  
  const days = []
  
  // 添加上个月的日期
  const prevMonth = new Date(year, month - 1, 0)
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    days.push({
      day: prevMonth.getDate() - i,
      month: 'prev',
      date: new Date(year, month - 1, prevMonth.getDate() - i)
    })
  }
  
  // 添加当月的日期
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      month: 'current',
      date: new Date(year, month, day)
    })
  }
  
  // 添加下个月的日期
  const remainingDays = 42 - days.length
  for (let day = 1; day <= remainingDays; day++) {
    days.push({
      day,
      month: 'next',
      date: new Date(year, month + 1, day)
    })
  }
  
  return days
}

/**
 * 检查日期是否在范围内
 * @param {Date} date - 要检查的日期
 * @param {Date} minDate - 最小日期
 * @param {Date} maxDate - 最大日期
 * @returns {boolean} 是否在范围内
 */
export function isDateInRange(date, minDate, maxDate) {
  if (!date) return false
  
  if (minDate && date < minDate) return false
  if (maxDate && date > maxDate) return false
  
  return true
}

/**
 * 获取组件类名
 * @param {string} size - 尺寸
 * @param {string} variant - 变体
 * @param {boolean} disabled - 是否禁用
 * @param {boolean} focused - 是否聚焦
 * @param {boolean} open - 是否打开
 * @returns {string} 类名字符串
 */
export function getDatePickerClasses(size = 'md', variant = 'default', disabled = false, focused = false, open = false) {
  const classes = [
    'wc-datepicker-wrapper',
    `wc-datepicker-wrapper--${size}`,
    `wc-datepicker-wrapper--${variant}`
  ]
  
  if (disabled) classes.push('wc-datepicker-wrapper--disabled')
  if (focused) classes.push('wc-datepicker-wrapper--focused')
  if (open) classes.push('wc-datepicker-wrapper--open')
  
  return classes.join(' ')
}

/**
 * 获取日期按钮类名
 * @param {Object} day - 日期对象
 * @param {Date} selectedDate - 选中的日期
 * @returns {string} 类名字符串
 */
export function getDayClasses(day, selectedDate) {
  const classes = ['wc-datepicker-day']
  
  if (day.month === 'prev') classes.push('wc-datepicker-day--prev')
  if (day.month === 'next') classes.push('wc-datepicker-day--next')
  if (day.month === 'current') classes.push('wc-datepicker-day--current')
  
  if (selectedDate && isSameDate(day.date, selectedDate)) {
    classes.push('wc-datepicker-day--selected')
  }
  
  if (isToday(day.date)) {
    classes.push('wc-datepicker-day--today')
  }
  
  return classes.join(' ')
} 