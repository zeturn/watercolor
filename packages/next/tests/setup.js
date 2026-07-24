import { beforeEach } from 'vitest'
import 'vitest-canvas-mock'
import '@testing-library/jest-dom'

// 全局测试配置
:beforeEach(() => {
  // 重置DOM
  document.body.innerHTML = ''
  // 重置CSS变量
  document.documentElement.removeAttribute('style')
  document.documentElement.className = ''
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
