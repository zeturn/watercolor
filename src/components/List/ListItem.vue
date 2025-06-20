<template>
  <li 
    :class="listItemClasses"
    @click="handleClick"
    role="listitem"
    :tabindex="button ? 0 : -1"
    @keydown.enter="handleClick"
    @keydown.space="handleClick"
  >
    <!-- Leading content -->
    <div v-if="$slots.icon" class="flex-shrink-0 mr-3">
      <slot name="icon" />
    </div>
    
    <!-- Main content -->
    <div class="flex-1 min-w-0">
      <slot />
    </div>
    
    <!-- Trailing content -->
    <div v-if="$slots.action" class="flex-shrink-0 ml-3">
      <slot name="action" />
    </div>
  </li>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  button: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  divider: {
    type: Boolean,
    default: false
  },
  dense: {
    type: Boolean,
    default: undefined
  },
  selected: {
    type: Boolean,
    default: false
  },
  disableGutters: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const listContext = inject('listContext', { dense: false })

const isDense = computed(() => {
  return props.dense !== undefined ? props.dense : listContext.dense
})

const listItemClasses = computed(() => {
  const baseClasses = 'flex items-center w-full transition-colors duration-150'
  const classes = [baseClasses]
  
  // Padding
  if (!props.disableGutters) {
    if (isDense.value) {
      classes.push('px-4 py-1')
    } else {
      classes.push('px-4 py-2')
    }
  }
  
  // Interactive states
  if (props.button && !props.disabled) {
    classes.push('cursor-pointer focus:outline-none')
    
    if (props.selected) {
      classes.push('bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400')
    } else {
      classes.push('hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-700')
    }
  }
  
  if (props.disabled) {
    classes.push('opacity-50 cursor-not-allowed')
  }
  
  // Divider
  if (props.divider) {
    classes.push('border-b border-neutral-200 dark:border-neutral-700')
  }
  
  return classes
})

const handleClick = (event) => {
  if (props.button && !props.disabled) {
    emit('click', event)
  }
}
</script> 