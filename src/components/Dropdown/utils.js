// Dropdown 组件工具函数

/**
 * 有效的Dropdown放置位置
 */
export const validPlacements = [
  'bottom-start', 'bottom-end', 'top-start', 'top-end', 'left', 'right'
]

/**
 * 有效的Dropdown尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的Dropdown触发类型
 */
export const validTriggers = ['click', 'hover']

/**
 * 有效的Dropdown变体
 */
export const validVariants = ['default', 'text', 'outlined', 'card']

/**
 * 验证Dropdown放置位置
 * @param {string} placement - 要验证的放置位置
 * @returns {boolean} 是否为有效放置位置
 */
export function isValidPlacement(placement) {
  return validPlacements.includes(placement)
}

/**
 * 验证Dropdown尺寸
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
 * 获取Dropdown的CSS类名
 * @param {Object} props - Dropdown的props
 * @returns {Array<string>} CSS类名数组
 */
export function getDropdownClasses(props) {
  const {
    size = 'md',
    variant = 'default',
    disabled = false,
    className = ''
  } = props

  const classes = ['wc-dropdown']
  
  if (size !== 'md') classes.push(`wc-dropdown--${size}`)
  if (variant !== 'default') classes.push(`wc-dropdown--${variant}`)
  if (disabled) classes.push('wc-dropdown--disabled')
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean)
}

/**
 * 获取Dropdown菜单的CSS类名
 * @param {string} placement - 放置位置
 * @param {string} className - 额外类名
 * @returns {Array<string>} CSS类名数组
 */
export function getDropdownMenuClasses(placement, className = '') {
  const classes = ['wc-dropdown__menu']
  
  classes.push(`wc-dropdown__menu--${placement}`)
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean)
}

/**
 * 获取Dropdown按钮的CSS类名
 * @param {Object} props - 按钮props
 * @returns {Array<string>} CSS类名数组
 */
export function getDropdownButtonClasses(props) {
  const { disabled = false } = props
  const classes = ['wc-dropdown__button']
  
  if (disabled) classes.push('wc-dropdown__button--disabled')
  
  return classes.filter(Boolean)
}

/**
 * 获取Dropdown项目的CSS类名
 * @param {Object} item - 项目数据
 * @returns {Array<string>} CSS类名数组
 */
export function getDropdownItemClasses(item) {
  const classes = ['wc-dropdown__item']
  
  if (item.disabled) classes.push('wc-dropdown__item--disabled')
  if (item.selected) classes.push('wc-dropdown__item--selected')
  if (item.danger) classes.push('wc-dropdown__item--danger')
  
  return classes.filter(Boolean)
}

/**
 * 获取箭头的CSS类名
 * @param {boolean} isOpen - 是否打开
 * @returns {Array<string>} CSS类名数组
 */
export function getArrowClasses(isOpen) {
  const classes = ['wc-dropdown__arrow']
  
  if (isOpen) classes.push('wc-dropdown__arrow--open')
  
  return classes
}

/**
 * 处理点击外部事件
 * @param {Event} event - 点击事件
 * @param {HTMLElement} dropdownRef - Dropdown引用
 * @param {Function} onClose - 关闭回调
 */
export function handleClickOutside(event, dropdownRef, onClose) {
  if (dropdownRef && !dropdownRef.contains(event.target)) {
    onClose && onClose()
  }
}

/**
 * 处理Dropdown切换
 * @param {boolean} isOpen - 当前打开状态
 * @param {boolean} disabled - 是否禁用
 * @param {Function} setIsOpen - 设置打开状态
 * @param {Function} onOpen - 打开回调
 * @param {Function} onClose - 关闭回调
 */
export function handleDropdownToggle(isOpen, disabled, setIsOpen, onOpen, onClose) {
  if (disabled) return
  
  const newState = !isOpen
  setIsOpen(newState)
  
  if (newState) {
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
export function handleItemClick(item, index, onSelect, setIsOpen, onClose) {
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
export function createOutsideClickListener(callback) {
  const handleClick = callback
  
  const add = () => {
    document.addEventListener('click', handleClick, true)
  }
  
  const remove = () => {
    document.removeEventListener('click', handleClick, true)
  }
  
  return { add, remove }
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
    id: item.id || `dropdown-item-${index}`
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