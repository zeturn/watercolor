// Alert 组件工具函数

/**
 * Alert组件的颜色映射配置 (用于React版本)
 */
export const colorMap = {
  success: {
    standard: 'bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800 text-success-800 dark:text-success-200',
    filled: 'bg-success-500 border-success-500 text-white',
    outlined: 'bg-transparent border-success-500 text-success-600 dark:text-success-400',
  },
  info: {
    standard: 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-800 dark:text-primary-200',
    filled: 'bg-primary-500 border-primary-500 text-white',
    outlined: 'bg-transparent border-primary-500 text-primary-600 dark:text-primary-400',
  },
  warning: {
    standard: 'bg-warning-50 dark:bg-warning-900/20 border-warning-200 dark:border-warning-800 text-warning-800 dark:text-warning-200',
    filled: 'bg-warning-500 border-warning-500 text-white',
    outlined: 'bg-transparent border-warning-500 text-warning-600 dark:text-warning-400',
  },
  error: {
    standard: 'bg-error-50 dark:bg-error-900/20 border-error-200 dark:border-error-800 text-error-800 dark:text-error-200',
    filled: 'bg-error-500 border-error-500 text-white',
    outlined: 'bg-transparent border-error-500 text-error-600 dark:text-error-400',
  },
}

/**
 * 图标映射配置 (用于Vue版本)
 */
export const iconMap = {
  success: '✓',
  info: 'ⓘ',
  warning: '⚠',
  error: '✕'
}

/**
 * 获取图标内容
 * @param {string} type - Alert类型
 * @returns {string} 图标字符
 */
export function getIconContent(type) {
  return iconMap[type] || iconMap.info
}

/**
 * 获取Alert的CSS类名
 * @param {string} type - Alert类型
 * @param {string} variant - Alert变体
 * @returns {Array<string>} CSS类名数组
 */
export function getAlertClasses(type, variant) {
  return [
    'wc-alert',
    `wc-alert--${type}`,
    `wc-alert--${variant}`
  ]
}

/**
 * 验证Alert类型
 * @param {string} type - 要验证的类型
 * @returns {boolean} 是否为有效类型
 */
export function isValidAlertType(type) {
  return ['success', 'info', 'warning', 'error'].includes(type)
}

/**
 * 验证Alert变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidAlertVariant(variant) {
  return ['filled', 'outlined', 'standard', 'minimal'].includes(variant)
}
