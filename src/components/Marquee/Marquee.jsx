import React, { useEffect, useRef, useState } from 'react'
import './Marquee.css'

/**
 * React 版本的 Marquee 组件
 *
 * 目前实现：
 *  - 支持左右/上下滚动方向
 *  - 支持速度、循环、暂停/继续
 *  - 支持暗色模式和主题变量
 *
 * 注意：更复杂的控制按钮、渐变遮罩等可继续参考 Vue 版实现。
 */
const Marquee = ({
  text = 'This is a scrolling marquee text',
  speed = 50,
  direction = 'left', // 'left' | 'right' | 'up' | 'down'
  loop = true,
  pauseOnHover = false,
  className = '',
  style = {},
  children,
  ...rest
}) => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [isPaused, setPaused] = useState(false)

  // 生成 keyframe 名称
  const animationName = {
    left: 'marquee-scroll-left',
    right: 'marquee-scroll-right',
    up: 'marquee-scroll-up',
    down: 'marquee-scroll-down'
  }[direction]

  // 计算持续时间：速度越大 -> 时间越短
  const duration = 100 / speed

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const handleEnter = () => pauseOnHover && setPaused(true)
    const handleLeave = () => setPaused(false)
    node.addEventListener('mouseenter', handleEnter)
    node.addEventListener('mouseleave', handleLeave)
    return () => {
      node.removeEventListener('mouseenter', handleEnter)
      node.removeEventListener('mouseleave', handleLeave)
    }
  }, [pauseOnHover])

  const contentStyle = {
    animationName,
    animationDuration: `${duration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: loop ? 'infinite' : 1,
    animationPlayState: isPaused ? 'paused' : 'running'
  }

  return (
    <div
      ref={containerRef}
      className={`marquee-container marquee-direction-${direction} ${className}`}
      style={style}
      {...rest}
    >
      <div ref={contentRef} className="marquee-content" style={contentStyle}>
        <div className="marquee-item">
          {children || text}
        </div>
        {loop && (
          <div className="marquee-item marquee-clone">
            {children || text}
          </div>
        )}
      </div>
    </div>
  )
}

export default Marquee