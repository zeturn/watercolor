<template>
  <div :class="toolbarClasses" :style="style">
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

/**
 * 将 Vue 中 class 的多种写法统一为字符串
 * @param {string|Array|Object} classes
 * @returns {string}
 */
function normalizeClasses(classes) {
  if (!classes) return ''
  if (typeof classes === 'string') return classes
  if (Array.isArray(classes)) return classes.filter(Boolean).join(' ')
  if (typeof classes === 'object') {
    return Object.entries(classes)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(' ')
  }
  return ''
}

const toolbarClasses = computed(() => {
  const extra = normalizeClasses(props.class)
  return getToolbarClasses(props.variant, props.disableGutters, extra)
})
</script>

<style src="./style.css"></style> 