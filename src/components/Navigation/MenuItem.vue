<template>
  <div 
    :class="menuItemClasses"
    @click="handleClick"
    role="menuitem"
    tabindex="0"
    @keydown.enter="handleClick"
    @keydown.space="handleClick"
  >
    <div v-if="$slots.icon" class="mr-3 flex-shrink-0">
      <slot name="icon" />
    </div>
    
    <div class="flex-1 min-w-0">
      <slot />
    </div>
    
    <div v-if="$slots.suffix" class="ml-3 flex-shrink-0">
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  dense: {
    type: Boolean,
    default: false
  },
  divider: {
    type: Boolean,
    default: false
  },
  selected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const menuItemClasses = computed(() => {
  const baseClasses = 'flex items-center text-sm transition-colors duration-150 cursor-pointer focus:outline-none'
  const classes = [baseClasses]
  
  // Padding based on density
  if (props.dense) {
    classes.push('px-3 py-1')
  } else {
    classes.push('px-4 py-2')
  }
  
  // States
  if (props.disabled) {
    classes.push('opacity-50 cursor-not-allowed text-neutral-400')
  } else {
    if (props.selected) {
      classes.push('bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400')
    } else {
      classes.push('text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700')
    }
  }
  
  // Divider
  if (props.divider) {
    classes.push('border-b border-neutral-200 dark:border-neutral-700')
  }
  
  return classes
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script> 