<template>
  <tbody :class="tableBodyClasses">
    <slot />
  </tbody>
</template>

<script setup>
import { computed, inject } from 'vue'
import './style.css'

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

 