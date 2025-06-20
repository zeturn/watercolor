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

const component = computed(() => {
  if (props.component) {
    return props.component
  }
  
  const componentMap = {
    h1: 'h1',
    h2: 'h2', 
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
    button: 'span'
  }
  
  return componentMap[props.variant] || 'p'
})

const typographyClasses = computed(() => {
  const classes = []
  
  // Variant styles
  const variantMap = {
    h1: 'text-6xl font-light tracking-tight',
    h2: 'text-5xl font-light tracking-tight',
    h3: 'text-4xl font-normal',
    h4: 'text-3xl font-normal',
    h5: 'text-2xl font-normal',
    h6: 'text-xl font-medium',
    subtitle1: 'text-base font-normal',
    subtitle2: 'text-sm font-medium',
    body1: 'text-base font-normal',
    body2: 'text-sm font-normal',
    caption: 'text-xs font-normal',
    overline: 'text-xs font-medium uppercase tracking-wide',
    button: 'text-sm font-medium uppercase tracking-wide'
  }
  classes.push(variantMap[props.variant])
  
  // Color styles
  const colorMap = {
    inherit: 'text-inherit',
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-neutral-600 dark:text-neutral-400',
    success: 'text-success-600 dark:text-success-400',
    warning: 'text-warning-600 dark:text-warning-400',
    error: 'text-error-600 dark:text-error-400',
    textPrimary: 'text-neutral-900 dark:text-neutral-100',
    textSecondary: 'text-neutral-600 dark:text-neutral-400',
    textDisabled: 'text-neutral-400 dark:text-neutral-600'
  }
  classes.push(colorMap[props.color])
  
  // Text alignment
  if (props.align !== 'inherit') {
    const alignMap = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    }
    classes.push(alignMap[props.align])
  }
  
  // Gutter bottom
  if (props.gutterBottom) {
    classes.push('mb-4')
  }
  
  // No wrap
  if (props.noWrap) {
    classes.push('truncate')
  }
  
  return classes
})

const typographyStyles = computed(() => {
  const styles = {}
  
  // Line height adjustments for better readability
  const lineHeightMap = {
    h1: '1.2',
    h2: '1.2',
    h3: '1.3',
    h4: '1.3',
    h5: '1.4',
    h6: '1.4',
    subtitle1: '1.5',
    subtitle2: '1.5',
    body1: '1.6',
    body2: '1.6',
    caption: '1.4',
    overline: '1.4',
    button: '1.4'
  }
  
  styles.lineHeight = lineHeightMap[props.variant]
  
  return styles
})
</script> 