// Feature 组件工具函数

/**
 * 有效的Feature对齐方式
 */
export const validAlignments = ['left', 'center']

/**
 * 有效的Feature尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的Feature背景变体
 */
export const validBackgrounds = ['default', 'transparent', 'white', 'gray', 'primary']

/**
 * 验证Feature对齐方式
 * @param {string} align - 要验证的对齐方式
 * @returns {boolean} 是否为有效对齐方式
 */
export function isValidAlignment(align) {
  return validAlignments.includes(align)
}

/**
 * 验证Feature尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证Feature背景
 * @param {string} background - 要验证的背景
 * @returns {boolean} 是否为有效背景
 */
export function isValidBackground(background) {
  return validBackgrounds.includes(background)
}

/**
 * 获取Feature卡片的CSS类名
 * @param {Object} props - Feature的props
 * @returns {Array<string>} CSS类名数组
 */
export const getFeatureCardClasses = ({ align, size, background, reverse, vertical, clickable, disabled, className }) => {
  const classes = [
    'wc-feature-card',
    clickable && 'wc-feature-card--clickable',
    disabled && 'wc-feature-card--disabled',
    reverse && 'wc-feature-card--reverse',
    vertical && 'wc-feature-card--vertical',
    `wc-feature-card--${size}`,
    `wc-feature-card--${background}`,
    `wc-feature-card--${align}`,
    className
  ]
  return classes.filter(Boolean)
}

/**
 * 获取Feature图标的CSS类名
 * @param {string|number} iconSize - 图标尺寸
 * @param {boolean} isDarkMode - 是否为暗模式
 * @returns {Array<string>} CSS类名数组
 */
export function getFeatureIconClasses(iconSize) {
  const classes = [
    'wc-feature-icon',
    `wc-feature-icon--${iconSize}`
  ]
  return classes.filter(Boolean)
}

/**
 * 获取Feature内容的CSS类名
 * @param {string} align - 对齐方式
 * @param {boolean} isDarkMode - 是否为暗模式
 * @returns {Array<string>} CSS类名数组
 */
export function getFeatureContentClasses(align) {
  const classes = [
    'wc-feature-content',
    `wc-feature-content--${align}`
  ]
  return classes.filter(Boolean)
}

/**
 * 获取Feature标题的CSS类名
 * @param {string} size - 尺寸
 * @param {boolean} isDarkMode - 是否为暗模式
 * @returns {Array<string>} CSS类名数组
 */
export function getFeatureTitleClasses(size) {
  const classes = [
    'wc-feature-title',
    `wc-feature-title--${size}`
  ]
  return classes.filter(Boolean)
}

/**
 * 获取Feature描述的CSS类名
 * @param {string} size - 尺寸
 * @param {boolean} isDarkMode - 是否为暗模式
 * @returns {Array<string>} CSS类名数组
 */
export const getFeatureDescriptionClasses = (size) => {
  const classes = [
    'wc-feature-description',
    `wc-feature-description--${size}`
  ]
  return classes.filter(Boolean)
}

/**
 * 处理Feature卡片点击事件
 * @param {Event} e - 事件对象
 * @param {boolean} disabled - 是否禁用
 * @param {Function} onClick - 点击回调函数
 */
export function handleFeatureClick(e, disabled, onClick) {
  if (!disabled && onClick) {
    onClick(e)
  }
}

/**
 * 处理CTA点击事件
 * @param {Event} e - 事件对象
 * @param {Function} onCtaClick - CTA点击回调函数
 */
export function handleCtaClick(e, onCtaClick) {
  e.stopPropagation()
  if (onCtaClick) {
    onCtaClick(e)
  }
}

/**
 * 渲染图标内容
 * @param {string|ReactNode} icon - 图标
 * @returns {ReactNode} 渲染的图标
 */
export function renderIcon(icon) {
  if (typeof icon === 'string') {
    // In React, returning a function here would be treated as an invalid child.
    // Keep this utility framework-agnostic: return the raw string and let the
    // framework layer decide how to render HTML (e.g. React dangerouslySetInnerHTML).
    return icon
  }
  return icon
}
