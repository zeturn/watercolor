import React from 'react'
import { getPaperClasses } from './utils.js'
import './style.css'

/**
 * Paper – React 组件
 * Props
 *  variant   elevation | outlined
 *  elevation 0-24
 *  square    boolean – 是否直角
 *  hoverable boolean – 是否有悬停效果
 *  clickable boolean – 是否可点击
 *  color     string – 颜色主题
 *  size      string – 尺寸
 */
export default function Paper({
  component: Component = 'div',
  variant = 'elevation',
  elevation = 1,
  square = false,
  hoverable = false,
  clickable = false,
  color = 'default',
  size = null,
  shape = null,
  gradient = false,
  frosted = false,
  textured = false,
  className = '',
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  style = {},
  ...rest
}) {
  // 验证并标准化阴影等级（0-24）
  const validElevation = Math.max(0, Math.min(24, Math.floor(Number(elevation) || 0)))
  
  const paperClasses = getPaperClasses({
    variant,
    elevation: validElevation,
    square,
    hoverable,
    clickable,
    color,
    size,
    shape,
    gradient,
    frosted,
    textured,
    className
  })

  const handleClick = (e) => {
    if (clickable && onClick) {
      onClick(e)
    }
  }

  const handleKeyDown = (event) => {
    onKeyDown?.(event)
    if (!clickable || event.defaultPrevented || !['Enter', ' '].includes(event.key)) return
    event.preventDefault()
    onClick?.(event)
  }

  return (
    <Component
      className={paperClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  )
}
