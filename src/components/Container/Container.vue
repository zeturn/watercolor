<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  maxWidth: {
    type: String,
    default: 'lg',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', false].includes(value)
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  }
})

const containerClasses = computed(() => {
  const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8'
  
  if (props.fluid) {
    return [baseClasses, 'w-full']
  }
  
  if (props.fixed) {
    return [baseClasses, 'w-full']
  }
  
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl'
  }
  
  return [
    baseClasses,
    maxWidthClasses[props.maxWidth] || maxWidthClasses.lg
  ]
})
</script> 