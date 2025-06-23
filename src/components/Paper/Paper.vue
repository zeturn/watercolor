<template>
  <component :is="component" :class="paperClasses">
    <slot />
  </component>
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
  },
  rounded: {
    type: Boolean,
    default: false
  },
  component: {
    type: String,
    default: 'div'
  }
})

const paperClasses = computed(() => {
  const baseClasses = 'wc-paper transition-all duration-250 bg-[var(--wc-neutral-0)] dark:bg-[var(--wc-neutral-800)]'
  
  const classes = [baseClasses]
  
  // Variant styles
  if (props.variant === 'outlined') {
    classes.push('wc-paper--outlined')
    classes.push('border border-[var(--wc-neutral-200)] dark:border-[var(--wc-neutral-700)]')
  } else {
    // Elevation styles
    if (props.elevation > 0) {
      classes.push(`wc-paper--elevation-${props.elevation}`)
      classes.push('border border-[var(--wc-neutral-200)] dark:border-[var(--wc-neutral-700)]')
    }
  }
  
  // Border radius
  if (props.rounded) {
    classes.push('wc-paper--rounded')
  }
  
  if (!props.square && !props.rounded) {
    classes.push('rounded-lg')
  }
  
  return classes
})
</script> 