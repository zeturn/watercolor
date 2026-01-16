/**
 * NumberAnimation 组件工具函数
 */

// 缓动函数
export const easingFunctions = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - --t * t * t * t,
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: (t) => Math.sin(t * Math.PI / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: (t) => {
    if (t === 0) return 0
    if (t === 1) return 1
    if (t < 0.5) return Math.pow(2, 20 * t - 10) / 2
    return (2 - Math.pow(2, -20 * t + 10)) / 2
  }
}

// 数字格式化工具
export const numberFormatUtils = {
  /**
   * 格式化数字
   * @param {number} value - 要格式化的数字
   * @param {Object} options - 格式化选项
   * @returns {string} 格式化后的字符串
   */
  formatNumber(value, options = {}) {
    const {
      precision = 0,
      showSeparator = false,
      locale = '',
      prefix = '',
      suffix = '',
      currency = '',
      percentage = false,
      scientific = false,
      compact = false
    } = options

    let num = Number(value)
    
    if (isNaN(num)) return '0'

    // 百分比处理
    if (percentage) {
      num = num * 100
      return `${num.toFixed(precision)}%`
    }

    // 科学计数法
    if (scientific) {
      return num.toExponential(precision)
    }

    // 紧凑格式（K, M, B 等）
    if (compact) {
      return this.formatCompactNumber(num, precision)
    }

    // 货币格式
    if (currency) {
      return new Intl.NumberFormat(locale || 'zh-CN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
      }).format(num)
    }

    // 标准格式化
    const fixed = num.toFixed(precision)
    
    if (showSeparator) {
      const formatted = Number(fixed).toLocaleString(locale || undefined, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
      })
      return `${prefix}${formatted}${suffix}`
    }

    return `${prefix}${fixed}${suffix}`
  },

  /**
   * 紧凑数字格式化
   * @param {number} num - 数字
   * @param {number} precision - 精度
   * @returns {string} 格式化结果
   */
  formatCompactNumber(num, precision = 1) {
    const units = [
      { value: 1e12, symbol: 'T' },
      { value: 1e9, symbol: 'B' },
      { value: 1e6, symbol: 'M' },
      { value: 1e3, symbol: 'K' }
    ]

    for (const unit of units) {
      if (Math.abs(num) >= unit.value) {
        return (num / unit.value).toFixed(precision) + unit.symbol
      }
    }

    return num.toFixed(precision)
  },

  /**
   * 验证数字范围
   * @param {number} value - 值
   * @param {number} min - 最小值
   * @param {number} max - 最大值
   * @returns {number} 限制后的值
   */
  clampValue(value, min = -Infinity, max = Infinity) {
    return Math.max(min, Math.min(max, value))
  }
}

// 动画控制器
export class NumberAnimationController {
  constructor(options = {}) {
    this.options = {
      duration: 3000,
      easing: 'easeOutQuart',
      onUpdate: null,
      onComplete: null,
      ...options
    }
    
    this.startTime = null
    this.rafId = null
    this.isRunning = false
    this.isPaused = false
    this.pausedTime = 0
  }

  /**
   * 开始动画
   * @param {number} from - 起始值
   * @param {number} to - 结束值
   */
  start(from, to) {
    this.from = from
    this.to = to
    this.startTime = null
    this.pausedTime = 0
    this.isRunning = true
    this.isPaused = false
    
    this.rafId = requestAnimationFrame(this.step.bind(this))
  }

  /**
   * 动画步进
   * @param {number} timestamp - 时间戳
   */
  step(timestamp) {
    if (!this.isRunning) return

    if (this.startTime === null) {
      this.startTime = timestamp - this.pausedTime
    }

    const elapsed = timestamp - this.startTime
    const progress = Math.min(elapsed / this.options.duration, 1)
    
    // 应用缓动函数
    const easingFunction = easingFunctions[this.options.easing] || easingFunctions.easeOutQuart
    const easedProgress = easingFunction(progress)
    
    // 计算当前值
    const currentValue = this.from + (this.to - this.from) * easedProgress
    
    // 更新回调
    if (this.options.onUpdate) {
      this.options.onUpdate(currentValue, progress)
    }

    if (progress < 1) {
      this.rafId = requestAnimationFrame(this.step.bind(this))
    } else {
      this.complete()
    }
  }

  /**
   * 暂停动画
   */
  pause() {
    if (this.isRunning && !this.isPaused) {
      this.isPaused = true
      this.pausedTime = performance.now() - this.startTime
      this.cancel()
    }
  }

  /**
   * 恢复动画
   */
  resume() {
    if (this.isPaused) {
      this.isPaused = false
      this.rafId = requestAnimationFrame(this.step.bind(this))
    }
  }

  /**
   * 停止动画
   */
  stop() {
    this.isRunning = false
    this.isPaused = false
    this.cancel()
  }

  /**
   * 完成动画
   */
  complete() {
    this.isRunning = false
    this.isPaused = false
    
    if (this.options.onUpdate) {
      this.options.onUpdate(this.to, 1)
    }
    
    if (this.options.onComplete) {
      this.options.onComplete()
    }
  }

  /**
   * 取消动画帧
   */
  cancel() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
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

// 预设配置
export const presets = {
  // 快速动画
  fast: {
    duration: 1000,
    easing: 'easeOutQuad'
  },
  
  // 标准动画
  normal: {
    duration: 2000,
    easing: 'easeOutQuart'
  },
  
  // 慢速动画
  slow: {
    duration: 4000,
    easing: 'easeOutCubic'
  },
  
  // 弹性动画
  bouncy: {
    duration: 2500,
    easing: 'easeOutSine'
  },
  
  // 计数器动画
  counter: {
    duration: 3000,
    easing: 'easeOutExpo'
  }
}

// 工具函数
export const utils = {
  /**
   * 创建动画实例
   * @param {Object} options - 配置选项
   * @returns {NumberAnimationController} 动画控制器实例
   */
  createAnimation(options = {}) {
    return new NumberAnimationController(options)
  },

  /**
   * 获取预设配置
   * @param {string} presetName - 预设名称
   * @returns {Object} 预设配置
   */
  getPreset(presetName) {
    return presets[presetName] || presets.normal
  },

  /**
   * 检测是否支持动画
   * @returns {boolean} 是否支持
   */
  isAnimationSupported() {
    return typeof requestAnimationFrame !== 'undefined'
  },

  /**
   * 检测是否应该减少动画
   * @returns {boolean} 是否减少动画
   */
  shouldReduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  /**
   * 调试信息
   * @param {string} message - 消息
   * @param {*} data - 数据
   */
  debug(message, data) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[NumberAnimation] ${message}`, data)
    }
  }
} 