// Chip 组件工具函数

/**
 * 有效的Chip尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的Chip变体
 */
export const validVariants = ['filled', 'outlined', 'text']

/**
 * 有效的Chip颜色
 */
export const validColors = ['default', 'primary', 'secondary', 'success', 'warning', 'error']

/**
 * 验证Chip尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证Chip变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证Chip颜色
 * @param {string} color - 要验证的颜色
 * @returns {boolean} 是否为有效颜色
 */
export function isValidColor(color) {
  return validColors.includes(color)
}

/**
 * 获取Chip的CSS类名
 * @param {Object} props - Chip的props
 * @returns {string} CSS类名字符串
 */
export function getChipClasses(props) {
  const {
    size = 'md',
    variant = 'filled',
    color = 'default',
    clickable = false,
    disabled = false,
    className = ''
  } = props

  const classes = ['wc-chip']
  
  classes.push(`wc-chip--${size}`)
  classes.push(`wc-chip--${variant}`)
  classes.push(`wc-chip--${color}`)
  
  if (clickable && !disabled) classes.push('wc-chip--clickable')
  if (disabled) classes.push('wc-chip--disabled')
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 颜色映射（用于Tailwind版本）
 */
/**
 * 处理Chip点击事件
 * @param {Event} e - 事件对象
 * @param {boolean} clickable - 是否可点击
 * @param {boolean} disabled - 是否禁用
 * @param {Function} onClick - 点击回调函数
 */
export function handleChipClick(e, clickable, disabled, onClick) {
  if (clickable && !disabled && onClick) {
    onClick(e)
  }
}

/**
 * 处理Chip删除事件
 * @param {Event} e - 事件对象
 * @param {boolean} disabled - 是否禁用
 * @param {Function} onDelete - 删除回调函数
 */
export function handleChipDelete(e, disabled, onDelete) {
  e.stopPropagation()
  if (!disabled && onDelete) {
    onDelete(e)
  }
}

/**
 * 获取删除图标的SVG路径
 * @returns {string} 删除图标的SVG路径
 */
export function getDefaultDeleteIconPath() {
  return 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
}
