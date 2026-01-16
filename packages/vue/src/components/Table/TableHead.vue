<template>
  <thead :class="tableHeadClasses">
    <slot />
  </thead>
</template>

<script setup>
import { computed, inject } from 'vue'
import './style.css'

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

 