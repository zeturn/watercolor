// Copy 组件工具函数

/**
 * 有效的Copy变体
 */
export const validVariants = ['default', 'primary', 'secondary', 'success', 'warning', 'error']

/**
 * 有效的Copy尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 验证Copy变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证Copy尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 获取Copy的CSS类名
 * @param {Object} props - Copy的props
 * @returns {Array<string>} CSS类名数组
 */
export function getCopyClasses(props) {
  const {
    variant = 'default',
    size = 'md',
    copied = false,
    copyError = false,
    className = ''
  } = props

  const classes = ['wc-copy']

  classes.push(`wc-copy--${variant}`)
  classes.push(`wc-copy--${size}`)

  if (copied) classes.push('wc-copy--copied')
  if (copyError) classes.push('wc-copy--error')

  if (className) classes.push(className)

  return classes.filter(Boolean)
}

/**
 * 获取当前显示的标签文本
 * @param {boolean} copied - 是否已复制
 * @param {boolean} copyError - 是否复制出错
 * @param {string} copyLabel - 复制标签
 * @param {string} copiedLabel - 已复制标签
 * @returns {string} 标签文本
 */
export function getCurrentLabel(copied, copyError, copyLabel, copiedLabel) {
  if (copyError) return '错误'
  if (copied) return copiedLabel
  return copyLabel
}

/**
 * 获取工具提示文本
 * @param {boolean} copied - 是否已复制
 * @param {boolean} copyError - 是否复制出错
 * @param {string} tooltipSuccess - 成功提示文本
 * @param {string} tooltipError - 错误提示文本
 * @returns {string} 提示文本
 */
export function getTooltipText(copied, copyError, tooltipSuccess, tooltipError) {
  if (copyError) return tooltipError
  if (copied) return tooltipSuccess
  return ''
}

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} 复制是否成功
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // 降级方案
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.left = '-999999px'
      ta.style.top = '-999999px'
      document.body.appendChild(ta)
      ta.focus()
      ta.select()
      const success = document.execCommand('copy')
      document.body.removeChild(ta)
      return success
    }
  } catch (error) {
    console.warn('复制失败:', error)
    return false
  }
}

/**
 * 处理复制操作
 * @param {string} text - 要复制的文本
 * @param {Function} onCopy - 复制成功回调
 * @param {Function} onError - 复制失败回调
 * @param {Function} setCopied - 设置复制状态
 * @param {Function} setCopyError - 设置错误状态
 * @param {Function} setTooltipVisible - 设置提示显示状态
 * @param {boolean} showTooltip - 是否显示提示
 * @param {number} resetDelay - 重置延迟时间
 */
export async function handleCopyOperation(
  text,
  onCopy,
  onError,
  setCopied,
  setCopyError,
  setTooltipVisible,
  showTooltip,
  resetDelay
) {
  const success = await copyToClipboard(text)

  if (success) {
    setCopied(true)
    setCopyError(false)
    onCopy(text)
  } else {
    setCopied(false)
    setCopyError(true)
    onError(new Error('复制失败'))
  }

  if (showTooltip && setTooltipVisible) {
    setTooltipVisible(true)
    setTimeout(() => setTooltipVisible(false), 1500)
  }

  setTimeout(() => {
    setCopied(false)
    setCopyError(false)
  }, resetDelay)
}

/**
 * 获取工具提示的CSS类名
 * @param {boolean} copied - 是否已复制
 * @param {boolean} copyError - 是否复制出错
 * @returns {string} CSS类名
 */
export function getTooltipClasses(copied, copyError) {
  let classes = 'wc-copy-tooltip'

  if (copied) classes += ' wc-copy-tooltip--success'
  if (copyError) classes += ' wc-copy-tooltip--error'

  return classes
}
