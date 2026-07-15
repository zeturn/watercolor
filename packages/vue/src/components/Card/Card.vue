<template>
  <div
    :class="cardClasses"
    :role="attrs.onClick ? 'button' : undefined"
    :tabindex="attrs.onClick ? 0 : undefined"
    @keydown="handleKeydown"
  >
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
import { computed, useAttrs } from 'vue'
import { getCardClasses } from './utils.js'
import { validVariants, validColors, validSizes } from './utils.js'
import './style.css'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'minimal',
    validator: (value) => validVariants.includes(value)
  },
  color: {
    type: String,
    default: 'default',
    validator: (value) => validColors.includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => validSizes.includes(value)
  },
  interactive: {
    type: Boolean,
    default: false
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

const attrs = useAttrs()
const isInteractive = computed(() => props.interactive || Boolean(attrs.onClick))

const cardClasses = computed(() => 
  getCardClasses(props.className, props.variant, props.color, props.size, isInteractive.value, props.noBorder)
)

const handleKeydown = (event) => {
  if (!attrs.onClick || !['Enter', ' '].includes(event.key)) return
  event.preventDefault()
  attrs.onClick(event)
}
</script>
