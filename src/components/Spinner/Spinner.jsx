import React, { useEffect } from 'react'

/**
 * Spinner (React)
 * 旋转加载指示器，使用主题系统变量，支持尺寸、颜色、粗细自定义。
 */
const Spinner = ({ size = 40, thickness = 4, color = 'var(--wc-primary-500)', style = {}, className = '', ...rest }) => {
  useEffect(() => {
    // 注入一次 keyframes（若已存在则跳过）
    if (!document.getElementById('wc-spinner-keyframes')) {
      const styleEl = document.createElement('style')
      styleEl.id = 'wc-spinner-keyframes'
      styleEl.innerHTML = `@keyframes wc-spin { to { transform: rotate(360deg); } }`
      document.head.appendChild(styleEl)
    }
  }, [])

  const spinnerStyle = {
    width: size,
    height: size,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: 'var(--wc-neutral-200)',
    borderTopColor: color,
    borderRadius: '50%',
    animation: 'wc-spin 1s linear infinite',
    ...style
  }

  return <div className={`wc-spinner ${className}`} style={spinnerStyle} {...rest} />
}

export default Spinner