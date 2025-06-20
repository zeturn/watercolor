<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    :style="buttonStyles"
    @click="handleClick"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span v-if="loading" class="wc-btn__loading">
      <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <span v-if="startIcon && !loading" class="wc-btn__start-icon">
      <slot name="startIcon">{{ startIcon }}</slot>
    </span>
    <span class="wc-btn__content" :class="{ 'opacity-0': loading }">
      <slot />
    </span>
    <span v-if="endIcon && !loading" class="wc-btn__end-icon">
      <slot name="endIcon">{{ endIcon }}</slot>
    </span>
  </button>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'filled', 'outlined', 'text', 'success', 'warning', 'error', 'info', 'purple', 'orange', 'cyan', 'pink'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: '_self'
  },
  startIcon: {
    type: String,
    default: null
  },
  endIcon: {
    type: String,
    default: null
  },
  rounded: {
    type: [Boolean, String],
    default: true,
    validator: (value) => typeof value === 'boolean' || ['none', 'sm', 'md', 'lg', 'full'].includes(value)
  },
  uppercase: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['click', 'mouseover', 'mouseout', 'focus', 'blur'])

const isHovered = ref(false)
const isFocused = ref(false)

const buttonClasses = computed(() => {
  const classes = ['wc-btn']
  
  // Variant classes
  classes.push(`wc-btn--${props.variant}`)
  
  // Size classes
  classes.push(`wc-btn--${props.size}`)
  
  // State classes
  if (props.disabled || props.loading) classes.push('wc-btn--disabled')
  if (props.loading) classes.push('wc-btn--loading')
  if (props.fullWidth) classes.push('wc-btn--full-width')
  if (props.uppercase) classes.push('wc-btn--uppercase')
  
  // Rounded classes
  if (props.rounded === false || props.rounded === 'none') {
    classes.push('wc-btn--rounded-none')
  } else if (typeof props.rounded === 'string') {
    classes.push(`wc-btn--rounded-${props.rounded}`)
  } else {
    classes.push('wc-btn--rounded')
  }
  
  return classes
})

const buttonStyles = computed(() => {
  const styles = {}
  
  // Use CSS variables for theming
  if (props.variant === 'primary') {
    styles.backgroundColor = 'var(--wc-primary-500)'
    styles.color = 'white'
  } else if (props.variant === 'secondary') {
    styles.backgroundColor = 'var(--wc-secondary-500)'
    styles.color = 'white'
  } else if (props.variant === 'outlined') {
    styles.backgroundColor = 'transparent'
    styles.color = 'var(--wc-primary-500)'
    styles.border = '1px solid var(--wc-primary-500)'
  } else if (props.variant === 'text') {
    styles.backgroundColor = 'transparent'
    styles.color = 'var(--wc-primary-500)'
  } else if (['success', 'warning', 'error', 'info'].includes(props.variant)) {
    styles.backgroundColor = `var(--wc-${props.variant}-500)`
    styles.color = 'white'
  }
  
  return styles
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    if (props.href) {
      window.open(props.href, props.target)
    }
    emit('click', event)
  }
}

const handleMouseOver = (event) => {
  isHovered.value = true
  emit('mouseover', event)
}

const handleMouseOut = (event) => {
  isHovered.value = false
  emit('mouseout', event)
}

const handleFocus = (event) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event) => {
  isFocused.value = false
  emit('blur', event)
}
</script>

<style scoped>
.wc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  font-family: var(--wc-font-family);
  transition: all 0.2s ease;
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  vertical-align: middle;
}

/* Size variants */
.wc-btn--xs {
  padding: 4px 8px;
  font-size: 12px;
  min-height: 24px;
}

.wc-btn--sm {
  padding: 6px 12px;
  font-size: 13px;
  min-height: 32px;
}

.wc-btn--md {
  padding: 8px 16px;
  font-size: 14px;
  min-height: 40px;
}

.wc-btn--lg {
  padding: 12px 20px;
  font-size: 16px;
  min-height: 48px;
}

.wc-btn--xl {
  padding: 16px 24px;
  font-size: 18px;
  min-height: 56px;
}

/* Rounded variants */
.wc-btn--rounded-none {
  border-radius: 0;
}

.wc-btn--rounded-sm {
  border-radius: 4px;
}

.wc-btn--rounded,
.wc-btn--rounded-md {
  border-radius: 8px;
}

.wc-btn--rounded-lg {
  border-radius: 12px;
}

.wc-btn--rounded-full {
  border-radius: 9999px;
}

/* State variants */
.wc-btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.wc-btn--full-width {
  width: 100%;
}

.wc-btn--uppercase {
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Loading state */
.wc-btn__loading {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icon spacing */
.wc-btn__start-icon,
.wc-btn__end-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hover effects - flat design without shadows */
.wc-btn--primary:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-primary-600);
  transform: translateY(-1px);
}

.wc-btn--secondary:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-secondary-600);
  transform: translateY(-1px);
}

.wc-btn--outlined:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-primary-50);
}

.wc-btn--text:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-primary-50);
}

.wc-btn--success:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-success-600);
  transform: translateY(-1px);
}

.wc-btn--warning:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-warning-600);
  transform: translateY(-1px);
}

.wc-btn--error:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-error-600);
  transform: translateY(-1px);
}

.wc-btn--info:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-info-600);
  transform: translateY(-1px);
}

/* Active states */
.wc-btn:active:not(.wc-btn--disabled) {
  transform: translateY(0);
}

/* Focus states */
.wc-btn:focus-visible {
  outline: 2px solid var(--wc-primary-500);
  outline-offset: 2px;
}

/* Dark mode support */
.dark .wc-btn--outlined {
  border-color: var(--wc-primary-400);
  color: var(--wc-primary-400);
}

.dark .wc-btn--text {
  color: var(--wc-primary-400);
}

.dark .wc-btn--outlined:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-primary-950);
}

.dark .wc-btn--text:hover:not(.wc-btn--disabled) {
  background-color: var(--wc-primary-950);
}

/* Animation classes */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style> 