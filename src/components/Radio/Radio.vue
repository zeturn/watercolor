<template>
  <label :class="containerClasses">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :class="radioClasses"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span :class="radioButtonClasses">
      <span v-if="isChecked" class="radio-dot"></span>
    </span>
    <span v-if="$slots.default || label" class="radio-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { ref, computed, inject } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  value: {
    type: [String, Number, Boolean],
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
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

// RadioGroup context
const radioGroup = inject('radioGroup', null)

const focused = ref(false)

const isChecked = computed(() => {
  if (radioGroup) {
    return radioGroup.modelValue.value === props.value
  }
  return props.modelValue === props.value
})

const computedName = computed(() => {
  if (radioGroup) {
    return radioGroup.name.value
  }
  return props.name
})

const computedDisabled = computed(() => {
  if (radioGroup) {
    return radioGroup.disabled.value || props.disabled
  }
  return props.disabled
})

const containerClasses = computed(() => {
  const classes = ['wc-radio']
  
  classes.push(`wc-radio--${props.size}`)
  
  if (computedDisabled.value) {
    classes.push('wc-radio--disabled')
  }
  
  if (focused.value) {
    classes.push('wc-radio--focused')
  }
  
  return classes
})

const radioClasses = computed(() => ['wc-radio__input'])

const radioButtonClasses = computed(() => {
  const classes = ['wc-radio__button']
  
  classes.push(`wc-radio__button--${props.color}`)
  classes.push(`wc-radio__button--${props.size}`)
  
  if (isChecked.value) {
    classes.push('wc-radio__button--checked')
  }
  
  return classes
})

const handleChange = (event) => {
  if (computedDisabled.value) return
  
  const value = props.value
  
  if (radioGroup) {
    radioGroup.updateValue(value)
  } else {
    emit('update:modelValue', value)
  }
  
  emit('change', value)
}

const handleFocus = () => {
  focused.value = true
}

const handleBlur = () => {
  focused.value = false
}
</script>

<style scoped>
.wc-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: var(--wc-font-family);
  position: relative;
  user-select: none;
}

.wc-radio--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.wc-radio--sm {
  font-size: 14px;
}

.wc-radio--md {
  font-size: 16px;
}

.wc-radio--lg {
  font-size: 18px;
}

.wc-radio__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.wc-radio__button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  background: #ffffff;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.wc-radio__button--sm {
  width: 16px;
  height: 16px;
}

.wc-radio__button--md {
  width: 20px;
  height: 20px;
}

.wc-radio__button--lg {
  width: 24px;
  height: 24px;
}

/* Color Variants */
.wc-radio__button--primary.wc-radio__button--checked {
  border-color: #3b82f6;
  background: #3b82f6;
}

.wc-radio__button--secondary.wc-radio__button--checked {
  border-color: #6b7280;
  background: #6b7280;
}

.wc-radio__button--success.wc-radio__button--checked {
  border-color: #10b981;
  background: #10b981;
}

.wc-radio__button--error.wc-radio__button--checked {
  border-color: #ef4444;
  background: #ef4444;
}

.wc-radio__button--warning.wc-radio__button--checked {
  border-color: #f59e0b;
  background: #f59e0b;
}

.wc-radio__button--info.wc-radio__button--checked {
  border-color: #06b6d4;
  background: #06b6d4;
}

/* Hover Effects */
.wc-radio:hover .wc-radio__button--primary {
  border-color: #3b82f6;
}

.wc-radio:hover .wc-radio__button--secondary {
  border-color: #6b7280;
}

.wc-radio:hover .wc-radio__button--success {
  border-color: #10b981;
}

.wc-radio:hover .wc-radio__button--error {
  border-color: #ef4444;
}

.wc-radio:hover .wc-radio__button--warning {
  border-color: #f59e0b;
}

.wc-radio:hover .wc-radio__button--info {
  border-color: #06b6d4;
}

/* Focus Ring */
.wc-radio--focused .wc-radio__button--primary {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.wc-radio--focused .wc-radio__button--secondary {
  box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.2);
}

.wc-radio--focused .wc-radio__button--success {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

.wc-radio--focused .wc-radio__button--error {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.wc-radio--focused .wc-radio__button--warning {
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}

.wc-radio--focused .wc-radio__button--info {
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
}

/* Radio Dot */
.radio-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  display: block;
}

.wc-radio__button--sm .radio-dot {
  width: 6px;
  height: 6px;
}

.wc-radio__button--lg .radio-dot {
  width: 10px;
  height: 10px;
}

/* Label */
.radio-label {
  margin-left: 8px;
  color: #374151;
  line-height: 1.5;
}

.wc-radio--disabled .radio-label {
  color: #9ca3af;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .wc-radio__button {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .radio-label {
    color: #d1d5db;
  }
  
  .wc-radio--disabled .radio-label {
    color: #6b7280;
  }
}
</style> 