/**
 * Paradox 组件工具函数
 */

// 经典悖论文本库
export const paradoxTexts = {
  classic: [
    '这句话是假的。',
    '我正在说谎。',
    '下面这句话是真的。上面这句话是假的。',
    '这个陈述无法被证明。',
    '我知道我什么都不知道。'
  ],
  
  logical: [
    '如果上帝是全能的，他能创造一块他搬不动的石头吗？',
    '时间旅行者能够改变导致他进行时间旅行的过去吗？',
    '一个理发师只给不给自己理发的人理发，那么他给自己理发吗？',
    '如果皮诺曹说"我的鼻子现在要长长了"会发生什么？'
  ],
  
  philosophical: [
    '存在先于本质，还是本质先于存在？',
    '我思故我在，但我如何知道我在思考？',
    '如果一棵树在森林里倒下，而没有人听到，它有声音吗？',
    '船体的每个部分都被替换后，它还是原来的船吗？'
  ],
  
  mathematical: [
    '这个集合包含所有不包含自身的集合。',
    '无穷大加一等于无穷大。',
    '0.999... 等于 1 吗？',
    '有多少个质数？'
  ],
  
  modern: [
    '人工智能能够真正理解还是只是模拟理解？',
    '虚拟现实中的体验是真实的吗？',
    '如果我们生活在模拟中，这个模拟是真实的吗？',
    '量子观测改变现实还是只是我们的认知？'
  ]
}

// 对应的提示文本
export const tooltipTexts = {
  classic: [
    '若此句为真，则为假；若此句为假，则为真。',
    '如果这是真的，那么说话者在说谎，这是矛盾的。',
    '自相矛盾的循环陈述。',
    '哥德尔不完备性定理的通俗表达。',
    '苏格拉底的智慧悖论。'
  ],
  
  logical: [
    '全能悖论：全能与逻辑限制的冲突。',
    '祖父悖论：因果关系的循环问题。',
    '理发师悖论：自指集合的经典例子。',
    '自指语句与现实变化的冲突。'
  ],
  
  philosophical: [
    '存在主义与本质主义的根本分歧。',
    '笛卡尔怀疑论的自指问题。',
    '客观现实与主观感知的关系。',
    '忒修斯之船：同一性的哲学问题。'
  ],
  
  mathematical: [
    '罗素悖论：集合论的基础危机。',
    '无穷的数学性质与直觉的冲突。',
    '实数连续性的反直觉结果。',
    '无穷素数定理的思考。'
  ],
  
  modern: [
    '强人工智能与弱人工智能的区别。',
    '现象学与本体论的现代表达。',
    '模拟假说：现实层次的无限递归。',
    '量子力学的观测者效应。'
  ]
}

// 尺寸类型
export const sizes = {
  SM: 'sm',
  MD: 'md', 
  LG: 'lg',
  XL: 'xl'
}

// 颜色类型
export const colors = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
}

// 边框位置
export const borderPositions = {
  LEFT: 'left',
  TOP: 'top',
  BOTTOM: 'bottom',
  RIGHT: 'right',
  ALL: 'all'
}

/**
 * 生成 Paradox 组件的 CSS 类名
 * @param {Object} options - 配置选项
 * @returns {string} 生成的类名字符串
 */
export function getParadoxClasses(options = {}) {
  const {
    size = sizes.MD,
    color = colors.PRIMARY,
    borderPosition = borderPositions.LEFT,
    withQuotes = false,
    glow = false,
    gradient = false,
    animated = false,
    className = ''
  } = options

  const classes = ['wc-paradox']

  // 尺寸
  if (size && sizes[size.toUpperCase()]) {
    classes.push(`wc-paradox--${size}`)
  }

  // 颜色
  if (color && colors[color.toUpperCase()]) {
    classes.push(`wc-paradox--${color}`)
  }

  // 边框位置
  if (borderPosition !== borderPositions.LEFT) {
    classes.push(`wc-paradox--border-${borderPosition}`)
  }

  // 特殊效果
  if (withQuotes) {
    classes.push('wc-paradox--with-quotes')
  }
  
  if (glow) {
    classes.push('wc-paradox--glow')
  }
  
  if (gradient) {
    classes.push('wc-paradox--gradient')
  }
  
  if (animated) {
    classes.push('wc-paradox--animated')
  }

  // 自定义类名
  if (className) {
    classes.push(className)
  }

  return classes.join(' ')
}

/**
 * 随机获取悖论文本
 * @param {string} category - 类别
 * @returns {Object} 包含文本和提示的对象
 */
export function getRandomParadox(category = 'classic') {
  const texts = paradoxTexts[category] || paradoxTexts.classic
  const tooltips = tooltipTexts[category] || tooltipTexts.classic
  
  const randomIndex = Math.floor(Math.random() * texts.length)
  
  return {
    content: texts[randomIndex],
    tooltip: tooltips[randomIndex],
    category,
    index: randomIndex
  }
}

/**
 * 获取所有可用的悖论类别
 * @returns {Array} 类别数组
 */
export function getParadoxCategories() {
  return Object.keys(paradoxTexts)
}

/**
 * 根据类别获取悖论文本列表
 * @param {string} category - 类别
 * @returns {Array} 悖论文本数组
 */
export function getParadoxesByCategory(category) {
  const texts = paradoxTexts[category] || []
  const tooltips = tooltipTexts[category] || []
  
  return texts.map((content, index) => ({
    content,
    tooltip: tooltips[index] || '',
    category,
    index
  }))
}

/**
 * 验证悖论文本
 * @param {string} text - 悖论文本
 * @returns {Object} 验证结果
 */
export function validateParadoxText(text) {
  const result = {
    isValid: true,
    warnings: [],
    suggestions: []
  }

  if (!text || typeof text !== 'string') {
    result.isValid = false
    result.warnings.push('悖论文本不能为空')
    return result
  }

  const trimmedText = text.trim()
  
  if (trimmedText.length < 5) {
    result.warnings.push('悖论文本过短，建议至少5个字符')
  }
  
  if (trimmedText.length > 200) {
    result.warnings.push('悖论文本过长，建议不超过200个字符')
  }

  // 检查是否包含自指特征
  const selfReferentialPatterns = [
    /这句话|此句|本句/,
    /我正在|我在/,
    /自己|自身/,
    /说谎|撒谎/,
    /真的|假的/
  ]

  const hasSelfReference = selfReferentialPatterns.some(pattern => 
    pattern.test(trimmedText)
  )

  if (!hasSelfReference) {
    result.suggestions.push('考虑添加自指元素以增强悖论效果')
  }

  // 检查是否以问号结尾
  if (trimmedText.endsWith('？') || trimmedText.endsWith('?')) {
    result.suggestions.push('悖论通常以陈述句形式表达，而非疑问句')
  }

  return result
}

/**
 * 格式化悖论文本
 * @param {string} text - 原始文本
 * @param {Object} options - 格式化选项
 * @returns {string} 格式化后的文本
 */
export function formatParadoxText(text, options = {}) {
  const {
    addQuotes = false,
    capitalize = true,
    addPunctuation = true,
    maxLength = 200
  } = options

  if (!text) return ''

  let formatted = text.trim()

  // 长度限制
  if (formatted.length > maxLength) {
    formatted = formatted.substring(0, maxLength - 3) + '...'
  }

  // 首字母大写
  if (capitalize && formatted.length > 0) {
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1)
  }

  // 添加标点
  if (addPunctuation && !formatted.match(/[。！？.!?]$/)) {
    formatted += '。'
  }

  // 添加引号
  if (addQuotes) {
    formatted = `"${formatted}"`
  }

  return formatted
}

/**
 * 创建自定义悖论
 * @param {string} content - 悖论内容
 * @param {string} tooltip - 提示文本
 * @param {string} author - 作者
 * @returns {Object} 悖论对象
 */
export function createCustomParadox(content, tooltip = '', author = '') {
  const validation = validateParadoxText(content)
  
  return {
    content: formatParadoxText(content),
    tooltip: tooltip || '自定义悖论',
    author,
    category: 'custom',
    isValid: validation.isValid,
    warnings: validation.warnings,
    suggestions: validation.suggestions,
    createdAt: new Date().toISOString()
  }
}

/**
 * 悖论分析工具
 */
export const analysisUtils = {
  /**
   * 分析悖论类型
   * @param {string} text - 悖论文本
   * @returns {Array} 可能的类型
   */
  analyzeParadoxType(text) {
    const types = []
    
    if (/这句话|此句|本句/.test(text)) {
      types.push('self-referential')
    }
    
    if (/全能|无所不能/.test(text)) {
      types.push('omnipotence')
    }
    
    if (/时间|过去|未来/.test(text)) {
      types.push('temporal')
    }
    
    if (/集合|包含/.test(text)) {
      types.push('set-theory')
    }
    
    if (/存在|本质/.test(text)) {
      types.push('existential')
    }

    return types.length > 0 ? types : ['unknown']
  },

  /**
   * 计算悖论复杂度
   * @param {string} text - 悖论文本
   * @returns {number} 复杂度分数 (1-10)
   */
  calculateComplexity(text) {
    let score = 1

    // 长度因素
    if (text.length > 50) score += 1
    if (text.length > 100) score += 1

    // 自指层次
    const selfRefCount = (text.match(/这句话|此句|本句|我|自己/g) || []).length
    score += Math.min(selfRefCount, 3)

    // 逻辑连接词
    const logicalWords = ['如果', '那么', '但是', '然而', '因为', '所以']
    const logicalCount = logicalWords.filter(word => text.includes(word)).length
    score += Math.min(logicalCount, 2)

    // 否定词
    const negationCount = (text.match(/不|没有|无法|不能/g) || []).length
    score += Math.min(negationCount, 2)

    return Math.min(score, 10)
  }
}

/**
 * 调试工具函数
 */
export const debugUtils = {
  /**
   * 打印悖论信息
   * @param {Object} paradox - 悖论对象
   */
  logParadoxInfo(paradox) {
    if (process.env.NODE_ENV === 'development') {
      console.group('Paradox Info')
      console.log('Content:', paradox.content)
      console.log('Tooltip:', paradox.tooltip)
      console.log('Category:', paradox.category)
      console.log('Types:', analysisUtils.analyzeParadoxType(paradox.content))
      console.log('Complexity:', analysisUtils.calculateComplexity(paradox.content))
      console.groupEnd()
    }
  },

  /**
   * 验证组件配置
   * @param {Object} config - 配置对象
   * @returns {Array} 警告信息
   */
  validateConfig(config) {
    const warnings = []

    if (config.size && !Object.values(sizes).includes(config.size)) {
      warnings.push(`Invalid size: ${config.size}`)
    }

    if (config.color && !Object.values(colors).includes(config.color)) {
      warnings.push(`Invalid color: ${config.color}`)
    }

    if (config.borderPosition && !Object.values(borderPositions).includes(config.borderPosition)) {
      warnings.push(`Invalid border position: ${config.borderPosition}`)
    }

    if (process.env.NODE_ENV === 'development' && warnings.length > 0) {
      console.warn('Paradox Component Warnings:', warnings)
    }

    return warnings
  }
}

// 默认导出
export default {
  getParadoxClasses,
  getRandomParadox,
  getParadoxCategories,
  getParadoxesByCategory,
  validateParadoxText,
  formatParadoxText,
  createCustomParadox,
  analysisUtils,
  debugUtils,
  paradoxTexts,
  tooltipTexts,
  sizes,
  colors,
  borderPositions
} 