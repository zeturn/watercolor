<template>
  <label
    class="form-control-label"
    :class="formControlLabelClasses"
    @click="handleClick"
  >
    <span
      v-if="labelPlacement === 'start'"
      class="form-control-label__text"
      :class="labelClasses"
    >
      {{ label }}
      <span
        v-if="required"
        class="form-control-label__required"
      >*</span>
    </span>
    
    <span class="form-control-label__control">
      <slot />
    </span>
    
    <span
      v-if="labelPlacement !== 'start'"
      class="form-control-label__text"
      :class="labelClasses"
    >
      {{ label }}
      <span
        v-if="required"
        class="form-control-label__required"
      >*</span>
    </span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  labelPlacement: {
    type: String,
    default: 'end',
    validator: (value) => ['start', 'end', 'top', 'bottom'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: undefined
  },
  value: {
    type: [String, Number, Boolean],
    default: undefined
  }
})

const emit = defineEmits(['change'])

const formControlLabelClasses = computed(() => {
  const classes = []
  
  // Placement
  if (props.labelPlacement === 'start') {
    classes.push('form-control-label--placement-start')
  } else if (props.labelPlacement === 'end') {
    classes.push('form-control-label--placement-end')
  } else if (props.labelPlacement === 'top') {
    classes.push('form-control-label--placement-top')
  } else if (props.labelPlacement === 'bottom') {
    classes.push('form-control-label--placement-bottom')
  }
  
  // States
  if (props.disabled) {
    classes.push('form-control-label--disabled')
  }
  
  return classes
})

const labelClasses = computed(() => {
  const classes = []
  
  if (props.disabled) {
    classes.push('form-control-label__text--disabled')
  }
  
  return classes
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('change', event)
  }
}
</script>

<style scoped>
.form-control-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  user-select: none;
  vertical-align: middle;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.form-control-label:hover {
  opacity: 0.8;
}

/* Placement variants */
.form-control-label--placement-start {
  flex-direction: row-reverse;
}

.form-control-label--placement-end {
  flex-direction: row;
}

.form-control-label--placement-top {
  flex-direction: column-reverse;
  align-items: flex-start;
}

.form-control-label--placement-bottom {
  flex-direction: column;
  align-items: flex-start;
}

/* Control wrapper */
.form-control-label__control {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Text styling */
.form-control-label__text {
  font-size: 14px;
  line-height: 1.5;
  color: var(--wc-text-secondary, #374151);
  font-weight: 400;
}

.dark .form-control-label__text {
  color: var(--wc-text-primary, #f3f4f6);
}

/* Spacing based on placement */
.form-control-label--placement-start .form-control-label__text {
  margin-right: 8px;
}

.form-control-label--placement-end .form-control-label__text {
  margin-left: 8px;
}

.form-control-label--placement-top .form-control-label__text {
  margin-bottom: 4px;
}

.form-control-label--placement-bottom .form-control-label__text {
  margin-top: 4px;
}

/* Required indicator */
.form-control-label__required {
  color: var(--color-error, #ef4444);
  margin-left: 2px;
  font-weight: 500;
}

/* Disabled state */
.form-control-label--disabled {
  cursor: default;
  pointer-events: none;
  opacity: 0.6;
}

.form-control-label__text--disabled {
  color: var(--color-disabled-text, #9ca3af);
}

.dark .form-control-label__text--disabled {
  color: var(--color-dark-disabled-text, #6b7280);
}

/* Focus styles for accessibility */
.form-control-label:focus-within {
  outline: 2px solid var(--wc-color-primary, #3b82f6);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-control-label__text {
    font-size: 13px;
  }
  
  .form-control-label--placement-start .form-control-label__text,
  .form-control-label--placement-end .form-control-label__text {
    margin-left: 6px;
    margin-right: 6px;
  }
}
</style> 