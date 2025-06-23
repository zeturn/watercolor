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
  
  return classes
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
.wc-paradox {
  font-style: italic;
  position: relative;
  padding: 12px 16px;
  border-left: 4px solid var(--wc-primary-500);
  background: var(--wc-neutral-50);
  color: var(--wc-neutral-900);
  cursor: default;
  user-select: none;
  transition: color 0.3s ease;
}

.wc-paradox:hover {
  color: var(--wc-primary-600);
}

.wc-paradox--animated {
  animation: paradox-pulse 2s ease-in-out infinite;
}

.wc-paradox--rotate {
  transform: rotate(5deg);
  transition: transform 0.3s ease;
}

.wc-paradox--scale {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.wc-paradox--skew {
  transform: skew(-2deg, 1deg);
  transition: transform 0.3s ease;
}

.wc-paradox--slow {
  animation-duration: 4s;
}

.wc-paradox--fast {
  animation-duration: 1s;
}

.wc-paradox--hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@keyframes paradox-pulse {
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-2px);
  }
}

/* Dark mode */
.dark .wc-paradox {
  background: var(--wc-neutral-800);
  color: var(--wc-neutral-100);
  border-left-color: var(--wc-primary-400);
}

.dark .wc-paradox:hover {
  color: var(--wc-primary-300);
}
</style> 