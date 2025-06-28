// Card 组件工具函数

/**
 * 有效的Card变体
 */
export const validVariants = ['default', 'elevated']

/**
 * 有效的Card内边距
 */
export const validPaddings = ['none', 'sm', 'md', 'lg']

/**
 * 有效的Card边框圆角
 */
export const validBorderRadius = ['none', 'sm', 'md', 'lg', 'xl']

/**
 * 验证Card变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证Card内边距
 * @param {string} padding - 要验证的内边距
 * @returns {boolean} 是否为有效内边距
 */
export function isValidPadding(padding) {
  return validPaddings.includes(padding)
}

/**
 * 验证Card边框圆角
 * @param {string} borderRadius - 要验证的边框圆角
 * @returns {boolean} 是否为有效边框圆角
 */
export function isValidBorderRadius(borderRadius) {
  return validBorderRadius.includes(borderRadius)
}

/**
 * 获取Card的CSS类名
 * @param {string} className - 额外的CSS类名
 * @param {string} variant - 变体样式 ('filled', 'outlined', 'minimal', 'elevated')
 * @param {string} color - 颜色 ('default', 'primary', 'success', 'warning', 'error', 'info')
 * @param {string} size - 尺寸 ('small', 'medium', 'large')
 * @param {boolean} interactive - 是否启用交互效果
 * @param {boolean} noBorder - 是否无边框
 * @returns {string} 完整的CSS类名字符串
 */
export function getCardClasses(
  className = '', 
  variant = 'filled', 
  color = 'default', 
  size = 'medium', 
  interactive = true, 
  noBorder = true
) {
  const classes = ['wc-card']
  
  // 添加变体类名
  if (variant && variant !== 'filled') {
    classes.push(`wc-card--${variant}`)
  }
  
  // 添加颜色类名
  if (color && color !== 'default') {
    classes.push(`wc-card--${color}`)
  }
  
  // 添加尺寸类名
  if (size && size !== 'medium') {
    classes.push(`wc-card--${size}`)
  }
  
  // 添加交互效果类名
  if (interactive) {
    classes.push('wc-card--interactive')
  }
  
  // 添加无边框类名
  if (noBorder) {
    classes.push('wc-card--no-border')
  }
  
  // 添加自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取Card的内联样式
 * @param {Object} style - 自定义样式对象
 * @returns {Object} 内联样式对象
 */
export function getCardStyles(style = {}) {
  return {
    backgroundColor: 'var(--wc-neutral-0)',
    border: '1px solid var(--wc-neutral-200)',
    color: 'var(--wc-neutral-900)',
    ...style
  }
}

/**
 * 处理Card点击事件
 * @param {Event} e - 事件对象
 * @param {boolean} disabled - 是否禁用
 * @param {boolean} clickable - 是否可点击
 * @param {Function} onClick - 点击回调函数
 */
export function handleCardClick(e, disabled, clickable, onClick) {
  if (!disabled && clickable && onClick) {
    onClick(e)
  }
}

/**
 * Vue版本的类名映射
 */
export const vueVariantClasses = {
  default: '',
  elevated: 'wc-card--elevated'
}

/**
 * Vue版本的padding类名映射
 */
export const vuePaddingClasses = {
  none: 'wc-padding-none',
  sm: 'wc-padding-normal',
  md: 'wc-padding-comfortable',
  lg: 'wc-padding-2'
}

/**
 * 获取Vue版本的Card类名
 * @param {Object} props - Vue组件的props
 * @returns {Array<string>} CSS类名数组
 */
export function getVueCardClasses(props) {
  const { variant = 'default', padding = 'md' } = props
  
  const classes = ['wc-card']
  
  if (vueVariantClasses[variant]) {
    classes.push(vueVariantClasses[variant])
  }
  
  if (vuePaddingClasses[padding]) {
    classes.push(vuePaddingClasses[padding])
  }
  
  return classes.filter(Boolean)
} 