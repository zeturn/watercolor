/**
 * Feed 共用工具函数
 */

/**
 * 获取Feed列表类名
 * @param {string} variant - 变体类型
 * @param {string} size - 尺寸
 * @param {string} className - 额外类名
 * @returns {string} 类名字符串
 */
export function getFeedListClasses(variant = 'list', size = 'md', className = '') {
  const classes = ['wc-feed-list']
  
  if (variant) {
    classes.push(variant)
  }
  
  if (size !== 'md') {
    classes.push(`wc-feed-list--${size}`)
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取Feed项目类名
 * @param {string} variant - 变体类型
 * @param {boolean} active - 是否激活
 * @param {boolean} disabled - 是否禁用
 * @returns {string} 类名字符串
 */
export function getFeedItemClasses(variant = 'list', active = false, disabled = false) {
  const classes = ['wc-feed-item']
  
  if (variant) {
    classes.push(variant)
  }
  
  if (active) {
    classes.push('wc-feed-item--active')
  }
  
  if (disabled) {
    classes.push('wc-feed-item--disabled')
  }
  
  return classes.join(' ')
}

/**
 * 格式化时间显示
 * @param {Date|string|number} timestamp - 时间戳
 * @param {Object} options - 选项
 * @returns {string} 格式化后的时间字符串
 */
export function formatFeedTime(timestamp, options = {}) {
  const {
    format = 'relative', // 'relative' | 'absolute' | 'mixed'
    locale = 'zh-CN'
  } = options
  
  if (!timestamp) return ''
  
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  // 相对时间格式
  if (format === 'relative' || (format === 'mixed' && diff < 7 * 24 * 60 * 60 * 1000)) {
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    
    if (seconds < 60) return '刚刚'
    if (minutes < 60) return `${minutes}分钟前`
    if (hours < 24) return `${hours}小时前`
    if (days < 7) return `${days}天前`
  }
  
  // 绝对时间格式
  const formatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  
  // 如果是今年，不显示年份
  if (date.getFullYear() === now.getFullYear()) {
    delete formatOptions.year
  }
  
  return date.toLocaleDateString(locale, formatOptions)
}

/**
 * 处理Feed项目点击
 * @param {Object} item - Feed项目数据
 * @param {Function} callback - 点击回调函数
 * @param {Event} event - 点击事件
 */
export function handleFeedItemClick(item, callback, event) {
  if (item.disabled) {
    event.preventDefault()
    return
  }
  
  if (callback && typeof callback === 'function') {
    callback(item, event)
  }
}

/**
 * 递归渲染Feed子项目
 * @param {Array} children - 子项目数组
 * @param {Object} config - 配置选项
 * @returns {Array} 处理后的子项目数组
 */
export function processFeedChildren(children = [], config = {}) {
  const {
    maxDepth = 5,
    currentDepth = 0,
    showAvatar = true,
    variant = 'list'
  } = config
  
  if (!Array.isArray(children) || currentDepth >= maxDepth) {
    return []
  }
  
  return children.map(child => ({
    ...child,
    depth: currentDepth + 1,
    showAvatar: showAvatar && currentDepth < 3, // 深度超过3层不显示头像
    children: processFeedChildren(child.children, {
      ...config,
      currentDepth: currentDepth + 1
    })
  }))
}

/**
 * 验证Feed数据格式
 * @param {Array} items - Feed数据数组
 * @returns {boolean} 是否有效
 */
export function validateFeedData(items) {
  if (!Array.isArray(items)) return false
  
  return items.every(item => {
    // 必须有基本字段
    if (!item.id && !item.time) return false
    if (!item.author || !item.text) return false
    
    // 检查子项目格式
    if (item.children && !Array.isArray(item.children)) return false
    
    return true
  })
}

/**
 * 搜索Feed内容
 * @param {Array} items - Feed数据数组
 * @param {string} query - 搜索关键词
 * @param {Object} options - 搜索选项
 * @returns {Array} 搜索结果
 */
export function searchFeedItems(items, query, options = {}) {
  const {
    fields = ['author', 'text'], // 搜索字段
    caseSensitive = false,
    includeChildren = true
  } = options
  
  if (!query.trim()) return items
  
  const searchTerm = caseSensitive ? query : query.toLowerCase()
  
  const searchInItem = (item) => {
    // 在指定字段中搜索
    const matches = fields.some(field => {
      const value = item[field]
      if (!value) return false
      const searchValue = caseSensitive ? value : value.toLowerCase()
      return searchValue.includes(searchTerm)
    })
    
    if (matches) return true
    
    // 在子项目中搜索
    if (includeChildren && item.children) {
      return item.children.some(searchInItem)
    }
    
    return false
  }
  
  return items.filter(searchInItem)
}

/**
 * 按日期对Feed进行分组
 * @param {Array} items - Feed数据数组
 * @param {string} groupBy - 分组方式: 'day' | 'week' | 'month'
 * @returns {Object} 分组后的数据
 */
export function groupFeedByDate(items, groupBy = 'day') {
  const groups = {}
  
  items.forEach(item => {
    const date = new Date(item.time)
    let groupKey
    
    switch (groupBy) {
      case 'day':
        groupKey = date.toDateString()
        break
      case 'week':
        const startOfWeek = new Date(date)
        startOfWeek.setDate(date.getDate() - date.getDay())
        groupKey = startOfWeek.toDateString()
        break
      case 'month':
        groupKey = `${date.getFullYear()}-${date.getMonth()}`
        break
      default:
        groupKey = date.toDateString()
    }
    
    if (!groups[groupKey]) {
      groups[groupKey] = []
    }
    
    groups[groupKey].push(item)
  })
  
  // 按日期排序分组
  const sortedGroups = {}
  Object.keys(groups)
    .sort((a, b) => new Date(b) - new Date(a))
    .forEach(key => {
      sortedGroups[key] = groups[key].sort((a, b) => new Date(b.time) - new Date(a.time))
    })
  
  return sortedGroups
}

/**
 * 获取Feed统计信息
 * @param {Array} items - Feed数据数组
 * @returns {Object} 统计信息
 */
export function getFeedStats(items) {
  const stats = {
    totalItems: 0,
    totalReplies: 0,
    uniqueAuthors: new Set(),
    dateRange: { earliest: null, latest: null }
  }
  
  const processItems = (itemList, isReply = false) => {
    itemList.forEach(item => {
      if (isReply) {
        stats.totalReplies++
      } else {
        stats.totalItems++
      }
      
      stats.uniqueAuthors.add(item.author)
      
      const itemDate = new Date(item.time)
      if (!stats.dateRange.earliest || itemDate < stats.dateRange.earliest) {
        stats.dateRange.earliest = itemDate
      }
      if (!stats.dateRange.latest || itemDate > stats.dateRange.latest) {
        stats.dateRange.latest = itemDate
      }
      
      if (item.children) {
        processItems(item.children, true)
      }
    })
  }
  
  processItems(items)
  
  return {
    ...stats,
    uniqueAuthors: stats.uniqueAuthors.size
  }
} 