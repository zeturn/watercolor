<template>
  <p class="form-helper-text" :class="helperTextClasses" :id="id">
    <slot />
  </p>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  filled: {
    type: Boolean,
    default: false
  },
  focused: {
    type: Boolean,
    default: false
  },
  margin: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'dense', 'none'].includes(value)
  },
  required: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'outlined',
    validator: (value) => ['standard', 'outlined', 'filled'].includes(value)
  },
  id: {
    type: String,
    default: undefined
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const formControlContext = inject('formControlContext', null)

const helperTextClasses = computed(() => {
  const classes = []
  
  // Size variants
  if (props.size === 'sm') {
    classes.push('form-helper-text--size-sm')
  } else if (props.size === 'lg') {
    classes.push('form-helper-text--size-lg')
  }
  
  // Margin
  if (props.margin === 'dense') {
    classes.push('form-helper-text--margin-dense')
  } else if (props.margin === 'normal') {
    classes.push('form-helper-text--margin-normal')
  }
  
  // States
  const isError = props.error || formControlContext?.error
  const isDisabled = props.disabled || formControlContext?.disabled
  
  if (isError) {
    classes.push('form-helper-text--error')
  } else if (isDisabled) {
    classes.push('form-helper-text--disabled')
  }
  
  if (props.focused) {
    classes.push('form-helper-text--focused')
  }
  
  return classes
})
</script>

<style scoped>
.form-helper-text {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--color-text-secondary, #6b7280);
  transition: all 0.2s ease-in-out;
  display: block;
}

.dark .form-helper-text {
  color: var(--color-dark-text-secondary, #9ca3af);
}

/* Size variants */
.form-helper-text--size-sm {
  font-size: 11px;
}

.form-helper-text--size-lg {
  font-size: 13px;
}

/* Margin variants */
.form-helper-text--margin-dense {
  margin-top: 2px;
}

.form-helper-text--margin-normal {
  margin-top: 4px;
}

/* State variants */
.form-helper-text--error {
  color: var(--color-error, #ef4444);
}

.dark .form-helper-text--error {
  color: var(--color-dark-error, #f87171);
}

.form-helper-text--disabled {
  color: var(--color-disabled-text, #d1d5db);
  opacity: 0.7;
}

.dark .form-helper-text--disabled {
  color: var(--color-dark-disabled-text, #6b7280);
}

.form-helper-text--focused {
  color: var(--color-primary, #3b82f6);
}

.dark .form-helper-text--focused {
  color: var(--color-dark-primary, #60a5fa);
}

/* Animation for error state */
.form-helper-text--error {
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}

/* Accessibility improvements */
.form-helper-text[aria-live="polite"] {
  /* Ensure screen readers announce changes */
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-helper-text {
    font-size: 11px;
  }
  
  .form-helper-text--size-lg {
    font-size: 12px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .form-helper-text {
    font-weight: 500;
  }
  
  .form-helper-text--error {
    text-decoration: underline;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .form-helper-text {
    transition: none;
  }
  
  .form-helper-text--error {
    animation: none;
  }
}
</style> 