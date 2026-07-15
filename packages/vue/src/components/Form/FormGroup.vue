<template>
  <div
    class="form-group"
    :class="formGroupClasses"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import './style.css'

const props = defineProps({
  row: {
    type: Boolean,
    default: false
  },
  spacing: {
    type: String,
    default: 'normal',
    validator: (value) => ['compact', 'normal', 'comfortable'].includes(value)
  }
})

const formGroupClasses = computed(() => {
  const classes = []
  
  if (props.row) {
    classes.push('form-group--row')
  }
  
  if (props.spacing === 'compact') {
    classes.push('form-group--spacing-compact')
  } else if (props.spacing === 'comfortable') {
    classes.push('form-group--spacing-comfortable')
  }
  
  return classes
})
</script>
