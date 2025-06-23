<template>
  <div :class="cardClasses">
    <div
      v-if="title || $slots.header"
      class="wc-card-header"
    >
      <slot name="header">
        <h3
          v-if="title"
          class="wc-card__title"
        >
          {{ title }}
        </h3>
      </slot>
    </div>
    
    <div class="wc-card-content">
      <slot />
    </div>
    
    <div
      v-if="$slots.footer"
      class="wc-card-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getCardClasses } from './utils.js'
import './style.css'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outlined', 'minimal', 'elevated'].includes(value)
  },
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'warning', 'error', 'info'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  interactive: {
    type: Boolean,
    default: true
  },
  noBorder: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
})

const cardClasses = computed(() => 
  getCardClasses(props.className, props.variant, props.color, props.size, props.interactive, props.noBorder)
)
</script> 