import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import {
  getMarqueeClasses,
  getContentStyle,
  getContainerStyle,
  getNextSpeed,
  ANIMATION_NAMES,
} from './utils.js'

/**
 * Marquee (React)
 * 与 Vue 版本保持统一的 props / 样式。
 */
const Marquee = ({
  text = 'This is a scrolling marquee text',
  speed = 25,
  direction = 'left',
  variant = 'default',
  size = 'md',
  pauseOnHover = false,
  loop = true,
  showGradient = false,
  showControls = false,
  allowReverse = true,
  allowSpeedControl = true,
  autoStart = true,
  loading = false,
  height = 'auto',
  backgroundColor = '',
  textColor = '',
  className = '',
  children,
  onStart,
  onPause,
  onResume,
  onComplete,
  onDirectionChange,
  onSpeedChange,
  ...rest
}) => {
  const containerRef = useRef(null)
  const [isPaused, setPaused] = useState(!autoStart)
  const [currentDirection, setCurrentDirection] = useState(direction)
  const [currentSpeed, setCurrentSpeed] = useState(speed)

  // event emit helpers
  const emit = (fn, ...args) => typeof fn === 'function' && fn(...args)

  // notify start on mount
  useEffect(() => {
    if (autoStart) emit(onStart)
  }, [])

  // hover pause
  useEffect(() => {
    const node = containerRef.current
    if (!node || !pauseOnHover) return
    const handleEnter = () => setPaused(true)
    const handleLeave = () => setPaused(false)
    node.addEventListener('mouseenter', handleEnter)
    node.addEventListener('mouseleave', handleLeave)
    return () => {
      node.removeEventListener('mouseenter', handleEnter)
      node.removeEventListener('mouseleave', handleLeave)
    }
  }, [pauseOnHover])

  // emit pause / resume events
  useEffect(() => {
    if (isPaused) emit(onPause)
    else emit(onResume)
  }, [isPaused])

  // classes & styles
  const containerClasses = getMarqueeClasses({
    variant,
    size,
    direction: currentDirection,
    paused: isPaused,
    loading,
    className,
  }).join(' ')

  const containerStyle = {
    ...getContainerStyle({ height, backgroundColor, textColor }),
  }

  const contentStyle = getContentStyle({
    direction: currentDirection,
    speed: currentSpeed,
    paused: isPaused,
    loading,
    loop,
  })

  // control handlers
  const togglePause = () => setPaused((p) => !p)
  const toggleDirection = () => {
    if (!allowReverse) return
    const newDir = {
      left: 'right',
      right: 'left',
      up: 'down',
      down: 'up',
    }[currentDirection]
    setCurrentDirection(newDir)
    emit(onDirectionChange, newDir)
  }

  const toggleSpeed = () => {
    if (!allowSpeedControl) return
    const newSpeed = getNextSpeed(currentSpeed)
    setCurrentSpeed(newSpeed)
    emit(onSpeedChange, newSpeed)
  }

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      style={containerStyle}
      {...rest}
    >
      {/* content */}
      <div className="marquee-content" style={contentStyle}>
        <div className="marquee-item">{children || text}</div>
        {loop && <div className="marquee-item marquee-clone">{children || text}</div>}
      </div>

      {/* gradient */}
      {showGradient && <div className="marquee-gradient marquee-gradient-left" />}
      {showGradient && <div className="marquee-gradient marquee-gradient-right" />}

      {/* controls */}
      {showControls && (
        <div className="marquee-controls">
          <button
            className="marquee-control-btn"
            aria-label={isPaused ? '播放' : '暂停'}
            onClick={togglePause}
          >
            {isPaused ? '▶️' : '⏸️'}
          </button>
          {allowReverse && (
            <button
              className="marquee-control-btn"
              aria-label="改变方向"
              onClick={toggleDirection}
            >
              🔄
            </button>
          )}
          {allowSpeedControl && (
            <button
              className="marquee-control-btn"
              aria-label="改变速度"
              onClick={toggleSpeed}
            >
              ⚡
            </button>
          )}
        </div>
      )}

      {/* loading overlay */}
      {loading && (
        <div className="marquee-loading-overlay">
          <div className="marquee-loading-spinner" />
          <span className="marquee-loading-text">加载中...</span>
        </div>
      )}
    </div>
  )
}

export default Marquee