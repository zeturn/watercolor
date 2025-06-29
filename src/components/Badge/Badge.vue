<template>
  <span
    :class="badgeClasses"
  >
    <slot v-if="!dot" />
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { getBadgeClasses, validVariants, validSizes } from './utils.js'
import './style.css'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => validVariants.includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => validSizes.includes(value)
  },
  dot: {
    type: Boolean,
    default: false
  }
})

const badgeClasses = computed(() =>
  getBadgeClasses({
    variant: props.variant,
    size: props.size,
    dot: props.dot,
    className: ''
  })
)
</script>

<style scoped>
</style> 