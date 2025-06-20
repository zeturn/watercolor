<template>
  <div v-if="!closed" :class="alertClasses" role="alert">
    <!-- Icon -->
    <div v-if="!hideIcon" class="flex-shrink-0">
      <component :is="iconComponent" class="w-5 h-5" />
    </div>
    
    <!-- Content -->
    <div class="flex-1 min-w-0">
      <div v-if="title" class="font-medium mb-1">
        {{ title }}
      </div>
      <div class="text-sm">
        <slot />
      </div>
    </div>
    
    <!-- Action -->
    <div v-if="$slots.action" class="flex-shrink-0 ml-3">
      <slot name="action" />
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
</template>

<script setup>
import { ref, computed, h } from 'vue'

const props = defineProps({
  severity: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'info', 'warning', 'error'].includes(value)
  },
  variant: {
    type: String,
    default: 'standard',
    validator: (value) => ['standard', 'filled', 'outlined'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: false
  },
  hideIcon: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const closed = ref(false)

const alertClasses = computed(() => {
  const baseClasses = 'flex items-start p-4 rounded-lg border transition-all duration-200'
  const classes = [baseClasses]
  
  const colorMap = {
    success: {
      standard: 'bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800 text-success-800 dark:text-success-200',
      filled: 'bg-success-500 border-success-500 text-white',
      outlined: 'bg-transparent border-success-500 text-success-600 dark:text-success-400'
    },
    info: {
      standard: 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-800 dark:text-primary-200',
      filled: 'bg-primary-500 border-primary-500 text-white',
      outlined: 'bg-transparent border-primary-500 text-primary-600 dark:text-primary-400'
    },
    warning: {
      standard: 'bg-warning-50 dark:bg-warning-900/20 border-warning-200 dark:border-warning-800 text-warning-800 dark:text-warning-200',
      filled: 'bg-warning-500 border-warning-500 text-white',
      outlined: 'bg-transparent border-warning-500 text-warning-600 dark:text-warning-400'
    },
    error: {
      standard: 'bg-error-50 dark:bg-error-900/20 border-error-200 dark:border-error-800 text-error-800 dark:text-error-200',
      filled: 'bg-error-500 border-error-500 text-white',
      outlined: 'bg-transparent border-error-500 text-error-600 dark:text-error-400'
    }
  }
  
  classes.push(colorMap[props.severity][props.variant])
  
  return classes
})

const closeButtonClasses = computed(() => {
  const baseClasses = 'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150'
  const classes = [baseClasses]
  
  if (props.variant === 'filled') {
    classes.push('text-white hover:bg-black hover:bg-opacity-10 focus:ring-white')
  } else {
    const hoverMap = {
      success: 'hover:bg-success-100 dark:hover:bg-success-800 focus:ring-success-500',
      info: 'hover:bg-primary-100 dark:hover:bg-primary-800 focus:ring-primary-500',
      warning: 'hover:bg-warning-100 dark:hover:bg-warning-800 focus:ring-warning-500',
      error: 'hover:bg-error-100 dark:hover:bg-error-800 focus:ring-error-500'
    }
    classes.push(hoverMap[props.severity])
  }
  
  return classes
})

const iconComponent = computed(() => {
  const icons = {
    success: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, h('path', {
      fillRule: 'evenodd',
      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
      clipRule: 'evenodd'
    })),
    info: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, h('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
      clipRule: 'evenodd'
    })),
    warning: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, h('path', {
      fillRule: 'evenodd',
      d: 'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z',
      clipRule: 'evenodd'
    })),
    error: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, h('path', {
      fillRule: 'evenodd',
      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z',
      clipRule: 'evenodd'
    }))
  }
  
  return icons[props.severity]
})

const handleClose = () => {
  closed.value = true
  emit('close')
}
</script> 