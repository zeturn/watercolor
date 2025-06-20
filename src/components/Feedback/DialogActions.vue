<template>
  <div :class="dialogActionsClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  disableSpacing: {
    type: Boolean,
    default: false
  },
  disablePadding: {
    type: Boolean,
    default: false
  }
})

const dialogActionsClasses = computed(() => {
  const baseClasses = 'wc-dialog-actions flex justify-end items-center flex-shrink-0'
  const classes = [baseClasses]
  
  if (!props.disablePadding) {
    classes.push('px-6 py-4')
  }
  
  if (!props.disableSpacing) {
    classes.push('gap-2')
  }
  
  return classes
})
</script>

<style scoped>
.wc-dialog-actions {
  border-top: 1px solid theme('colors.neutral.200');
}

.dark .wc-dialog-actions {
  border-top-color: theme('colors.neutral.700');
}

/* Button margins for legacy support */
.wc-dialog-actions :deep(.wc-btn:not(:first-child)) {
  margin-left: 8px;
}
</style> 