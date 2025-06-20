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
  background-color: var(--wc-neutral-0);
}

.dark .wc-table-body {
  background-color: var(--wc-neutral-800);
}
</style> 