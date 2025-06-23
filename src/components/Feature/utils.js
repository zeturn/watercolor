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
export function getFeatureCardClasses(props) {
  const {
    align = 'left',
    size = 'md',
    background = 'default',
    reverse = false,
    vertical = false,
    clickable = false,
    disabled = false,
    className = ''
  } = props

  const classes = ['wc-feature-card']
  
  classes.push(`wc-feature-card--${align}`)
  classes.push(`wc-feature-card--${size}`)
  
  if (background !== 'default') {
    classes.push(`wc-feature-card--${background}`)
  }
  
  if (reverse) classes.push('wc-feature-card--reverse')
  if (vertical) classes.push('wc-feature-card--vertical')
  if (clickable) classes.push('wc-feature-card--clickable')
  if (disabled) classes.push('wc-feature-card--disabled')
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean)
}

/**
 * 获取Feature图标的CSS类名
 * @param {string|number} iconSize - 图标尺寸
 * @returns {Array<string>} CSS类名数组
 */
export function getFeatureIconClasses(iconSize) {
  const classes = ['wc-feature-icon']
  
  // 根据尺寸添加对应的类名
  if (typeof iconSize === 'number') {
    if (iconSize <= 32) classes.push('wc-feature-icon--sm')
    else if (iconSize <= 48) classes.push('wc-feature-icon--md')
    else classes.push('wc-feature-icon--lg')
  }
  
  return classes
}

/**
 * 获取Feature内容的CSS类名
 * @param {string} align - 对齐方式
 * @returns {Array<string>} CSS类名数组
 */
export function getFeatureContentClasses(align) {
  const classes = ['wc-feature-content']
  
  classes.push(`wc-feature-content--${align}`)
  
  return classes
}

/**
 * 获取Feature标题的CSS类名
 * @param {string} size - 尺寸
 * @returns {Array<string>} CSS类名数组
 */
export function getFeatureTitleClasses(size) {
  const classes = ['wc-feature-title']
  
  classes.push(`wc-feature-title--${size}`)
  
  return classes
}

/**
 * 获取Feature描述的CSS类名
 * @param {string} size - 尺寸
 * @returns {Array<string>} CSS类名数组
 */
export function getFeatureDescriptionClasses(size) {
  const classes = ['wc-feature-description']
  
  classes.push(`wc-feature-description--${size}`)
  
  return classes
}

/**
 * 获取图标包装器的内联样式
 * @param {string|number} iconSize - 图标尺寸
 * @returns {Object} 内联样式对象
 */
export function getIconWrapperStyles(iconSize) {
  const styles = {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--wc-primary-600, #2563eb)'
  }
  
  if (typeof iconSize === 'number') {
    styles.width = `${iconSize}px`
    styles.height = `${iconSize}px`
  } else if (typeof iconSize === 'string') {
    styles.width = iconSize
    styles.height = iconSize
  }
  
  return styles
}

/**
 * 获取卡片的内联样式
 * @param {Object} props - Feature的props
 * @returns {Object} 内联样式对象
 */
export function getCardStyles(props) {
  const {
    align = 'left',
    bgColor = '',
    reverse = false,
    vertical = false,
    style = {}
  } = props

  const styles = {
    display: 'flex',
    alignItems: align === 'center' ? 'center' : 'flex-start',
    gap: '16px',
    padding: '16px',
    border: '1px solid var(--wc-neutral-200, #e5e7eb)',
    borderRadius: '8px',
    background: 'var(--wc-neutral-50, #f9fafb)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ...style
  }
  
  if (reverse) {
    styles.flexDirection = 'row-reverse'
  }
  
  if (vertical) {
    styles.flexDirection = 'column'
    styles.alignItems = 'center'
    styles.textAlign = 'center'
  }
  
  if (bgColor) {
    styles.background = bgColor
  }
  
  return styles
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
    // 返回一个创建 span 元素的函数，而不是 JSX
    return () => {
      const span = document.createElement('span')
      span.innerHTML = icon
      return span
    }
  }
  return icon
} 