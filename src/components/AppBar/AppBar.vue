<template>
  <div :class="appBarClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getAppBarClasses } from './utils.js'
import './style.css'

const props = defineProps({
  position: {
    type: String,
    default: 'fixed',
    validator: (value) => ['fixed', 'absolute', 'sticky', 'static', 'relative'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'transparent', 'inherit'].includes(value)
  },
  elevation: {
    type: Number,
    default: 4,
    validator: (value) => value >= 0 && value <= 24
  },
  variant: {
    type: String,
    default: 'elevation',
    validator: (value) => ['elevation', 'outlined'].includes(value)
  }
})

const appBarClasses = computed(() => {
  return getAppBarClasses(props.position, props.color, props.elevation, props.variant)
})
</script> 