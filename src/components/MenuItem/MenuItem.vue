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
import { getMenuItemClasses } from './utils.js'
import './style.css'

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
  return getMenuItemClasses(props.disabled, props.dense, props.divider, props.selected)
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script> 