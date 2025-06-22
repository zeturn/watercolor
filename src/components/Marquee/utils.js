/**
 * Marquee组件工具函数
 * 提供滚动跑马灯相关的工具函数
 */

// 默认配置
export const DEFAULT_CONFIG = {
  text: 'This is a scrolling marquee text',
  speed: 50,
  direction: 'left',
  variant: 'default',
  size: 'md',
  pauseOnHover: false,
  loop: true,
  showGradient: true,
  showControls: false,
  allowReverse: true,
  allowSpeedControl: true,
  autoStart: true,
  loading: false,
  height: 'auto'
}

// 有效的方向
export const VALID_DIRECTIONS = ['left', 'right', 'up', 'down']

// 有效的变体
export const VALID_VARIANTS = ['default', 'outlined', 'filled', 'gradient']

// 有效的尺寸
export const VALID_SIZES = ['sm', 'md', 'lg', 'xl']

// 速度预设
export const SPEED_PRESETS = {
  slow: 25,
  normal: 50,
  fast: 100
}

// 动画名称映射
export const ANIMATION_NAMES = {
  left: 'marquee-scroll-left',
  right: 'marquee-scroll-right',
  up: 'marquee-scroll-up',
  down: 'marquee-scroll-down'
}

/**
 * 获取Marquee容器类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getMarqueeClasses = (props) => {
  const {
    variant = 'default',
    size = 'md',
    direction = 'left',
    paused = false,
    loading = false,
    className = ''
  } = props
  
  const classes = [
    'marquee-container',
    `marquee-${variant}`,
    `marquee-size-${size}`,
    `marquee-direction-${direction}`
  ]
  
  if (paused) {
    classes.push('marquee-paused')
  }
  
  if (loading) {
    classes.push('marquee-loading')
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
  const { direction = 'left', speed = 50, paused = false, loading = false } = props
  
  const duration = calculateDuration(speed)
  const animationName = ANIMATION_NAMES[direction]
  
  return {
    animationName: paused || loading ? 'none' : animationName,
    animationDuration: `${duration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: paused || loading ? 'paused' : 'running'
  }
}

/**
 * 获取容器样式
 * @param {Object} props - 组件属性
 * @returns {Object} 样式对象
 */
export const getContainerStyle = (props) => {
  const { height = 'auto', backgroundColor, textColor } = props
  const style = {}
  
  if (height !== 'auto') {
    style.height = typeof height === 'number' ? `${height}px` : height
  }
  
  if (backgroundColor) {
    style.backgroundColor = backgroundColor
    style.setProperty?.('--marquee-bg', backgroundColor)
  }
  
  if (textColor) {
    style.color = textColor
  }
  
  return style
}

/**
 * 计算动画持续时间
 * @param {number} speed - 速度值
 * @returns {number} 持续时间（秒）
 */
export const calculateDuration = (speed) => {
  // 速度越大，时间越短
  return Math.max(1, 100 / Math.max(1, Math.min(200, speed)))
}

/**
 * 验证方向
 * @param {string} direction - 方向
 * @returns {boolean} 是否有效
 */
export const isValidDirection = (direction) => {
  return VALID_DIRECTIONS.includes(direction)
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
 * 验证尺寸
 * @param {string} size - 尺寸
 * @returns {boolean} 是否有效
 */
export const isValidSize = (size) => {
  return VALID_SIZES.includes(size)
}

/**
 * 验证速度
 * @param {number} speed - 速度
 * @returns {boolean} 是否有效
 */
export const isValidSpeed = (speed) => {
  return typeof speed === 'number' && speed > 0 && speed <= 200
}

/**
 * 获取反向方向
 * @param {string} direction - 当前方向
 * @returns {string} 反向方向
 */
export const getReverseDirection = (direction) => {
  const reverseMap = {
    left: 'right',
    right: 'left',
    up: 'down',
    down: 'up'
  }
  
  return reverseMap[direction] || direction
}

/**
 * 获取下一个速度
 * @param {number} currentSpeed - 当前速度
 * @returns {number} 下一个速度
 */
export const getNextSpeed = (currentSpeed) => {
  const speeds = Object.values(SPEED_PRESETS)
  const currentIndex = speeds.findIndex(speed => speed >= currentSpeed)
  
  if (currentIndex === -1 || currentIndex === speeds.length - 1) {
    return speeds[0]
  }
  
  return speeds[currentIndex + 1]
}

/**
 * 获取速度级别
 * @param {number} speed - 速度值
 * @returns {string} 速度级别
 */
export const getSpeedLevel = (speed) => {
  if (speed <= 25) return 'slow'
  if (speed <= 75) return 'normal'
  return 'fast'
}

/**
 * 创建速度控制器
 * @param {number} initialSpeed - 初始速度
 * @returns {Object} 速度控制器
 */
export const createSpeedController = (initialSpeed = 50) => {
  let currentSpeed = initialSpeed
  const listeners = new Set()
  
  const setSpeed = (newSpeed) => {
    if (isValidSpeed(newSpeed)) {
      currentSpeed = newSpeed
      listeners.forEach(listener => listener(currentSpeed))
    }
  }
  
  const increaseSpeed = () => {
    setSpeed(Math.min(200, currentSpeed + 25))
  }
  
  const decreaseSpeed = () => {
    setSpeed(Math.max(1, currentSpeed - 25))
  }
  
  const toggleSpeed = () => {
    setSpeed(getNextSpeed(currentSpeed))
  }
  
  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  
  return {
    getSpeed: () => currentSpeed,
    setSpeed,
    increaseSpeed,
    decreaseSpeed,
    toggleSpeed,
    subscribe,
    getLevel: () => getSpeedLevel(currentSpeed)
  }
}

/**
 * 创建方向控制器
 * @param {string} initialDirection - 初始方向
 * @returns {Object} 方向控制器
 */
export const createDirectionController = (initialDirection = 'left') => {
  let currentDirection = initialDirection
  const listeners = new Set()
  
  const setDirection = (newDirection) => {
    if (isValidDirection(newDirection)) {
      currentDirection = newDirection
      listeners.forEach(listener => listener(currentDirection))
    }
  }
  
  const reverse = () => {
    setDirection(getReverseDirection(currentDirection))
  }
  
  const isVertical = () => {
    return ['up', 'down'].includes(currentDirection)
  }
  
  const isHorizontal = () => {
    return ['left', 'right'].includes(currentDirection)
  }
  
  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  
  return {
    getDirection: () => currentDirection,
    setDirection,
    reverse,
    isVertical,
    isHorizontal,
    subscribe
  }
}

/**
 * 创建播放控制器
 * @param {boolean} autoStart - 是否自动开始
 * @returns {Object} 播放控制器
 */
export const createPlayController = (autoStart = true) => {
  let isPlaying = autoStart
  let isPaused = false
  const listeners = new Set()
  
  const notifyListeners = () => {
    listeners.forEach(listener => listener({ isPlaying, isPaused }))
  }
  
  const play = () => {
    isPlaying = true
    isPaused = false
    notifyListeners()
  }
  
  const pause = () => {
    isPaused = true
    notifyListeners()
  }
  
  const stop = () => {
    isPlaying = false
    isPaused = false
    notifyListeners()
  }
  
  const toggle = () => {
    if (isPaused || !isPlaying) {
      play()
    } else {
      pause()
    }
  }
  
  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  
  return {
    isPlaying: () => isPlaying,
    isPaused: () => isPaused,
    play,
    pause,
    stop,
    toggle,
    subscribe
  }
}

/**
 * 处理鼠标悬停事件
 * @param {boolean} pauseOnHover - 是否悬停暂停
 * @param {Object} playController - 播放控制器
 * @returns {Object} 事件处理器
 */
export const createHoverHandlers = (pauseOnHover, playController) => {
  if (!pauseOnHover || !playController) {
    return { onMouseEnter: null, onMouseLeave: null }
  }
  
  let wasPlayingBeforeHover = false
  
  const onMouseEnter = () => {
    wasPlayingBeforeHover = playController.isPlaying() && !playController.isPaused()
    if (wasPlayingBeforeHover) {
      playController.pause()
    }
  }
  
  const onMouseLeave = () => {
    if (wasPlayingBeforeHover) {
      playController.play()
    }
  }
  
  return { onMouseEnter, onMouseLeave }
}

/**
 * 计算内容宽度
 * @param {HTMLElement} element - 内容元素
 * @returns {number} 内容宽度
 */
export const calculateContentWidth = (element) => {
  if (!element) return 0
  
  const computedStyle = window.getComputedStyle(element)
  const paddingLeft = parseFloat(computedStyle.paddingLeft)
  const paddingRight = parseFloat(computedStyle.paddingRight)
  
  return element.scrollWidth + paddingLeft + paddingRight
}

/**
 * 检查是否需要滚动
 * @param {HTMLElement} container - 容器元素
 * @param {HTMLElement} content - 内容元素
 * @returns {boolean} 是否需要滚动
 */
export const shouldScroll = (container, content) => {
  if (!container || !content) return false
  
  const containerWidth = container.clientWidth
  const contentWidth = calculateContentWidth(content)
  
  return contentWidth > containerWidth
}

/**
 * 格式化文本内容
 * @param {any} content - 内容
 * @returns {string} 格式化后的文本
 */
export const formatContent = (content) => {
  if (typeof content === 'string') {
    return content
  }
  
  if (typeof content === 'number') {
    return String(content)
  }
  
  if (content && typeof content === 'object') {
    return JSON.stringify(content)
  }
  
  return ''
}

/**
 * 创建循环内容
 * @param {string} text - 原始文本
 * @param {number} copies - 副本数量
 * @returns {Array} 内容数组
 */
export const createLoopContent = (text, copies = 2) => {
  return Array.from({ length: copies }, (_, index) => ({
    id: `marquee-item-${index}`,
    content: text,
    isClone: index > 0
  }))
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
 * 创建Marquee配置
 * @param {Object} options - 配置选项
 * @returns {Object} 完整配置
 */
export const createMarqueeConfig = (options = {}) => {
  return {
    ...DEFAULT_CONFIG,
    ...options
  }
}

/**
 * 获取性能优化建议
 * @param {Object} config - 配置对象
 * @returns {Array} 建议列表
 */
export const getPerformanceAdvice = (config) => {
  const advice = []
  
  if (config.speed > 150) {
    advice.push('高速滚动可能影响性能，建议降低速度')
  }
  
  if (config.showGradient && config.showControls) {
    advice.push('同时启用渐变和控制可能影响渲染性能')
  }
  
  if (config.direction === 'up' || config.direction === 'down') {
    advice.push('垂直滚动的性能通常低于水平滚动')
  }
  
  return advice
}

/**
 * 调试Marquee配置
 * @param {Object} props - 组件属性
 * @returns {Object} 调试信息
 */
export const debugMarqueeConfig = (props) => {
  const config = createMarqueeConfig(props)
  
  return {
    config,
    validation: {
      direction: isValidDirection(config.direction),
      variant: isValidVariant(config.variant),
      size: isValidSize(config.size),
      speed: isValidSpeed(config.speed)
    },
    computed: {
      duration: calculateDuration(config.speed),
      animationName: ANIMATION_NAMES[config.direction],
      speedLevel: getSpeedLevel(config.speed),
      isVertical: ['up', 'down'].includes(config.direction)
    },
    classes: getMarqueeClasses(config),
    styles: {
      container: getContainerStyle(config),
      content: getContentStyle(config)
    },
    performance: getPerformanceAdvice(config)
  }
} 