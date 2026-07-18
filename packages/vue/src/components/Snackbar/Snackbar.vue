<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      :class="snackbarClasses"
      :style="snackbarStyle"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <!-- Icon -->
      <div v-if="showIcon" :class="iconClasses" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="10" cy="10" r="7.25" />
          <path v-if="severity === 'success'" d="m6.8 10.1 2.1 2.1 4.4-4.6" />
          <template v-else-if="severity === 'info'">
            <path d="M10 9v4" />
            <path d="M10 6.5h.01" />
          </template>
          <template v-else-if="severity === 'warning'">
            <path d="M10 6.5v4.2" />
            <path d="M10 13.5h.01" />
          </template>
          <template v-else>
            <path d="m7.5 7.5 5 5" />
            <path d="m12.5 7.5-5 5" />
          </template>
        </svg>
      </div>

      <!-- Content -->
      <div class="wc-snackbar__content">
        <div v-if="title" class="wc-snackbar__title">{{ title }}</div>
        <slot>
          <div class="wc-snackbar__message">{{ message }}</div>
        </slot>
      </div>

      <!-- Action -->
      <div v-if="$slots.action || action" class="wc-snackbar__actions">
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
      <button
        v-if="closable"
        type="button"
        :class="closeButtonClasses"
        :aria-label="messages.close"
        @click="handleClose"
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
          <path d="m6 6 8 8M14 6l-8 8" />
        </svg>
      </button>

      <!-- Progress Bar -->
      <div v-if="showProgress && autoHideDuration > 0" class="wc-snackbar__progress">
        <div
          :class="progressBarClasses"
          class="wc-snackbar__progress-bar"
          :style="{ width: `${progress}%` }"
        />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '../../LocaleVUE'
import './style.css'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: undefined
  },
  message: {
    type: String,
    default: ''
  },
  title: {
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
    default: 'standard',
    validator: (value) => ['filled', 'outlined', 'standard'].includes(value)
  },
  action: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  showProgress: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'action', 'update:modelValue'])
const { messages } = useLocale()

const internalOpen = ref(
  props.modelValue !== undefined ? props.modelValue : props.open
)

const isOpen = computed(() => internalOpen.value)

// Sync prop changes to internal state
watch([
  () => props.open,
  () => props.modelValue
], ([openProp, modelVal]) => {
  internalOpen.value = props.modelValue !== undefined ? modelVal : openProp
})

let autoHideTimer = null
let progressTimer = null
const progress = ref(100)

// Root classes coming from style.css
const snackbarClasses = computed(() => [
  'wc-snackbar',
  `wc-snackbar--${props.variant}`,
  `wc-snackbar--${props.severity}`
])

// Inline positioning so we don't rely on Tailwind utilities
const snackbarStyle = computed(() => {
  const style = { position: 'fixed', zIndex: 1400 }
  const { vertical, horizontal } = props.anchorOrigin

  if (vertical === 'top') style.top = '20px'
  else style.bottom = '20px'

  if (horizontal === 'left') style.left = '20px'
  else if (horizontal === 'right') style.right = '20px'
  else {
    style.left = '50%'
    style.transform = 'translateX(-50%)'
  }

  return style
})

const actionClasses = 'wc-snackbar__action'

const closeButtonClasses = 'wc-snackbar__close'

const iconClasses = 'wc-snackbar__icon'

const progressBarClasses = 'wc-snackbar__progress-bar'

const handleClose = () => {
  internalOpen.value = false
  emit('close')
  if (props.modelValue !== undefined) {
    emit('update:modelValue', false)
  }
}
const handleActionClick = () => emit('action')

const startAutoHideTimer = () => {
  if (props.autoHideDuration > 0) {
    progress.value = 100
    const startTime = Date.now()

    autoHideTimer = setTimeout(() => {
      handleClose()
    }, props.autoHideDuration)

    // Progress bar animation
    if (props.showProgress) {
      progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const remaining = Math.max(0, 100 - (elapsed / props.autoHideDuration) * 100)
        progress.value = remaining

        if (remaining <= 0) {
          clearInterval(progressTimer)
        }
      }, 50)
    }
  }
}

const clearTimers = () => {
  if (autoHideTimer) {
    clearTimeout(autoHideTimer)
    autoHideTimer = null
  }
  if (progressTimer) {
    clearInterval(progressTimer)
    progressTimer = null
  }
}

watch(isOpen, (newVal) => {
  if (newVal) {
    startAutoHideTimer()
  } else {
    clearTimers()
  }
})

onMounted(() => {
  if (isOpen.value) startAutoHideTimer()
})

onUnmounted(() => clearTimers())
</script>
