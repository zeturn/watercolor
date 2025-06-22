// Countdown 组件工具函数

/**
 * 有效的Countdown尺寸
 */
export const validSizes = ['sm', 'md', 'lg', 'xl']

/**
 * 有效的Countdown颜色
 */
export const validColors = ['default', 'primary', 'secondary', 'success', 'warning', 'error']

/**
 * 有效的Countdown格式
 */
export const validFormats = ['simple', 'detailed', 'card']

/**
 * 验证Countdown尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证Countdown颜色
 * @param {string} color - 要验证的颜色
 * @returns {boolean} 是否为有效颜色
 */
export function isValidColor(color) {
  return validColors.includes(color)
}

/**
 * 验证Countdown格式
 * @param {string} format - 要验证的格式
 * @returns {boolean} 是否为有效格式
 */
export function isValidFormat(format) {
  return validFormats.includes(format)
}

/**
 * 补零函数
 * @param {number} n - 数字
 * @returns {string} 补零后的字符串
 */
export function padZero(n) {
  return String(n).padStart(2, '0')
}

/**
 * 格式化时间显示
 * @param {number} remaining - 剩余秒数
 * @param {boolean} showHours - 是否显示小时
 * @returns {string} 格式化后的时间字符串
 */
export function formatTime(remaining, showHours = true) {
  const hours = Math.floor(remaining / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60
  
  if (showHours && hours > 0) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
  } else {
    return `${padZero(minutes)}:${padZero(seconds)}`
  }
}

/**
 * 获取时间段对象
 * @param {number} remaining - 剩余秒数
 * @returns {Object} 包含各时间段的对象
 */
export function getTimeSegments(remaining) {
  const days = Math.floor(remaining / 86400)
  const hours = Math.floor((remaining % 86400) / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60
  
  return { days, hours, minutes, seconds }
}

/**
 * 获取Countdown的CSS类名
 * @param {Object} props - Countdown的props
 * @returns {Array<string>} CSS类名数组
 */
export function getCountdownClasses(props) {
  const {
    size = 'md',
    color = 'default',
    format = 'simple',
    finished = false,
    warningTime = null,
    remaining = 0,
    className = ''
  } = props

  const classes = ['wc-countdown']
  
  classes.push(`wc-countdown--${size}`)
  
  if (color !== 'default') {
    classes.push(`wc-countdown--${color}`)
  }
  
  if (format === 'detailed') {
    classes.push('wc-countdown--with-labels')
  }
  
  if (format === 'card') {
    classes.push('wc-countdown--card')
    if (format === 'card') {
      classes.push('wc-countdown--with-labels')
    }
  }
  
  if (finished || remaining === 0) {
    classes.push('wc-countdown--finished')
  } else if (warningTime && remaining <= warningTime) {
    classes.push('wc-countdown--warning-time')
  }
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean)
}

/**
 * 获取默认颜色（根据主题）
 * @returns {string} 默认颜色
 */
export function getDefaultColor() {
  const isDark = document.documentElement.classList.contains('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  
  return isDark ? 'var(--wc-neutral-100)' : 'var(--wc-neutral-900)'
}

/**
 * 创建定时器管理器
 * @param {Function} callback - 定时器回调函数
 * @returns {Object} 定时器管理器对象
 */
export function createTimer(callback) {
  let timerId = null
  
  const start = () => {
    if (timerId) return
    timerId = setInterval(callback, 1000)
  }
  
  const stop = () => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    }
  }
  
  const isRunning = () => !!timerId
  
  return { start, stop, isRunning }
}

/**
 * 获取时间段标签
 * @param {string} type - 时间段类型 ('days', 'hours', 'minutes', 'seconds')
 * @param {number} value - 时间段值
 * @returns {string} 标签文本
 */
export function getTimeLabel(type, value) {
  const labels = {
    days: value === 1 ? '天' : '天',
    hours: value === 1 ? '时' : '时',
    minutes: value === 1 ? '分' : '分',
    seconds: value === 1 ? '秒' : '秒'
  }
  
  return labels[type] || ''
}

/**
 * 检查是否应该显示时间段
 * @param {Object} segments - 时间段对象
 * @param {string} type - 时间段类型
 * @param {boolean} showZero - 是否显示零值
 * @returns {boolean} 是否应该显示
 */
export function shouldShowSegment(segments, type, showZero = false) {
  const value = segments[type]
  
  if (showZero) return true
  
  // 如果有更大的时间单位显示，则显示当前时间段
  if (type === 'hours' && segments.days > 0) return true
  if (type === 'minutes' && (segments.days > 0 || segments.hours > 0)) return true
  if (type === 'seconds') return true
  
  return value > 0
} 