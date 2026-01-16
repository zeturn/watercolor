<template>
  <div
    class="form-control"
    :class="formControlClasses"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'outlined',
    validator: (value) => ['outlined', 'filled', 'standard'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  margin: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'dense', 'normal'].includes(value)
  }
})

const formControlClasses = computed(() => {
  const classes = []
  
  // Width
  if (props.fullWidth) {
    classes.push('form-control--full-width')
  }
  
  // Margin
  if (props.margin === 'dense') {
    classes.push('form-control--margin-dense')
  } else if (props.margin === 'normal') {
    classes.push('form-control--margin-normal')
  }
  
  // States
  if (props.disabled) {
    classes.push('form-control--disabled')
  }
  
  if (props.error) {
    classes.push('form-control--error')
  }
  
  return classes
})

// Provide context to child components
provide('formControlContext', {
  disabled: props.disabled,
  error: props.error,
  required: props.required,
  variant: props.variant,
  size: props.size
})
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  position: relative;
}

.form-control--full-width {
  width: 100%;
}

.form-control--margin-dense {
  margin-bottom: 8px;
}

.form-control--margin-normal {
  margin-bottom: 16px;
}

.form-control--disabled {
  opacity: 0.6;
  pointer-events: none;
}

.form-control--error {
  /* Error state will be handled by child components */
}
</style> 