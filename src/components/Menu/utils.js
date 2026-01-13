// Menu 组件工具函数

/**
 * 有效的Menu放置位置
 */
export const validPlacements = [
  'bottom-start', 'bottom-end', 'top-start', 'top-end', 'left', 'right'
]

/**
 * 有效的Menu尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的Menu触发类型
 */
export const validTriggers = ['click', 'hover']

/**
 * 有效的Menu变体
 */
export const validVariants = ['default', 'text', 'outlined', 'card']

/**
 * 验证Menu放置位置
 * @param {string} placement - 要验证的放置位置
 * @returns {boolean} 是否为有效放置位置
 */
export function isValidPlacement(placement) {
  return validPlacements.includes(placement)
}

/**
 * 验证Menu尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证触发类型
 * @param {string} trigger - 要验证的触发类型
 * @returns {boolean} 是否为有效触发类型
 */
export function isValidTrigger(trigger) {
  return validTriggers.includes(trigger)
}

/**
 * 验证变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 获取Menu的CSS类名
 * @param {Object} props - Menu的props
 * @returns {Array<string>} CSS类名数组
 */
export const getMenuClasses = ({ size, variant, disabled, className }) => {
  const classes = ['wc-menu', `wc-menu--${size}`, `wc-menu--${variant}`]
  if (disabled) classes.push('wc-menu--disabled')
  if (className) classes.push(className)
  return classes
}

/**
 * 获取Menu菜单的CSS类名
 * @param {string} placement - 放置位置
 * @param {string} className - 额外类名
 * @returns {Array<string>} CSS类名数组
 */
export const getMenuMenuClasses = (placement, variantClass) => {
  return ['wc-menu__menu', `wc-menu__menu--${placement}`, variantClass]
}

/**
 * 获取Menu按钮的CSS类名
 * @param {Object} props - 按钮props
 * @returns {Array<string>} CSS类名数组
 */
export const getMenuButtonClasses = ({ disabled }) => {
  return ['wc-menu__button', disabled ? 'wc-menu__button--disabled' : '']
}

/**
 * 获取Menu项目的CSS类名
 * @param {Object} item - 项目数据
 * @returns {Array<string>} CSS类名数组
 */
export const getMenuItemClasses = (item) => {
  const classes = ['wc-menu__item']
  if (item.divider) classes.push('wc-menu__divider')
  if (item.disabled) classes.push('wc-menu__item--disabled')
  return classes
}

/**
 * 获取箭头的CSS类名
 * @param {boolean} isOpen - 是否打开
 * @returns {Array<string>} CSS类名数组
 */
export const getArrowClasses = (isOpen) => {
  return ['wc-menu__arrow', isOpen ? 'wc-menu__arrow--open' : '']
}

/**
 * 处理点击外部事件
 * @param {Event} event - 点击事件
 * @param {HTMLElement} menuRef - Menu引用
 * @param {Function} onClose - 关闭回调
 */
export function handleClickOutside(event, menuRef, onClose) {
  if (menuRef && !menuRef.contains(event.target)) {
    onClose && onClose()
  }
}

/**
 * 处理Menu切换
 * @param {boolean} isOpen - 当前打开状态
 * @param {boolean} disabled - 是否禁用
 * @param {Function} setIsOpen - 设置打开状态
 * @param {Function} onOpen - 打开回调
 * @param {Function} onClose - 关闭回调
 */
export const handleMenuToggle = (isOpen, disabled, setIsOpen, onOpen, onClose) => {
  if (disabled) return
  setIsOpen(!isOpen)
  if (!isOpen) {
    onOpen && onOpen()
  } else {
    onClose && onClose()
  }
}

/**
 * 处理项目点击
 * @param {Object} item - 点击的项目
 * @param {number} index - 项目索引
 * @param {Function} onSelect - 选择回调
 * @param {Function} setIsOpen - 设置打开状态
 * @param {Function} onClose - 关闭回调
 */
export const handleItemClick = (item, index, onSelect, setIsOpen, onClose) => {
  if (item.disabled || item.divider) return
  onSelect && onSelect(item, index)
  setIsOpen(false)
  onClose && onClose()
}

/**
 * 创建点击外部监听器
 * @param {Function} callback - 回调函数
 * @returns {Object} 监听器管理对象
 */
export const createOutsideClickListener = (callback) => {
  const listener = (event) => {
    callback(event)
  }
  return {
    add: () => document.addEventListener('click', listener),
    remove: () => document.removeEventListener('click', listener)
  }
}

/**
 * 获取菜单位置样式
 * @param {string} placement - 放置位置
 * @returns {Object} 位置样式对象
 */
export function getMenuPositionStyles(placement) {
  const styles = {
    position: 'absolute',
    zIndex: 1000
  }
  
  switch (placement) {
    case 'bottom-start':
      styles.top = '100%'
      styles.left = 0
      styles.marginTop = '4px'
      break
    case 'bottom-end':
      styles.top = '100%'
      styles.right = 0
      styles.marginTop = '4px'
      break
    case 'top-start':
      styles.bottom = '100%'
      styles.left = 0
      styles.marginBottom = '4px'
      break
    case 'top-end':
      styles.bottom = '100%'
      styles.right = 0
      styles.marginBottom = '4px'
      break
    case 'left':
      styles.top = 0
      styles.right = '100%'
      styles.marginRight = '4px'
      break
    case 'right':
      styles.top = 0
      styles.left = '100%'
      styles.marginLeft = '4px'
      break
    default:
      // 默认为 bottom-start
      styles.top = '100%'
      styles.left = 0
      styles.marginTop = '4px'
  }
  
  return styles
}

/**
 * 过滤和处理菜单项
 * @param {Array} items - 原始项目数组
 * @returns {Array} 处理后的项目数组
 */
export function processMenuItems(items) {
  return items.map((item, index) => ({
    ...item,
    key: item.key || index,
    id: item.id || `menu-item-${index}`
  }))
}

/**
 * 键盘导航处理
 * @param {Event} event - 键盘事件
 * @param {Array} items - 菜单项
 * @param {number} activeIndex - 当前活跃索引
 * @param {Function} setActiveIndex - 设置活跃索引
 * @param {Function} onSelect - 选择回调
 * @param {Function} onClose - 关闭回调
 */
export function handleKeyNavigation(event, items, activeIndex, setActiveIndex, onSelect, onClose) {
  const { key } = event
  
  switch (key) {
    case 'ArrowDown':
      event.preventDefault()
      const nextIndex = activeIndex < items.length - 1 ? activeIndex + 1 : 0
      setActiveIndex(nextIndex)
      break
    case 'ArrowUp':
      event.preventDefault()
      const prevIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1
      setActiveIndex(prevIndex)
      break
    case 'Enter':
    case ' ':
      event.preventDefault()
      if (activeIndex >= 0) {
        const item = items[activeIndex]
        handleItemClick(item, activeIndex, onSelect, () => {}, onClose)
      }
      break
    case 'Escape':
      event.preventDefault()
      onClose && onClose()
      break
  }
} 