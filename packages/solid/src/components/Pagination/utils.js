/**
 * Pagination 组件工具函数
 */

// 尺寸类型
export const sizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

// 变体类型
export const variants = {
  DEFAULT: 'default',
  MINIMAL: 'minimal',
  OUTLINED: 'outlined',
  COMPACT: 'compact'
}

// 颜色类型
export const colors = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
}

// 形状类型
export const shapes = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  SQUARE: 'square'
}

/**
 * 计算总页数
 * @param {number} total - 总数据量
 * @param {number} pageSize - 每页大小
 * @returns {number} 总页数
 */
export function calculateTotalPages(total, pageSize) {
  if (total <= 0 || pageSize <= 0) return 1
  return Math.ceil(total / pageSize)
}

/**
 * 验证当前页码
 * @param {number} page - 当前页码
 * @param {number} totalPages - 总页数
 * @returns {number} 有效的页码
 */
export function validateCurrentPage(page, totalPages) {
  const numPage = Number(page)
  if (isNaN(numPage)) return 1
  return Math.max(1, Math.min(totalPages, Math.floor(numPage)))
}

/**
 * 计算数据范围
 * @param {number} currentPage - 当前页码
 * @param {number} pageSize - 每页大小
 * @param {number} total - 总数据量
 * @returns {Object} 数据范围信息
 */
export function calculateDataRange(currentPage, pageSize, total) {
  const validPage = validateCurrentPage(currentPage, calculateTotalPages(total, pageSize))
  const start = (validPage - 1) * pageSize + 1
  const end = Math.min(validPage * pageSize, total)
  
  return {
    start,
    end,
    total,
    currentPage: validPage,
    pageSize,
    totalPages: calculateTotalPages(total, pageSize)
  }
}

/**
 * 生成页码项数组
 * @param {Object} options - 配置选项
 * @returns {Array} 页码项数组
 */
export function generatePageItems(options = {}) {
  const {
    currentPage = 1,
    totalPages = 1,
    siblingCount = 1,
    boundaryCount = 1,
    showFirstLast = true,
    showPrevNext = true
  } = options

  const validCurrentPage = validateCurrentPage(currentPage, totalPages)
  const items = []

  // 添加首页按钮
  if (showFirstLast && validCurrentPage > 1) {
    items.push({
      type: 'first',
      page: 1,
      label: 'First',
      disabled: false
    })
  }

  // 添加上一页按钮
  if (showPrevNext) {
    items.push({
      type: 'prev',
      page: Math.max(1, validCurrentPage - 1),
      label: 'Previous',
      disabled: validCurrentPage === 1
    })
  }

  // 计算显示的页码范围
  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2

  if (totalPages <= totalNumbers) {
    // 如果总页数较少，显示所有页码
    for (let i = 1; i <= totalPages; i++) {
      items.push({
        type: 'page',
        page: i,
        label: i.toString(),
        active: i === validCurrentPage,
        disabled: false
      })
    }
  } else {
    // 复杂分页逻辑
    const leftSibling = Math.max(validCurrentPage - siblingCount, boundaryCount + 2)
    const rightSibling = Math.min(validCurrentPage + siblingCount, totalPages - boundaryCount - 1)

    const showLeftEllipsis = leftSibling > boundaryCount + 2
    const showRightEllipsis = rightSibling < totalPages - boundaryCount - 1

    // 左边界页码
    for (let i = 1; i <= boundaryCount; i++) {
      items.push({
        type: 'page',
        page: i,
        label: i.toString(),
        active: i === validCurrentPage,
        disabled: false
      })
    }

    // 左省略号
    if (showLeftEllipsis) {
      items.push({
        type: 'ellipsis',
        page: null,
        label: '...',
        disabled: true
      })
    }

    // 中间页码
    for (let i = leftSibling; i <= rightSibling; i++) {
      items.push({
        type: 'page',
        page: i,
        label: i.toString(),
        active: i === validCurrentPage,
        disabled: false
      })
    }

    // 右省略号
    if (showRightEllipsis) {
      items.push({
        type: 'ellipsis',
        page: null,
        label: '...',
        disabled: true
      })
    }

    // 右边界页码
    for (let i = totalPages - boundaryCount + 1; i <= totalPages; i++) {
      items.push({
        type: 'page',
        page: i,
        label: i.toString(),
        active: i === validCurrentPage,
        disabled: false
      })
    }
  }

  // 添加下一页按钮
  if (showPrevNext) {
    items.push({
      type: 'next',
      page: Math.min(totalPages, validCurrentPage + 1),
      label: 'Next',
      disabled: validCurrentPage === totalPages
    })
  }

  // 添加末页按钮
  if (showFirstLast && validCurrentPage < totalPages) {
    items.push({
      type: 'last',
      page: totalPages,
      label: 'Last',
      disabled: false
    })
  }

  return items
}

/**
 * 生成 Pagination 组件的 CSS 类名
 * @param {Object} options - 配置选项
 * @returns {string} 生成的类名字符串
 */
export function getPaginationClasses(options = {}) {
  const {
    size = sizes.MD,
    variant = variants.DEFAULT,
    color = colors.PRIMARY,
    shape = shapes.DEFAULT,
    className = ''
  } = options

  const classes = ['wc-pagination']

  // 尺寸
  if (size && sizes[size.toUpperCase()]) {
    classes.push(`wc-pagination--${size}`)
  }

  // 变体
  if (variant && variant !== variants.DEFAULT) {
    classes.push(`wc-pagination--${variant}`)
  }

  // 颜色
  if (color && color !== colors.PRIMARY) {
    classes.push(`wc-pagination--${color}`)
  }

  // 形状
  if (shape && shape !== shapes.DEFAULT) {
    classes.push(`wc-pagination--${shape}`)
  }

  // 自定义类名
  if (className) {
    classes.push(className)
  }

  return classes.join(' ')
}

/**
 * 格式化分页信息文本
 * @param {Object} range - 数据范围
 * @param {Object} options - 格式化选项
 * @returns {string} 格式化后的文本
 */
export function formatPaginationInfo(range, options = {}) {
  const {
    template = 'Showing {start} to {end} of {total} entries',
    locale = 'en-US'
  } = options

  const { start, end, total } = range

  // 格式化数字
  const formatNumber = (num) => {
    return new Intl.NumberFormat(locale).format(num)
  }

  return template
    .replace('{start}', formatNumber(start))
    .replace('{end}', formatNumber(end))
    .replace('{total}', formatNumber(total))
}

/**
 * Pagination 控制器类
 */
export class PaginationController {
  constructor(options = {}) {
    this.options = {
      total: 0,
      pageSize: 10,
      currentPage: 1,
      siblingCount: 1,
      boundaryCount: 1,
      showFirstLast: true,
      showPrevNext: true,
      showInfo: true,
      showSizeChanger: false,
      pageSizeOptions: [10, 20, 50, 100],
      onChange: null,
      onPageSizeChange: null,
      ...options
    }

    this.state = {
      currentPage: this.options.currentPage,
      pageSize: this.options.pageSize,
      total: this.options.total
    }
  }

  /**
   * 获取当前状态
   * @returns {Object} 当前状态
   */
  getState() {
    return {
      ...this.state,
      totalPages: this.getTotalPages(),
      range: this.getDataRange(),
      items: this.getPageItems()
    }
  }

  /**
   * 设置总数据量
   * @param {number} total - 总数据量
   */
  setTotal(total) {
    this.state.total = Math.max(0, Number(total) || 0)
    
    // 如果当前页超出范围，调整到最后一页
    const totalPages = this.getTotalPages()
    if (this.state.currentPage > totalPages) {
      this.setCurrentPage(totalPages)
    }
  }

  /**
   * 设置每页大小
   * @param {number} pageSize - 每页大小
   */
  setPageSize(pageSize) {
    const newPageSize = Math.max(1, Number(pageSize) || 10)
    const oldPageSize = this.state.pageSize
    
    this.state.pageSize = newPageSize
    
    // 计算新的当前页
    const currentStart = (this.state.currentPage - 1) * oldPageSize + 1
    const newCurrentPage = Math.ceil(currentStart / newPageSize)
    
    this.setCurrentPage(newCurrentPage)
    this.options.onPageSizeChange?.(newPageSize, this.getState())
  }

  /**
   * 设置当前页
   * @param {number} page - 页码
   */
  setCurrentPage(page) {
    const totalPages = this.getTotalPages()
    const newPage = validateCurrentPage(page, totalPages)
    
    if (newPage !== this.state.currentPage) {
      this.state.currentPage = newPage
      this.options.onChange?.(newPage, this.getState())
    }
  }

  /**
   * 跳转到首页
   */
  goToFirst() {
    this.setCurrentPage(1)
  }

  /**
   * 跳转到末页
   */
  goToLast() {
    this.setCurrentPage(this.getTotalPages())
  }

  /**
   * 跳转到上一页
   */
  goToPrev() {
    this.setCurrentPage(this.state.currentPage - 1)
  }

  /**
   * 跳转到下一页
   */
  goToNext() {
    this.setCurrentPage(this.state.currentPage + 1)
  }

  /**
   * 获取总页数
   * @returns {number} 总页数
   */
  getTotalPages() {
    return calculateTotalPages(this.state.total, this.state.pageSize)
  }

  /**
   * 获取数据范围
   * @returns {Object} 数据范围
   */
  getDataRange() {
    return calculateDataRange(this.state.currentPage, this.state.pageSize, this.state.total)
  }

  /**
   * 获取页码项
   * @returns {Array} 页码项数组
   */
  getPageItems() {
    return generatePageItems({
      currentPage: this.state.currentPage,
      totalPages: this.getTotalPages(),
      siblingCount: this.options.siblingCount,
      boundaryCount: this.options.boundaryCount,
      showFirstLast: this.options.showFirstLast,
      showPrevNext: this.options.showPrevNext
    })
  }

  /**
   * 处理页码点击
   * @param {Object} item - 页码项
   */
  handlePageClick(item) {
    if (item.disabled || item.page === null) return

    switch (item.type) {
      case 'first':
        this.goToFirst()
        break
      case 'last':
        this.goToLast()
        break
      case 'prev':
        this.goToPrev()
        break
      case 'next':
        this.goToNext()
        break
      case 'page':
        this.setCurrentPage(item.page)
        break
    }
  }

  /**
   * 重置到首页
   */
  reset() {
    this.setCurrentPage(1)
  }

  /**
   * 更新配置
   * @param {Object} newOptions - 新配置
   */
  updateOptions(newOptions) {
    Object.assign(this.options, newOptions)
  }
}

/**
 * 工具函数
 */
export const utils = {
  /**
   * 创建分页控制器实例
   * @param {Object} options - 配置选项
   * @returns {PaginationController} 控制器实例
   */
  createController(options = {}) {
    return new PaginationController(options)
  },

  /**
   * 生成页面大小选项
   * @param {Array} options - 选项数组
   * @returns {Array} 格式化的选项
   */
  generatePageSizeOptions(options = [10, 20, 50, 100]) {
    return options.map(size => ({
      value: size,
      label: `${size} / page`
    }))
  },

  /**
   * 计算分页偏移量
   * @param {number} page - 页码
   * @param {number} pageSize - 每页大小
   * @returns {number} 偏移量
   */
  calculateOffset(page, pageSize) {
    return (page - 1) * pageSize
  },

  /**
   * 从偏移量计算页码
   * @param {number} offset - 偏移量
   * @param {number} pageSize - 每页大小
   * @returns {number} 页码
   */
  calculatePageFromOffset(offset, pageSize) {
    return Math.floor(offset / pageSize) + 1
  },

  /**
   * 检测是否为移动设备
   * @returns {boolean} 是否为移动设备
   */
  isMobile() {
    return window.innerWidth <= 768
  },

  /**
   * 获取适合移动设备的配置
   * @param {Object} options - 原始配置
   * @returns {Object} 移动端配置
   */
  getMobileConfig(options = {}) {
    return {
      ...options,
      siblingCount: Math.min(options.siblingCount || 1, 0),
      boundaryCount: Math.min(options.boundaryCount || 1, 1),
      showFirstLast: false
    }
  },

  /**
   * 调试信息
   * @param {string} message - 消息
   * @param {*} data - 数据
   */
  debug(message, data) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Pagination] ${message}`, data)
    }
  }
}

// 默认导出
export default {
  PaginationController,
  calculateTotalPages,
  validateCurrentPage,
  calculateDataRange,
  generatePageItems,
  getPaginationClasses,
  formatPaginationInfo,
  utils,
  sizes,
  variants,
  colors,
  shapes
} 