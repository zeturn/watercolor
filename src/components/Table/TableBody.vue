<template>
  <tbody :class="tableBodyClasses">
    <slot />
  </tbody>
</template>

<script setup>
import { computed, inject } from 'vue'

const tableContext = inject('tableContext', {
  size: 'md',
  dense: false,
  hover: false,
  striped: false
})

const tableBodyClasses = computed(() => {
  const classes = ['wc-table-body']
  return classes
})
</script>

<style scoped>
.wc-table-body {
  background-color: #ffffff;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .wc-table-body {
    background-color: #111827;
  }
}
</style> 