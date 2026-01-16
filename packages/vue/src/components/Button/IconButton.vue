<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span class="icon-button-icon">
      <slot>
        <span
          v-if="icon"
          v-html="icon"
        />
      </slot>
    </span>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  edge: {
    type: String,
    default: false,
    validator: (value) => [false, 'start', 'end'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const focused = ref(false)

const buttonClasses = computed(() => {
  const classes = ['wc-icon-button']
  
  classes.push(`wc-icon-button--${props.color}`)
  classes.push(`wc-icon-button--${props.size}`)
  
  if (props.edge) {
    classes.push(`wc-icon-button--edge-${props.edge}`)
  }
  
  if (props.disabled) {
    classes.push('wc-icon-button--disabled')
  }
  
  if (focused.value) {
    classes.push('wc-icon-button--focused')
  }
  
  return classes
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const handleFocus = () => {
  focused.value = true
}

const handleBlur = () => {
  focused.value = false
}
</script>

<style scoped>
.wc-icon-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: var(--wc-font-family);
  border-radius: 50%;
  outline: none;
  transition: all 0.2s ease;
  overflow: hidden;
}

.wc-icon-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: currentColor;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 0.2s ease;
}

.wc-icon-button:hover::before {
  opacity: 0.04;
}

.wc-icon-button:active::before {
  opacity: 0.08;
}

/* Sizes */
.wc-icon-button--sm {
  width: 32px;
  height: 32px;
  padding: 4px;
}

.wc-icon-button--md {
  width: 40px;
  height: 40px;
  padding: 8px;
}

.wc-icon-button--lg {
  width: 48px;
  height: 48px;
  padding: 12px;
}

/* Colors */
.wc-icon-button--default {
  color: #6b7280;
}

.wc-icon-button--primary {
  color: #3b82f6;
}

.wc-icon-button--secondary {
  color: #6b7280;
}

.wc-icon-button--error {
  color: #ef4444;
}

.wc-icon-button--warning {
  color: #f59e0b;
}

.wc-icon-button--info {
  color: #06b6d4;
}

.wc-icon-button--success {
  color: #10b981;
}

/* Focus Ring */
.wc-icon-button--focused.wc-icon-button--default {
  box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.2);
}

.wc-icon-button--focused.wc-icon-button--primary {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.wc-icon-button--focused.wc-icon-button--secondary {
  box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.2);
}

.wc-icon-button--focused.wc-icon-button--error {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.wc-icon-button--focused.wc-icon-button--warning {
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}

.wc-icon-button--focused.wc-icon-button--info {
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
}

.wc-icon-button--focused.wc-icon-button--success {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

/* Edge positioning */
.wc-icon-button--edge-start {
  margin-left: -12px;
}

.wc-icon-button--edge-end {
  margin-right: -12px;
}

.wc-icon-button--sm.wc-icon-button--edge-start {
  margin-left: -8px;
}

.wc-icon-button--sm.wc-icon-button--edge-end {
  margin-right: -8px;
}

.wc-icon-button--lg.wc-icon-button--edge-start {
  margin-left: -16px;
}

.wc-icon-button--lg.wc-icon-button--edge-end {
  margin-right: -16px;
}

/* Disabled State */
.wc-icon-button--disabled {
  cursor: not-allowed;
  color: #d1d5db !important;
}

.wc-icon-button--disabled::before {
  display: none;
}

/* Icon */
.icon-button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.wc-icon-button--sm .icon-button-icon {
  font-size: 16px;
}

.wc-icon-button--md .icon-button-icon {
  font-size: 20px;
}

.wc-icon-button--lg .icon-button-icon {
  font-size: 24px;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .wc-icon-button--default {
    color: #9ca3af;
  }
  
  .wc-icon-button:hover::before {
    opacity: 0.08;
  }
  
  .wc-icon-button:active::before {
    opacity: 0.12;
  }
  
  .wc-icon-button--disabled {
    color: #4b5563 !important;
  }
}
</style> 