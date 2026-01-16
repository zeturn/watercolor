<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  container: {
    type: Boolean,
    default: false
  },
  item: {
    type: Boolean,
    default: false
  },
  xs: [Number, String],
  sm: [Number, String],
  md: [Number, String],
  lg: [Number, String],
  xl: [Number, String],
  spacing: {
    type: [Number, String],
    default: 0
  },
  direction: {
    type: String,
    default: 'row',
    validator: (value) => ['row', 'column', 'row-reverse', 'column-reverse'].includes(value)
  },
  justifyContent: {
    type: String,
    default: 'flex-start',
    validator: (value) => ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].includes(value)
  },
  alignItems: {
    type: String,
    default: 'stretch',
    validator: (value) => ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'].includes(value)
  }
})

const gridClasses = computed(() => {
  const classes = []
  
  if (props.container) {
    classes.push('flex', 'flex-wrap')
    
    // Direction
    const directionMap = {
      'row': 'flex-row',
      'column': 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse'
    }
    classes.push(directionMap[props.direction])
    
    // Justify Content
    const justifyMap = {
      'flex-start': 'justify-start',
      'center': 'justify-center',
      'flex-end': 'justify-end',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly'
    }
    classes.push(justifyMap[props.justifyContent])
    
    // Align Items
    const alignMap = {
      'flex-start': 'items-start',
      'center': 'items-center',
      'flex-end': 'items-end',
      'stretch': 'items-stretch',
      'baseline': 'items-baseline'
    }
    classes.push(alignMap[props.alignItems])
    
    // Spacing
    if (props.spacing > 0) {
      const spacingValue = props.spacing.toString()
      if (['1', '2', '3', '4', '5', '6', '8', '10', '12'].includes(spacingValue)) {
        classes.push(`gap-${spacingValue}`)
      } else {
        classes.push(`gap-${Math.floor(props.spacing / 4)}`)
      }
    }
  }
  
  if (props.item) {
    classes.push('flex-shrink-0')
    
    // Responsive width classes
    const breakpoints = { xs: '', sm: 'sm:', md: 'md:', lg: 'lg:', xl: 'xl:' }
    
    Object.entries(breakpoints).forEach(([breakpoint, prefix]) => {
      const value = props[breakpoint]
      if (value !== undefined) {
        if (value === 'auto') {
          classes.push(`${prefix}flex-auto`)
        } else if (value === true) {
          classes.push(`${prefix}flex-1`)
        } else {
          const width = Math.round((value / 12) * 100)
          classes.push(`${prefix}w-${width === 100 ? 'full' : width === 50 ? '1/2' : width === 25 ? '1/4' : width === 75 ? '3/4' : `[${width}%]`}`)
        }
      }
    })
  }
  
  return classes
})
</script> 