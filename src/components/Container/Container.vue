<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { isValidMaxWidth, getContainerClasses } from './utils.js'
import './style.css'

const props = defineProps({
  maxWidth: {
    type: String,
    default: 'lg',
    validator: isValidMaxWidth
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  }
})

const containerClasses = computed(() => 
  getContainerClasses(props).join(' ')
)
</script> 