<template>
  <blockquote :class="blockquoteClasses">
    <p class="quote-text">
      <slot>这里是引用内容</slot>
    </p>
    <footer
      v-if="cite"
      class="quote-cite"
    >
      — {{ cite }}
    </footer>
  </blockquote>
</template>

<script setup>
import { computed } from 'vue'
import { getBlockquoteClasses } from './utils.js'
import './style.css'

const props = defineProps({
  cite: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'minimal', 'card'].includes(value)
  },
  noBorder: {
    type: Boolean,
    default: true
  },
  interactive: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'warning', 'error', 'info'].includes(value)
  }
})

const blockquoteClasses = computed(() => 
  getBlockquoteClasses(props.className, props.variant, props.noBorder, props.interactive, props.size, props.color)
)
</script> 