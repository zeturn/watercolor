<template>
  <component
    :is="component"
    :class="paperClasses"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { getPaperClasses, validateElevation } from './utils.js'
import './style.css'

const props = defineProps({
  elevation: {
    type: [Number, String],
    default: 1,
    validator: (value) => Number(value) >= 0 && Number(value) <= 24
  },
  variant: {
    type: String,
    default: 'elevation',
    validator: (value) => ['elevation', 'outlined'].includes(value)
  },
  square: Boolean,
  rounded: Boolean,
  shape: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'default'
  },
  hoverable: Boolean,
  clickable: Boolean,
  gradient: Boolean,
  frosted: Boolean,
  textured: Boolean,
  component: {
    type: String,
    default: 'div'
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const paperClasses = computed(() => {
  const classes = getPaperClasses({
    ...props,
    elevation: validateElevation(props.elevation)
  }).split(' ')

  if (props.rounded) classes.push('wc-paper--rounded')
  return classes.filter(Boolean).join(' ')
})

const handleClick = (event) => {
  if (props.clickable) emit('click', event)
}

const handleKeydown = (event) => {
  if (!props.clickable || !['Enter', ' '].includes(event.key)) return
  event.preventDefault()
  emit('click', event)
}
</script>
