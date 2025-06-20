<template>
  <component 
    :is="component" 
    :class="boxClasses"
    :style="computedStyles"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  component: {
    type: String,
    default: 'div'
  },
  // Spacing props
  p: [String, Number],
  pt: [String, Number],
  pr: [String, Number],
  pb: [String, Number],
  pl: [String, Number],
  px: [String, Number],
  py: [String, Number],
  m: [String, Number],
  mt: [String, Number],
  mr: [String, Number],
  mb: [String, Number],
  ml: [String, Number],
  mx: [String, Number],
  my: [String, Number],
  // Display
  display: String,
  // Flexbox
  flexDirection: String,
  justifyContent: String,
  alignItems: String,
  flexWrap: String,
  gap: [String, Number],
  // Colors
  bgcolor: String,
  color: String,
  // Border
  border: [String, Number],
  borderRadius: [String, Number],
  // Width and Height
  width: [String, Number],
  height: [String, Number],
  minWidth: [String, Number],
  minHeight: [String, Number],
  maxWidth: [String, Number],
  maxHeight: [String, Number],
})

const boxClasses = computed(() => {
  const classes = []
  
  // Display classes
  if (props.display) {
    const displayMap = {
      'flex': 'flex',
      'block': 'block',
      'inline': 'inline',
      'inline-block': 'inline-block',
      'none': 'hidden',
      'grid': 'grid'
    }
    classes.push(displayMap[props.display])
  }
  
  // Flexbox classes
  if (props.flexDirection) {
    const directionMap = {
      'row': 'flex-row',
      'column': 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse'
    }
    classes.push(directionMap[props.flexDirection])
  }
  
  if (props.justifyContent) {
    const justifyMap = {
      'flex-start': 'justify-start',
      'center': 'justify-center',
      'flex-end': 'justify-end',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly'
    }
    classes.push(justifyMap[props.justifyContent])
  }
  
  if (props.alignItems) {
    const alignMap = {
      'flex-start': 'items-start',
      'center': 'items-center',
      'flex-end': 'items-end',
      'stretch': 'items-stretch',
      'baseline': 'items-baseline'
    }
    classes.push(alignMap[props.alignItems])
  }
  
  if (props.flexWrap) {
    const wrapMap = {
      'wrap': 'flex-wrap',
      'nowrap': 'flex-nowrap',
      'wrap-reverse': 'flex-wrap-reverse'
    }
    classes.push(wrapMap[props.flexWrap])
  }
  
  // Gap classes
  if (props.gap) {
    const gapValue = props.gap.toString()
    if (['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'].includes(gapValue)) {
      classes.push(`gap-${gapValue}`)
    }
  }
  
  return classes
})

const computedStyles = computed(() => {
  const styles = {}
  
  // Spacing
  const spacingMap = { 0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem', 20: '5rem', 24: '6rem' }
  
  if (props.p !== undefined) styles.padding = spacingMap[props.p] || `${props.p}px`
  if (props.pt !== undefined) styles.paddingTop = spacingMap[props.pt] || `${props.pt}px`
  if (props.pr !== undefined) styles.paddingRight = spacingMap[props.pr] || `${props.pr}px`
  if (props.pb !== undefined) styles.paddingBottom = spacingMap[props.pb] || `${props.pb}px`
  if (props.pl !== undefined) styles.paddingLeft = spacingMap[props.pl] || `${props.pl}px`
  if (props.px !== undefined) {
    const value = spacingMap[props.px] || `${props.px}px`
    styles.paddingLeft = value
    styles.paddingRight = value
  }
  if (props.py !== undefined) {
    const value = spacingMap[props.py] || `${props.py}px`
    styles.paddingTop = value
    styles.paddingBottom = value
  }
  
  if (props.m !== undefined) styles.margin = spacingMap[props.m] || `${props.m}px`
  if (props.mt !== undefined) styles.marginTop = spacingMap[props.mt] || `${props.mt}px`
  if (props.mr !== undefined) styles.marginRight = spacingMap[props.mr] || `${props.mr}px`
  if (props.mb !== undefined) styles.marginBottom = spacingMap[props.mb] || `${props.mb}px`
  if (props.ml !== undefined) styles.marginLeft = spacingMap[props.ml] || `${props.ml}px`
  if (props.mx !== undefined) {
    const value = spacingMap[props.mx] || `${props.mx}px`
    styles.marginLeft = value
    styles.marginRight = value
  }
  if (props.my !== undefined) {
    const value = spacingMap[props.my] || `${props.my}px`
    styles.marginTop = value
    styles.marginBottom = value
  }
  
  // Colors
  if (props.bgcolor) styles.backgroundColor = props.bgcolor
  if (props.color) styles.color = props.color
  
  // Border
  if (props.border) styles.border = props.border
  if (props.borderRadius) styles.borderRadius = typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius
  
  // Dimensions
  if (props.width) styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  if (props.height) styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  if (props.minWidth) styles.minWidth = typeof props.minWidth === 'number' ? `${props.minWidth}px` : props.minWidth
  if (props.minHeight) styles.minHeight = typeof props.minHeight === 'number' ? `${props.minHeight}px` : props.minHeight
  if (props.maxWidth) styles.maxWidth = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  if (props.maxHeight) styles.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight
  
  return styles
})
</script> 