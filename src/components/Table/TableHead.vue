<template>
  <thead :class="tableHeadClasses">
    <slot />
  </thead>
</template>

<script setup>
import { computed, inject } from 'vue'

const tableContext = inject('tableContext', {
  size: 'md',
  dense: false,
  hover: false,
  striped: false,
  stickyHeader: false
})

const tableHeadClasses = computed(() => {
  const classes = ['wc-table-head']
  
  if (tableContext.stickyHeader) {
    classes.push('wc-table-head--sticky')
  }
  
  return classes
})
</script>

<style scoped>
.wc-table-head {
  background-color: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
}

.wc-table-head--sticky {
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .wc-table-head {
    background-color: #1f2937;
    border-bottom-color: #4b5563;
  }
}
</style> 