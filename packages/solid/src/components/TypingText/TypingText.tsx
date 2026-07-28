import { createSignal, createEffect } from 'solid-js'

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
  const [displayText, setDisplayText] = createSignal('')
  let animatorRef = null

  createEffect(() => {
    animatorRef = new TypingAnimator(text, {
      speed,
      pause,
      loop,
      erase,
      onUpdate: setDisplayText
    })
    animatorRef.start()

    return () => {
      if (animatorRef) {
        animatorRef.stop()
      }
    }
  }, [text, speed, pause, loop, erase])

  return (
    <span class={`typing-wrapper ${className}`} style={style} {...rest}>
      <span class="typing-text">{displayText()}</span>
      {showCursor && <span class="typing-cursor" />}
    </span>
  )
}

TypingText.displayName = 'TypingText'
export default TypingText