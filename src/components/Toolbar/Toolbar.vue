<template>
  <div :class="toolbarClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getToolbarClasses } from './utils.js'
import './style.css'

const props = defineProps({
  variant: {
    type: String,
    default: 'regular',
    validator: (value) => ['regular', 'dense'].includes(value)
  },
  disableGutters: {
    type: Boolean,
    default: false
  }
})

const toolbarClasses = computed(() => {
  return getToolbarClasses(props.variant, props.disableGutters)
})
</script> 