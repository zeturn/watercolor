// Blockquote 组件工具函数

/**
 * 获取Blockquote的CSS类名
 * @param {string} className - 额外的CSS类名
 * @returns {string} 完整的CSS类名字符串
 */
export function getBlockquoteClasses(className = '') {
  const classes = ['wc-blockquote']
  
  if (className) {
    classes.push(className)
  }
  
  return classes.filter(Boolean).join(' ')
} 