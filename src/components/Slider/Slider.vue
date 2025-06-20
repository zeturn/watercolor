<template>
  <div class="wc-slider">
    <div v-if="label" class="wc-slider__label">
      {{ label }}
    </div>
    
    <div 
      ref="sliderTrack"
      class="wc-slider__track"
      @click="handleTrackClick"
    >
      <div class="wc-slider__rail"></div>
      <div 
        class="wc-slider__track-active"
        :style="{ width: percentage + '%' }"
      ></div>
      <div 
        class="wc-slider__thumb"
        :style="{ left: percentage + '%' }"
        :tabindex="disabled ? -1 : 0"
        @keydown="handleKeyDown"
        @mousedown="handleThumbMouseDown"
        role="slider"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="modelValue"
      >
        <div class="wc-slider__thumb-inner"></div>
      </div>
    </div>
    
    <div v-if="valueLabelDisplay !== 'off'" class="wc-slider__value">
      {{ modelValue }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  valueLabelDisplay: {
    type: String,
    default: 'off'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const sliderTrack = ref(null)
const isDragging = ref(false)

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

const updateValue = (newValue) => {
  if (props.disabled) return
  
  // 步长对齐
  const steppedValue = Math.round(newValue / props.step) * props.step
  const clampedValue = Math.min(Math.max(steppedValue, props.min), props.max)
  
  emit('update:modelValue', clampedValue)
  emit('change', clampedValue)
}

const getValueFromPosition = (clientX) => {
  const rect = sliderTrack.value.getBoundingClientRect()
  const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  return props.min + percentage * (props.max - props.min)
}

const handleTrackClick = (event) => {
  if (props.disabled || isDragging.value) return
  
  const newValue = getValueFromPosition(event.clientX)
  updateValue(newValue)
}

const handleThumbMouseDown = (event) => {
  if (props.disabled) return
  
  event.preventDefault()
  event.stopPropagation()
  isDragging.value = true
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.body.style.userSelect = 'none'
}

const handleMouseMove = (event) => {
  if (!isDragging.value || props.disabled) return
  
  const newValue = getValueFromPosition(event.clientX)
  updateValue(newValue)
}

const handleMouseUp = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  document.body.style.userSelect = ''
}

const handleKeyDown = (event) => {
  if (props.disabled) return
  
  let newValue = props.modelValue
  
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowUp':
      newValue += props.step
      break
    case 'ArrowLeft':
    case 'ArrowDown':
      newValue -= props.step
      break
    case 'Home':
      newValue = props.min
      break
    case 'End':
      newValue = props.max
      break
    default:
      return
  }
  
  event.preventDefault()
  updateValue(newValue)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  document.body.style.userSelect = ''
})
</script>

<style scoped>
.wc-slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wc-slider__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.wc-slider__track {
  position: relative;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.wc-slider__rail {
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #d1d5db;
  border-radius: 2px;
}

.wc-slider__track-active {
  position: absolute;
  height: 4px;
  background-color: #3b82f6;
  border-radius: 2px;
}

.wc-slider__thumb {
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  cursor: grab;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;
}

.wc-slider__thumb:hover {
  box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.1);
}

.wc-slider__thumb:focus {
  box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.2);
}

.wc-slider__thumb:active {
  cursor: grabbing;
  box-shadow: 0 0 0 12px rgba(59, 130, 246, 0.2);
}

.wc-slider__thumb-inner {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #3b82f6;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.wc-slider__thumb:hover .wc-slider__thumb-inner {
  transform: scale(1.1);
}

.wc-slider__thumb:active .wc-slider__thumb-inner {
  transform: scale(1.2);
}

.wc-slider__value {
  text-align: center;
  font-size: 0.875rem;
  color: #374151;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .wc-slider__label {
    color: #d1d5db;
  }
  
  .wc-slider__rail {
    background-color: #4b5563;
  }
  
  .wc-slider__track-active {
    background-color: #60a5fa;
  }
  
  .wc-slider__thumb-inner {
    background-color: #60a5fa;
  }
  
  .wc-slider__value {
    color: #d1d5db;
  }
}
</style> 