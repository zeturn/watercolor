// Alert 组件工具函数

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
