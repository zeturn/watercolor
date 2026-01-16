<template>
  <component 
    :is="component" 
    :class="typographyClasses"
    :style="typographyStyles"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { getComponent, buildTypographyClasses, lineHeightMap } from './utils'
import './style.css'

const props = defineProps({
  variant: {
    type: String,
    default: 'body1',
    validator: (value) => [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'subtitle1', 'subtitle2',
      'body1', 'body2',
      'caption', 'overline',
      'button'
    ].includes(value)
  },
  component: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'inherit',
    validator: (value) => [
      'inherit', 'primary', 'secondary', 'success', 'warning', 'error',
      'textPrimary', 'textSecondary', 'textDisabled'
    ].includes(value)
  },
  align: {
    type: String,
    default: 'inherit',
    validator: (value) => ['inherit', 'left', 'center', 'right', 'justify'].includes(value)
  },
  gutterBottom: {
    type: Boolean,
    default: false
  },
  noWrap: {
    type: Boolean,
    default: false
  }
})

const component = computed(() => getComponent(props.variant, props.component))

const typographyClasses = computed(() => 
  buildTypographyClasses(
    props.variant, 
    props.color, 
    props.align, 
    props.gutterBottom, 
    props.noWrap
  )
)

const typographyStyles = computed(() => ({
  lineHeight: lineHeightMap[props.variant]
}))
</script> 