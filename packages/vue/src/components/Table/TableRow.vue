<template>
  <tr
    :class="tableRowClasses"
    @click="handleClick"
  >
    <slot />
  </tr>
</template>

<script setup>
import { computed, inject } from 'vue'
import './style.css'

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

 