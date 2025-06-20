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
  background-color: var(--wc-neutral-50);
  border-bottom: 2px solid var(--wc-neutral-200);
}

.wc-table-head--sticky {
  position: sticky;
  top: 0;
  z-index: 10;
}

.dark .wc-table-head {
  background-color: var(--wc-neutral-700);
  border-bottom-color: var(--wc-neutral-600);
}
</style> 