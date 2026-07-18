/**
 * Progress 组件工具函数
 */

// 颜色类型
export const colors = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  PURPLE: 'purple',
  ORANGE: 'orange',
  CYAN: 'cyan',
  PINK: 'pink'
}

// 尺寸类型
export const sizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

// 进度条类型
export const types = {
  LINEAR: 'linear',
  CIRCULAR: 'circular'
}

// 动画类型
export const animations = {
  NONE: 'none',
  PULSE: 'pulse',
  STRIPED: 'striped',
  STRIPED_ANIMATED: 'striped-animated',
  INDETERMINATE: 'indeterminate',
  LOADING: 'loading'
}

/**
 * 验证进度值
 * @param {number} value - 进度值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 有效的进度值
 */
export function validateProgress(value, min = 0, max = 100) {
  const numValue = Number(value)
  if (isNaN(numValue)) return min
  return Math.max(min, Math.min(max, numValue))
}

/**
 * 计算进度百分比
 * @param {number} current - 当前值
 * @param {number} total - 总值
 * @returns {number} 百分比
 */
export function calculatePercentage(current, total) {
  if (total <= 0) return 0
  return Math.round((current / total) * 100)
}

/**
 * 格式化进度文本
 * @param {number} value - 进度值
 * @param {Object} options - 格式化选项
 * @returns {string} 格式化后的文本
 */
export function formatProgressText(value, options = {}) {
  const {
    showPercent = true,
    showFraction = false,
    total = 100,
    precision = 0,
    suffix = '',
    prefix = ''
  } = options

  const validValue = validateProgress(value, 0, total)

  if (showFraction) {
    return `${prefix}${validValue}/${total}${suffix}`
  }

  if (showPercent) {
    const percentage = calculatePercentage(validValue, total)
    return `${prefix}${percentage.toFixed(precision)}%${suffix}`
  }

  return `${prefix}${validValue.toFixed(precision)}${suffix}`
}

/**
 * 生成 Progress 组件的 CSS 类名
 * @param {Object} options - 配置选项
 * @returns {Object} 各部分的类名
 */
export function getProgressClasses(options = {}) {
  const {
    size = sizes.MD,
    color = colors.PRIMARY,
    type = types.LINEAR,
    animation = animations.NONE,
    striped = false,
    animated = false,
    gradient = false,
    glow = false,
    indeterminate = false,
    className = ''
  } = options

  const wrapperClasses = ['wc-progress-wrapper']
  const containerClasses = ['wc-progress']
  const barClasses = ['wc-progress__bar']

  // 尺寸
  if (size && sizes[size.toUpperCase()]) {
    containerClasses.push(`wc-progress--${size}`)
  }

  // 类型
  if (type === types.CIRCULAR) {
    containerClasses.push('wc-progress--circular')
  }

  // 进度条颜色
  if (color && colors[color.toUpperCase()]) {
    barClasses.push(`wc-progress__bar--${color}`)
  }

  // 动画效果
  if (indeterminate) {
    containerClasses.push('wc-progress--indeterminate')
  } else {
    if (animated || animation === animations.PULSE) {
      barClasses.push('wc-progress__bar--animated')
    }
    
    if (striped || animation === animations.STRIPED) {
      barClasses.push('wc-progress__bar--striped')
    }
    
    if (animation === animations.STRIPED_ANIMATED) {
      barClasses.push('wc-progress__bar--striped-animated')
    }
    
    if (animation === animations.LOADING) {
      containerClasses.push('wc-progress--loading')
    }
  }

  // 特殊效果
  if (gradient) {
    barClasses.push('wc-progress__bar--gradient')
  }
  
  if (glow) {
    barClasses.push('wc-progress__bar--glow')
  }

  // 自定义类名
  if (className) {
    wrapperClasses.push(className)
  }

  return {
    wrapper: wrapperClasses.join(' '),
    container: containerClasses.join(' '),
    bar: barClasses.join(' ')
  }
}

/**
 * 根据进度值获取颜色
 * @param {number} value - 进度值
 * @param {Array} thresholds - 阈值配置
 * @returns {string} 颜色名称
 */
export function getColorByProgress(value, thresholds = []) {
  const defaultThresholds = [
    { value: 25, color: colors.ERROR },
    { value: 50, color: colors.WARNING },
    { value: 75, color: colors.PRIMARY },
    { value: 100, color: colors.SUCCESS }
  ]

  const activeThresholds = thresholds.length > 0 ? thresholds : defaultThresholds
  
  for (const threshold of activeThresholds) {
    if (value <= threshold.value) {
      return threshold.color
    }
  }

  return colors.SUCCESS
}

/**
 * Progress 控制器类
 */
export class ProgressController {
  constructor(options = {}) {
    this.options = {
      duration: 2000,
      easing: 'ease-out',
      onUpdate: null,
      onComplete: null,
      autoStart: false,
      ...options
    }

    this.currentValue = 0
    this.targetValue = 0
    this.isRunning = false
    this.startTime = null
    this.rafId = null
  }

  /**
   * 设置进度值
   * @param {number} value - 目标值
   * @param {boolean} animate - 是否动画
   */
  setProgress(value, animate = true) {
    const validValue = validateProgress(value)
    this.targetValue = validValue

    if (!animate) {
      this.currentValue = validValue
      this.options.onUpdate?.(validValue)
      if (validValue === 100) {
        this.options.onComplete?.(validValue)
      }
      return
    }

    if (!this.isRunning) {
      this.start()
    }
  }

  /**
   * 增加进度
   * @param {number} increment - 增量
   * @param {boolean} animate - 是否动画
   */
  increment(increment = 10, animate = true) {
    const newValue = this.currentValue + increment
    this.setProgress(newValue, animate)
  }

  /**
   * 减少进度
   * @param {number} decrement - 减量
   * @param {boolean} animate - 是否动画
   */
  decrement(decrement = 10, animate = true) {
    const newValue = this.currentValue - decrement
    this.setProgress(newValue, animate)
  }

  /**
   * 开始动画
   */
  start() {
    if (this.isRunning) return

    this.isRunning = true
    this.startTime = performance.now()
    this.animate()
  }

  /**
   * 停止动画
   */
  stop() {
    this.isRunning = false
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }

  /**
   * 重置进度
   */
  reset() {
    this.stop()
    this.currentValue = 0
    this.targetValue = 0
    this.options.onUpdate?.(0)
  }

  /**
   * 完成进度
   */
  complete() {
    this.setProgress(100)
  }

  /**
   * 动画循环
   */
  animate() {
    if (!this.isRunning) return

    const now = performance.now()
    const elapsed = now - this.startTime
    const progress = Math.min(elapsed / this.options.duration, 1)

    // 应用缓动函数
    const easedProgress = this.applyEasing(progress)
    
    // 计算当前值
    const startValue = this.currentValue
    const difference = this.targetValue - startValue
    const newValue = startValue + (difference * easedProgress)

    this.currentValue = newValue
    this.options.onUpdate?.(newValue)

    if (progress < 1) {
      this.rafId = requestAnimationFrame(() => this.animate())
    } else {
      this.currentValue = this.targetValue
      this.isRunning = false
      this.options.onUpdate?.(this.targetValue)
      
      if (this.targetValue === 100) {
        this.options.onComplete?.(this.targetValue)
      }
    }
  }

  /**
   * 应用缓动函数
   * @param {number} t - 进度值 (0-1)
   * @returns {number} 缓动后的值
   */
  applyEasing(t) {
    switch (this.options.easing) {
      case 'ease-in':
        return t * t
      case 'ease-out':
        return 1 - Math.pow(1 - t, 2)
      case 'ease-in-out':
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      case 'linear':
      default:
        return t
    }
  }

  /**
   * 销毁控制器
   */
  destroy() {
    this.stop()
    this.options.onUpdate = null
    this.options.onComplete = null
  }
}

/**
 * 创建圆形进度条的CSS
 * @param {number} percentage - 百分比
 * @param {string} color - 颜色
 * @returns {Object} CSS样式对象
 */
export function createCircularProgressCSS(percentage, color = colors.PRIMARY) {
  const degree = (percentage / 100) * 360
  
  return {
    background: `conic-gradient(
      var(--wc-progress-${color}) ${degree}deg,
      var(--wc-progress-bg) ${degree}deg
    )`
  }
}

/**
 * 工具函数
 */
export const utils = {
  /**
   * 创建进度控制器实例
   * @param {Object} options - 配置选项
   * @returns {ProgressController} 控制器实例
   */
  createController(options = {}) {
    return new ProgressController(options)
  },

  /**
   * 检测是否应该减少动画
   * @returns {boolean} 是否减少动画
   */
  shouldReduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  /**
   * 估算剩余时间
   * @param {number} current - 当前值
   * @param {number} total - 总值
   * @param {number} startTime - 开始时间
   * @returns {number} 预计剩余时间(毫秒)
   */
  estimateRemainingTime(current, total, startTime) {
    if (current <= 0) return Infinity
    
    const elapsed = Date.now() - startTime
    const rate = current / elapsed
    const remaining = total - current
    
    return remaining / rate
  },

  /**
   * 格式化时间
   * @param {number} ms - 毫秒
   * @returns {string} 格式化的时间字符串
   */
  formatTime(ms) {
    if (ms === Infinity) return '∞'
    
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    if (hours > 0) {
      return `${hours}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`
    } else if (minutes > 0) {
      return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`
    } else {
      return `${seconds}s`
    }
  },

  /**
   * 调试信息
   * @param {string} message - 消息
   * @param {*} data - 数据
   */
  debug(message, data) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Progress] ${message}`, data)
    }
  }
}

// 默认导出
export default {
  ProgressController,
  validateProgress,
  calculatePercentage,
  formatProgressText,
  getProgressClasses,
  getColorByProgress,
  createCircularProgressCSS,
  utils,
  colors,
  sizes,
  types,
  animations
} 