/* Shared utility functions for Accordion components (React & Vue)
------------------------------------------------------------------ */

// 可用的样式变体
export const VALID_VARIANTS = ['default', 'bordered', 'filled']

/**
 * 将传入 variant 归一化，若非法则回退到 'default'
 */
export function normalizeVariant(variant = 'default') {
  return VALID_VARIANTS.includes(variant) ? variant : 'default';
}

/**
 * 根据传入参数生成组合后的 class 字符串
 * @param {string} variant - 组件样式变体
 * @param {string} extra   - 额外附加的 className，可为空
 * @returns {string}
 */
export function buildAccordionClasses(variant = 'default', extra = '') {
  const safeVariant = normalizeVariant(variant);

  return [
    'wc-accordion',
    safeVariant !== 'default' ? `wc-accordion--${safeVariant}` : '',
    extra,
  ]
    .filter(Boolean)
    .join(' ');
}

/**
 * 根据是否允许多选，计算新的 activeItems 数组
 * @param {number[]} currentActive 当前激活项索引数组
 * @param {number}   index         本次点击的索引
 * @param {boolean}  multiple      是否允许同时展开多个
 * @returns {number[]}             新的激活项索引数组
 */
export function toggleActiveItems(currentActive = [], index, multiple = false) {
  if (multiple) {
    return currentActive.includes(index)
      ? currentActive.filter((item) => item !== index)
      : [...currentActive, index];
  }
  return currentActive.includes(index) ? [] : [index];
} 