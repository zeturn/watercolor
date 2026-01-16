<template>
  <div :class="tableContainerClasses">
    <table :class="tableClasses">
      <slot />
    </table>
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'
import './style.css'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  stickyHeader: {
    type: Boolean,
    default: false
  },
  dense: {
    type: Boolean,
    default: false
  },
  hover: {
    type: Boolean,
    default: false
  },
  striped: {
    type: Boolean,
    default: false
  }
})

const tableContainerClasses = computed(() => {
  const classes = ['wc-table-container']
  
  if (props.stickyHeader) {
    classes.push('wc-table-container--sticky')
  }
  
  return classes
})

const tableClasses = computed(() => {
  const classes = ['wc-table']
  
  classes.push(`wc-table--${props.size}`)
  
  if (props.hover) {
    classes.push('wc-table--hover')
  }
  
  if (props.striped) {
    classes.push('wc-table--striped')
  }
  
  if (props.dense) {
    classes.push('wc-table--dense')
  }
  
  return classes
})

// Provide context to child components
provide('tableContext', {
  size: props.size,
  dense: props.dense,
  hover: props.hover,
  striped: props.striped,
  stickyHeader: props.stickyHeader
})
</script>

 