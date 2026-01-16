/**
 * Popover 组件工具函数
 */

// 位置枚举
export const placements = {
  TOP: 'top',
  BOTTOM: 'bottom', 
  LEFT: 'left',
  RIGHT: 'right',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end'
}

// 触发方式
export const triggers = {
  CLICK: 'click',
  HOVER: 'hover',
  FOCUS: 'focus',
  MANUAL: 'manual'
}

// 尺寸类型
export const sizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
}

/**
 * 计算弹出框位置
 * @param {HTMLElement} trigger - 触发器元素
 * @param {HTMLElement} popover - 弹出框元素
 * @param {string} placement - 位置
 * @param {number} offset - 偏移量
 * @returns {Object} 位置坐标
 */
export function calculatePopoverPosition(trigger, popover, placement = placements.BOTTOM, offset = 8) {
  if (!trigger || !popover) return { top: 0, left: 0 }

  const triggerRect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  let top = 0
  let left = 0

  switch (placement) {
    case placements.TOP:
      top = triggerRect.top - popoverRect.height - offset
      left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2
      break
    
    case placements.TOP_START:
      top = triggerRect.top - popoverRect.height - offset
      left = triggerRect.left
      break
    
    case placements.TOP_END:
      top = triggerRect.top - popoverRect.height - offset
      left = triggerRect.right - popoverRect.width
      break
    
    case placements.BOTTOM:
      top = triggerRect.bottom + offset
      left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2
      break
    
    case placements.BOTTOM_START:
      top = triggerRect.bottom + offset
      left = triggerRect.left
      break
    
    case placements.BOTTOM_END:
      top = triggerRect.bottom + offset
      left = triggerRect.right - popoverRect.width
      break
    
    case placements.LEFT:
      top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2
      left = triggerRect.left - popoverRect.width - offset
      break
    
    case placements.LEFT_START:
      top = triggerRect.top
      left = triggerRect.left - popoverRect.width - offset
      break
    
    case placements.LEFT_END:
      top = triggerRect.bottom - popoverRect.height
      left = triggerRect.left - popoverRect.width - offset
      break
    
    case placements.RIGHT:
      top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2
      left = triggerRect.right + offset
      break
    
    case placements.RIGHT_START:
      top = triggerRect.top
      left = triggerRect.right + offset
      break
    
    case placements.RIGHT_END:
      top = triggerRect.bottom - popoverRect.height
      left = triggerRect.right + offset
      break
  }

  // 添加滚动偏移
  top += window.scrollY
  left += window.scrollX

  return { top, left }
}

/**
 * 检测碰撞并调整位置
 * @param {Object} position - 原始位置
 * @param {HTMLElement} popover - 弹出框元素
 * @param {string} placement - 位置
 * @returns {Object} 调整后的位置和最终placement
 */
export function detectCollisionAndAdjust(position, popover, placement) {
  if (!popover) return { position, finalPlacement: placement }

  const popoverRect = popover.getBoundingClientRect()
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  let { top, left } = position
  let finalPlacement = placement

  // 检测右边界碰撞
  if (left + popoverRect.width > viewport.width) {
    if (placement.includes('right')) {
      finalPlacement = placement.replace('right', 'left')
    } else {
      left = viewport.width - popoverRect.width - 16
    }
  }

  // 检测左边界碰撞
  if (left < 0) {
    if (placement.includes('left')) {
      finalPlacement = placement.replace('left', 'right')
    } else {
      left = 16
    }
  }

  // 检测下边界碰撞
  if (top + popoverRect.height > viewport.height + window.scrollY) {
    if (placement.includes('bottom')) {
      finalPlacement = placement.replace('bottom', 'top')
    } else {
      top = viewport.height + window.scrollY - popoverRect.height - 16
    }
  }

  // 检测上边界碰撞
  if (top < window.scrollY) {
    if (placement.includes('top')) {
      finalPlacement = placement.replace('top', 'bottom')
    } else {
      top = window.scrollY + 16
    }
  }

  return {
    position: { top, left },
    finalPlacement
  }
}

/**
 * 生成 Popover 组件的 CSS 类名
 * @param {Object} options - 配置选项
 * @returns {Object} 各部分的类名
 */
export function getPopoverClasses(options = {}) {
  const {
    size = sizes.MD,
    placement = placements.BOTTOM,
    noArrow = false,
    className = ''
  } = options

  const containerClasses = ['wc-popover-container']
  const triggerClasses = ['wc-popover-trigger']
  const contentClasses = ['wc-popover-content']

  // 内容尺寸
  if (size && sizes[size.toUpperCase()]) {
    contentClasses.push(`wc-popover-content--${size}`)
  }

  // 内容位置
  const basePlacement = placement.split('-')[0]
  contentClasses.push(`wc-popover-content--${basePlacement}`)

  // 无箭头
  if (noArrow) {
    contentClasses.push('wc-popover-content--no-arrow')
  }

  // 自定义类名
  if (className) {
    containerClasses.push(className)
  }

  return {
    container: containerClasses.join(' '),
    trigger: triggerClasses.join(' '),
    content: contentClasses.join(' ')
  }
}

/**
 * Popover 控制器类
 */
export class PopoverController {
  constructor(options = {}) {
    this.options = {
      trigger: triggers.CLICK,
      placement: placements.BOTTOM,
      offset: 8,
      delay: 0,
      hideDelay: 0,
      autoClose: true,
      closeOnOutsideClick: true,
      closeOnEscape: true,
      ...options
    }

    this.isOpen = false
    this.triggerElement = null
    this.popoverElement = null
    this.timeouts = new Set()
    this.eventCleanups = []

    this.handleTriggerClick = this.handleTriggerClick.bind(this)
    this.handleTriggerMouseEnter = this.handleTriggerMouseEnter.bind(this)
    this.handleTriggerMouseLeave = this.handleTriggerMouseLeave.bind(this)
    this.handleTriggerFocus = this.handleTriggerFocus.bind(this)
    this.handleTriggerBlur = this.handleTriggerBlur.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.handleEscapeKey = this.handleEscapeKey.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  /**
   * 初始化控制器
   * @param {HTMLElement} trigger - 触发器元素
   * @param {HTMLElement} popover - 弹出框元素
   */
  init(trigger, popover) {
    this.triggerElement = trigger
    this.popoverElement = popover

    this.bindEvents()
  }

  /**
   * 绑定事件
   */
  bindEvents() {
    if (!this.triggerElement) return

    const { trigger } = this.options

    if (trigger === triggers.CLICK || trigger === triggers.MANUAL) {
      this.addEventListener(this.triggerElement, 'click', this.handleTriggerClick)
    }

    if (trigger === triggers.HOVER) {
      this.addEventListener(this.triggerElement, 'mouseenter', this.handleTriggerMouseEnter)
      this.addEventListener(this.triggerElement, 'mouseleave', this.handleTriggerMouseLeave)
    }

    if (trigger === triggers.FOCUS) {
      this.addEventListener(this.triggerElement, 'focus', this.handleTriggerFocus)
      this.addEventListener(this.triggerElement, 'blur', this.handleTriggerBlur)
    }

    // 全局事件
    if (this.options.closeOnOutsideClick) {
      this.addEventListener(document, 'mousedown', this.handleOutsideClick)
    }

    if (this.options.closeOnEscape) {
      this.addEventListener(document, 'keydown', this.handleEscapeKey)
    }

    this.addEventListener(window, 'resize', this.handleResize)
    this.addEventListener(window, 'scroll', this.handleScroll, true)
  }

  /**
   * 添加事件监听器
   * @param {Element} element - 目标元素
   * @param {string} event - 事件名
   * @param {Function} handler - 处理函数
   * @param {boolean} capture - 是否捕获
   */
  addEventListener(element, event, handler, capture = false) {
    element.addEventListener(event, handler, capture)
    this.eventCleanups.push(() => {
      element.removeEventListener(event, handler, capture)
    })
  }

  /**
   * 打开弹出框
   */
  open() {
    if (this.isOpen) return

    this.clearTimeouts()

    const openWithDelay = () => {
      this.isOpen = true
      this.updatePosition()
      this.options.onOpen?.()
    }

    if (this.options.delay > 0) {
      const timeout = setTimeout(openWithDelay, this.options.delay)
      this.timeouts.add(timeout)
    } else {
      openWithDelay()
    }
  }

  /**
   * 关闭弹出框
   */
  close() {
    if (!this.isOpen) return

    this.clearTimeouts()

    const closeWithDelay = () => {
      this.isOpen = false
      this.options.onClose?.()
    }

    if (this.options.hideDelay > 0) {
      const timeout = setTimeout(closeWithDelay, this.options.hideDelay)
      this.timeouts.add(timeout)
    } else {
      closeWithDelay()
    }
  }

  /**
   * 切换弹出框状态
   */
  toggle() {
    if (this.isOpen) {
      this.close()
    } else {
      this.open()
    }
  }

  /**
   * 更新位置
   */
  updatePosition() {
    if (!this.triggerElement || !this.popoverElement || !this.isOpen) return

    const { placement, offset } = this.options
    
    const position = calculatePopoverPosition(
      this.triggerElement,
      this.popoverElement,
      placement,
      offset
    )

    const { position: adjustedPosition, finalPlacement } = detectCollisionAndAdjust(
      position,
      this.popoverElement,
      placement
    )

    this.popoverElement.style.top = `${adjustedPosition.top}px`
    this.popoverElement.style.left = `${adjustedPosition.left}px`

    // 更新箭头方向
    this.updateArrowDirection(finalPlacement)
  }

  /**
   * 更新箭头方向
   * @param {string} placement - 位置
   */
  updateArrowDirection(placement) {
    if (!this.popoverElement) return

    const basePlacement = placement.split('-')[0]
    const classes = this.popoverElement.className.split(' ')
    
    // 移除旧的位置类
    const filteredClasses = classes.filter(cls => 
      !cls.startsWith('wc-popover-content--top') &&
      !cls.startsWith('wc-popover-content--bottom') &&
      !cls.startsWith('wc-popover-content--left') &&
      !cls.startsWith('wc-popover-content--right')
    )

    // 添加新的位置类
    filteredClasses.push(`wc-popover-content--${basePlacement}`)
    
    this.popoverElement.className = filteredClasses.join(' ')
  }

  /**
   * 清除所有定时器
   */
  clearTimeouts() {
    this.timeouts.forEach(timeout => clearTimeout(timeout))
    this.timeouts.clear()
  }

  /**
   * 事件处理器
   */
  handleTriggerClick(event) {
    event.preventDefault()
    this.toggle()
  }

  handleTriggerMouseEnter() {
    this.open()
  }

  handleTriggerMouseLeave() {
    this.close()
  }

  handleTriggerFocus() {
    this.open()
  }

  handleTriggerBlur() {
    this.close()
  }

  handleOutsideClick(event) {
    if (!this.isOpen) return

    const isClickInside = this.triggerElement?.contains(event.target) || 
                         this.popoverElement?.contains(event.target)

    if (!isClickInside) {
      this.close()
    }
  }

  handleEscapeKey(event) {
    if (event.key === 'Escape' && this.isOpen) {
      this.close()
    }
  }

  handleResize() {
    if (this.isOpen) {
      this.updatePosition()
    }
  }

  handleScroll() {
    if (this.isOpen) {
      this.updatePosition()
    }
  }

  /**
   * 销毁控制器
   */
  destroy() {
    this.close()
    this.clearTimeouts()
    
    // 清理事件监听器
    this.eventCleanups.forEach(cleanup => cleanup())
    this.eventCleanups = []

    // 清理引用
    this.triggerElement = null
    this.popoverElement = null
    this.options.onOpen = null
    this.options.onClose = null
  }
}

/**
 * 工具函数
 */
export const utils = {
  /**
   * 创建 Popover 控制器实例
   * @param {Object} options - 配置选项
   * @returns {PopoverController} 控制器实例
   */
  createController(options = {}) {
    return new PopoverController(options)
  },

  /**
   * 检测是否支持 Popover API
   * @returns {boolean} 是否支持
   */
  isPopoverSupported() {
    return typeof HTMLElement.prototype.showPopover === 'function'
  },

  /**
   * 获取最佳位置
   * @param {HTMLElement} trigger - 触发器元素
   * @param {HTMLElement} popover - 弹出框元素
   * @param {Array} preferredPlacements - 优先位置列表
   * @returns {string} 最佳位置
   */
  getBestPlacement(trigger, popover, preferredPlacements = [placements.BOTTOM, placements.TOP, placements.RIGHT, placements.LEFT]) {
    if (!trigger || !popover) return preferredPlacements[0]

    for (const placement of preferredPlacements) {
      const position = calculatePopoverPosition(trigger, popover, placement)
      const { finalPlacement } = detectCollisionAndAdjust(position, popover, placement)
      
      if (finalPlacement === placement) {
        return placement
      }
    }

    return preferredPlacements[0]
  },

  /**
   * 调试信息
   * @param {string} message - 消息
   * @param {*} data - 数据
   */
  debug(message, data) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Popover] ${message}`, data)
    }
  }
}

// 默认导出
export default {
  PopoverController,
  calculatePopoverPosition,
  detectCollisionAndAdjust,
  getPopoverClasses,
  utils,
  placements,
  triggers,
  sizes
} 