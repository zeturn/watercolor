<template>
  <div :class="appBarClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  position: {
    type: String,
    default: 'fixed',
    validator: (value) => ['fixed', 'absolute', 'sticky', 'static', 'relative'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'transparent', 'inherit'].includes(value)
  },
  elevation: {
    type: Number,
    default: 4,
    validator: (value) => value >= 0 && value <= 24
  },
  variant: {
    type: String,
    default: 'elevation',
    validator: (value) => ['elevation', 'outlined'].includes(value)
  }
})

const appBarClasses = computed(() => {
  const baseClasses = 'w-full transition-all duration-250 z-50'
  const classes = [baseClasses]
  
  // Position classes
  const positionMap = {
    'fixed': 'fixed top-0 left-0 right-0',
    'absolute': 'absolute top-0 left-0 right-0',
    'sticky': 'sticky top-0',
    'static': 'static',
    'relative': 'relative'
  }
  classes.push(positionMap[props.position])
  
  // Color classes
  const colorMap = {
    'primary': 'bg-primary-500 text-white',
    'secondary': 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100',
    'transparent': 'bg-transparent',
    'inherit': 'bg-inherit text-inherit'
  }
  classes.push(colorMap[props.color])
  
  // Elevation/variant
  if (props.variant === 'outlined') {
    classes.push('border-b border-neutral-200 dark:border-neutral-700')
  } else {
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
    const shadow = shadowMap[props.elevation] || shadowMap[4]
    classes.push(shadow)
  }
  
  return classes
})
</script> 