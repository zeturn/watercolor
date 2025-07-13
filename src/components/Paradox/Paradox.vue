<template>
  <div
    :class="paradoxClasses"
    :title="tooltip"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot>{{ content }}</slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  /** 显示的悖论文本 */
  content: {
    type: String,
    default: '这句话是假。'
  },
  /** 鼠标悬停提示 */
  tooltip: {
    type: String,
    default: '若此句为真，则为假；若此句为假，则为真。'
  },
  /** 是否启用动画 */
  animated: {
    type: Boolean,
    default: false
  },
  /** 变换类型 */
  transform: {
    type: String,
    default: 'none',
    validator: (value: string) => ['none', 'rotate', 'scale', 'skew'].includes(value)
  },
  /** 动画速度 */
  speed: {
    type: String,
    default: 'normal',
    validator: (value: string) => ['slow', 'normal', 'fast'].includes(value)
  },
  /** 是否启用悬停效果 */
  hoverEffect: {
    type: Boolean,
    default: false
  },
  /** 是否无限循环 */
  infinite: {
    type: Boolean,
    default: false
  },
  /** 尺寸变体 */
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  /** 样式变体 */
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'success', 'warning', 'error', 'info'].includes(value)
  },
  /** 边框样式 */
  borderStyle: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'top', 'bottom', 'right', 'all'].includes(value)
  },
  /** 是否显示引用符号 */
  withQuotes: {
    type: Boolean,
    default: false
  },
  /** 是否启用发光效果 */
  glow: {
    type: Boolean,
    default: false
  },
  /** 是否启用渐变背景 */
  gradient: {
    type: Boolean,
    default: false
  },
  /** 自定义CSS类名 */
  className: {
    type: String,
    default: ''
  }
})

const isHovered = ref(false)
const isPaused = ref(false)
const currentFrame = ref(0)
let animationId: number | null = null

const paradoxClasses = computed(() => {
  const classes = ['wc-paradox']
  
  if (props.animated) {
    classes.push('wc-paradox--animated')
  }
  
  if (props.transform !== 'none') {
    classes.push(`wc-paradox--${props.transform}`)
  }
  
  if (props.speed !== 'normal') {
    classes.push(`wc-paradox--${props.speed}`)
  }
  
  if (props.hoverEffect && isHovered.value) {
    classes.push('wc-paradox--hover')
  }
  
  if (props.size !== 'md') {
    classes.push(`wc-paradox--${props.size}`)
  }
  
  if (props.variant !== 'primary') {
    classes.push(`wc-paradox--${props.variant}`)
  }
  
  if (props.borderStyle !== 'left') {
    classes.push(`wc-paradox--border-${props.borderStyle}`)
  }
  
  if (props.withQuotes) {
    classes.push('wc-paradox--with-quotes')
  }
  
  if (props.glow) {
    classes.push('wc-paradox--glow')
  }
  
  if (props.gradient) {
    classes.push('wc-paradox--gradient')
  }
  
  if (props.className) {
    classes.push(props.className)
  }
  
  return classes.join(' ')
})

const handleMouseEnter = () => {
  if (props.hoverEffect) {
    isHovered.value = true
  }
}

const handleMouseLeave = () => {
  if (props.hoverEffect) {
    isHovered.value = false
  }
}

const startAnimation = () => {
  if (props.animated && !isPaused.value && props.infinite) {
    const animate = () => {
      currentFrame.value = (currentFrame.value + 1) % 360
      if (!isPaused.value) {
        animationId = requestAnimationFrame(animate)
      }
    }
    animationId = requestAnimationFrame(animate)
  }
}

const pause = () => {
  isPaused.value = true
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

const resume = () => {
  isPaused.value = false
  startAnimation()
}

const reset = () => {
  currentFrame.value = 0
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

// 暴露方法给测试
defineExpose({
  pause,
  resume,
  reset,
  isPaused,
  currentFrame,
  infinite: computed(() => props.infinite)
})

onMounted(() => {
  if (props.animated && props.infinite) {
    startAnimation()
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style>
/* 引入外部样式文件 */
@import './style.css';
</style> 