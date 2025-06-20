<template>
  <label :class="containerClasses">
    <input
      type="checkbox"
      :checked="isChecked"
      :disabled="disabled"
      :class="checkboxClasses"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span :class="checkmarkClasses">
      <svg
        v-if="isChecked && !indeterminate"
        class="checkmark-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
      >
        <polyline points="20,6 9,17 4,12"></polyline>
      </svg>
      <div
        v-else-if="indeterminate"
        class="indeterminate-icon"
      ></div>
    </span>
    <span v-if="$slots.default || label" class="checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Boolean, Array],
    default: false
  },
  value: {
    type: [String, Number, Boolean],
    default: true
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'error', 'warning', 'info'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const focused = ref(false)

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value)
  }
  return !!props.modelValue
})

const containerClasses = computed(() => {
  const classes = ['wc-checkbox']
  
  classes.push(`wc-checkbox--${props.size}`)
  
  if (props.disabled) {
    classes.push('wc-checkbox--disabled')
  }
  
  if (focused.value) {
    classes.push('wc-checkbox--focused')
  }
  
  return classes
})

const checkboxClasses = computed(() => ['wc-checkbox__input'])

const checkmarkClasses = computed(() => {
  const classes = ['wc-checkbox__checkmark']
  
  classes.push(`wc-checkbox__checkmark--${props.color}`)
  classes.push(`wc-checkbox__checkmark--${props.size}`)
  
  if (isChecked.value || props.indeterminate) {
    classes.push('wc-checkbox__checkmark--checked')
  }
  
  if (props.indeterminate) {
    classes.push('wc-checkbox__checkmark--indeterminate')
  }
  
  return classes
})

const handleChange = (event) => {
  if (props.disabled) return
  
  const checked = event.target.checked
  
  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue]
    if (checked) {
      if (!newValue.includes(props.value)) {
        newValue.push(props.value)
      }
    } else {
      const index = newValue.indexOf(props.value)
      if (index > -1) {
        newValue.splice(index, 1)
      }
    }
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', checked)
  }
  
  emit('change', checked)
}

const handleFocus = () => {
  focused.value = true
}

const handleBlur = () => {
  focused.value = false
}
</script>

<style scoped>
.wc-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: var(--wc-font-family);
  position: relative;
  user-select: none;
}

.wc-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.wc-checkbox--sm {
  font-size: 14px;
}

.wc-checkbox--md {
  font-size: 16px;
}

.wc-checkbox--lg {
  font-size: 18px;
}

.wc-checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.wc-checkbox__checkmark {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background: #ffffff;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.wc-checkbox__checkmark--sm {
  width: 16px;
  height: 16px;
}

.wc-checkbox__checkmark--md {
  width: 20px;
  height: 20px;
}

.wc-checkbox__checkmark--lg {
  width: 24px;
  height: 24px;
}

/* Color Variants */
.wc-checkbox__checkmark--primary.wc-checkbox__checkmark--checked {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.wc-checkbox__checkmark--secondary.wc-checkbox__checkmark--checked {
  background: #6b7280;
  border-color: #6b7280;
  color: white;
}

.wc-checkbox__checkmark--success.wc-checkbox__checkmark--checked {
  background: #10b981;
  border-color: #10b981;
  color: white;
}

.wc-checkbox__checkmark--error.wc-checkbox__checkmark--checked {
  background: #ef4444;
  border-color: #ef4444;
  color: white;
}

.wc-checkbox__checkmark--warning.wc-checkbox__checkmark--checked {
  background: #f59e0b;
  border-color: #f59e0b;
  color: white;
}

.wc-checkbox__checkmark--info.wc-checkbox__checkmark--checked {
  background: #06b6d4;
  border-color: #06b6d4;
  color: white;
}

/* Hover Effects */
.wc-checkbox:hover .wc-checkbox__checkmark--primary {
  border-color: #3b82f6;
}

.wc-checkbox:hover .wc-checkbox__checkmark--secondary {
  border-color: #6b7280;
}

.wc-checkbox:hover .wc-checkbox__checkmark--success {
  border-color: #10b981;
}

.wc-checkbox:hover .wc-checkbox__checkmark--error {
  border-color: #ef4444;
}

.wc-checkbox:hover .wc-checkbox__checkmark--warning {
  border-color: #f59e0b;
}

.wc-checkbox:hover .wc-checkbox__checkmark--info {
  border-color: #06b6d4;
}

/* Focus Ring */
.wc-checkbox--focused .wc-checkbox__checkmark--primary {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.wc-checkbox--focused .wc-checkbox__checkmark--secondary {
  box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.2);
}

.wc-checkbox--focused .wc-checkbox__checkmark--success {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

.wc-checkbox--focused .wc-checkbox__checkmark--error {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.wc-checkbox--focused .wc-checkbox__checkmark--warning {
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}

.wc-checkbox--focused .wc-checkbox__checkmark--info {
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
}

.checkmark-icon {
  width: 12px;
  height: 12px;
}

.wc-checkbox__checkmark--sm .checkmark-icon {
  width: 10px;
  height: 10px;
}

.wc-checkbox__checkmark--lg .checkmark-icon {
  width: 14px;
  height: 14px;
}

.indeterminate-icon {
  width: 8px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
}

.wc-checkbox__checkmark--sm .indeterminate-icon {
  width: 6px;
  height: 2px;
}

.wc-checkbox__checkmark--lg .indeterminate-icon {
  width: 10px;
  height: 2px;
}

.checkbox-label {
  margin-left: 8px;
  color: #374151;
  line-height: 1.5;
}

.wc-checkbox--disabled .checkbox-label {
  color: #9ca3af;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .wc-checkbox__checkmark {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .checkbox-label {
    color: #d1d5db;
  }
  
  .wc-checkbox--disabled .checkbox-label {
    color: #6b7280;
  }
}
</style> 