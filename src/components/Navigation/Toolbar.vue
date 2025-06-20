<template>
  <div :class="toolbarClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'regular',
    validator: (value) => ['regular', 'dense'].includes(value)
  },
  disableGutters: {
    type: Boolean,
    default: false
  }
})

const toolbarClasses = computed(() => {
  const baseClasses = 'flex items-center w-full'
  const classes = [baseClasses]
  
  // Height variants
  if (props.variant === 'dense') {
    classes.push('min-h-12 py-2')
  } else {
    classes.push('min-h-16 py-3')
  }
  
  // Gutters (horizontal padding)
  if (!props.disableGutters) {
    classes.push('px-4 sm:px-6 lg:px-8')
  }
  
  return classes
})
</script> 