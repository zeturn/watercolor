<template>
  <teleport to="body">
    <transition
      name="dialog"
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          @click="handleBackdropClick"
        ></div>
        
        <!-- Dialog Container -->
        <div class="flex min-h-full items-center justify-center p-4">
          <transition
            name="dialog-content"
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div 
              v-if="open"
              :class="dialogClasses"
              role="dialog"
              aria-modal="true"
              :aria-labelledby="titleId"
              @click.stop
            >
              <slot />
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, getCurrentInstance, watch, nextTick } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  maxWidth: {
    type: String,
    default: 'sm',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', false].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  fullScreen: {
    type: Boolean,
    default: false
  },
  disableEscapeKeyDown: {
    type: Boolean,
    default: false
  },
  disableBackdropClick: {
    type: Boolean,
    default: false
  },
  scroll: {
    type: String,
    default: 'paper',
    validator: (value) => ['paper', 'body'].includes(value)
  }
})

const emit = defineEmits(['close'])

const instance = getCurrentInstance()
const titleId = `dialog-title-${instance?.uid || Math.random().toString(36).substr(2, 9)}`

const dialogClasses = computed(() => {
  const baseClasses = 'relative bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 w-full mx-auto overflow-hidden'
  const classes = [baseClasses]
  
  if (props.fullScreen) {
    classes.push('h-full max-w-none rounded-none')
  } else {
    // Max width classes
    if (props.maxWidth) {
      const maxWidthMap = {
        'xs': 'max-w-xs',
        'sm': 'max-w-md',
        'md': 'max-w-lg',
        'lg': 'max-w-2xl',
        'xl': 'max-w-4xl'
      }
      classes.push(maxWidthMap[props.maxWidth])
    }
    
    if (!props.fullWidth && props.maxWidth) {
      classes.push('mx-4')
    }
  }
  
  // Scroll behavior
  if (props.scroll === 'body') {
    classes.push('max-h-full')
  } else {
    classes.push('max-h-[90vh]')
  }
  
  return classes
})

const handleBackdropClick = () => {
  if (!props.disableBackdropClick) {
    handleClose()
  }
}

const handleClose = () => {
  emit('close')
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape' && !props.disableEscapeKeyDown) {
    handleClose()
  }
}

// Handle keyboard events
watch(() => props.open, async (newOpen) => {
  if (newOpen) {
    await nextTick()
    document.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKeyDown)
    // Restore body scroll
    document.body.style.overflow = ''
  }
})

// Provide titleId for DialogTitle component
provide?.('dialogTitleId', titleId)
</script> 