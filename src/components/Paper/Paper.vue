<template>
  <div :class="paperClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  elevation: {
    type: Number,
    default: 1,
    validator: (value) => value >= 0 && value <= 24
  },
  variant: {
    type: String,
    default: 'elevation',
    validator: (value) => ['elevation', 'outlined'].includes(value)
  },
  square: {
    type: Boolean,
    default: false
  }
})

const paperClasses = computed(() => {
  const baseClasses = 'bg-white dark:bg-neutral-800 transition-all duration-250'
  
  const classes = [baseClasses]
  
  // Border radius
  if (!props.square) {
    classes.push('rounded-lg')
  }
  
  // Variant styles
  if (props.variant === 'outlined') {
    classes.push('border border-neutral-200 dark:border-neutral-700')
  } else {
    // Elevation shadows
    const shadowMap = {
      0: 'shadow-none',
      1: 'shadow-sm',
      2: 'shadow',
      3: 'shadow-md',
      4: 'shadow-lg',
      6: 'shadow-xl',
      8: 'shadow-2xl',
      12: 'shadow-2xl',
      16: 'shadow-2xl',
      24: 'shadow-2xl'
    }
    
    const shadow = shadowMap[props.elevation] || shadowMap[1]
    classes.push(shadow)
  }
  
  return classes
})
</script> 