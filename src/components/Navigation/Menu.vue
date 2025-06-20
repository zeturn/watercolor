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
  const baseClasses = 'absolute bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 py-2 min-w-32 max-w-xs transition-all duration-150 origin-top-left'
  const classes = [baseClasses]
  
  // Elevation shadows
  const shadowMap = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow',
    3: 'shadow-md',
    4: 'shadow-lg',
    6: 'shadow-xl',
    8: 'shadow-2xl',
    12: 'shadow-2xl',
    16: 'shadow-2xl',
    24: 'shadow-2xl'
  }
  const shadow = shadowMap[props.elevation] || shadowMap[8]
  classes.push(shadow)
  
  return classes
})

const menuStyles = computed(() => {
  if (!props.anchorEl) {
    return {
      top: '0px',
      left: '0px'
    }
  }
  
  const rect = props.anchorEl.getBoundingClientRect()
  const styles = {}
  
  // Vertical positioning
  if (props.anchorOrigin.vertical === 'bottom') {
    styles.top = `${rect.bottom + window.scrollY}px`
  } else if (props.anchorOrigin.vertical === 'top') {
    styles.top = `${rect.top + window.scrollY}px`
  } else {
    styles.top = `${rect.top + rect.height / 2 + window.scrollY}px`
  }
  
  // Horizontal positioning
  if (props.anchorOrigin.horizontal === 'left') {
    styles.left = `${rect.left + window.scrollX}px`
  } else if (props.anchorOrigin.horizontal === 'right') {
    styles.left = `${rect.right + window.scrollX}px`
  } else {
    styles.left = `${rect.left + rect.width / 2 + window.scrollX}px`
  }
  
  // Max height
  if (props.maxHeight !== 'auto') {
    styles.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight
    styles.overflowY = 'auto'
  }
  
  return styles
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