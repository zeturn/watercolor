<template>
  <div class="wc-countdown" :style="wrapperStyle">
    <span>{{ formattedTime }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  /** 倒计时秒数 */
  seconds: {
    type: Number,
    required: true,
    validator: (v: number) => v >= 0
  },
  /** 是否自动开始 */
  autoStart: {
    type: Boolean,
    default: true
  },
  /** 字体大小 */
  fontSize: {
    type: String,
    default: '16px'
  },
  /** 文本颜色 */
  color: {
    type: String,
    default: '' // 若未指定，则自动使用主题中性色
  }
})

const emit = defineEmits(['finish'])

const remaining = ref(props.seconds)
let timer: number | undefined

const start = () => {
  if (timer) return
  timer = window.setInterval(() => {
    if (remaining.value > 0) {
      remaining.value -= 1
    } else {
      clear()
      emit('finish')
    }
  }, 1000)
}

const clear = () => {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

onMounted(() => {
  if (props.autoStart) start()
})

onBeforeUnmount(() => {
  clear()
})

watch(() => props.seconds, (val) => {
  remaining.value = val
  clear()
  if (props.autoStart) start()
})

const formattedTime = computed(() => {
  const sec = remaining.value
  const hours = Math.floor(sec / 3600)
  const minutes = Math.floor((sec % 3600) / 60)
  const seconds = sec % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  if (hours > 0) return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  else return `${pad(minutes)}:${pad(seconds)}`
})

const wrapperStyle = computed(() => {
  // 当未显式设置颜色时，使用主题中性色；暗色模式下使用浅色
  const defaultColor = document.documentElement.classList.contains('dark')
    ? 'var(--wc-neutral-100)'
    : 'var(--wc-neutral-900)'
  return {
    fontSize: props.fontSize,
    color: props.color || defaultColor
  }
})

/** 对外暴露方法 */
defineExpose({ start, clear })
</script>

<style scoped>
.wc-countdown {
  display: inline-block;
  font-family: var(--wc-font-mono);
}
</style> 