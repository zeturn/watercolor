// Status 组件工具函数

/**
 * 有效的Status状态类型
 */
export const validStatuses = [
  'default', 'success', 'error', 'warning', 'info', 
  'pending', 'processing', 'cancelled'
]

/**
 * 有效的Status尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的动画类型
 */
export const validAnimationTypes = [
  'auto', 'pulse', 'spin', 'bounce', 'blink', 'shake', 'breathe', 'ripple', 'glow'
]

/**
 * 状态配置
 */
export const statusConfig = {
  default: { 
    text: '默认',
    color: '#9ca3af',
    darkColor: '#6b7280'
  },
  success: { 
    text: '成功',
    color: '#10b981',
    darkColor: '#059669'
  },
  error: { 
    text: '失败',
    color: '#ef4444',
    darkColor: '#dc2626'
  },
  warning: { 
    text: '警告',
    color: '#f59e0b',
    darkColor: '#d97706'
  },
  info: { 
    text: '信息',
    color: '#3b82f6',
    darkColor: '#2563eb'
  },
  pending: { 
    text: '等待中',
    color: '#8b5cf6',
    darkColor: '#7c3aed'
  },
  processing: { 
    text: '进行中',
    color: '#06b6d4',
    darkColor: '#0891b2'
  },
  cancelled: { 
    text: '已取消',
    color: '#64748b',
    darkColor: '#475569'
  }
}

/**
 * 验证Status状态
 * @param {string} status - 要验证的状态
 * @returns {boolean} 是否为有效状态
 */
export function isValidStatus(status) {
  return validStatuses.includes(status)
}

/**
 * 验证Status尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 获取安全的Status状态
 * @param {string} status - 输入的状态
 * @returns {string} 安全的状态名称
 */
export function getSafeStatus(status) {
  return isValidStatus(status) ? status : 'default'
}

/**
 * 获取Status的CSS类名
 * @param {Object} props - Status的props
 * @returns {string} 完整的CSS类名字符串
 */
export function getStatusClasses({ status, size, showText, animated, animationType = 'auto', className }) {
  const safeStatus = getSafeStatus(status)
  
  const classes = [
    'wc-status',
    `wc-status--${safeStatus}`,
    `wc-status--${size}`
  ]
  
  if (showText) {
    classes.push('wc-status--with-text')
  }
  
  if (animated) {
    const finalAnimationType = getAnimationType(safeStatus, animationType)
    classes.push('wc-status--animated', `wc-status--${finalAnimationType}`)
  }
  
  // 添加自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取Status的文本
 * @param {string} status - 状态
 * @returns {string} 状态文本
 */
export function getStatusText(status) {
  return statusConfig[status]?.text || statusConfig.default.text
}

/**
 * 获取Status的颜色
 * @param {string} status - 状态
 * @param {boolean} isDark - 是否为深色模式
 * @returns {string} 状态颜色
 */
export function getStatusColor(status, isDark = false) {
  const config = statusConfig[status] || statusConfig.default
  return isDark ? config.darkColor : config.color
}

/**
 * 获取动画类型
 * @param {string} status - 状态
 * @param {string} animationType - 指定的动画类型
 * @returns {string} 最终的动画类型
 */
export function getAnimationType(status, animationType = 'auto') {
  if (animationType !== 'auto' && validAnimationTypes.includes(animationType)) {
    return animationType
  }
  
  // 根据状态自动选择动画类型
  const defaultAnimations = {
    processing: 'spin',
    pending: 'pulse',
    success: 'bounce',
    error: 'shake',
    warning: 'blink',
    info: 'ripple',
    cancelled: 'breathe',
    default: 'glow'
  }
  
  return defaultAnimations[status] || 'pulse'
} 