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
    >
    <span :class="checkmarkClasses">
      <svg
        v-if="isChecked && !indeterminate"
        class="checkmark-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
      >
        <polyline points="20,6 9,17 4,12" />
      </svg>
      <div
        v-else-if="indeterminate"
        class="indeterminate-icon"
      />
    </span>
    <span
      v-if="$slots.default || label"
      class="checkbox-label"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { ref, computed } from 'vue'
import './style.css'

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