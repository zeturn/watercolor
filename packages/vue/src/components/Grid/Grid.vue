<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatGridProps, getGridClasses } from './utils.js'
import './style.css'

const props = defineProps({
  container: {
    type: Boolean,
    default: false
  },
  item: {
    type: Boolean,
    default: false
  },
  xs: [Number, String, Boolean],
  sm: [Number, String, Boolean],
  md: [Number, String, Boolean],
  lg: [Number, String, Boolean],
  xl: [Number, String, Boolean],
  spacing: {
    type: [Number, String],
    default: 0
  },
  direction: {
    type: String,
    default: 'row',
    validator: (value) => ['row', 'column', 'row-reverse', 'column-reverse'].includes(value)
  },
  justifyContent: {
    type: String,
    default: 'flex-start',
    validator: (value) => ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].includes(value)
  },
  alignItems: {
    type: String,
    default: 'stretch',
    validator: (value) => ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'].includes(value)
  }
})

const gridClasses = computed(() => {
  return getGridClasses(formatGridProps(props))
})
</script>
