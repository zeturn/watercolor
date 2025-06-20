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
  const baseClasses = 'transition-all duration-250 bg-[var(--wc-neutral-0)] dark:bg-[var(--wc-neutral-800)]'
  
  const classes = [baseClasses]
  
  // Border radius
  if (!props.square) {
    classes.push('rounded-lg')
  }
  
  // Variant styles
  if (props.variant === 'outlined') {
    classes.push('border border-[var(--wc-neutral-200)] dark:border-[var(--wc-neutral-700)]')
  } else {
    // 扁平化设计：移除阴影，仅在 elevation > 0 时使用浅色描边
    if (props.elevation > 0) {
      classes.push('border border-[var(--wc-neutral-200)] dark:border-[var(--wc-neutral-700)]')
    }
  }
  
  return classes
})
</script> 