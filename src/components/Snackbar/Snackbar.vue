<template>
  <teleport to="body">
    <transition
      name="snackbar"
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div 
        v-if="open" 
        :class="snackbarClasses"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="flex items-center justify-between w-full">
          <!-- Message -->
          <div class="flex-1 min-w-0 mr-3">
            <slot>
              <p class="text-sm font-medium">{{ message }}</p>
            </slot>
          </div>
          
          <!-- Action -->
          <div v-if="$slots.action || action" class="flex-shrink-0">
            <slot name="action">
              <button
                v-if="action"
                type="button"
                :class="actionClasses"
                @click="handleActionClick"
              >
                {{ action }}
              </button>
            </slot>
          </div>
          
          <!-- Close Button -->
          <div v-if="closable" class="flex-shrink-0 ml-3">
            <button 
              type="button"
              :class="closeButtonClasses"
              @click="handleClose"
              aria-label="关闭"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  },
  autoHideDuration: {
    type: Number,
    default: 6000
  },
  anchorOrigin: {
    type: Object,
    default: () => ({ vertical: 'bottom', horizontal: 'left' })
  },
  severity: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'info', 'warning', 'error'].includes(value)
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outlined', 'standard'].includes(value)
  },
  action: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close', 'action'])

let autoHideTimer = null

const snackbarClasses = computed(() => {
  const baseClasses = 'fixed z-50 max-w-sm w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-4'
  const classes = [baseClasses]
  
  // Position classes
  const { vertical, horizontal } = props.anchorOrigin
  
  if (vertical === 'top') {
    classes.push('top-4')
  } else {
    classes.push('bottom-4')
  }
  
  if (horizontal === 'left') {
    classes.push('left-4')
  } else if (horizontal === 'right') {
    classes.push('right-4')
  } else {
    classes.push('left-1/2 transform -translate-x-1/2')
  }
  
  // Severity colors
  if (props.variant === 'filled') {
    const colorMap = {
      success: 'bg-success-500 text-white border-success-500',
      info: 'bg-primary-500 text-white border-primary-500',
      warning: 'bg-warning-500 text-white border-warning-500',
      error: 'bg-error-500 text-white border-error-500'
    }
    classes.push(colorMap[props.severity])
  } else if (props.variant === 'outlined') {
    const colorMap = {
      success: 'border-success-500 text-success-600 dark:text-success-400',
      info: 'border-primary-500 text-primary-600 dark:text-primary-400',
      warning: 'border-warning-500 text-warning-600 dark:text-warning-400',
      error: 'border-error-500 text-error-600 dark:text-error-400'
    }
    classes.push(colorMap[props.severity])
  } else {
    classes.push('text-neutral-900 dark:text-neutral-100')
  }
  
  return classes
})

const actionClasses = computed(() => {
  const baseClasses = 'text-sm font-medium px-3 py-1 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const classes = [baseClasses]
  
  if (props.variant === 'filled') {
    classes.push('text-white hover:bg-white hover:bg-opacity-20 focus:ring-white')
  } else {
    const colorMap = {
      success: 'text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 focus:ring-success-500',
      info: 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
      warning: 'text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/20 focus:ring-warning-500',
      error: 'text-error-600 dark:text-error-400 hover:bg-error-50 dark:hover:bg-error-900/20 focus:ring-error-500'
    }
    classes.push(colorMap[props.severity])
  }
  
  return classes
})

const closeButtonClasses = computed(() => {
  const baseClasses = 'inline-flex rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150'
  const classes = [baseClasses]
  
  if (props.variant === 'filled') {
    classes.push('text-white hover:bg-white hover:bg-opacity-20 focus:ring-white')
  } else {
    const colorMap = {
      success: 'text-success-400 hover:text-success-500 focus:ring-success-500',
      info: 'text-primary-400 hover:text-primary-500 focus:ring-primary-500',
      warning: 'text-warning-400 hover:text-warning-500 focus:ring-warning-500',
      error: 'text-error-400 hover:text-error-500 focus:ring-error-500'
    }
    classes.push(colorMap[props.severity] || 'text-neutral-400 hover:text-neutral-500 focus:ring-neutral-500')
  }
  
  return classes
})

const handleClose = () => emit('close')
const handleActionClick = () => emit('action')

const startAutoHideTimer = () => {
  if (props.autoHideDuration > 0) {
    autoHideTimer = setTimeout(() => {
      handleClose()
    }, props.autoHideDuration)
  }
}

watch(() => props.open, (newVal) => {
  if (newVal) {
    startAutoHideTimer()
  } else {
    clearTimeout(autoHideTimer)
  }
})

onMounted(() => {
  if (props.open) startAutoHideTimer()
})

onUnmounted(() => clearTimeout(autoHideTimer))
</script> 