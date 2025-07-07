<template>
  <span
    :class="countdownClasses"
    :style="wrapperStyle"
  >
    {{ formattedTime }}
  </span>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { getCountdownClasses, formatTime, getDefaultColor } from './utils.js'
import './style.css'

interface Props {
  seconds: number
  autoStart?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  customColor?: string
  fontSize?: string
  format?: 'simple' | 'detailed' | 'card'
  warningTime?: number | null
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  autoStart: true,
  size: 'md',
  color: 'default',
  customColor: '',
  fontSize: '',
  format: 'simple',
  warningTime: null,
  className: ''
})

const emit = defineEmits<{ finish: [] }>()

const remaining = ref(props.seconds)
let timer: number | null = null

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
    timer = null
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

const formattedTime = computed(() => formatTime(remaining.value))

const finalColor = computed(() => props.customColor || (props.fontSize ? getDefaultColor() : undefined))

const wrapperStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.fontSize) style.fontSize = props.fontSize
  if (finalColor.value) style.color = finalColor.value
  return style
})

const countdownClasses = computed(() =>
  getCountdownClasses({
    size: props.size,
    color: props.color,
    format: props.format,
    finished: remaining.value === 0,
    warningTime: props.warningTime,
    remaining: remaining.value,
    className: props.className,
  }).join(' ')
)

defineExpose({ start, clear })
</script> 