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
      'dense': 'p-3',
      'normal': 'p-4',
      'comfortable': 'p-6'
    }
    classes.push(paddingMap[props.padding])
  }
  
  return classes
})
</script>

<style scoped>
.wc-card-content {
  @apply block;
}

.wc-card-content:not(:first-child) {
  @apply pt-0;
}

.wc-card-content:not(:last-child) {
  @apply pb-0;
}
</style> 