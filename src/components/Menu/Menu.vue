<template>
  <teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50">
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-25"
        @click="handleBackdropClick"
      ></div>
      
      <!-- Menu -->
      <div 
        ref="menuRef"
        :class="menuClasses"
        :style="menuStyles"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { getMenuClasses, computeMenuPosition } from './utils.js'
import './style.css'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  anchorEl: {
    type: Object,
    default: null
  },
  anchorOrigin: {
    type: Object,
    default: () => ({ vertical: 'bottom', horizontal: 'left' })
  },
  transformOrigin: {
    type: Object,
    default: () => ({ vertical: 'top', horizontal: 'left' })
  },
  elevation: {
    type: Number,
    default: 8
  },
  maxHeight: {
    type: [String, Number],
    default: 'auto'
  }
})

const emit = defineEmits(['close'])

const menuRef = ref(null)

const menuClasses = computed(() => {
  return getMenuClasses(props.elevation)
})

const menuStyles = computed(() => {
  return computeMenuPosition(props.anchorEl, props.anchorOrigin, props.maxHeight)
})

const handleBackdropClick = () => {
  emit('close')
}

// Auto position adjustment
watch(() => props.open, async (newOpen) => {
  if (newOpen && props.anchorEl) {
    await nextTick()
    // Additional positioning logic can be added here
  }
})
</script> 