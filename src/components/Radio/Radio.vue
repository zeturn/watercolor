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

<style>
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
  border: 2px solid var(--wc-neutral-300);
  border-radius: 50%;
  background: var(--wc-neutral-0);
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
  border-color: var(--wc-primary-500);
  background: var(--wc-primary-500);
}

.wc-radio__button--secondary.wc-radio__button--checked {
  border-color: var(--wc-secondary-500);
  background: var(--wc-secondary-500);
}

.wc-radio__button--success.wc-radio__button--checked {
  border-color: var(--wc-success-500);
  background: var(--wc-success-500);
}

.wc-radio__button--error.wc-radio__button--checked {
  border-color: var(--wc-error-500);
  background: var(--wc-error-500);
}

.wc-radio__button--warning.wc-radio__button--checked {
  border-color: var(--wc-warning-500);
  background: var(--wc-warning-500);
}

.wc-radio__button--info.wc-radio__button--checked {
  border-color: var(--wc-info-500);
  background: var(--wc-info-500);
}

/* Hover Effects */
.wc-radio:hover .wc-radio__button--primary {
  border-color: var(--wc-primary-500);
}

.wc-radio:hover .wc-radio__button--secondary {
  border-color: var(--wc-secondary-500);
}

.wc-radio:hover .wc-radio__button--success {
  border-color: var(--wc-success-500);
}

.wc-radio:hover .wc-radio__button--error {
  border-color: var(--wc-error-500);
}

.wc-radio:hover .wc-radio__button--warning {
  border-color: var(--wc-warning-500);
}

.wc-radio:hover .wc-radio__button--info {
  border-color: var(--wc-info-500);
}

/* Focus Ring */
.wc-radio--focused .wc-radio__button--primary {
  outline: 2px solid var(--wc-primary-200);
}

.wc-radio--focused .wc-radio__button--secondary {
  outline: 2px solid var(--wc-secondary-200);
}

.wc-radio--focused .wc-radio__button--success {
  outline: 2px solid var(--wc-success-200);
}

.wc-radio--focused .wc-radio__button--error {
  outline: 2px solid var(--wc-error-200);
}

.wc-radio--focused .wc-radio__button--warning {
  outline: 2px solid var(--wc-warning-200);
}

.wc-radio--focused .wc-radio__button--info {
  outline: 2px solid var(--wc-info-200);
}

/* Radio Dot */
.radio-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--wc-neutral-0);
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
  color: var(--wc-neutral-900);
  line-height: 1.5;
}

.wc-radio--disabled .radio-label {
  color: var(--wc-neutral-400);
}

/* Dark mode */
.dark .wc-radio__button {
  background: var(--wc-neutral-800);
  border-color: var(--wc-neutral-600);
}

.dark .radio-label {
  color: var(--wc-neutral-100);
}

.dark .wc-radio--disabled .radio-label {
  color: var(--wc-neutral-500);
}
</style> 