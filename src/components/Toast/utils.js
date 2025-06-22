// Toast 组件工具函数

/**
 * Toast类型的颜色映射
 */
export const colorMap = {
  info: { 
    bg: '#e8f4ff', 
    text: '#0070f3', 
    border: '#1a8cff' 
  },
  success: { 
    bg: '#ecfdf5', 
    text: '#047857', 
    border: '#10b981' 
  },
  warning: { 
    bg: '#fffbeb', 
    text: '#b45309', 
    border: '#f59e0b' 
  },
  error: { 
    bg: '#fef2f2', 
    text: '#b91c1c', 
    border: '#ef4444' 
  }
}

/**
 * Toast图标映射
 */
export const iconMap = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕'
}

/**
 * 有效的Toast类型
 */
export const validTypes = ['info', 'success', 'warning', 'error']

/**
 * 有效的Toast位置
 */
export const validPositions = [
  'top-right', 'top-left', 'top-center',
  'bottom-right', 'bottom-left', 'bottom-center'
]

/**
 * 验证Toast类型
 * @param {string} type - 要验证的类型
 * @returns {boolean} 是否为有效类型
 */
export function isValidType(type) {
  return validTypes.includes(type)
}

/**
 * 验证Toast位置
 * @param {string} position - 要验证的位置
 * @returns {boolean} 是否为有效位置
 */
export function isValidPosition(position) {
  return validPositions.includes(position)
}

/**
 * 获取Toast的CSS类名
 * @param {string} type - Toast类型
 * @param {string} position - Toast位置
 * @param {string} className - 额外的CSS类名
 * @returns {string} 完整的CSS类名字符串
 */
export function getToastClasses(type, position, className = '') {
  const classes = [
    'wc-toast',
    `wc-toast--${type}`,
    `wc-toast--${position}`,
    className
  ]
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取Toast的内联样式
 * @param {string} type - Toast类型
 * @param {boolean} visible - 是否可见
 * @returns {Object} 内联样式对象
 */
export function getToastStyles(type, visible = true) {
  const typeColors = colorMap[type] || colorMap.info
  
  return {
    backgroundColor: typeColors.bg,
    color: typeColors.text,
    borderLeftColor: typeColors.border,
    display: visible ? 'flex' : 'none'
  }
}

/**
 * 获取Toast图标
 * @param {string} type - Toast类型
 * @returns {string} 图标字符
 */
export function getToastIcon(type) {
  return iconMap[type] || iconMap.info
}

/**
 * 处理Toast关闭事件
 * @param {Function} setVisible - 设置可见性的函数
 * @param {Function} onClose - 关闭回调函数
 * @param {number} delay - 延迟时间（毫秒）
 */
export function handleToastClose(setVisible, onClose, delay = 300) {
  setVisible(false)
  if (onClose) {
    setTimeout(() => {
      onClose()
    }, delay)
  }
}

/**
 * 设置Toast自动关闭定时器
 * @param {number} duration - 持续时间（毫秒）
 * @param {Function} closeHandler - 关闭处理函数
 * @returns {number|null} 定时器ID
 */
export function setToastTimer(duration, closeHandler) {
  if (duration > 0) {
    return setTimeout(() => {
      closeHandler()
    }, duration)
  }
  return null
} 