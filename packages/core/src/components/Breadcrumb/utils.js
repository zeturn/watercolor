// Breadcrumb 组件工具函数

/**
 * 有效的Breadcrumb变体
 */
export const validVariants = ['default']

/**
 * 验证Breadcrumb变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 处理Breadcrumb项目和截断逻辑
 * @param {Array} items - 原始项目数组
 * @param {boolean} showHome - 是否显示首页
 * @param {string} homeIcon - 首页图标
 * @param {number} maxItems - 最大显示项目数
 * @returns {Array} 处理后的项目数组
 */
export function processBreadcrumbItems(items, showHome, homeIcon, maxItems) {
  let list = [...items]
  
  if (showHome && list.length && list[0].label !== '首页') {
    list.unshift({ label: '首页', icon: homeIcon, href: '/' })
  }
  
  if (maxItems > 0 && list.length > maxItems) {
    const ellipsisIndex = Math.max(1, maxItems - 2)
    list = [
      ...list.slice(0, ellipsisIndex), 
      { label: '...', disabled: true, isEllipsis: true }, 
      ...list.slice(-1)
    ]
  }
  
  return list
}

/**
 * 获取Breadcrumb的CSS类名
 * @param {string} variant - Breadcrumb变体
 * @returns {string} 完整的CSS类名字符串
 */
export function getBreadcrumbClasses(variant) {
  return `wc-breadcrumb wc-breadcrumb--${variant}`
}

/**
 * 获取Breadcrumb项目的CSS类名
 * @param {number} index - 项目索引
 * @param {number} totalLength - 项目总数
 * @returns {string} 项目的CSS类名
 */
export function getBreadcrumbItemClasses(index, totalLength) {
  const classes = ['wc-breadcrumb-item']
  
  if (index === totalLength - 1) {
    classes.push('wc-breadcrumb-item--current')
  }
  
  return classes.join(' ')
}

/**
 * 获取Breadcrumb链接的CSS类名
 * @param {boolean} disabled - 是否禁用
 * @returns {string} 链接的CSS类名
 */
export function getBreadcrumbLinkClasses(disabled) {
  const classes = ['wc-breadcrumb-link']
  
  if (disabled) {
    classes.push('wc-breadcrumb-link--disabled')
  }
  
  return classes.join(' ')
}

/**
 * 处理Breadcrumb点击事件
 * @param {Event} e - 事件对象
 * @param {Object} item - 项目对象
 * @param {number} index - 项目索引
 * @param {number} totalLength - 项目总数
 * @param {Function} onItemClick - 点击回调函数
 * @returns {boolean} 是否阻止默认行为
 */
export function handleBreadcrumbClick(e, item, index, totalLength, onItemClick) {
  if (item.disabled || item.isEllipsis || index === totalLength - 1) {
    e.preventDefault()
    return false
  }
  
  if (onItemClick) {
    onItemClick(e, item, index)
  }
  
  return true
}

/**
 * 判断是否应该渲染链接
 * @param {number} index - 项目索引
 * @param {number} totalLength - 项目总数
 * @param {boolean} disabled - 是否禁用
 * @param {boolean} isEllipsis - 是否为省略号
 * @returns {boolean} 是否应该渲染为链接
 */
export function shouldRenderAsLink(index, totalLength, disabled, isEllipsis) {
  return index !== totalLength - 1 && !disabled && !isEllipsis
} 