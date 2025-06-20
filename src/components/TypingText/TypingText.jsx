import React, { useEffect, useRef, useState } from 'react'

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
  const indexRef = useRef(0)
  const directionRef = useRef(1) // 1 typing, -1 deleting
  const timerRef = useRef(null)

  const clear = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const step = () => {
    if (directionRef.current === 1) {
      // typing
      if (indexRef.current < text.length) {
        indexRef.current += 1
        setDisplayText(text.slice(0, indexRef.current))
      } else if (loop) {
        if (erase) {
          directionRef.current = -1
        } else {
          clear()
          setTimeout(() => {
            indexRef.current = 0
            setDisplayText('')
            start()
          }, pause)
        }
      } else {
        clear()
      }
    } else {
      // deleting
      if (indexRef.current > 0) {
        indexRef.current -= 1
        setDisplayText(text.slice(0, indexRef.current))
      } else {
        directionRef.current = 1
      }
    }
  }

  const start = () => {
    clear()
    timerRef.current = setInterval(step, speed)
  }

  useEffect(() => {
    start()
    return () => clear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed])

  return (
    <span className={`typing-wrapper inline-flex items-center ${className}`} style={style} {...rest}>
      <span className="typing-text">{displayText}</span>
      {showCursor && (
        <span
          className="typing-cursor"
          style={{
            display: 'inline-block',
            width: '1px',
            height: '1em',
            background: 'currentColor',
            marginLeft: '2px',
            animation: 'blink 1s steps(1) infinite'
          }}
        />
      )}
      {/* keyframes global */}
      <style>{`@keyframes blink {0%,50%{opacity:1;}51%,100%{opacity:0;}}`}</style>
    </span>
  )
}

TypingText.displayName = 'TypingText'
export default TypingText