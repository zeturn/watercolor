<template>
  <span :class="numberAnimationClasses">{{ displayValue }}</span>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  from: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 2000
  },
  decimals: {
    type: Number,
    default: 0
  },
  separator: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  formatter: {
    type: Function,
    default: null
  },
  easing: {
    type: String,
    default: 'linear',
    validator: (value) => ['linear', 'ease-in', 'ease-out', 'ease-in-out'].includes(value)
  },
  autoPlay: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['complete'])

const currentValue = ref(props.from)
const isAnimating = ref(false)
let animationFrame = null

const numberAnimationClasses = computed(() => {
  const classes = ['wc-number-animation']
  
  if (props.easing) {
    classes.push(`wc-number-animation--${props.easing}`)
  }
  
  if (isAnimating.value || props.autoPlay) {
    classes.push('wc-number-animation--playing')
  }
  
  return classes
})

const displayValue = computed(() => {
  let value = currentValue.value
  
  // 使用自定义格式化器
  if (props.formatter) {
    return props.formatter(value)
  }
  
  // 应用小数位数
  if (props.decimals > 0) {
    value = value.toFixed(props.decimals)
  } else {
    value = Math.round(value).toString()
  }
  
  // 添加千位分隔符
  if (props.separator) {
    const parts = value.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, props.separator)
    value = parts.join('.')
  }
  
  // 添加前缀和后缀
  return `${props.prefix}${value}${props.suffix}`
})

const animate = () => {
  const startTime = Date.now()
  const startValue = currentValue.value
  const targetValue = props.value
  const valueChange = targetValue - startValue
  
  isAnimating.value = true
  
  const step = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    // 应用缓动函数
    let easedProgress = progress
    switch (props.easing) {
      case 'ease-in':
        easedProgress = progress * progress
        break
      case 'ease-out':
        easedProgress = 1 - (1 - progress) * (1 - progress)
        break
      case 'ease-in-out':
        easedProgress = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2
        break
      default: // linear
        easedProgress = progress
    }
    
    currentValue.value = startValue + valueChange * easedProgress
    
    if (progress < 1) {
      // 在测试环境中使用setTimeout，在正常环境中使用requestAnimationFrame
      if (typeof window !== 'undefined' && window.requestAnimationFrame && !window.vi) {
        animationFrame = requestAnimationFrame(step)
      } else {
        animationFrame = setTimeout(step, 16) // 约60fps
      }
    } else {
      currentValue.value = targetValue
      isAnimating.value = false
      emit('complete')
    }
  }
  
  step()
}

const stopAnimation = () => {
  if (animationFrame) {
    if (typeof window !== 'undefined' && window.requestAnimationFrame && !window.vi) {
      cancelAnimationFrame(animationFrame)
    } else {
      clearTimeout(animationFrame)
    }
    animationFrame = null
  }
  isAnimating.value = false
}

// 监听value变化
watch(() => props.value, () => {
  stopAnimation()
  animate()
}, { immediate: true })

onMounted(() => {
  if (props.autoPlay) {
    animate()
  }
})

onUnmounted(() => {
  stopAnimation()
})

// 暴露方法供外部调用
defineExpose({
  start: animate,
  stop: stopAnimation
})
</script>

<style scoped>
.wc-number-animation {
  font-variant-numeric: tabular-nums;
  display: inline-block;
  transition: all 0.3s ease;
}

.wc-number-animation--playing {
  transform: scale(1.05);
}

.wc-number-animation--ease-in {
  transition-timing-function: ease-in;
}

.wc-number-animation--ease-out {
  transition-timing-function: ease-out;
}

.wc-number-animation--ease-in-out {
  transition-timing-function: ease-in-out;
}
</style> 