<template>
  <!-- card 形态 -->
  <Card
    v-if="isCard"
    variant="filled"
    :color="props.color"
    :size="props.size"
    :interactive="props.interactive"
    :noBorder="props.noBorder"
    :class="props.className"
  >
    <p class="quote-text">
      <slot />
    </p>
    <footer v-if="cite" class="quote-cite">— {{ cite }}</footer>
  </Card>

  <!-- 普通形态 -->
  <blockquote v-else :class="blockquoteClasses">
    <p class="quote-text">
      <slot />
    </p>
    <footer v-if="cite" class="quote-cite">— {{ cite }}</footer>
  </blockquote>
</template>

<script setup>
import { computed } from 'vue'
import Card from '../Card/Card.vue'
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

const isCard = computed(() => props.variant === 'card')

const blockquoteClasses = computed(() =>
  isCard.value
    ? 'wc-blockquote' // card 形态下只需基础类，具体样式交给 Card
    : getBlockquoteClasses(props.className, props.variant, props.noBorder, props.interactive, props.size, props.color)
)
</script> 