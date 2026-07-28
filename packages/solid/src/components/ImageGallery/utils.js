/**
 * ImageGallery组件工具函数
 * 提供图片画廊相关的工具函数
 */

// 默认配置
export const DEFAULT_CONFIG = {
  layout: 'grid',
  size: 'md',
  columns: 3,
  gap: 16,
  showInfo: true,
  showCount: true,
  showDownload: false,
  showPagination: false,
  itemsPerPage: 12,
  lazyLoad: true,
  loading: false
}

// 有效的布局类型
export const VALID_LAYOUTS = ['grid', 'masonry', 'carousel']

// 有效的尺寸
export const VALID_SIZES = ['sm', 'md', 'lg', 'xl']

// 宽高比映射
export const ASPECT_RATIOS = {
  sm: '75%',     // 4:3
  md: '66.67%',  // 3:2
  lg: '56.25%',  // 16:9
  xl: '50%'      // 2:1
}

/**
 * 获取画廊容器类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getGalleryClasses = (props) => {
  const { layout = 'grid', size = 'md', loading = false, className = '' } = props
  
  const classes = [
    'image-gallery',
    `gallery-layout-${layout}`,
    `gallery-size-${size}`
  ]
  
  if (loading) {
    classes.push('gallery-loading')
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取网格样式
 * @param {Object} props - 组件属性
 * @returns {Object} 样式对象
 */
export const getGridStyle = (props) => {
  const { columns = 3, gap = 16 } = props
  
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`
  }
}

/**
 * 计算分页数据
 * @param {Array} items - 数据项
 * @param {number} currentPage - 当前页码
 * @param {number} itemsPerPage - 每页项目数
 * @returns {Object} 分页信息
 */
export const calculatePagination = (items, currentPage, itemsPerPage) => {
  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
  const paginatedItems = items.slice(startIndex, endIndex)
  
  return {
    totalItems,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    paginatedItems,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  }
}

/**
 * 验证图片对象
 * @param {Object} image - 图片对象
 * @returns {boolean} 是否有效
 */
export const validateImage = (image) => {
  if (!image || typeof image !== 'object') {
    return false
  }
  
  return Boolean(image.src)
}

/**
 * 格式化图片数据
 * @param {Object} image - 原始图片数据
 * @returns {Object} 格式化后的数据
 */
export const formatImageData = (image) => {
  return {
    id: null,
    src: '',
    thumbnail: null,
    alt: '',
    title: '',
    description: '',
    ...image
  }
}

/**
 * 生成图片ID
 * @param {string} prefix - 前缀
 * @param {number} index - 索引
 * @returns {string} 图片ID
 */
export const generateImageId = (prefix = 'img', index = 0) => {
  return `${prefix}-${index}-${Date.now()}`
}

/**
 * 下载图片
 * @param {Object} image - 图片对象
 * @param {string} filename - 文件名
 */
export const downloadImage = (image, filename) => {
  if (!image || !image.src) {
    console.warn('Invalid image for download')
    return
  }
  
  const link = document.createElement('a')
  link.href = image.src
  link.download = filename || image.title || 'image'
  link.target = '_blank'
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 预加载图片
 * @param {string} src - 图片源
 * @returns {Promise} 加载Promise
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

/**
 * 批量预加载图片
 * @param {Array} images - 图片数组
 * @returns {Promise} 加载Promise
 */
export const preloadImages = (images) => {
  const promises = images.map(image => {
    const src = image.thumbnail || image.src
    return preloadImage(src).catch(() => null)
  })
  
  return Promise.allSettled(promises)
}

/**
 * 获取图片尺寸信息
 * @param {string} src - 图片源
 * @returns {Promise} 尺寸信息Promise
 */
export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      })
    }
    img.onerror = reject
    img.src = src
  })
}

/**
 * 创建灯箱管理器
 * @returns {Object} 灯箱管理器
 */
export const createLightboxManager = () => {
  let isOpen = false
  let currentIndex = 0
  let images = []
  
  const open = (imageIndex, imageList) => {
    if (isOpen) return
    
    isOpen = true
    currentIndex = imageIndex
    images = imageList
    
    // 禁用页面滚动
    document.body.style.overflow = 'hidden'
  }
  
  const close = () => {
    if (!isOpen) return
    
    isOpen = false
    currentIndex = 0
    images = []
    
    // 恢复页面滚动
    document.body.style.overflow = ''
  }
  
  const next = () => {
    if (!isOpen || currentIndex >= images.length - 1) return
    currentIndex++
  }
  
  const prev = () => {
    if (!isOpen || currentIndex <= 0) return
    currentIndex--
  }
  
  const goTo = (index) => {
    if (!isOpen || index < 0 || index >= images.length) return
    currentIndex = index
  }
  
  const getCurrentImage = () => {
    return isOpen ? images[currentIndex] : null
  }
  
  return {
    open,
    close,
    next,
    prev,
    goTo,
    getCurrentImage,
    get isOpen() { return isOpen },
    get currentIndex() { return currentIndex },
    get images() { return images }
  }
}

/**
 * 处理键盘导航
 * @param {KeyboardEvent} event - 键盘事件
 * @param {Object} lightbox - 灯箱管理器
 */
export const handleLightboxKeyboard = (event, lightbox) => {
  if (!lightbox.isOpen) return
  
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault()
      lightbox.prev()
      break
    case 'ArrowRight':
      event.preventDefault()
      lightbox.next()
      break
    case 'Escape':
      event.preventDefault()
      lightbox.close()
      break
    case 'Home':
      event.preventDefault()
      lightbox.goTo(0)
      break
    case 'End':
      event.preventDefault()
      lightbox.goTo(lightbox.images.length - 1)
      break
  }
}

/**
 * 过滤和搜索图片
 * @param {Array} images - 图片数组
 * @param {string} query - 搜索查询
 * @returns {Array} 过滤后的图片
 */
export const filterImages = (images, query) => {
  if (!query || !query.trim()) {
    return images
  }
  
  const searchTerm = query.toLowerCase().trim()
  
  return images.filter(image => {
    const title = (image.title || '').toLowerCase()
    const description = (image.description || '').toLowerCase()
    const alt = (image.alt || '').toLowerCase()
    
    return title.includes(searchTerm) || 
           description.includes(searchTerm) || 
           alt.includes(searchTerm)
  })
}

/**
 * 按标签分组图片
 * @param {Array} images - 图片数组
 * @returns {Object} 分组后的图片
 */
export const groupImagesByTag = (images) => {
  const groups = {}
  
  images.forEach(image => {
    const tags = image.tags || ['其他']
    
    tags.forEach(tag => {
      if (!groups[tag]) {
        groups[tag] = []
      }
      groups[tag].push(image)
    })
  })
  
  return groups
}

/**
 * 排序图片
 * @param {Array} images - 图片数组
 * @param {string} sortBy - 排序字段
 * @param {string} order - 排序顺序
 * @returns {Array} 排序后的图片
 */
export const sortImages = (images, sortBy = 'date', order = 'desc') => {
  const sorted = [...images].sort((a, b) => {
    let aValue, bValue
    
    switch (sortBy) {
      case 'title':
        aValue = (a.title || '').toLowerCase()
        bValue = (b.title || '').toLowerCase()
        break
      case 'date':
        aValue = new Date(a.date || 0)
        bValue = new Date(b.date || 0)
        break
      case 'size':
        aValue = a.fileSize || 0
        bValue = b.fileSize || 0
        break
      default:
        return 0
    }
    
    if (aValue < bValue) return order === 'asc' ? -1 : 1
    if (aValue > bValue) return order === 'asc' ? 1 : -1
    return 0
  })
  
  return sorted
}

/**
 * 获取图片统计信息
 * @param {Array} images - 图片数组
 * @returns {Object} 统计信息
 */
export const getImageStats = (images) => {
  const total = images.length
  const withTitles = images.filter(img => img.title).length
  const withDescriptions = images.filter(img => img.description).length
  const totalSize = images.reduce((sum, img) => sum + (img.fileSize || 0), 0)
  
  return {
    total,
    withTitles,
    withDescriptions,
    totalSize,
    averageSize: total > 0 ? totalSize / total : 0
  }
}

/**
 * 创建瀑布流布局
 * @param {Array} images - 图片数组
 * @param {number} columns - 列数
 * @returns {Array} 列布局数据
 */
export const createMasonryLayout = (images, columns = 3) => {
  const columnHeights = Array(columns).fill(0)
  const columnItems = Array(columns).fill().map(() => [])
  
  images.forEach((image, index) => {
    // 找到最短的列
    const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))
    
    // 添加到最短列
    columnItems[shortestColumnIndex].push({ ...image, index })
    
    // 更新列高度（估算）
    const aspectRatio = image.aspectRatio || 1
    columnHeights[shortestColumnIndex] += 1 / aspectRatio
  })
  
  return columnItems
}

/**
 * 检查图片是否在视口内
 * @param {HTMLElement} element - 图片元素
 * @param {number} rootMargin - 根边距
 * @returns {boolean} 是否在视口内
 */
export const isImageInViewport = (element, rootMargin = 0) => {
  if (!element) return false
  
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth
  
  return (
    rect.bottom >= -rootMargin &&
    rect.right >= -rootMargin &&
    rect.top <= windowHeight + rootMargin &&
    rect.left <= windowWidth + rootMargin
  )
}

/**
 * 创建懒加载观察器
 * @param {Function} callback - 回调函数
 * @param {Object} options - 选项
 * @returns {IntersectionObserver} 观察器实例
 */
export const createLazyLoadObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}

/**
 * 格式化文件大小
 * @param {number} bytes - 字节数
 * @returns {string} 格式化后的大小
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B'
  
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * 验证布局类型
 * @param {string} layout - 布局类型
 * @returns {boolean} 是否有效
 */
export const isValidLayout = (layout) => {
  return VALID_LAYOUTS.includes(layout)
}

/**
 * 验证尺寸
 * @param {string} size - 尺寸
 * @returns {boolean} 是否有效
 */
export const isValidSize = (size) => {
  return VALID_SIZES.includes(size)
}

/**
 * 创建画廊配置
 * @param {Object} options - 配置选项
 * @returns {Object} 完整配置
 */
export const createGalleryConfig = (options = {}) => {
  return {
    ...DEFAULT_CONFIG,
    ...options
  }
}

/**
 * 调试画廊配置
 * @param {Object} props - 组件属性
 * @returns {Object} 调试信息
 */
export const debugGalleryConfig = (props) => {
  const config = createGalleryConfig(props)
  const stats = getImageStats(config.images || [])
  
  return {
    config,
    stats,
    validation: {
      layout: isValidLayout(config.layout),
      size: isValidSize(config.size),
      imagesValid: (config.images || []).every(validateImage)
    },
    pagination: config.showPagination ? 
      calculatePagination(config.images || [], 1, config.itemsPerPage) : null
  }
} 