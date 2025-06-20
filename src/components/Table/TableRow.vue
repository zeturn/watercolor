<template>
  <tr :class="tableRowClasses" @click="handleClick">
    <slot />
  </tr>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  hover: {
    type: Boolean,
    default: undefined
  },
  selected: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const tableContext = inject('tableContext', {
  size: 'md',
  dense: false,
  hover: false,
  striped: false
})

const tableRowClasses = computed(() => {
  const classes = ['wc-table-row']
  
  // Hover effect
  const shouldHover = props.hover !== undefined ? props.hover : tableContext.hover
  if (shouldHover || props.clickable) {
    classes.push('wc-table-row--hover')
  }
  
  if (props.selected) {
    classes.push('wc-table-row--selected')
  }
  
  if (props.clickable) {
    classes.push('wc-table-row--clickable')
  }
  
  return classes
})

const handleClick = (event) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<style scoped>
.wc-table-row {
  border-bottom: 1px solid var(--wc-neutral-200);
  transition: background-color 0.2s ease;
}

.wc-table-row--hover:hover {
  background-color: var(--wc-neutral-50);
}

.wc-table-row--selected {
  background-color: var(--wc-primary-100);
}

.wc-table-row--clickable {
  cursor: pointer;
}

.wc-table-row--clickable:active {
  background-color: var(--wc-neutral-100);
}

/* Dark mode */
.dark .wc-table-row { border-bottom-color: var(--wc-neutral-700); }
.dark .wc-table-row--hover:hover { background-color: var(--wc-neutral-700); }
.dark .wc-table-row--selected { background-color: var(--wc-primary-700); }
.dark .wc-table-row--clickable:active { background-color: var(--wc-neutral-700); }
</style> 