<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div v-if="modelValue" class="wc-modal-overlay" @click="handleOverlayClick">
        <div :class="modalClasses" :style="modalStyles" @click.stop>
          <!-- 头部 -->
          <div v-if="title || $slots.header || closable" class="wc-modal__header">
            <slot name="header">
              <h3 v-if="title" class="wc-modal__title">{{ title }}</h3>
            </slot>
            <button
              v-if="closable"
              class="wc-modal__close"
              @click="handleClose"
            >
              ×
            </button>
          </div>

          <!-- 内容 -->
          <div class="wc-modal__body">
            <slot />
          </div>

          <!-- 底部 -->
          <div v-if="$slots.footer" class="wc-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  closable: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  centered: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const modalClasses = computed(() => {
  return ['wc-modal', `wc-modal--${props.size}`, {
    'wc-modal--centered': props.centered
  }]
})

const modalStyles = computed(() => ({
  maxHeight: '90vh',
  overflowY: 'auto'
}))

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.maskClosable) {
    handleClose()
  }
}

// 监听 Escape 键
watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && props.closable) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    
    // 清理监听器
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }
})
</script>

<style scoped>
.wc-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.wc-modal {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  position: relative;
}

.wc-modal--sm {
  max-width: 400px;
}

.wc-modal--md {
  max-width: 500px;
}

.wc-modal--lg {
  max-width: 700px;
}

.wc-modal--xl {
  max-width: 900px;
}

.wc-modal--centered {
  margin: auto;
}

.wc-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid #e4e4e7;
}

.wc-modal__title {
  font-size: 20px;
  font-weight: 600;
  color: #18181b;
  margin: 0;
}

.wc-modal__close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #71717a;
  transition: color 0.2s ease;
  padding: 0;
  line-height: 1;
}

.wc-modal__close:hover {
  color: #3f3f46;
}

.wc-modal__body {
  padding: 24px;
  color: #3f3f46;
  line-height: 1.6;
  min-height: 40px;
}

.wc-modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px 24px 24px;
  border-top: 1px solid #e4e4e7;
}

/* 动画效果 */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .wc-modal,
.modal-leave-to .wc-modal {
  transform: scale(0.9) translateY(-20px);
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-modal {
    background-color: #18181b;
  }
  
  .wc-modal__header {
    border-bottom-color: #3f3f46;
  }
  
  .wc-modal__title {
    color: #fafafa;
  }
  
  .wc-modal__close {
    color: #a1a1aa;
  }
  
  .wc-modal__close:hover {
    color: #d4d4d8;
  }
  
  .wc-modal__body {
    color: #d4d4d8;
  }
  
  .wc-modal__footer {
    border-top-color: #3f3f46;
  }
}
</style> 