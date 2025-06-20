<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <!-- Icon -->
    <span v-if="$slots.icon || icon" class="fab-icon">
      <slot name="icon">
        <span v-if="icon" v-html="icon"></span>
      </slot>
    </span>
    
    <!-- Label (for extended variant) -->
    <span v-if="variant === 'extended' && ($slots.default || label)" class="fab-label">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'circular',
    validator: (value) => ['circular', 'extended'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'inherit'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const focused = ref(false)

const buttonClasses = computed(() => {
  const classes = ['wc-fab']
  
  classes.push(`wc-fab--${props.variant}`)
  classes.push(`wc-fab--${props.size}`)
  classes.push(`wc-fab--${props.color}`)
  
  if (props.disabled) {
    classes.push('wc-fab--disabled')
  }
  
  if (focused.value) {
    classes.push('wc-fab--focused')
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
.wc-fab {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: var(--wc-font-family);
  font-weight: 500;
  text-decoration: none;
  outline: none;
  transition: all 0.2s ease;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.wc-fab::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.wc-fab:hover::before {
  opacity: 0.08;
}

.wc-fab:active::before {
  opacity: 0.12;
}

/* Variants */
.wc-fab--circular {
  border-radius: 50%;
  min-width: 0;
}

.wc-fab--extended {
  border-radius: 24px;
  padding: 0 20px;
}

/* Sizes */
.wc-fab--circular.wc-fab--sm {
  width: 40px;
  height: 40px;
}

.wc-fab--circular.wc-fab--md {
  width: 56px;
  height: 56px;
}

.wc-fab--circular.wc-fab--lg {
  width: 64px;
  height: 64px;
}

.wc-fab--extended.wc-fab--sm {
  height: 40px;
  font-size: 14px;
}

.wc-fab--extended.wc-fab--md {
  height: 48px;
  font-size: 14px;
}

.wc-fab--extended.wc-fab--lg {
  height: 56px;
  font-size: 16px;
}

/* Colors */
.wc-fab--primary {
  background: #3b82f6;
  color: white;
}

.wc-fab--secondary {
  background: #6b7280;
  color: white;
}

.wc-fab--inherit {
  background: #f3f4f6;
  color: #374151;
}

/* Focus Ring */
.wc-fab--focused.wc-fab--primary {
  box-shadow: 
    0 3px 5px -1px rgba(0, 0, 0, 0.2), 
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 
    0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 0 0 3px rgba(59, 130, 246, 0.3);
}

.wc-fab--focused.wc-fab--secondary {
  box-shadow: 
    0 3px 5px -1px rgba(0, 0, 0, 0.2), 
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 
    0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 0 0 3px rgba(107, 114, 128, 0.3);
}

.wc-fab--focused.wc-fab--inherit {
  box-shadow: 
    0 3px 5px -1px rgba(0, 0, 0, 0.2), 
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 
    0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 0 0 3px rgba(55, 65, 81, 0.3);
}

/* Disabled State */
.wc-fab--disabled {
  cursor: not-allowed;
  box-shadow: none;
  background: #e5e7eb !important;
  color: #9ca3af !important;
}

.wc-fab--disabled::before {
  display: none;
}

/* Icon */
.fab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.wc-fab--circular .fab-icon {
  width: 24px;
  height: 24px;
}

.wc-fab--circular.wc-fab--sm .fab-icon {
  width: 18px;
  height: 18px;
}

.wc-fab--circular.wc-fab--lg .fab-icon {
  width: 28px;
  height: 28px;
}

.wc-fab--extended .fab-icon {
  width: 20px;
  height: 20px;
}

/* Label */
.fab-label {
  position: relative;
  z-index: 1;
  margin-left: 8px;
  white-space: nowrap;
}

/* Hover Effects */
.wc-fab--primary:hover {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.wc-fab--secondary:hover {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.wc-fab--inherit:hover {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .wc-fab--inherit {
    background: #374151;
    color: #d1d5db;
  }
}
</style> 