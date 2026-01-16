<template>
  <component 
    :is="component" 
    :class="boxClasses"
    :style="computedStyles"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { getBoxClasses, getBoxStyles } from './utils.js'
import './style.css'

const props = defineProps({
  component: {
    type: String,
    default: 'div'
  },
  // Spacing props
  p: [String, Number],
  pt: [String, Number],
  pr: [String, Number],
  pb: [String, Number],
  pl: [String, Number],
  px: [String, Number],
  py: [String, Number],
  m: [String, Number],
  mt: [String, Number],
  mr: [String, Number],
  mb: [String, Number],
  ml: [String, Number],
  mx: [String, Number],
  my: [String, Number],
  // Display
  display: String,
  // Flexbox
  flexDirection: String,
  justifyContent: String,
  alignItems: String,
  flexWrap: String,
  gap: [String, Number],
  // Colors
  bgcolor: String,
  color: String,
  // Border
  border: [String, Number],
  borderRadius: [String, Number],
  // Width and Height
  width: [String, Number],
  height: [String, Number],
  minWidth: [String, Number],
  minHeight: [String, Number],
  maxWidth: [String, Number],
  maxHeight: [String, Number],
})

const boxClasses = computed(() => getBoxClasses(props))

const computedStyles = computed(() => getBoxStyles(props))
</script> 