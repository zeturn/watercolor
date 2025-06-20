<template>
  <div :class="tableContainerClasses">
    <table :class="tableClasses">
      <slot />
    </table>
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'

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

<style scoped>
.wc-table-container {
  overflow-x: auto;
  border: 1px solid var(--wc-neutral-200);
  border-radius: 8px;
  background-color: var(--wc-neutral-0);
}

.wc-table-container--sticky {
  max-height: 400px;
  overflow-y: auto;
}

.wc-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--wc-font-family);
}

/* Size variants */
.wc-table--sm { font-size: 12px; }
.wc-table--md { font-size: 14px; }
.wc-table--lg { font-size: 16px; }

/* Hover effect */
.wc-table--hover :deep(tbody tr:hover) {
  background-color: var(--wc-neutral-50);
}

/* Striped rows */
.wc-table--striped :deep(tbody tr:nth-child(even)) {
  background-color: var(--wc-neutral-100);
}

/* Dense table */
.wc-table--dense :deep(td),
.wc-table--dense :deep(th) {
  padding: 8px 12px;
}

/* Dark mode */
.dark .wc-table-container {
  border-color: var(--wc-neutral-700);
  background-color: var(--wc-neutral-800);
}

.dark .wc-table--hover :deep(tbody tr:hover) {
  background-color: var(--wc-neutral-700);
}

.dark .wc-table--striped :deep(tbody tr:nth-child(even)) {
  background-color: var(--wc-neutral-700);
}
</style> 