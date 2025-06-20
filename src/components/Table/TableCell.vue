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

<style scoped>
.wc-table-cell {
  border-bottom: 1px solid #e5e7eb;
  vertical-align: inherit;
  color: #111827;
  line-height: 1.43;
}

/* Alignment */
.wc-table-cell--align-left {
  text-align: left;
}

.wc-table-cell--align-center {
  text-align: center;
}

.wc-table-cell--align-right {
  text-align: right;
}

.wc-table-cell--align-justify {
  text-align: justify;
}

/* Variants */
.wc-table-cell--head {
  font-weight: 600;
  color: #374151;
  line-height: 1.5;
  background-color: #f9fafb;
}

.wc-table-cell--body {
  font-weight: 400;
}

.wc-table-cell--footer {
  font-weight: 500;
  border-bottom: none;
}

/* Sizes */
.wc-table-cell--small {
  padding: 6px 16px;
  font-size: 0.875rem;
}

.wc-table-cell--medium {
  padding: 16px;
  font-size: 0.875rem;
}

/* Padding variants */
.wc-table-cell--padding-normal {
  /* Default padding handled by size variants */
}

.wc-table-cell--padding-checkbox {
  padding-left: 12px;
  padding-right: 12px;
  width: 48px;
}

.wc-table-cell--padding-none {
  padding: 0;
}

/* Sortable cells */
.wc-table-cell--sortable {
  cursor: pointer;
  user-select: none;
  position: relative;
  padding-right: 32px;
}

.wc-table-cell--sortable:hover {
  color: #2563eb;
}

.wc-table-cell--sortable::after {
  content: '';
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  opacity: 0.3;
  border-bottom: 4px solid currentColor;
}

/* Sort indicators */
.wc-table-cell--sort-asc::after {
  border-bottom: 4px solid currentColor;
  border-top: none;
  opacity: 1;
}

.wc-table-cell--sort-desc::after {
  border-top: 4px solid currentColor;
  border-bottom: none;
  opacity: 1;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .wc-table-cell {
    border-bottom-color: #374151;
    color: #f9fafb;
  }
  
  .wc-table-cell--head {
    color: #d1d5db;
    background-color: #1f2937;
  }
  
  .wc-table-cell--sortable:hover {
    color: #60a5fa;
  }
}
</style> 