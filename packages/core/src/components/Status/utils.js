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
  default: { text: '默认', color: 'var(--wc-text-tertiary)' },
  success: { text: '成功', color: 'var(--wc-text-success)' },
  error: { text: '失败', color: 'var(--wc-text-error)' },
  warning: { text: '警告', color: 'var(--wc-text-warning)' },
  info: { text: '信息', color: 'var(--wc-text-info)' },
  pending: { text: '等待中', color: 'var(--wc-text-brand)' },
  processing: { text: '进行中', color: 'var(--wc-text-info)' },
  cancelled: { text: '已取消', color: 'var(--wc-text-disabled)' }
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
export function getStatusColor(status) {
  const config = statusConfig[status] || statusConfig.default
  return config.color
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
