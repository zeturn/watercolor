<template>
  <span :class="numberAnimationClasses">{{ displayValue }}</span>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import './style.css'

const props = defineProps({
  value: {
    type: Number,
    required: false,
    default: undefined
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
  },
  active: {
    type: Boolean,
    default: undefined // 如果传入则覆盖 autoPlay
  },
  to: {
    type: Number,
    default: undefined
  },
  precision: {
    type: Number,
    default: undefined
  },
  showSeparator: {
    type: Boolean,
    default: false
  },
  locale: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['complete'])

const currentValue = ref(props.from)
const isAnimating = ref(false)
let animationFrame = null

const isAutoPlay = computed(() => props.active !== undefined ? props.active : props.autoPlay)

const numberAnimationClasses = computed(() => {
  const classes = ['wc-number-animation']
  
  if (props.easing) {
    classes.push(`wc-number-animation--${props.easing}`)
  }
  
  if (isAnimating.value || isAutoPlay.value) {
    classes.push('wc-number-animation--playing')
  }
  
  return classes
})

const finalValue = computed(() => {
  // 优先使用 to，其次使用 value
  return props.to !== undefined ? props.to : props.value
})

const decimalsComputed = computed(() => {
  // precision 优先生效
  return props.precision !== undefined ? props.precision : props.decimals
})

const separatorComputed = computed(() => {
  if (props.showSeparator) {
    // showSeparator==true 且未自定义 separator 时，使用逗号
    return props.separator || ','
  }
  return props.separator
})

const displayValue = computed(() => {
  let value = currentValue.value
  
  // 使用自定义格式化器
  if (props.formatter) {
    return props.formatter(value)
  }
  
  // 应用小数位数
  if (decimalsComputed.value > 0) {
    value = value.toFixed(decimalsComputed.value)
  } else {
    value = Math.round(value).toString()
  }
  
  // 添加千位分隔符
  if (separatorComputed.value) {
    const parts = value.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separatorComputed.value)
    value = parts.join('.')
  }
  
  // 添加前缀和后缀
  return `${props.prefix}${value}${props.suffix}`
})

const animate = () => {
  const startTime = Date.now()
  const startValue = currentValue.value
  const target = finalValue.value
  const valueChange = target - startValue
  
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
      currentValue.value = target
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
watch(() => finalValue.value, () => {
  stopAnimation()
  if (isAutoPlay.value) {
    animate()
  } else {
    currentValue.value = finalValue.value
  }
})

onMounted(() => {
  if (isAutoPlay.value) {
    animate()
  } else {
    currentValue.value = finalValue.value
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
