<template>
  <div :class="cardContentClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import './style.css'

const props = defineProps({
  disablePadding: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'dense', 'normal', 'comfortable'].includes(value)
  }
})

const cardContentClasses = computed(() => {
  const baseClasses = 'wc-card-content'
  const classes = [baseClasses]
  
  if (!props.disablePadding) {
    const paddingMap = {
      'none': '',
      'dense': 'wc-padding-dense',
      'normal': 'wc-padding-normal',
      'comfortable': 'wc-padding-comfortable'
    }
    classes.push(paddingMap[props.padding])
  }
  
  return classes
})
</script> 