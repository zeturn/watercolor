import React, { useEffect, useRef, useState } from 'react'
import { TypingAnimator } from './utils'
import './style.css'

const TypingText = ({
  text = 'Hello, Watercolor UI!',
  speed = 100,
  pause = 1500,
  loop = false,
  erase = false,
  showCursor = true,
  className = '',
  style = {},
  ...rest
}) => {
  const [displayText, setDisplayText] = useState('')
  const animatorRef = useRef(null)

  useEffect(() => {
    animatorRef.current = new TypingAnimator(text, {
      speed,
      pause,
      loop,
      erase,
      onUpdate: setDisplayText
    })
    animatorRef.current.start()

    return () => {
      if (animatorRef.current) {
        animatorRef.current.stop()
      }
    }
  }, [text, speed, pause, loop, erase])

  return (
    <span className={`typing-wrapper ${className}`} style={style} {...rest}>
      <span className="typing-text">{displayText}</span>
      {showCursor && <span className="typing-cursor" />}
    </span>
  )
}

TypingText.displayName = 'TypingText'
export default TypingText