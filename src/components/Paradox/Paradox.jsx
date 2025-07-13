import React, { useState, useEffect, useRef } from 'react'

/**
 * Paradox – 显示悖论文本
 * Props
 *  content       string  悖论文本
 *  tooltip       string  悬停提示
 *  animated      boolean 是否启用动画
 *  transform     string  变换类型 (none, rotate, scale, skew)
 *  speed         string  动画速度 (slow, normal, fast)
 *  hoverEffect   boolean 是否启用悬停效果
 *  infinite      boolean 是否无限循环
 *  size          string  尺寸变体 (sm, md, lg, xl)
 *  variant       string  样式变体 (primary, success, warning, error, info)
 *  borderStyle   string  边框样式 (left, top, bottom, right, all)
 *  withQuotes    boolean 是否显示引用符号
 *  glow          boolean 是否启用发光效果
 *  gradient      boolean 是否启用渐变背景
 *  className     string  自定义CSS类名
 */
export default function Paradox({ 
  content = '这句话是假。', 
  tooltip = '若此句为真，则为假；若此句为假，则为真。',
  animated = false,
  transform = 'none',
  speed = 'normal',
  hoverEffect = false,
  infinite = false,
  size = 'md',
  variant = 'primary',
  borderStyle = 'left',
  withQuotes = false,
  glow = false,
  gradient = false,
  className = '',
  children
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const animationRef = useRef(null)

  const paradoxClasses = [
    'wc-paradox',
    animated && 'wc-paradox--animated',
    transform !== 'none' && `wc-paradox--${transform}`,
    speed !== 'normal' && `wc-paradox--${speed}`,
    hoverEffect && isHovered && 'wc-paradox--hover',
    size !== 'md' && `wc-paradox--${size}`,
    variant !== 'primary' && `wc-paradox--${variant}`,
    borderStyle !== 'left' && `wc-paradox--border-${borderStyle}`,
    withQuotes && 'wc-paradox--with-quotes',
    glow && 'wc-paradox--glow',
    gradient && 'wc-paradox--gradient',
    className
  ].filter(Boolean).join(' ')

  const handleMouseEnter = () => {
    if (hoverEffect) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (hoverEffect) {
      setIsHovered(false)
    }
  }

  const startAnimation = () => {
    if (animated && !isPaused && infinite) {
      const animate = () => {
        setCurrentFrame(prev => (prev + 1) % 360)
        if (!isPaused) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }
  }

  const pause = () => {
    setIsPaused(true)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }

  const resume = () => {
    setIsPaused(false)
    startAnimation()
  }

  const reset = () => {
    setCurrentFrame(0)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }

  useEffect(() => {
    if (animated && infinite) {
      startAnimation()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animated, infinite])

  return (
    <div
      className={paradoxClasses}
      title={tooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children || content}
    </div>
  )
}