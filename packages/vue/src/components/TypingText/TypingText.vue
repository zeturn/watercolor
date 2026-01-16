<template>
  <span class="typing-wrapper">
    <span class="typing-text">{{ displayText }}</span>
    <span
      v-if="showCursor"
      class="typing-cursor"
    />
  </span>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { TypingAnimator } from './utils'
import './style.css'

export default {
  name: 'TypingText',
  props: {
    text: { type: String, default: 'Hello, Watercolor UI!' },
    speed: { type: Number, default: 100 }, // ms per char
    pause: { type: Number, default: 1500 }, // pause before delete/retype
    loop: { type: Boolean, default: false },
    erase: { type: Boolean, default: false }, // if true, erase then loop
    showCursor: { type: Boolean, default: true },
  },
  setup(props) {
    const displayText = ref('')
    let animator = null

    const initAnimator = () => {
      if (animator) animator.stop()
      
      animator = new TypingAnimator(props.text, {
        speed: props.speed,
        pause: props.pause,
        loop: props.loop,
        erase: props.erase,
        onUpdate: (text) => { displayText.value = text }
      })
      animator.start()
    }

    onMounted(initAnimator)
    
    onBeforeUnmount(() => {
      if (animator) animator.stop()
    })
    
    watch(() => [props.text, props.speed, props.pause, props.loop, props.erase], initAnimator)

    return { displayText }
  }
}
</script>

<style scoped>
.typing-wrapper { display: inline-flex; align-items: center; }
.typing-cursor {
  display: inline-block;
  width: 1px;
  height: 1em;
  background: currentColor;
  margin-left: 2px;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 0%, 50% { opacity: 1;} 51%,100% { opacity: 0; }}
</style> 