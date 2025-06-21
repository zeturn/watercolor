<template>
  <teleport to="body">
    <transition name="wc-dialog-fade">
      <div v-if="open" class="wc-dialog-overlay">
        <!-- Backdrop -->
        <div class="wc-dialog-backdrop" @click="handleBackdropClick"></div>
        
        <!-- Dialog Container -->
        <div class="wc-dialog-container">
          <transition name="wc-dialog-content">
            <div
              v-if="open"
              :class="dialogClassList"
              :style="dialogStyles"
              role="dialog"
              aria-modal="true"
              :aria-labelledby="titleId"
              @click.stop
            >
              <Button
                v-if="showCloseButton"
                class="wc-dialog__close"
                variant="text"
                size="sm"
                @click="handleClose"
              >
                ✕
              </Button>
              <div class="wc-dialog__content">
                <slot />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, getCurrentInstance, watch, nextTick, provide } from 'vue'
import Button from '../Button/Button.vue'

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
  },
  showCloseButton: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['close'])

const instance = getCurrentInstance()
const titleId = `dialog-title-${instance?.uid || Math.random().toString(36).substr(2, 9)}`

const dialogClassList = computed(() => {
  const classes = ['wc-dialog']
  if (props.fullScreen) classes.push('wc-dialog--fullscreen')
  return classes
})

const dialogStyles = computed(() => {
  const styles = {}

  if (!props.fullScreen) {
    const maxWidthMap = {
      xs: '320px',
      sm: '448px',
      md: '512px',
      lg: '672px',
      xl: '896px',
    }

    if (props.maxWidth) {
      styles.maxWidth = maxWidthMap[props.maxWidth]
      if (!props.fullWidth) {
        styles.margin = '0 auto'
      }
    }

    // vertical margin
    styles.marginTop = '32px'
    styles.marginBottom = '32px'
  }

  // Scroll behavior
  styles.maxHeight = props.scroll === 'body' ? '100vh' : '90vh'

  return styles
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

<style scoped>
/* Overlay & Backdrop */
.wc-dialog-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow-y: auto;
}

.wc-dialog-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  transition: opacity 0.3s ease;
}

/* Container used for centering */
.wc-dialog-container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

/* Dialog */
.wc-dialog {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: #111827; /* neutral-900 */
  border: 1px solid #e5e7eb; /* neutral-200 */
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.dark .wc-dialog {
  background-color: #262626; /* neutral-800 */
  color: #f5f5f5;
  border-color: #4b5563; /* neutral-700 */
}

/* Fullscreen variant */
.wc-dialog--fullscreen {
  height: 100vh;
  max-width: none;
  border-radius: 0;
}

/* Close button */
.wc-dialog__close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}

/* Content padding */
.wc-dialog__content {
  padding: 24px;
}

/* Fade transition */
.wc-dialog-fade-enter-active,
.wc-dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}

.wc-dialog-fade-enter-from,
.wc-dialog-fade-leave-to {
  opacity: 0;
}

/* Content transition */
.wc-dialog-content-enter-active,
.wc-dialog-content-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.wc-dialog-content-enter-from,
.wc-dialog-content-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style> 