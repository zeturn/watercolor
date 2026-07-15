<template>
  <div class="wc-radio-group">
    <label
      v-if="label"
      class="wc-radio-group-label"
    >
      {{ label }}
      <span
        v-if="required"
        class="wc-radio-group__required"
      >*</span>
    </label>
    
    <div :class="radioGroupClasses">
      <slot />
    </div>
    
    <div
      v-if="error || helperText"
      class="wc-radio-group__message"
    >
      <p
        v-if="error"
        class="wc-radio-group__error"
      >
        {{ error }}
      </p>
      <p
        v-else-if="helperText"
        class="wc-radio-group__helper"
      >
        {{ helperText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, provide, toRefs } from 'vue'
import './style.css'

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  row: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  helperText: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'warning', 'error'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const radioGroupClasses = computed(() => {
  const baseClasses = 'wc-radio-group-content'
  const classes = [baseClasses]
  
  if (props.row) {
    classes.push('wc-radio-group-content--row')
  }
  
  return classes
})

// Provide context to child Radio components
const { modelValue, name, disabled, size, color } = toRefs(props)

provide('radioGroup', {
  modelValue,
  name,
  disabled,
  size,
  color,
  updateValue: (value) => {
    emit('update:modelValue', value)
    emit('change', value)
  }
})
</script>
