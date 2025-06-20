<template>
  <div :class="listItemIconClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const listContext = inject('listContext', {
  dense: false,
  disablePadding: false
})

const listItemIconClasses = computed(() => {
  const baseClasses = 'wc-list-item-icon inline-flex items-center justify-center flex-shrink-0'
  const classes = [baseClasses]
  
  // Size based on density
  if (listContext.dense) {
    classes.push('w-4 h-4 mr-4 text-base')
  } else {
    classes.push('w-5 h-5 mr-4 text-lg')
  }
  
  // Color
  classes.push('text-neutral-600')
  classes.push('dark:text-neutral-400')
  
  return classes
})
</script>

<style scoped>
.wc-list-item-icon {
  min-width: auto;
}

.wc-list-item-icon :deep(svg),
.wc-list-item-icon :deep(img) {
  width: 1em;
  height: 1em;
}
</style> 