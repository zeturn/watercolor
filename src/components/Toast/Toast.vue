<template>
  <Transition name="toast" appear>
    <div
      v-if="visible"
      :class="toastClasses"
      :style="toastStyles"
      @click="handleClick"
    >
      <div class="wc-toast__icon" v-if="showIcon">
        {{ iconText }}
      </div>
      
      <div class="wc-toast__content">
        <div v-if="title" class="wc-toast__title">{{ title }}</div>
        <div class="wc-toast__message">{{ message }}</div>
      </div>
      
      <button
        v-if="closable"
        class="wc-toast__close"
        @click.stop="handleClose"
      >
        ×
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
  },
  duration: {
    type: Number,
    default: 4000
  },
  closable: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  position: {
    type: String,
    default: 'top-right',
    validator: (value) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(value)
  }
})

const emit = defineEmits(['close'])

const visible = ref(true)

const colorMap = {
  info: { bg: '#e8f4ff', text: '#0070f3', border: '#1a8cff' },
  success: { bg: '#ecfdf5', text: '#047857', border: '#10b981' },
  warning: { bg: '#fffbeb', text: '#b45309', border: '#f59e0b' },
  error: { bg: '#fef2f2', text: '#b91c1c', border: '#ef4444' }
}

const iconMap = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕'
}

const toastClasses = computed(() => {
  return ['wc-toast', `wc-toast--${props.type}`, `wc-toast--${props.position}`]
})

const toastStyles = computed(() => {
  const colors = colorMap[props.type] || colorMap.info
  return {
    backgroundColor: colors.bg,
    color: colors.text,
    borderLeftColor: colors.border
  }
})

const iconText = computed(() => iconMap[props.type] || iconMap.info)

const handleClose = () => {
  visible.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

const handleClick = () => {
  // 可以添加点击事件处理
}

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(() => {
      handleClose()
    }, props.duration)
  }
})
</script>

<style scoped>
.wc-toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  border-left: 4px solid;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  min-width: 300px;
  position: fixed;
  z-index: 1000;
}

.wc-toast--top-left {
  top: 20px;
  left: 20px;
}

.wc-toast--top-right {
  top: 20px;
  right: 20px;
}

.wc-toast--bottom-left {
  bottom: 20px;
  left: 20px;
}

.wc-toast--bottom-right {
  bottom: 20px;
  right: 20px;
}

.wc-toast__icon {
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
}

.wc-toast__content {
  flex: 1;
}

.wc-toast__title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
}

.wc-toast__message {
  font-size: 14px;
  opacity: 0.9;
}

.wc-toast__close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
  margin-top: -2px;
}

.wc-toast__close:hover {
  opacity: 1;
}

/* 动画效果 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style> 