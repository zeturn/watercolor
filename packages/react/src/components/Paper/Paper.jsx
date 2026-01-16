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
  variant = 'elevation',
  elevation = 1,
  square = false,
  hoverable = false,
  clickable = false,
  color = 'default',
  size = null,
  className = '',
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
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
    className
  })

  const handleClick = (e) => {
    if (clickable && onClick) {
      onClick(e)
    }
  }

  return (
    <div 
      className={paperClasses}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        cursor: clickable ? 'pointer' : 'default',
        ...rest.style
      }}
      {...rest}
    >
      {children}
    </div>
  )
}