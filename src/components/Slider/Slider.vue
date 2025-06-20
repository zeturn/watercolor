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
  color: var(--wc-neutral-700);
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
  background-color: var(--wc-neutral-300);
  border-radius: 2px;
}

.wc-slider__track-active {
  position: absolute;
  height: 4px;
  background-color: var(--wc-primary-500);
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
}

.wc-slider__thumb-inner {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--wc-primary-500);
  border: 2px solid var(--wc-neutral-0);
}

.wc-slider__value {
  text-align: center;
  font-size: 0.875rem;
  color: var(--wc-neutral-700);
}
</style> 