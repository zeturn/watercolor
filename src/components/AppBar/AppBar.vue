<template>
  <div :class="appBarClasses" :style="style">
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
    validator: (v) => ['fixed', 'absolute', 'sticky', 'static', 'relative'].includes(v)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'transparent', 'inherit'].includes(v)
  },
  elevation: {
    type: Number,
    default: 4,
  },
  variant: {
    type: String,
    default: 'elevation',
    validator: (v) => ['elevation', 'outlined'].includes(v)
  },
  class: {
    type: [String, Array, Object],
    default: ''
  },
  style: {
    type: [String, Object],
    default: () => ({})
  }
})

function normalizeClasses(classes) {
  if (!classes) return ''
  if (typeof classes === 'string') return classes
  if (Array.isArray(classes)) return classes.filter(Boolean).join(' ')
  if (typeof classes === 'object') {
    return Object.entries(classes).filter(([, v]) => v).map(([k]) => k).join(' ')
  }
  return ''
}

const appBarClasses = computed(() => {
  const extra = normalizeClasses(props.class)
  return `${getAppBarClasses(props.position, props.color, props.elevation, props.variant, extra)} flex items-center`
})
</script>

<style src="./style.css"></style> 