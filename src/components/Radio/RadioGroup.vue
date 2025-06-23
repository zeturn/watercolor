<template>
  <div class="wc-radio-group">
    <label
      v-if="label"
      class="wc-radio-group-label"
    >
      {{ label }}
      <span
        v-if="required"
        class="text-error-500"
      >*</span>
    </label>
    
    <div :class="radioGroupClasses">
      <slot />
    </div>
    
    <div
      v-if="error || helperText"
      class="mt-2"
    >
      <p
        v-if="error"
        class="text-sm text-error-500"
      >
        {{ error }}
      </p>
      <p
        v-else-if="helperText"
        class="text-sm text-neutral-500"
      >
        {{ helperText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'
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
    classes.push('flex flex-wrap gap-4')
  } else {
    classes.push('space-y-2')
  }
  
  return classes
})

// Provide context to child Radio components
provide('radioGroupContext', {
  modelValue: props.modelValue,
  name: props.name,
  disabled: props.disabled,
  size: props.size,
  color: props.color,
  updateValue: (value) => {
    emit('update:modelValue', value)
    emit('change', value)
  }
})
</script>

 