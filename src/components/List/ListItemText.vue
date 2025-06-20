<template>
  <div class="flex-1 min-w-0">
    <!-- Primary text -->
    <div :class="primaryClasses">
      <slot>
        {{ primary }}
      </slot>
    </div>
    
    <!-- Secondary text -->
    <div v-if="secondary || $slots.secondary" :class="secondaryClasses">
      <slot name="secondary">
        {{ secondary }}
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  primary: {
    type: String,
    default: ''
  },
  secondary: {
    type: String,
    default: ''
  },
  inset: {
    type: Boolean,
    default: false
  },
  disableTypography: {
    type: Boolean,
    default: false
  }
})

const listContext = inject('listContext', { dense: false })

const primaryClasses = computed(() => {
  const classes = ['text-neutral-900 dark:text-neutral-100']
  
  if (!props.disableTypography) {
    if (listContext.dense) {
      classes.push('text-sm font-medium')
    } else {
      classes.push('text-base font-medium')
    }
  }
  
  if (props.inset) {
    classes.push('ml-14')
  }
  
  return classes
})

const secondaryClasses = computed(() => {
  const classes = ['text-neutral-600 dark:text-neutral-400 mt-1']
  
  if (!props.disableTypography) {
    if (listContext.dense) {
      classes.push('text-xs')
    } else {
      classes.push('text-sm')
    }
  }
  
  if (props.inset) {
    classes.push('ml-14')
  }
  
  return classes
})
</script> 