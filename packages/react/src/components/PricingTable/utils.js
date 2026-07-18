/**
 * PricingTable Component Utilities
 * 价格表格组件工具函数
 */

// ====== Constants ====== //

export const PRICING_VARIANTS = {
  STANDARD: 'standard',
  OUTLINED: 'outlined',
  FILLED: 'filled',
  MINIMAL: 'minimal',
  ELEVATED: 'elevated',
  GRADIENT: 'gradient',
  ANIMATED: 'animated'
}

export const PRICING_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  OUTLINED: 'outlined',
  GHOST: 'ghost',
  SECONDARY: 'secondary'
}

export const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CNY: '¥',
  KRW: '₩'
}

export const BILLING_PERIODS = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
  WEEKLY: 'weekly',
  DAILY: 'daily',
  LIFETIME: 'lifetime'
}

// ====== Price Formatting ====== //

/**
 * 格式化价格显示
 * @param {number|string} price - 价格
 * @param {Object} options - 格式化选项
 * @returns {string} 格式化后的价格字符串
 */
export function formatPrice(price, options = {}) {
  const {
    currency = 'USD',
    locale = 'en-US',
    showCurrency = true,
    showDecimals = true,
    customSymbol = null
  } = options

  if (price === null || price === undefined || price === '') {
    return '免费'
  }

  if (price === 0) {
    return '免费'
  }

  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  
  if (isNaN(numPrice)) {
    return price.toString()
  }

  if (customSymbol) {
    return `${customSymbol}${showDecimals ? numPrice.toFixed(2) : Math.round(numPrice)}`
  }

  if (!showCurrency) {
    return showDecimals ? numPrice.toFixed(2) : Math.round(numPrice).toString()
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0
    }).format(numPrice)
  } catch (error) {
    const symbol = CURRENCY_SYMBOLS[currency] || '$'
    return `${symbol}${showDecimals ? numPrice.toFixed(2) : Math.round(numPrice)}`
  }
}

/**
 * 格式化价格周期
 * @param {string} period - 计费周期
 * @param {string} locale - 语言环境
 * @returns {string} 格式化后的周期字符串
 */
export function formatPeriod(period, locale = 'zh-CN') {
  const periodMap = {
    'zh-CN': {
      [BILLING_PERIODS.MONTHLY]: '/月',
      [BILLING_PERIODS.YEARLY]: '/年',
      [BILLING_PERIODS.WEEKLY]: '/周',
      [BILLING_PERIODS.DAILY]: '/天',
      [BILLING_PERIODS.LIFETIME]: '终身'
    },
    'en-US': {
      [BILLING_PERIODS.MONTHLY]: '/month',
      [BILLING_PERIODS.YEARLY]: '/year',
      [BILLING_PERIODS.WEEKLY]: '/week',
      [BILLING_PERIODS.DAILY]: '/day',
      [BILLING_PERIODS.LIFETIME]: 'lifetime'
    }
  }

  return periodMap[locale]?.[period] || period
}

/**
 * 计算折扣价格
 * @param {number} originalPrice - 原价
 * @param {number} discount - 折扣（0-1 或 百分比）
 * @returns {number} 折扣后价格
 */
export function calculateDiscountPrice(originalPrice, discount) {
  if (typeof originalPrice !== 'number' || typeof discount !== 'number') {
    return originalPrice
  }

  // 如果折扣大于1，假设是百分比
  const discountRate = discount > 1 ? discount / 100 : discount
  return originalPrice * (1 - discountRate)
}

// ====== Plan Validation ====== //

/**
 * 验证价格计划数据
 * @param {Object} plan - 价格计划对象
 * @returns {Object} 验证结果
 */
export function validatePlan(plan) {
  const errors = []
  const warnings = []

  if (!plan) {
    errors.push('计划对象不能为空')
    return { isValid: false, errors, warnings }
  }

  // 必需字段验证
  if (!plan.name || typeof plan.name !== 'string') {
    errors.push('计划名称是必需的且必须是字符串')
  }

  if (plan.price === undefined || plan.price === null) {
    errors.push('价格是必需的')
  }

  if (plan.price !== 0 && !plan.price && plan.price !== '免费') {
    warnings.push('价格值可能无效')
  }

  // 功能列表验证
  if (plan.features && !Array.isArray(plan.features)) {
    errors.push('功能列表必须是数组')
  }

  if (plan.features && plan.features.length === 0) {
    warnings.push('功能列表为空')
  }

  // 按钮文本验证
  if (plan.button && typeof plan.button !== 'string') {
    errors.push('按钮文本必须是字符串')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}

/**
 * 验证价格计划数组
 * @param {Array} plans - 价格计划数组
 * @returns {Object} 验证结果
 */
export function validatePlans(plans) {
  if (!Array.isArray(plans)) {
    return {
      isValid: false,
      errors: ['计划列表必须是数组'],
      warnings: []
    }
  }

  if (plans.length === 0) {
    return {
      isValid: false,
      errors: ['计划列表不能为空'],
      warnings: []
    }
  }

  const allErrors = []
  const allWarnings = []

  plans.forEach((plan, index) => {
    const validation = validatePlan(plan)
    
    validation.errors.forEach(error => {
      allErrors.push(`计划 ${index + 1}: ${error}`)
    })
    
    validation.warnings.forEach(warning => {
      allWarnings.push(`计划 ${index + 1}: ${warning}`)
    })
  })

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  }
}

// ====== Class Name Generation ====== //

/**
 * 生成价格表格容器类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getPricingGridClasses(options = {}) {
  const {
    columns = 3,
    size = PRICING_SIZES.MD,
    className = ''
  } = options

  const classes = ['pricing-grid']

  // 列数类
  if (columns >= 1 && columns <= 4) {
    classes.push(`pricing-grid--${columns}-col`)
  }

  // 尺寸类
  if (size !== PRICING_SIZES.MD) {
    classes.push(`pricing-grid--${size}`)
  }

  // 自定义类名
  if (className) {
    classes.push(className)
  }

  return classes.join(' ')
}

/**
 * 生成计划卡片类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getPlanCardClasses(options = {}) {
  const {
    popular = false,
    variant = PRICING_VARIANTS.STANDARD,
    size = PRICING_SIZES.MD,
    className = ''
  } = options

  const classes = ['plan-card']

  // 推荐标记
  if (popular) {
    classes.push('plan-card--popular')
  }

  // 变体类
  if (variant !== PRICING_VARIANTS.STANDARD) {
    classes.push(`plan-card--${variant}`)
  }

  // 尺寸类
  if (size !== PRICING_SIZES.MD) {
    classes.push(`plan-card--${size}`)
  }

  // 自定义类名
  if (className) {
    classes.push(className)
  }

  return classes.join(' ')
}

/**
 * 生成按钮类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getPlanButtonClasses(options = {}) {
  const {
    variant = BUTTON_VARIANTS.PRIMARY,
    size = PRICING_SIZES.MD,
    className = ''
  } = options

  const classes = ['plan-btn']

  // 变体类
  if (variant !== BUTTON_VARIANTS.PRIMARY) {
    classes.push(`plan-btn--${variant}`)
  }

  // 尺寸类
  if (size !== PRICING_SIZES.MD) {
    classes.push(`plan-btn--${size}`)
  }

  // 自定义类名
  if (className) {
    classes.push(className)
  }

  return classes.join(' ')
}

// ====== Plan Comparison ====== //

/**
 * 比较两个价格计划
 * @param {Object} plan1 - 计划1
 * @param {Object} plan2 - 计划2
 * @returns {Object} 比较结果
 */
export function comparePlans(plan1, plan2) {
  if (!plan1 || !plan2) {
    return { error: '需要两个有效的计划进行比较' }
  }

  const price1 = typeof plan1.price === 'number' ? plan1.price : parseFloat(plan1.price) || 0
  const price2 = typeof plan2.price === 'number' ? plan2.price : parseFloat(plan2.price) || 0

  const features1 = plan1.features || []
  const features2 = plan2.features || []

  const commonFeatures = features1.filter(feature => features2.includes(feature))
  const uniqueFeatures1 = features1.filter(feature => !features2.includes(feature))
  const uniqueFeatures2 = features2.filter(feature => !features1.includes(feature))

  return {
    priceDifference: price1 - price2,
    cheaperPlan: price1 < price2 ? plan1.name : price2 < price1 ? plan2.name : null,
    moreExpensivePlan: price1 > price2 ? plan1.name : price2 > price1 ? plan2.name : null,
    commonFeatures,
    uniqueFeatures: {
      [plan1.name]: uniqueFeatures1,
      [plan2.name]: uniqueFeatures2
    },
    featureCount: {
      [plan1.name]: features1.length,
      [plan2.name]: features2.length
    }
  }
}

/**
 * 找到最受欢迎的计划
 * @param {Array} plans - 价格计划数组
 * @returns {Object|null} 最受欢迎的计划
 */
export function findPopularPlan(plans) {
  if (!Array.isArray(plans) || plans.length === 0) {
    return null
  }

  return plans.find(plan => plan.popular) || null
}

/**
 * 找到最便宜的计划
 * @param {Array} plans - 价格计划数组
 * @returns {Object|null} 最便宜的计划
 */
export function findCheapestPlan(plans) {
  if (!Array.isArray(plans) || plans.length === 0) {
    return null
  }

  return plans.reduce((cheapest, current) => {
    const currentPrice = typeof current.price === 'number' ? current.price : parseFloat(current.price) || 0
    const cheapestPrice = typeof cheapest.price === 'number' ? cheapest.price : parseFloat(cheapest.price) || 0
    
    return currentPrice < cheapestPrice ? current : cheapest
  })
}

/**
 * 找到最贵的计划
 * @param {Array} plans - 价格计划数组
 * @returns {Object|null} 最贵的计划
 */
export function findMostExpensivePlan(plans) {
  if (!Array.isArray(plans) || plans.length === 0) {
    return null
  }

  return plans.reduce((mostExpensive, current) => {
    const currentPrice = typeof current.price === 'number' ? current.price : parseFloat(current.price) || 0
    const mostExpensivePrice = typeof mostExpensive.price === 'number' ? mostExpensive.price : parseFloat(mostExpensive.price) || 0
    
    return currentPrice > mostExpensivePrice ? current : mostExpensive
  })
}

// ====== Data Processing ====== //

/**
 * 排序价格计划
 * @param {Array} plans - 价格计划数组
 * @param {string} sortBy - 排序字段 ('price', 'name', 'features')
 * @param {string} order - 排序顺序 ('asc', 'desc')
 * @returns {Array} 排序后的计划数组
 */
export function sortPlans(plans, sortBy = 'price', order = 'asc') {
  if (!Array.isArray(plans)) {
    return []
  }

  const sortedPlans = [...plans].sort((a, b) => {
    let valueA, valueB

    switch (sortBy) {
      case 'price':
        valueA = typeof a.price === 'number' ? a.price : parseFloat(a.price) || 0
        valueB = typeof b.price === 'number' ? b.price : parseFloat(b.price) || 0
        break
      case 'name':
        valueA = a.name?.toLowerCase() || ''
        valueB = b.name?.toLowerCase() || ''
        break
      case 'features':
        valueA = (a.features || []).length
        valueB = (b.features || []).length
        break
      default:
        return 0
    }

    if (valueA < valueB) return order === 'asc' ? -1 : 1
    if (valueA > valueB) return order === 'asc' ? 1 : -1
    return 0
  })

  return sortedPlans
}

/**
 * 过滤价格计划
 * @param {Array} plans - 价格计划数组
 * @param {Object} filters - 过滤条件
 * @returns {Array} 过滤后的计划数组
 */
export function filterPlans(plans, filters = {}) {
  if (!Array.isArray(plans)) {
    return []
  }

  return plans.filter(plan => {
    // 价格范围过滤
    if (filters.minPrice !== undefined) {
      const price = typeof plan.price === 'number' ? plan.price : parseFloat(plan.price) || 0
      if (price < filters.minPrice) return false
    }

    if (filters.maxPrice !== undefined) {
      const price = typeof plan.price === 'number' ? plan.price : parseFloat(plan.price) || 0
      if (price > filters.maxPrice) return false
    }

    // 功能过滤
    if (filters.requiredFeatures && Array.isArray(filters.requiredFeatures)) {
      const planFeatures = plan.features || []
      const hasAllFeatures = filters.requiredFeatures.every(feature => 
        planFeatures.some(planFeature => 
          planFeature.toLowerCase().includes(feature.toLowerCase())
        )
      )
      if (!hasAllFeatures) return false
    }

    // 推荐计划过滤
    if (filters.popularOnly && !plan.popular) {
      return false
    }

    // 名称搜索
    if (filters.searchTerm) {
      const searchTerm = filters.searchTerm.toLowerCase()
      const nameMatch = plan.name?.toLowerCase().includes(searchTerm)
      const featureMatch = (plan.features || []).some(feature => 
        feature.toLowerCase().includes(searchTerm)
      )
      if (!nameMatch && !featureMatch) return false
    }

    return true
  })
}

// ====== Accessibility ====== //

/**
 * 生成可访问性属性
 * @param {Object} plan - 价格计划
 * @param {number} index - 计划索引
 * @returns {Object} 可访问性属性
 */
export function getAccessibilityProps(plan, index) {
  const props = {
    role: 'article',
    'aria-labelledby': `plan-${index}-name`,
    'aria-describedby': `plan-${index}-price plan-${index}-features`
  }

  if (plan.popular) {
    props['aria-label'] = `推荐计划: ${plan.name}`
  }

  return props
}

// ====== Performance ====== //

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * 节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} limit - 限制时间（毫秒）
 * @returns {Function} 节流后的函数
 */
export function throttle(func, limit) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// ====== Debugging ====== //

/**
 * 调试价格计划数据
 * @param {Array} plans - 价格计划数组
 * @returns {Object} 调试信息
 */
export function debugPlans(plans) {
  if (!Array.isArray(plans)) {
    return { error: '计划数据不是数组' }
  }

  const debug = {
    totalPlans: plans.length,
    popularPlans: plans.filter(p => p.popular).length,
    validPlans: 0,
    invalidPlans: 0,
    priceRange: { min: Infinity, max: -Infinity },
    averageFeatures: 0,
    issues: []
  }

  let totalFeatures = 0

  plans.forEach((plan, index) => {
    const validation = validatePlan(plan)
    
    if (validation.isValid) {
      debug.validPlans++
    } else {
      debug.invalidPlans++
      debug.issues.push({
        planIndex: index,
        planName: plan.name || '未命名',
        errors: validation.errors
      })
    }

    // 价格统计
    const price = typeof plan.price === 'number' ? plan.price : parseFloat(plan.price) || 0
    if (price > 0) {
      debug.priceRange.min = Math.min(debug.priceRange.min, price)
      debug.priceRange.max = Math.max(debug.priceRange.max, price)
    }

    // 功能统计
    if (plan.features && Array.isArray(plan.features)) {
      totalFeatures += plan.features.length
    }
  })

  debug.averageFeatures = plans.length > 0 ? (totalFeatures / plans.length).toFixed(1) : 0

  if (debug.priceRange.min === Infinity) {
    debug.priceRange = { min: 0, max: 0 }
  }

  return debug
}

// ====== Export Default ====== //

export default {
  // Constants
  PRICING_VARIANTS,
  PRICING_SIZES,
  BUTTON_VARIANTS,
  CURRENCY_SYMBOLS,
  BILLING_PERIODS,
  
  // Price formatting
  formatPrice,
  formatPeriod,
  calculateDiscountPrice,
  
  // Validation
  validatePlan,
  validatePlans,
  
  // Class generation
  getPricingGridClasses,
  getPlanCardClasses,
  getPlanButtonClasses,
  
  // Plan comparison
  comparePlans,
  findPopularPlan,
  findCheapestPlan,
  findMostExpensivePlan,
  
  // Data processing
  sortPlans,
  filterPlans,
  
  // Accessibility
  getAccessibilityProps,
  
  // Performance
  debounce,
  throttle,
  
  // Debugging
  debugPlans
} 