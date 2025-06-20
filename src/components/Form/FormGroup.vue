<template>
  <div class="form-group" :class="formGroupClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  row: {
    type: Boolean,
    default: false
  },
  spacing: {
    type: String,
    default: 'normal',
    validator: (value) => ['compact', 'normal', 'comfortable'].includes(value)
  }
})

const formGroupClasses = computed(() => {
  const classes = []
  
  if (props.row) {
    classes.push('form-group--row')
  }
  
  if (props.spacing === 'compact') {
    classes.push('form-group--spacing-compact')
  } else if (props.spacing === 'comfortable') {
    classes.push('form-group--spacing-comfortable')
  }
  
  return classes
})
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.form-group--row {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

/* Spacing variants */
.form-group--spacing-compact {
  gap: 8px;
}

.form-group--spacing-compact.form-group--row {
  gap: 12px;
}

.form-group--spacing-comfortable {
  gap: 16px;
}

.form-group--spacing-comfortable.form-group--row {
  gap: 20px;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-group--row {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  
  .form-group--spacing-comfortable.form-group--row {
    gap: 16px;
  }
}

/* Focus management for keyboard navigation */
.form-group:focus-within {
  /* Improve focus visibility for form groups */
}

/* Ensure proper stacking context */
.form-group {
  position: relative;
  z-index: 0;
}
</style> 