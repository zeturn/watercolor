<template>
  <div class="switch-wrapper">
    <label
      v-if="label"
      class="switch-label"
    >
      {{ label }}
      <span
        v-if="required"
        class="switch-required"
      >*</span>
    </label>
    
    <div class="switch-container">
      <button
        class="switch"
        :class="switchClasses"
        :disabled="disabled"
        type="button"
        role="switch"
        :aria-checked="modelValue"
        :aria-labelledby="labelId"
        @click="handleToggle"
      >
        <span class="switch__track" />
        <span
          class="switch__thumb"
          :class="thumbClasses"
        />
      </button>
      
      <span
        v-if="description"
        class="switch-description"
      >
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const instance = getCurrentInstance()
const labelId = `switch-label-${instance?.uid || Math.random().toString(36).substr(2, 9)}`

const switchClasses = computed(() => {
  const classes = []
  
  // Size
  if (props.size === 'sm') {
    classes.push('switch--size-sm')
  } else if (props.size === 'lg') {
    classes.push('switch--size-lg')
  }
  
  // Color
  if (props.modelValue) {
    classes.push('switch--checked')
    classes.push(`switch--color-${props.color}`)
  }
  
  // States
  if (props.disabled) {
    classes.push('switch--disabled')
  }
  
  return classes
})

const thumbClasses = computed(() => {
  const classes = []
  
  if (props.modelValue) {
    classes.push('switch__thumb--checked')
  }
  
  if (props.size === 'sm') {
    classes.push('switch__thumb--size-sm')
  } else if (props.size === 'lg') {
    classes.push('switch__thumb--size-lg')
  }
  
  return classes
})

const handleToggle = () => {
  if (props.disabled) return
  
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<style scoped>
.switch-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.switch-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  line-height: 1.5;
  margin: 0;
}

.dark .switch-label {
  color: #f3f4f6;
}

.switch-required {
  color: #ef4444;
  margin-left: 2px;
  font-weight: 500;
}

.switch-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 44px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: all 0.2s ease-in-out;
}

.switch:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 12px;
}

/* Track */
.switch__track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d1d5db;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  border: none;
}

.dark .switch__track {
  background-color: #4b5563;
  border-color: #6b7280;
}

/* Thumb */
.switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  border: none;
  z-index: 1;
}

.dark .switch__thumb {
  background-color: #f9fafb;
  border-color: #d1d5db;
}

/* Checked state */
.switch--checked .switch__track {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.switch__thumb--checked {
  transform: translateX(20px);
}

/* Size variants */
.switch--size-sm {
  width: 36px;
  height: 20px;
}

.switch--size-sm .switch__thumb {
  width: 16px;
  height: 16px;
  border-radius: 8px;
}

.switch--size-sm .switch__thumb--checked {
  transform: translateX(16px);
}

.switch--size-lg {
  width: 52px;
  height: 28px;
}

.switch--size-lg .switch__track {
  border-radius: 14px;
}

.switch--size-lg .switch__thumb {
  width: 24px;
  height: 24px;
  border-radius: 12px;
}

.switch--size-lg .switch__thumb--checked {
  transform: translateX(24px);
}

/* Color variants */
.switch--color-primary.switch--checked .switch__track {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.switch--color-success.switch--checked .switch__track {
  background-color: #10b981;
  border-color: #10b981;
}

.switch--color-warning.switch--checked .switch__track {
  background-color: #f59e0b;
  border-color: #f59e0b;
}

.switch--color-error.switch--checked .switch__track {
  background-color: #ef4444;
  border-color: #ef4444;
}

.switch--color-purple.switch--checked .switch__track {
  background-color: #8b5cf6;
  border-color: #8b5cf6;
}

.switch--color-orange.switch--checked .switch__track {
  background-color: #f97316;
  border-color: #f97316;
}

.switch--color-cyan.switch--checked .switch__track {
  background-color: #06b6d4;
  border-color: #06b6d4;
}

.switch--color-pink.switch--checked .switch__track {
  background-color: #ec4899;
  border-color: #ec4899;
}

/* Disabled state */
.switch--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.switch--disabled .switch__track {
  background-color: #f3f4f6;
  border-color: #e5e7eb;
}

.dark .switch--disabled .switch__track {
  background-color: #374151;
  border-color: #4b5563;
}

.switch--disabled .switch__thumb {
  background-color: #e5e7eb;
  border-color: #d1d5db;
}

.dark .switch--disabled .switch__thumb {
  background-color: #6b7280;
  border-color: #4b5563;
}

/* Description */
.switch-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.4;
}

.dark .switch-description {
  color: #9ca3af;
}

/* Hover states */
.switch:hover:not(.switch--disabled) .switch__track {
  border-color: #9ca3af;
}

.switch--checked:hover:not(.switch--disabled) .switch__track {
  opacity: 0.9;
}

.switch:hover:not(.switch--disabled) .switch__thumb {
  border-color: #9ca3af;
}

/* Active states */
.switch:active:not(.switch--disabled) .switch__thumb {
  transform: scale(0.95);
}

.switch--checked:active:not(.switch--disabled) .switch__thumb--checked {
  transform: translateX(20px) scale(0.95);
}

.switch--size-sm.switch--checked:active:not(.switch--disabled) .switch__thumb--checked {
  transform: translateX(16px) scale(0.95);
}

.switch--size-lg.switch--checked:active:not(.switch--disabled) .switch__thumb--checked {
  transform: translateX(24px) scale(0.95);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .switch,
  .switch__track,
  .switch__thumb {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .switch__track {
    border-width: 2px;
  }
  
  .switch__thumb {
    border-width: 2px;
  }
}
</style> 