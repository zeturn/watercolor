/**
 * List组件工具函数
 * 提供列表相关的工具函数
 */

// 默认配置
export const DEFAULT_CONFIG = {
  dense: false,
  disablePadding: false,
  button: false,
  disabled: false,
  divider: false,
  selected: false,
  disableGutters: false
}

/**
 * 获取列表容器类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getListClasses = (props) => {
  const { dense = false, disablePadding = false, variant, className = '' } = props
  
  const classes = ['list']
  
  if (dense) {
    classes.push('list--dense')
  }
  
  if (disablePadding) {
    classes.push('list--no-padding')
  }
  
  if (variant) {
    classes.push(`list--${variant}`)
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取列表项类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getListItemClasses = (props) => {
  const {
    button = false,
    disabled = false,
    divider = false,
    dense = false,
    selected = false,
    disableGutters = false,
    draggable = false,
    multiselect = false,
    className = ''
  } = props
  
  const classes = ['list-item']
  
  if (button) {
    classes.push('list-item--button')
  }
  
  if (disabled) {
    classes.push('list-item--disabled')
  }
  
  if (divider) {
    classes.push('list-item--divider')
  }
  
  if (dense) {
    classes.push('list-item--dense')
  }
  
  if (selected) {
    classes.push('list-item--selected')
  }
  
  if (disableGutters) {
    classes.push('list-item--no-gutters')
  }
  
  if (draggable) {
    classes.push('list-item--draggable')
  }
  
  if (multiselect) {
    classes.push('list-item--multiselect')
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取列表项图标类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getListItemIconClasses = (props) => {
  const { position = 'start', className = '' } = props
  
  const classes = ['list-item-icon']
  
  if (position) {
    classes.push(`list-item-icon--${position}`)
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取列表项文本类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getListItemTextClasses = (props) => {
  const { inset = false, className = '' } = props
  
  const classes = ['list-item-text']
  
  if (inset) {
    classes.push('list-item-text--inset')
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 验证列表项数据
 * @param {Object} item - 列表项数据
 * @returns {boolean} 是否有效
 */
export const validateListItem = (item) => {
  if (!item || typeof item !== 'object') {
    return false
  }
  
  // 至少需要id或key
  return Boolean(item.id || item.key)
}

/**
 * 格式化列表项数据
 * @param {Object} item - 原始列表项数据
 * @param {number} index - 索引
 * @returns {Object} 格式化后的数据
 */
export const formatListItem = (item, index = 0) => {
  return {
    title: '',
    subtitle: '',
    avatar: null,
    icon: null,
    action: null,
    disabled: false,
    divider: false,
    selected: false,
    ...item,
    // 如果没有id或key，使用索引
    id: item.id || item.key || `list-item-${index}`
  }
}

/**
 * 生成列表项ID
 * @param {string} prefix - 前缀
 * @param {number} index - 索引
 * @returns {string} 列表项ID
 */
export const generateListItemId = (prefix = 'list-item', index = 0) => {
  return `${prefix}-${index}-${Date.now()}`
}

/**
 * 过滤列表项
 * @param {Array} items - 列表项数组
 * @param {string} query - 搜索查询
 * @param {Array} fields - 搜索字段
 * @returns {Array} 过滤后的列表项
 */
export const filterListItems = (items, query, fields = ['title', 'subtitle']) => {
  if (!query || !query.trim()) {
    return items
  }
  
  const searchTerm = query.toLowerCase().trim()
  
  return items.filter(item => {
    return fields.some(field => {
      const value = item[field]
      return value && String(value).toLowerCase().includes(searchTerm)
    })
  })
}

/**
 * 排序列表项
 * @param {Array} items - 列表项数组
 * @param {string} sortBy - 排序字段
 * @param {string} order - 排序顺序
 * @returns {Array} 排序后的列表项
 */
export const sortListItems = (items, sortBy = 'title', order = 'asc') => {
  return [...items].sort((a, b) => {
    const aValue = a[sortBy]
    const bValue = b[sortBy]
    
    if (aValue < bValue) return order === 'asc' ? -1 : 1
    if (aValue > bValue) return order === 'asc' ? 1 : -1
    return 0
  })
}

/**
 * 分组列表项
 * @param {Array} items - 列表项数组
 * @param {string} groupBy - 分组字段
 * @returns {Object} 分组后的列表项
 */
export const groupListItems = (items, groupBy) => {
  const groups = {}
  
  items.forEach(item => {
    const groupKey = item[groupBy] || '其他'
    
    if (!groups[groupKey]) {
      groups[groupKey] = []
    }
    
    groups[groupKey].push(item)
  })
  
  return groups
}

/**
 * 高亮搜索文本
 * @param {string} text - 原始文本
 * @param {string} query - 搜索查询
 * @returns {string} 高亮后的HTML
 */
export const highlightSearchText = (text, query) => {
  if (!query || !query.trim()) {
    return text
  }
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return text.replace(regex, '<span class="list-item-text-highlight">$1</span>')
}

/**
 * 处理列表选择
 * @param {Array} selectedItems - 已选择的项目
 * @param {any} item - 当前项目
 * @param {boolean} multiSelect - 是否多选
 * @returns {Array} 更新后的选择项目
 */
export const handleListSelection = (selectedItems, item, multiSelect = false) => {
  if (!multiSelect) {
    return [item]
  }
  
  const itemId = item.id || item.key
  const isSelected = selectedItems.some(selected => 
    (selected.id || selected.key) === itemId
  )
  
  if (isSelected) {
    return selectedItems.filter(selected => 
      (selected.id || selected.key) !== itemId
    )
  } else {
    return [...selectedItems, item]
  }
}

/**
 * 虚拟化列表计算
 * @param {Object} options - 选项
 * @returns {Object} 虚拟化信息
 */
export const calculateVirtualization = (options) => {
  const {
    itemCount,
    itemHeight,
    containerHeight,
    scrollTop = 0,
    overscan = 5
  } = options
  
  const visibleCount = Math.ceil(containerHeight / itemHeight)
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(itemCount - 1, startIndex + visibleCount + overscan * 2)
  
  return {
    startIndex,
    endIndex,
    visibleCount,
    totalHeight: itemCount * itemHeight,
    offsetY: startIndex * itemHeight
  }
}

/**
 * 处理键盘导航
 * @param {KeyboardEvent} event - 键盘事件
 * @param {Object} options - 选项
 */
export const handleListKeyboard = (event, options) => {
  const {
    currentIndex = 0,
    itemCount = 0,
    onSelect,
    onMove,
    circular = false
  } = options
  
  let newIndex = currentIndex
  
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      newIndex = currentIndex + 1
      if (newIndex >= itemCount) {
        newIndex = circular ? 0 : itemCount - 1
      }
      onMove?.(newIndex)
      break
      
    case 'ArrowUp':
      event.preventDefault()
      newIndex = currentIndex - 1
      if (newIndex < 0) {
        newIndex = circular ? itemCount - 1 : 0
      }
      onMove?.(newIndex)
      break
      
    case 'Home':
      event.preventDefault()
      onMove?.(0)
      break
      
    case 'End':
      event.preventDefault()
      onMove?.(itemCount - 1)
      break
      
    case 'Enter':
    case ' ':
      event.preventDefault()
      onSelect?.(currentIndex)
      break
  }
}

/**
 * 创建拖拽处理器
 * @param {Function} onReorder - 重排序回调
 * @returns {Object} 拖拽处理器
 */
export const createDragHandler = (onReorder) => {
  let draggedItem = null
  let draggedIndex = -1
  
  const handleDragStart = (event, item, index) => {
    draggedItem = item
    draggedIndex = index
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', '')
  }
  
  const handleDragOver = (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }
  
  const handleDrop = (event, targetIndex) => {
    event.preventDefault()
    
    if (draggedIndex !== -1 && draggedIndex !== targetIndex) {
      onReorder?.(draggedIndex, targetIndex)
    }
    
    draggedItem = null
    draggedIndex = -1
  }
  
  const handleDragEnd = () => {
    draggedItem = null
    draggedIndex = -1
  }
  
  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    getDraggedItem: () => draggedItem,
    getDraggedIndex: () => draggedIndex
  }
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
 * 创建列表配置
 * @param {Object} options - 配置选项
 * @returns {Object} 完整配置
 */
export const createListConfig = (options = {}) => {
  return {
    ...DEFAULT_CONFIG,
    ...options
  }
}

/**
 * 获取列表统计信息
 * @param {Array} items - 列表项数组
 * @returns {Object} 统计信息
 */
export const getListStats = (items) => {
  const total = items.length
  const selected = items.filter(item => item.selected).length
  const disabled = items.filter(item => item.disabled).length
  const withIcons = items.filter(item => item.icon).length
  const withAvatars = items.filter(item => item.avatar).length
  
  return {
    total,
    selected,
    disabled,
    withIcons,
    withAvatars,
    selectionRate: total > 0 ? selected / total : 0
  }
}

/**
 * 调试列表配置
 * @param {Object} props - 组件属性
 * @returns {Object} 调试信息
 */
export const debugListConfig = (props) => {
  const config = createListConfig(props)
  const items = config.items || []
  const stats = getListStats(items)
  
  return {
    config,
    stats,
    classes: {
      list: getListClasses(config),
      listItem: getListItemClasses(config),
      listItemIcon: getListItemIconClasses(config),
      listItemText: getListItemTextClasses(config)
    },
    validation: {
      allItemsValid: items.every(validateListItem)
    }
  }
} 