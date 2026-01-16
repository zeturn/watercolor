<template>
  <component
    :is="children ? 'div' : 'hr'"
    :class="[dividerClasses, { 'wc-divider--with-text': children }]"
  >
    <span v-if="children" class="wc-divider__text">
      <slot />
    </span>
  </component>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import { getDividerClasses, validVariants, validOrientations } from './utils.js'
import './style.css'

const props = defineProps({
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => validVariants.includes(value)
  },
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (value) => validOrientations.includes(value)
  },
  flexItem: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()
const children = computed(() => !!slots.default)

const dividerClasses = computed(() =>
  getDividerClasses({
    variant: props.variant,
    orientation: props.orientation,
    flexItem: props.flexItem,
    className: ''
  })
)
</script>

<style scoped>
</style>
