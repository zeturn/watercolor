<template>
  <p
    :id="id"
    class="form-helper-text"
    :class="helperTextClasses"
    :aria-live="effectiveError ? 'polite' : undefined"
  >
    <slot />
  </p>
</template>

<script setup>
import { computed, inject } from 'vue'
import './style.css'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  filled: {
    type: Boolean,
    default: false
  },
  focused: {
    type: Boolean,
    default: false
  },
  margin: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'dense', 'none'].includes(value)
  },
  required: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['standard', 'outlined', 'filled'].includes(value)
  },
  id: {
    type: String,
    default: undefined
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const formControlContext = inject('formControlContext', null)
const effectiveError = computed(() => props.error || formControlContext?.error)
const effectiveDisabled = computed(() => props.disabled || formControlContext?.disabled)

const helperTextClasses = computed(() => {
  const classes = []
  
  // Size variants
  if (props.size === 'sm') {
    classes.push('form-helper-text--size-sm')
  } else if (props.size === 'lg') {
    classes.push('form-helper-text--size-lg')
  }
  
  // Margin
  if (props.margin === 'dense') {
    classes.push('form-helper-text--margin-dense')
  } else if (props.margin === 'normal') {
    classes.push('form-helper-text--margin-normal')
  }
  
  // States
  if (effectiveError.value) {
    classes.push('form-helper-text--error')
  } else if (effectiveDisabled.value) {
    classes.push('form-helper-text--disabled')
  }
  
  if (props.focused) {
    classes.push('form-helper-text--focused')
  }
  
  return classes
})
</script>
