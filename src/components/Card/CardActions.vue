<template>
  <div :class="cardActionsClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import './style.css'
const props = defineProps({
  disableSpacing: {
    type: Boolean,
    default: false
  },
  disablePadding: {
    type: Boolean,
    default: false
  },
  justifyContent: {
    type: String,
    default: 'flex-start',
    validator: (value) => ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'].includes(value)
  }
})

const cardActionsClasses = computed(() => {
  const baseClasses = 'wc-card-actions flex items-center'
  const classes = [baseClasses]
  
  // Padding
  if (!props.disablePadding) {
    classes.push('p-2')
  }
  
  // Spacing between children
  if (!props.disableSpacing) {
    classes.push('gap-2')
  }
  
  // Justify content
  const justifyMap = {
    'flex-start': 'justify-start',
    'center': 'justify-center',
    'flex-end': 'justify-end',
    'space-between': 'justify-between',
    'space-around': 'justify-around'
  }
  classes.push(justifyMap[props.justifyContent])
  
  return classes
})
</script>

<style scoped>
.wc-card-actions {
  border-top: 1px solid transparent;
}

.wc-card-actions:not(:first-child) {
  @apply border-t border-neutral-200 dark:border-neutral-700;
}

/* Button spacing override for direct button children */
.wc-card-actions :deep(.wc-btn:not(:first-child)) {
  margin-left: 8px;
}
</style> 