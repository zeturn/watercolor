<template>
  <span
    :class="statusClasses"
    :title="statusText"
    :aria-label="statusText"
  >
    <span v-if="showText" class="wc-status__text">{{ statusText }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { getStatusClasses, getStatusText, isValidSize, isValidStatus } from './utils.js'
import './style.css'

const props = defineProps({
  status: {
    type: String,
    default: 'default',
    validator: isValidStatus
  },
  size: {
    type: String,
    default: 'md',
    validator: isValidSize
  },
  showText: {
    type: Boolean,
    default: false
  },
  animated: {
    type: Boolean,
    default: false
  },
  animationType: {
    type: String,
    default: 'auto'
  }
})

const statusClasses = computed(() => getStatusClasses(props))
const statusText = computed(() => getStatusText(props.status))
</script>
