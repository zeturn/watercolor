<template>
  <component 
    :is="component" 
    :class="tableCellClasses"
    :style="tableCellStyles"
    :scope="isHeader ? scope : undefined"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed, inject } from 'vue'
import './style.css'

const props = defineProps({
  component: {
    type: String,
    default: 'td'
  },
  align: {
    type: String,
    default: 'inherit',
    validator: (value) => ['inherit', 'left', 'center', 'right', 'justify'].includes(value)
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'checkbox', 'none'].includes(value)
  },
  size: {
    type: String,
    default: undefined,
    validator: (value) => !value || ['small', 'medium'].includes(value)
  },
  sortDirection: {
    type: [String, Boolean],
    default: false,
    validator: (value) => [false, 'asc', 'desc'].includes(value)
  },
  variant: {
    type: String,
    default: 'body',
    validator: (value) => ['head', 'body', 'footer'].includes(value)
  },
  scope: {
    type: String,
    default: undefined
  }
})

const tableContext = inject('tableContext', {
  size: 'md',
  dense: false
})

const isHeader = computed(() => props.component === 'th' || props.variant === 'head')

const tableCellClasses = computed(() => {
  const classes = ['wc-table-cell']
  
  // Variant
  classes.push(`wc-table-cell--${props.variant}`)
  
  // Size
  const cellSize = props.size || (tableContext.dense ? 'small' : 'medium')
  classes.push(`wc-table-cell--${cellSize}`)
  
  // Padding
  classes.push(`wc-table-cell--padding-${props.padding}`)
  
  // Alignment
  if (props.align !== 'inherit') {
    classes.push(`wc-table-cell--align-${props.align}`)
  }
  
  // Sort indicator
  if (props.sortDirection) {
    classes.push('wc-table-cell--sortable')
    classes.push(`wc-table-cell--sort-${props.sortDirection}`)
  }
  
  return classes
})

const tableCellStyles = computed(() => {
  const styles = {}
  return styles
})
</script>

 