<template>
  <div :class="cardClasses">
    <div v-if="title || $slots.header" class="wc-card-header">
      <slot name="header">
        <h3 v-if="title" class="wc-card__title">
          {{ title }}
        </h3>
      </slot>
    </div>
    
    <div class="wc-card-content">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="wc-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { isValidVariant, isValidPadding, getVueCardClasses } from './utils.js'
import './style.css'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: isValidVariant
  },
  padding: {
    type: String,
    default: 'md',
    validator: isValidPadding
  }
})

const cardClasses = computed(() => getVueCardClasses(props))
</script> 