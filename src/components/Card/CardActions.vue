<template>
  <div :class="cardActionsClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import './style.css'

const props = defineProps({
  disableSpacing: {
    type: Boolean,
    default: false
  },
  disablePadding: {
    type: Boolean,
    default: false
  },
  justifyContent: {
    type: String,
    default: 'flex-start',
    validator: (value) => ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'].includes(value)
  }
})

const cardActionsClasses = computed(() => {
  const baseClasses = 'wc-card-actions wc-flex wc-items-center'
  const classes = [baseClasses]
  
  // Padding
  if (!props.disablePadding) {
    classes.push('wc-padding-2')
  }
  
  // Spacing between children
  if (!props.disableSpacing) {
    classes.push('wc-gap-2')
  }
  
  // Justify content
  const justifyMap = {
    'flex-start': 'wc-justify-start',
    'center': 'wc-justify-center',
    'flex-end': 'wc-justify-end',
    'space-between': 'wc-justify-between',
    'space-around': 'wc-justify-around'
  }
  classes.push(justifyMap[props.justifyContent])
  
  return classes
})
</script> 