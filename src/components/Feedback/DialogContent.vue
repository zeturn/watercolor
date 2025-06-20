<template>
  <div :class="dialogContentClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  dividers: {
    type: Boolean,
    default: false
  },
  disablePadding: {
    type: Boolean,
    default: false
  }
})

const dialogContentClasses = computed(() => {
  const baseClasses = 'wc-dialog-content flex-1 overflow-y-auto'
  const classes = [baseClasses]
  
  if (!props.disablePadding) {
    classes.push('px-6 py-4')
  }
  
  if (props.dividers) {
    classes.push('border-t border-b border-neutral-200 dark:border-neutral-700')
  }
  
  return classes
})
</script>

<style scoped>
.wc-dialog-content {
  color: theme('colors.neutral.700');
  line-height: 1.6;
}

.dark .wc-dialog-content {
  color: theme('colors.neutral.300');
}

/* Scrollbar styling */
.wc-dialog-content::-webkit-scrollbar {
  width: 6px;
}

.wc-dialog-content::-webkit-scrollbar-track {
  background: theme('colors.neutral.100');
}

.dark .wc-dialog-content::-webkit-scrollbar-track {
  background: theme('colors.neutral.800');
}

.wc-dialog-content::-webkit-scrollbar-thumb {
  background: theme('colors.neutral.300');
  border-radius: 3px;
}

.dark .wc-dialog-content::-webkit-scrollbar-thumb {
  background: theme('colors.neutral.600');
}
</style> 