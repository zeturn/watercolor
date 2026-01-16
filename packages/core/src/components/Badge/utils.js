// Badge 组件工具函数

/**
 * 有效的Badge变体类型
 */
export const validVariants = [
  'primary', 'secondary', 'success', 'warning', 'error', 
  'purple', 'orange', 'cyan', 'pink'
]

/**
 * 有效的Badge尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 验证Badge变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证Badge尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 获取安全的Badge变体
 * @param {string} variant - 输入的变体
 * @returns {string} 安全的变体名称
 */
export function getSafeVariant(variant) {
  return isValidVariant(variant) ? variant : 'primary'
}

/**
 * 获取Badge的CSS类名
 * @param {Object} props - Badge的props
 * @returns {string} 完整的CSS类名字符串
 */
export function getBadgeClasses({ variant, size, dot, className }) {
  const safeVariant = getSafeVariant(variant)
  
  const classes = [
    'wc-badge',
    `wc-badge--${safeVariant}`
  ]
  
  // 添加尺寸类名
  if (dot) {
    classes.push(`wc-badge--dot-${size}`)
  } else {
    classes.push(`wc-badge--${size}`)
  }
  
  // 添加自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.filter(Boolean).join(' ')
} 