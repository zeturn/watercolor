<template>
  <ul :class="listClasses" role="list">
    <slot />
  </ul>
</template>

<script setup>
import { computed, provide } from 'vue'

const props = defineProps({
  dense: {
    type: Boolean,
    default: false
  },
  disablePadding: {
    type: Boolean,
    default: false
  },
  subheader: {
    type: String,
    default: ''
  }
})

const listClasses = computed(() => {
  const baseClasses = 'w-full'
  const classes = [baseClasses]
  
  if (!props.disablePadding) {
    classes.push('py-2')
  }
  
  return classes
})

// Provide context to child ListItem components
provide('listContext', {
  dense: props.dense
})
</script> 