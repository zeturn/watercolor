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
      default: 50,
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
      default: true
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

    const speeds = [25, 50, 100] // 慢、正常、快

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

<style scoped>
.marquee-container {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
}

/* 变体样式 */
.marquee-default {
  background: var(--color-gray-50, #f9fafb);
  border: 1px solid var(--color-border, #e5e7eb);
}

.marquee-outlined {
  background: transparent;
  border: 2px solid var(--color-primary, #3b82f6);
}

.marquee-filled {
  background: var(--color-primary, #3b82f6);
  color: white;
}

.marquee-gradient {
  background: linear-gradient(90deg, 
    var(--color-primary, #3b82f6), 
    var(--color-secondary, #8b5cf6));
  color: white;
}

/* 尺寸变体 */
.marquee-size-sm {
  min-height: 32px;
  font-size: 0.875rem;
  padding: 4px 8px;
}

.marquee-size-md {
  min-height: 40px;
  font-size: 1rem;
  padding: 8px 16px;
}

.marquee-size-lg {
  min-height: 48px;
  font-size: 1.125rem;
  padding: 12px 20px;
}

.marquee-size-xl {
  min-height: 56px;
  font-size: 1.25rem;
  padding: 16px 24px;
}

/* 方向样式 */
.marquee-direction-up,
.marquee-direction-down {
  flex-direction: column;
  white-space: normal;
  writing-mode: horizontal-tb;
}

.marquee-content {
  display: flex;
  align-items: center;
  min-width: 100%;
  height: 100%;
}

.marquee-direction-up .marquee-content,
.marquee-direction-down .marquee-content {
  flex-direction: column;
  min-width: auto;
  min-height: 100%;
}

.marquee-item {
  flex-shrink: 0;
  display: inline-block;
}

.marquee-direction-up .marquee-item,
.marquee-direction-down .marquee-item {
  display: block;
  width: 100%;
  text-align: center;
}

.marquee-clone {
  margin-left: 2rem;
}

.marquee-direction-up .marquee-clone,
.marquee-direction-down .marquee-clone {
  margin-left: 0;
  margin-top: 2rem;
}

/* 渐变遮罩 */
.marquee-gradient {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  pointer-events: none;
  z-index: 1;
}

.marquee-gradient-left {
  left: 0;
  background: linear-gradient(to right, 
    var(--marquee-bg, rgba(249, 250, 251, 1)) 0%, 
    transparent 100%);
}

.marquee-gradient-right {
  right: 0;
  background: linear-gradient(to left, 
    var(--marquee-bg, rgba(249, 250, 251, 1)) 0%, 
    transparent 100%);
}

.marquee-filled .marquee-gradient-left {
  background: linear-gradient(to right, 
    var(--color-primary, #3b82f6) 0%, 
    transparent 100%);
}

.marquee-filled .marquee-gradient-right {
  background: linear-gradient(to left, 
    var(--color-primary, #3b82f6) 0%, 
    transparent 100%);
}

/* 控制按钮 */
.marquee-controls {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
  z-index: 2;
}

.marquee-control-btn {
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-text, #111827);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  transition: all 0.2s ease;
  opacity: 0;
}

.marquee-container:hover .marquee-control-btn {
  opacity: 1;
}

.marquee-control-btn:hover {
  background: white;
  transform: scale(1.1);
}

/* 暂停状态 */
.marquee-paused .marquee-content {
  animation-play-state: paused !important;
}

/* 加载状态 */
.marquee-loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 3;
}

.marquee-loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-gray-300, #d1d5db);
  border-top: 2px solid var(--color-primary, #3b82f6);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.marquee-loading-text {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #6b7280);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 滚动动画 */
@keyframes marquee-scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-scroll-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes marquee-scroll-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes marquee-scroll-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

/* 响应式 */
@media (max-width: 640px) {
  .marquee-size-sm {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
  
  .marquee-size-md {
    font-size: 0.875rem;
    padding: 6px 12px;
  }
  
  .marquee-size-lg {
    font-size: 1rem;
    padding: 8px 16px;
  }
  
  .marquee-size-xl {
    font-size: 1.125rem;
    padding: 12px 20px;
  }
  
  .marquee-controls {
    position: static;
    margin-top: 8px;
    justify-content: center;
  }
  
  .marquee-control-btn {
    opacity: 1;
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .marquee-default {
    background: var(--color-dark-surface, #1f2937);
    border-color: var(--color-dark-border, #374151);
    color: var(--color-dark-text, #f9fafb);
  }
  
  .marquee-outlined {
    border-color: var(--color-primary, #3b82f6);
    color: var(--color-dark-text, #f9fafb);
  }
  
  .marquee-gradient-left {
    background: linear-gradient(to right, 
      var(--color-dark-surface, #1f2937) 0%, 
      transparent 100%);
  }
  
  .marquee-gradient-right {
    background: linear-gradient(to left, 
      var(--color-dark-surface, #1f2937) 0%, 
      transparent 100%);
  }
  
  .marquee-control-btn {
    background: rgba(31, 41, 55, 0.9);
    color: var(--color-dark-text, #f9fafb);
  }
  
  .marquee-control-btn:hover {
    background: var(--color-dark-surface, #1f2937);
  }
  
  .marquee-loading-overlay {
    background: rgba(31, 41, 55, 0.9);
  }
  
  .marquee-loading-text {
    color: var(--color-dark-text-secondary, #d1d5db);
  }
}

/* 无障碍 */
@media (prefers-reduced-motion: reduce) {
  .marquee-content {
    animation: none !important;
  }
  
  .marquee-container::before {
    content: "动画已禁用";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.75rem;
    color: var(--color-text-secondary, #6b7280);
    z-index: 2;
  }
}

/* 自定义属性 */
.marquee-container {
  --marquee-bg: var(--marquee-background, rgba(249, 250, 251, 1));
}

.marquee-filled {
  --marquee-bg: var(--color-primary, #3b82f6);
}

.marquee-gradient {
  --marquee-bg: linear-gradient(90deg, var(--color-primary, #3b82f6), var(--color-secondary, #8b5cf6));
}
</style>

<style>
/* 全局 Keyframes：防止被 scoped 哈希影响，保证 animation-name 可正确匹配 */
@keyframes marquee-scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-scroll-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes marquee-scroll-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes marquee-scroll-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style> 