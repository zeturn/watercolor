<template>
  <div :class="cardClasses">
    <div v-if="title || $slots.header" class="wc-card-header mb-4">
      <slot name="header">
        <h3 v-if="title" class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {{ title }}
        </h3>
      </slot>
    </div>
    
    <div class="wc-card-content">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="wc-card-footer mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'elevated'].includes(value)
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
  }
})

const cardClasses = computed(() => {
  const baseClasses = 'wc-card'
  
  const variantClasses = {
    default: '',
    elevated: 'shadow-hover'
  }
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return [
    baseClasses,
    variantClasses[props.variant],
    paddingClasses[props.padding]
  ]
})
</script> 