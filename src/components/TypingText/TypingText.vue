<template>
  <span class="typing-wrapper">
    <span class="typing-text">{{ displayText }}</span><span v-if="showCursor" class="typing-cursor"></span>
  </span>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

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
    const index = ref(0)
    const direction = ref(1) // 1 typing, -1 deleting
    let timer

    const start = () => {
      stop()
      timer = setInterval(step, props.speed)
    }
    const stop = () => {
      if (timer) clearInterval(timer)
    }
    const step = () => {
      if (direction.value === 1) {
        // typing
        if (index.value < props.text.length) {
          index.value++
          displayText.value = props.text.slice(0, index.value)
        } else if (props.loop) {
          if (props.erase) {
            direction.value = -1
          } else {
            stop()
            setTimeout(() => {
              index.value = 0
              displayText.value = ''
              start()
            }, props.pause)
          }
        } else {
          stop()
        }
      } else {
        // deleting
        if (index.value > 0) {
          index.value--
          displayText.value = props.text.slice(0, index.value)
        } else {
          direction.value = 1
        }
      }
    }

    onMounted(start)
    onBeforeUnmount(stop)
    watch(() => props.text, () => {
      index.value = 0
      displayText.value = ''
      direction.value = 1
      start()
    })
    watch(() => props.speed, () => start())

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