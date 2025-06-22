// Button 组件工具函数

/**
 * 有效的Button变体类型
 */
export const validVariants = [
  'primary', 'secondary', 'filled', 'outlined', 'text', 
  'success', 'warning', 'error', 'info', 'purple', 'orange', 'cyan', 'pink'
]

/**
 * 有效的Button尺寸
 */
export const validSizes = ['xs', 'sm', 'md', 'lg', 'xl']

/**
 * 有效的Button类型
 */
export const validTypes = ['button', 'submit', 'reset']

/**
 * 有效的rounded值
 */
export const validRounded = ['none', 'sm', 'md', 'lg', 'full']

/**
 * 验证Button变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证Button尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证Button类型
 * @param {string} type - 要验证的类型
 * @returns {boolean} 是否为有效类型
 */
export function isValidType(type) {
  return validTypes.includes(type)
}

/**
 * 验证rounded值
 * @param {boolean|string} rounded - 要验证的rounded值
 * @returns {boolean} 是否为有效rounded值
 */
export function isValidRounded(rounded) {
  return typeof rounded === 'boolean' || validRounded.includes(rounded)
}

/**
 * 获取安全的Button变体
 * @param {string} variant - 输入的变体
 * @returns {string} 安全的变体名称
 */
export function getSafeVariant(variant) {
  return isValidVariant(variant) ? variant : 'primary'
}

/**
 * 获取Button的CSS类名
 * @param {Object} props - Button的props
 * @returns {Array<string>} CSS类名数组
 */
export function getButtonClasses(props) {
  const { variant, size, disabled, loading, fullWidth, uppercase, rounded } = props
  const classes = ['wc-btn']
  
  // 变体类名
  classes.push(`wc-btn--${getSafeVariant(variant)}`)
  
  // 尺寸类名
  classes.push(`wc-btn--${size}`)
  
  // 状态类名
  if (disabled || loading) classes.push('wc-btn--disabled')
  if (loading) classes.push('wc-btn--loading')
  if (fullWidth) classes.push('wc-btn--full-width')
  if (uppercase) classes.push('wc-btn--uppercase')
  
  // 圆角类名
  if (rounded === false || rounded === 'none') {
    classes.push('wc-btn--rounded-none')
  } else if (typeof rounded === 'string') {
    classes.push(`wc-btn--rounded-${rounded}`)
  } else {
    classes.push('wc-btn--rounded')
  }
  
  return classes
}

/**
 * 获取Button的内联样式
 * @param {string} variant - Button变体
 * @returns {Object} 内联样式对象
 */
export function getVariantStyles(variant) {
  const styles = {}
  
  // 使用CSS变量进行主题化
  if (variant === 'primary') {
    styles.backgroundColor = 'var(--wc-primary-500)'
    styles.color = 'white'
  } else if (variant === 'secondary') {
    styles.backgroundColor = 'var(--wc-secondary-500)'
    styles.color = 'white'
  } else if (variant === 'outlined') {
    styles.backgroundColor = 'transparent'
    styles.color = 'var(--wc-primary-500)'
    styles.border = '1px solid var(--wc-primary-500)'
  } else if (variant === 'text') {
    styles.backgroundColor = 'transparent'
    styles.color = 'var(--wc-primary-500)'
  } else if (['success', 'warning', 'error', 'info'].includes(variant)) {
    styles.backgroundColor = `var(--wc-${variant}-500)`
    styles.color = 'white'
  }
  
  return styles
}

/**
 * 获取rounded的CSS类名
 * @param {boolean|string} rounded - rounded值
 * @returns {string} CSS类名
 */
export function getRoundedClass(rounded) {
  if (rounded === false || rounded === 'none') return 'wc-btn--rounded-none'
  if (typeof rounded === 'string') return `wc-btn--rounded-${rounded}`
  return 'wc-btn--rounded'
}

/**
 * 处理Button点击事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 点击事件
 * @param {boolean} params.disabled - 是否禁用
 * @param {boolean} params.loading - 是否加载中
 * @param {string} params.href - 链接地址
 * @param {string} params.target - 链接目标
 * @param {Function} params.onClick - 点击回调
 */
export function handleButtonClick({ event, disabled, loading, href, target, onClick }) {
  if (!disabled && !loading) {
    if (href) {
      window.open(href, target)
    }
    onClick?.(event)
  }
} 