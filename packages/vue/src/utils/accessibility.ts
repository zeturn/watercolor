// 无障碍访问工具函数

/**
 * 生成唯一ID
 */
export function generateId(prefix = 'wc'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 焦点管理
 */
export class FocusManager {
  private previousFocus: HTMLElement | null = null
  private trapElement: HTMLElement | null = null

  /**
   * 保存当前焦点
   */
  saveFocus() {
    this.previousFocus = document.activeElement as HTMLElement
  }

  /**
   * 恢复之前的焦点
   */
  restoreFocus() {
    if (this.previousFocus && this.previousFocus.focus) {
      this.previousFocus.focus()
      this.previousFocus = null
    }
  }

  /**
   * 设置焦点陷阱
   */
  trapFocus(element: HTMLElement) {
    this.trapElement = element
    document.addEventListener('keydown', this.handleFocusTrap.bind(this))
  }

  /**
   * 移除焦点陷阱
   */
  removeTrap() {
    document.removeEventListener('keydown', this.handleFocusTrap.bind(this))
    this.trapElement = null
  }

  private handleFocusTrap(event: KeyboardEvent) {
    if (!this.trapElement || event.key !== 'Tab') return

    const focusableElements = this.getFocusableElements(this.trapElement)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }
  }

  private getFocusableElements(container: HTMLElement): HTMLElement[] {
    const selector = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ')

    return Array.from(container.querySelectorAll(selector))
  }
}

/**
 * ARIA 工具函数
 */
export const aria = {
  /**
   * 设置ARIA属性
   */
  set(element: HTMLElement, attributes: Record<string, string>) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(`aria-${key}`, value)
    })
  },

  /**
   * 移除ARIA属性
   */
  remove(element: HTMLElement, attributes: string[]) {
    attributes.forEach(attr => {
      element.removeAttribute(`aria-${attr}`)
    })
  },

  /**
   * 切换ARIA属性
   */
  toggle(element: HTMLElement, attribute: string, values: [string, string]) {
    const current = element.getAttribute(`aria-${attribute}`)
    const newValue = current === values[0] ? values[1] : values[0]
    element.setAttribute(`aria-${attribute}`, newValue)
  },
}

/**
 * 键盘导航支持
 */
export const keyboard = {
  /**
   * 处理Arrow键导航
   */
  handleArrowNavigation(
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    options: {
      loop?: boolean
      vertical?: boolean
      horizontal?: boolean
    } = {}
  ): number {
    const { loop = true, vertical = true, horizontal = true } = options
    let newIndex = currentIndex

    switch (event.key) {
      case 'ArrowDown':
        if (vertical) {
          event.preventDefault()
          newIndex = loop && currentIndex === items.length - 1 ? 0 : Math.min(currentIndex + 1, items.length - 1)
        }
        break
      case 'ArrowUp':
        if (vertical) {
          event.preventDefault()
          newIndex = loop && currentIndex === 0 ? items.length - 1 : Math.max(currentIndex - 1, 0)
        }
        break
      case 'ArrowRight':
        if (horizontal) {
          event.preventDefault()
          newIndex = loop && currentIndex === items.length - 1 ? 0 : Math.min(currentIndex + 1, items.length - 1)
        }
        break
      case 'ArrowLeft':
        if (horizontal) {
          event.preventDefault()
          newIndex = loop && currentIndex === 0 ? items.length - 1 : Math.max(currentIndex - 1, 0)
        }
        break
      case 'Home':
        event.preventDefault()
        newIndex = 0
        break
      case 'End':
        event.preventDefault()
        newIndex = items.length - 1
        break
    }

    if (newIndex !== currentIndex && items[newIndex]) {
      items[newIndex].focus()
    }

    return newIndex
  },

  /**
   * 检查是否为激活键
   */
  isActivationKey(event: KeyboardEvent): boolean {
    return event.key === 'Enter' || event.key === ' '
  },
}

/**
 * 屏幕阅读器支持
 */
export const screenReader = {
  /**
   * 创建实时通知区域
   */
  createLiveRegion(priority: 'polite' | 'assertive' = 'polite'): HTMLElement {
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', priority)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `
    document.body.appendChild(liveRegion)
    return liveRegion
  },

  /**
   * 通知屏幕阅读器
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const liveRegion = this.createLiveRegion(priority)
    liveRegion.textContent = message
    
    // 清理
    setTimeout(() => {
      document.body.removeChild(liveRegion)
    }, 1000)
  },
}

/**
 * 颜色对比度检查
 */
export function checkContrast(foreground: string, background: string): {
  ratio: number
  AA: boolean
  AAA: boolean
} {
  const getRGB = (color: string) => {
    const hex = color.replace('#', '')
    return {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16),
    }
  }

  const getLuminance = (rgb: { r: number; g: number; b: number }) => {
    const rsRGB = rgb.r / 255
    const gsRGB = rgb.g / 255
    const bsRGB = rgb.b / 255

    const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
    const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
    const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const fg = getRGB(foreground)
  const bg = getRGB(background)
  
  const fgLuminance = getLuminance(fg)
  const bgLuminance = getLuminance(bg)
  
  const lighter = Math.max(fgLuminance, bgLuminance)
  const darker = Math.min(fgLuminance, bgLuminance)
  
  const ratio = (lighter + 0.05) / (darker + 0.05)

  return {
    ratio,
    AA: ratio >= 4.5,
    AAA: ratio >= 7,
  }
} 