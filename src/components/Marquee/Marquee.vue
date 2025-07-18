<template>
  <div 
    class="marquee-container"
    :class="[
      `marquee-${variant}`,
      `marquee-size-${size}`,
      `marquee-direction-${currentDirection}`,
      paused && 'marquee-paused',
      loading && 'marquee-loading'
    ]"
    :style="containerStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 滚动内容 -->
    <div 
      ref="marqueeRef"
      class="marquee-content"
      :style="contentStyle"
    >
      <!-- 主要内容 -->
      <div class="marquee-item">
        <slot>{{ text }}</slot>
      </div>
      
      <!-- 重复内容（用于无缝循环） -->
      <div
        v-if="loop"
        class="marquee-item marquee-clone"
      >
        <slot>{{ text }}</slot>
      </div>
    </div>

    <!-- 渐变遮罩 -->
    <div
      v-if="showGradient"
      class="marquee-gradient marquee-gradient-left"
    />
    <div
      v-if="showGradient"
      class="marquee-gradient marquee-gradient-right"
    />
    
    <!-- 控制按钮 -->
    <div
      v-if="showControls"
      class="marquee-controls"
    >
      <button 
        class="marquee-control-btn"
        :aria-label="isPaused ? '播放' : '暂停'"
        @click="togglePause"
      >
        {{ isPaused ? '▶️' : '⏸️' }}
      </button>
      
      <button 
        v-if="allowReverse"
        class="marquee-control-btn"
        aria-label="改变方向"
        @click="toggleDirection"
      >
        🔄
      </button>
      
      <button 
        v-if="allowSpeedControl"
        class="marquee-control-btn"
        aria-label="改变速度"
        @click="toggleSpeed"
      >
        ⚡
      </button>
    </div>

    <!-- 加载状态 -->
    <div
      v-if="loading"
      class="marquee-loading-overlay"
    >
      <div class="marquee-loading-spinner" />
      <span class="marquee-loading-text">加载中...</span>
    </div>
  </div>
</template>

<script>
import './style.css'
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

export default {
  name: 'Marquee',
  props: {
    text: {
      type: String,
      default: 'This is a scrolling marquee text'
    },
    speed: {
      type: Number,
      default: 25,
      validator: (value) => value > 0 && value <= 200
    },
    direction: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right', 'up', 'down'].includes(value)
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'outlined', 'filled', 'gradient'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: true
    },
    showGradient: {
      type: Boolean,
      default: false
    },
    showControls: {
      type: Boolean,
      default: false
    },
    allowReverse: {
      type: Boolean,
      default: true
    },
    allowSpeedControl: {
      type: Boolean,
      default: true
    },
    autoStart: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: 'auto'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    }
  },
  emits: ['start', 'pause', 'resume', 'complete', 'direction-change', 'speed-change'],
  setup(props, { emit }) {
    const marqueeRef = ref(null)
    const isPaused = ref(!props.autoStart)
    const currentDirection = ref(props.direction)
    const currentSpeed = ref(props.speed)
    const speedIndex = ref(1) // 0: slow, 1: normal, 2: fast
    const animationId = ref(null)
    const isHovered = ref(false)

    const speeds = [5, 25, 50] // 慢、正常、快

    const containerStyle = computed(() => {
      const style = {}
      
      if (props.height !== 'auto') {
        style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
      }
      
      if (props.backgroundColor) {
        style.backgroundColor = props.backgroundColor
      }
      
      if (props.textColor) {
        style.color = props.textColor
      }
      
      return style
    })

    const contentStyle = computed(() => {
      const isVertical = ['up', 'down'].includes(currentDirection.value)
      const duration = 100 / currentSpeed.value
      
      let animationName
      switch (currentDirection.value) {
        case 'left':
          animationName = 'marquee-scroll-left'
          break
        case 'right':
          animationName = 'marquee-scroll-right'
          break
        case 'up':
          animationName = 'marquee-scroll-up'
          break
        case 'down':
          animationName = 'marquee-scroll-down'
          break
      }

      return {
        animationName: isPaused.value || props.loading ? 'none' : animationName,
        animationDuration: `${duration}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: props.loop ? 'infinite' : '1',
        flexDirection: isVertical ? 'column' : 'row'
      }
    })

    const paused = computed(() => {
      // 如果显示控制按钮，则不在 hover 时自动暂停，避免冲突
      const hoverShouldPause = props.pauseOnHover && !props.showControls && isHovered.value
      return isPaused.value || hoverShouldPause || props.loading
    })

    const handleMouseEnter = () => {
      isHovered.value = true
    }

    const handleMouseLeave = () => {
      isHovered.value = false
    }

    const togglePause = () => {
      isPaused.value = !isPaused.value
      
      if (isPaused.value) {
        emit('pause')
      } else {
        emit('resume')
      }
    }

    const toggleDirection = () => {
      const directions = ['left', 'right', 'up', 'down']
      const currentIndex = directions.indexOf(currentDirection.value)
      const nextIndex = (currentIndex + 1) % directions.length
      currentDirection.value = directions[nextIndex]
      
      emit('direction-change', currentDirection.value)
    }

    const toggleSpeed = () => {
      speedIndex.value = (speedIndex.value + 1) % speeds.length
      currentSpeed.value = speeds[speedIndex.value]
      
      emit('speed-change', {
        speed: currentSpeed.value,
        level: ['slow', 'normal', 'fast'][speedIndex.value]
      })
    }

    const start = () => {
      isPaused.value = false
      emit('start')
    }

    const pause = () => {
      isPaused.value = true
      emit('pause')
    }

    const resume = () => {
      isPaused.value = false
      emit('resume')
    }

    const setSpeed = (speed) => {
      currentSpeed.value = Math.max(1, Math.min(200, speed))
    }

    const setDirection = (direction) => {
      if (['left', 'right', 'up', 'down'].includes(direction)) {
        currentDirection.value = direction
      }
    }

    // 监听动画完成事件
    const handleAnimationEnd = () => {
      if (!props.loop) {
        emit('complete')
      }
    }

    onMounted(() => {
      if (marqueeRef.value) {
        marqueeRef.value.addEventListener('animationend', handleAnimationEnd)
      }
      
      if (props.autoStart) {
        emit('start')
      }
    })

    onBeforeUnmount(() => {
      if (marqueeRef.value) {
        marqueeRef.value.removeEventListener('animationend', handleAnimationEnd)
      }
      
      if (animationId.value) {
        cancelAnimationFrame(animationId.value)
      }
    })

    // 暴露方法给父组件
    return {
      marqueeRef,
      isPaused,
      currentDirection,
      currentSpeed,
      isHovered,
      containerStyle,
      contentStyle,
      paused,
      handleMouseEnter,
      handleMouseLeave,
      togglePause,
      toggleDirection,
      toggleSpeed,
      start,
      pause,
      resume,
      setSpeed,
      setDirection
    }
  }
}
</script> 