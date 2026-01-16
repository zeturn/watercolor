import { defineAsyncComponent } from 'vue'

// 性能优化工具函数

/**
 * 防抖函数
 * @param fn 要防抖的函数
 * @param delay 延迟时间(ms)
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  
  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 节流函数
 * @param fn 要节流的函数
 * @param delay 延迟时间(ms)
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0
  
  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now()
    
    if (now - lastCall >= delay) {
      lastCall = now
      fn.apply(this, args)
    }
  }
}

/**
 * 懒加载观察器
 */
export class LazyObserver {
  private observer: IntersectionObserver
  private callbacks: Map<Element, () => void> = new Map()

  constructor(options: IntersectionObserverInit = {}) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const callback = this.callbacks.get(entry.target)
          if (callback) {
            callback()
            this.unobserve(entry.target)
          }
        }
      })
    }, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    })
  }

  observe(element: Element, callback: () => void) {
    this.callbacks.set(element, callback)
    this.observer.observe(element)
  }

  unobserve(element: Element) {
    this.callbacks.delete(element)
    this.observer.unobserve(element)
  }

  disconnect() {
    this.observer.disconnect()
    this.callbacks.clear()
  }
}

/**
 * 组件懒加载HOC
 */
export function withLazyLoading(
  loader: () => Promise<any>,
  fallback?: any
) {
  return defineAsyncComponent({
    loader,
    loadingComponent: fallback,
    delay: 200,
    timeout: 10000,
  })
}

/**
 * 内存优化：清理事件监听器
 */
export function createCleanupTracker() {
  const cleanupFunctions: Array<() => void> = []

  const addCleanup = (cleanup: () => void) => {
    cleanupFunctions.push(cleanup)
  }

  const cleanup = () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions.length = 0
  }

  return { addCleanup, cleanup }
}

/**
 * 检测用户设备性能偏好
 */
export function getPerformancePreference() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const connection = (navigator as any).connection
  
  return {
    reduceMotion: prefersReducedMotion,
    slowConnection: connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g',
    lowEndDevice: navigator.hardwareConcurrency <= 2,
  }
}

/**
 * 自适应性能优化
 */
export function optimizeForDevice() {
  const perf = getPerformancePreference()
  
  if (perf.reduceMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0s')
  }
  
  if (perf.slowConnection || perf.lowEndDevice) {
    document.documentElement.classList.add('performance-optimized')
  }
} 