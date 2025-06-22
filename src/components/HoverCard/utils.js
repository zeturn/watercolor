/**
 * HoverCard组件工具函数
 * 提供悬浮卡片相关的工具函数
 */

// 默认配置
export const DEFAULT_CONFIG = {
  position: 'bottom',
  size: 'md',
  variant: 'outlined',
  showArrow: true,
  trigger: 'hover',
  delay: 300,
  hideDelay: 100,
  disabled: false,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  zIndex: 1000
}

// 有效的位置
export const VALID_POSITIONS = ['top', 'bottom', 'left', 'right']

// 有效的尺寸
export const VALID_SIZES = ['sm', 'md', 'lg', 'xl']

// 有效的变体
export const VALID_VARIANTS = ['outlined', 'filled', 'minimal', 'elevated']

// 有效的触发方式
export const VALID_TRIGGERS = ['hover', 'click', 'focus', 'manual']

/**
 * 获取HoverCard容器类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getHoverCardClasses = (props) => {
  const { className = '' } = props
  
  const classes = ['hover-card-container']
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取触发器类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getTriggerClasses = (props) => {
  const { disabled = false, className = '' } = props
  
  const classes = ['hover-card-trigger']
  
  if (disabled) {
    classes.push('hover-card-trigger--disabled')
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取内容类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getContentClasses = (props) => {
  const {
    position = 'bottom',
    size = 'md',
    variant = 'outlined',
    visible = false,
    showArrow = true,
    className = ''
  } = props
  
  const classes = [
    'hover-card-content',
    `hover-card-content--${position}`,
    `hover-card-content--${size}`,
    `hover-card-content--${variant}`
  ]
  
  if (visible) {
    classes.push('hover-card-content--visible')
  }
  
  if (!showArrow) {
    classes.push('hover-card-content--no-arrow')
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取内容样式
 * @param {Object} props - 组件属性
 * @returns {Object} 样式对象
 */
export const getContentStyle = (props) => {
  const { zIndex = 1000, maxWidth, minWidth } = props
  const style = { zIndex }
  
  if (maxWidth) {
    style.maxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth
  }
  
  if (minWidth) {
    style.minWidth = typeof minWidth === 'number' ? `${minWidth}px` : minWidth
  }
  
  return style
}

/**
 * 验证位置
 * @param {string} position - 位置
 * @returns {boolean} 是否有效
 */
export const isValidPosition = (position) => {
  return VALID_POSITIONS.includes(position)
}

/**
 * 验证尺寸
 * @param {string} size - 尺寸
 * @returns {boolean} 是否有效
 */
export const isValidSize = (size) => {
  return VALID_SIZES.includes(size)
}

/**
 * 验证变体
 * @param {string} variant - 变体
 * @returns {boolean} 是否有效
 */
export const isValidVariant = (variant) => {
  return VALID_VARIANTS.includes(variant)
}

/**
 * 验证触发方式
 * @param {string} trigger - 触发方式
 * @returns {boolean} 是否有效
 */
export const isValidTrigger = (trigger) => {
  return VALID_TRIGGERS.includes(trigger)
}

/**
 * 计算最佳位置
 * @param {HTMLElement} triggerEl - 触发器元素
 * @param {HTMLElement} contentEl - 内容元素
 * @param {string} preferredPosition - 首选位置
 * @returns {string} 最佳位置
 */
export const calculateOptimalPosition = (triggerEl, contentEl, preferredPosition = 'bottom') => {
  if (!triggerEl || !contentEl) {
    return preferredPosition
  }
  
  const triggerRect = triggerEl.getBoundingClientRect()
  const contentRect = contentEl.getBoundingClientRect()
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  
  const spaceTop = triggerRect.top
  const spaceBottom = viewport.height - triggerRect.bottom
  const spaceLeft = triggerRect.left
  const spaceRight = viewport.width - triggerRect.right
  
  const contentWidth = contentRect.width || 320 // 默认宽度
  const contentHeight = contentRect.height || 200 // 默认高度
  
  // 检查首选位置是否有足够空间
  switch (preferredPosition) {
    case 'top':
      if (spaceTop >= contentHeight) return 'top'
      break
    case 'bottom':
      if (spaceBottom >= contentHeight) return 'bottom'
      break
    case 'left':
      if (spaceLeft >= contentWidth) return 'left'
      break
    case 'right':
      if (spaceRight >= contentWidth) return 'right'
      break
  }
  
  // 如果首选位置空间不足，选择空间最大的位置
  const spaces = {
    top: spaceTop,
    bottom: spaceBottom,
    left: spaceLeft,
    right: spaceRight
  }
  
  return Object.keys(spaces).reduce((a, b) => spaces[a] > spaces[b] ? a : b)
}

/**
 * 计算位置偏移
 * @param {HTMLElement} triggerEl - 触发器元素
 * @param {HTMLElement} contentEl - 内容元素
 * @param {string} position - 位置
 * @returns {Object} 偏移量
 */
export const calculateOffset = (triggerEl, contentEl, position) => {
  if (!triggerEl || !contentEl) {
    return { x: 0, y: 0 }
  }
  
  const triggerRect = triggerEl.getBoundingClientRect()
  const contentRect = contentEl.getBoundingClientRect()
  const offset = { x: 0, y: 0 }
  
  switch (position) {
    case 'top':
      offset.x = (triggerRect.width - contentRect.width) / 2
      offset.y = -(contentRect.height + 8)
      break
    case 'bottom':
      offset.x = (triggerRect.width - contentRect.width) / 2
      offset.y = triggerRect.height + 8
      break
    case 'left':
      offset.x = -(contentRect.width + 8)
      offset.y = (triggerRect.height - contentRect.height) / 2
      break
    case 'right':
      offset.x = triggerRect.width + 8
      offset.y = (triggerRect.height - contentRect.height) / 2
      break
  }
  
  return offset
}

/**
 * 创建显示控制器
 * @param {Object} options - 选项
 * @returns {Object} 显示控制器
 */
export const createVisibilityController = (options = {}) => {
  const { delay = 300, hideDelay = 100 } = options
  
  let isVisible = false
  let showTimeout = null
  let hideTimeout = null
  const listeners = new Set()
  
  const notifyListeners = () => {
    listeners.forEach(listener => listener(isVisible))
  }
  
  const show = () => {
    clearTimeout(hideTimeout)
    if (isVisible) return
    
    showTimeout = setTimeout(() => {
      isVisible = true
      notifyListeners()
    }, delay)
  }
  
  const hide = () => {
    clearTimeout(showTimeout)
    if (!isVisible) return
    
    hideTimeout = setTimeout(() => {
      isVisible = false
      notifyListeners()
    }, hideDelay)
  }
  
  const toggle = () => {
    if (isVisible) {
      hide()
    } else {
      show()
    }
  }
  
  const setVisible = (visible) => {
    clearTimeout(showTimeout)
    clearTimeout(hideTimeout)
    
    if (visible !== isVisible) {
      isVisible = visible
      notifyListeners()
    }
  }
  
  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  
  const cleanup = () => {
    clearTimeout(showTimeout)
    clearTimeout(hideTimeout)
    listeners.clear()
  }
  
  return {
    show,
    hide,
    toggle,
    setVisible,
    isVisible: () => isVisible,
    subscribe,
    cleanup
  }
}

/**
 * 创建事件处理器
 * @param {string} trigger - 触发方式
 * @param {Object} controller - 显示控制器
 * @returns {Object} 事件处理器
 */
export const createEventHandlers = (trigger, controller) => {
  const handlers = {}
  
  switch (trigger) {
    case 'hover':
      handlers.onMouseEnter = () => controller.show()
      handlers.onMouseLeave = () => controller.hide()
      handlers.onFocus = () => controller.show()
      handlers.onBlur = () => controller.hide()
      break
      
    case 'click':
      handlers.onClick = () => controller.toggle()
      break
      
    case 'focus':
      handlers.onFocus = () => controller.show()
      handlers.onBlur = () => controller.hide()
      break
      
    case 'manual':
      // 手动控制，不添加事件处理器
      break
  }
  
  return handlers
}

/**
 * 处理外部点击
 * @param {HTMLElement} containerEl - 容器元素
 * @param {Function} onOutsideClick - 外部点击回调
 * @returns {Function} 清理函数
 */
export const handleOutsideClick = (containerEl, onOutsideClick) => {
  const handleClick = (event) => {
    if (containerEl && !containerEl.contains(event.target)) {
      onOutsideClick()
    }
  }
  
  document.addEventListener('mousedown', handleClick)
  
  return () => {
    document.removeEventListener('mousedown', handleClick)
  }
}

/**
 * 处理键盘事件
 * @param {Function} onEscape - Escape键回调
 * @returns {Function} 清理函数
 */
export const handleKeyboard = (onEscape) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onEscape()
    }
  }
  
  document.addEventListener('keydown', handleKeyDown)
  
  return () => {
    document.removeEventListener('keydown', handleKeyDown)
  }
}

/**
 * 检测碰撞并调整位置
 * @param {HTMLElement} contentEl - 内容元素
 * @param {string} position - 当前位置
 * @returns {Object} 调整后的样式
 */
export const adjustForCollision = (contentEl, position) => {
  if (!contentEl) return {}
  
  const rect = contentEl.getBoundingClientRect()
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  
  const adjustments = {}
  
  // 水平方向调整
  if (rect.right > viewport.width) {
    adjustments.left = `${viewport.width - rect.width - 8}px`
  } else if (rect.left < 0) {
    adjustments.left = '8px'
  }
  
  // 垂直方向调整
  if (rect.bottom > viewport.height) {
    adjustments.top = `${viewport.height - rect.height - 8}px`
  } else if (rect.top < 0) {
    adjustments.top = '8px'
  }
  
  return adjustments
}

/**
 * 格式化内容数据
 * @param {any} content - 内容数据
 * @returns {Object} 格式化后的内容
 */
export const formatContent = (content) => {
  if (typeof content === 'string') {
    return { body: content }
  }
  
  if (typeof content === 'object' && content !== null) {
    return {
      title: '',
      subtitle: '',
      body: '',
      avatar: null,
      stats: [],
      actions: [],
      ...content
    }
  }
  
  return { body: String(content || '') }
}

/**
 * 生成HoverCard ID
 * @param {string} prefix - 前缀
 * @returns {string} HoverCard ID
 */
export const generateHoverCardId = (prefix = 'hover-card') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} delay - 延迟时间
 * @returns {Function} 防抖后的函数
 */
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

/**
 * 节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} delay - 延迟时间
 * @returns {Function} 节流后的函数
 */
export const throttle = (func, delay) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func.apply(null, args)
    }
  }
}

/**
 * 创建HoverCard配置
 * @param {Object} options - 配置选项
 * @returns {Object} 完整配置
 */
export const createHoverCardConfig = (options = {}) => {
  return {
    ...DEFAULT_CONFIG,
    ...options
  }
}

/**
 * 调试HoverCard配置
 * @param {Object} props - 组件属性
 * @returns {Object} 调试信息
 */
export const debugHoverCardConfig = (props) => {
  const config = createHoverCardConfig(props)
  
  return {
    config,
    validation: {
      position: isValidPosition(config.position),
      size: isValidSize(config.size),
      variant: isValidVariant(config.variant),
      trigger: isValidTrigger(config.trigger)
    },
    classes: {
      container: getHoverCardClasses(config),
      trigger: getTriggerClasses(config),
      content: getContentClasses(config)
    },
    styles: {
      content: getContentStyle(config)
    }
  }
} 