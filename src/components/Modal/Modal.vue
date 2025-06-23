<template>
  <Transition
    name="modal"
    appear
  >
    <div
      v-if="open"
      :class="modalWrapperClasses"
      :style="modalWrapperStyles"
      @click="handleOverlayClick"
    >
      <!-- 叠加层 -->
      <div
        v-if="showOverlay"
        class="wc-modal__overlay"
      />
      
      <!-- 模态框主体 -->
      <div
        :class="modalClasses"
        :style="modalStyles"
        @click.stop
      >
        <!-- 关闭按钮 -->
        <button
          v-if="closable"
          class="wc-modal__close"
          aria-label="关闭"
          @click="handleClose"
        >
          ×
        </button>

        <!-- 头部 -->
        <div
          v-if="title || $slots.header"
          class="wc-modal__header"
        >
          <slot name="header">
            <h3
              v-if="title"
              class="wc-modal__title"
            >
              {{ title }}
            </h3>
          </slot>
        </div>

        <!-- 内容 -->
        <div class="wc-modal__body">
          <slot />
        </div>

        <!-- 底部 -->
        <div
          v-if="$slots.footer"
          class="wc-modal__footer"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  open: {
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
  position: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'top', 'bottom'].includes(value)
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeOnOverlay: {
    type: Boolean,
    default: true
  },
  showOverlay: {
    type: Boolean,
    default: true
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1000
  }
})

const emit = defineEmits(['close'])

const modalWrapperClasses = computed(() => {
  const classes = ['wc-modal']
  
  if (props.size) {
    classes.push(`wc-modal--${props.size}`)
  }
  
  if (props.position) {
    classes.push(`wc-modal--${props.position}`)
  }
  
  if (props.fullscreen) {
    classes.push('wc-modal--fullscreen')
  }
  
  return classes
})

const modalClasses = computed(() => {
  return ['wc-modal__content']
})

const modalWrapperStyles = computed(() => {
  return {
    zIndex: props.zIndex
  }
})

const modalStyles = computed(() => {
  const styles = {}
  
  if (props.fullscreen) {
    styles.width = '100vw'
    styles.height = '100vh'
    styles.maxWidth = 'none'
    styles.maxHeight = 'none'
  }
  
  return styles
})

const handleClose = () => {
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    handleClose()
  }
}

// 滚动锁定
let originalOverflow = ''
const lockBodyScroll = () => {
  if (props.lockScroll) {
    originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
}

const unlockBodyScroll = () => {
  if (props.lockScroll) {
    document.body.style.overflow = originalOverflow
  }
}

// 监听open状态变化
watch(() => props.open, (newVal) => {
  if (newVal) {
    lockBodyScroll()
  } else {
    unlockBodyScroll()
  }
}, { immediate: true })

// 组件卸载时恢复滚动
onUnmounted(() => {
  unlockBodyScroll()
})
</script>

<style scoped>
.wc-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.wc-modal--top {
  align-items: flex-start;
  padding-top: 60px;
}

.wc-modal--bottom {
  align-items: flex-end;
  padding-bottom: 60px;
}

.wc-modal--fullscreen {
  padding: 0;
}

.wc-modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.wc-modal__content {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.wc-modal--sm .wc-modal__content {
  max-width: 400px;
}

.wc-modal--md .wc-modal__content {
  max-width: 500px;
}

.wc-modal--lg .wc-modal__content {
  max-width: 700px;
}

.wc-modal--xl .wc-modal__content {
  max-width: 900px;
}

.wc-modal--fullscreen .wc-modal__content {
  border-radius: 0;
  width: 100vw;
  height: 100vh;
  max-width: none;
  max-height: none;
}

.wc-modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #71717a;
  transition: color 0.2s ease;
  padding: 4px;
  line-height: 1;
  z-index: 10;
}

.wc-modal__close:hover {
  color: #3f3f46;
}

.wc-modal__header {
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid #e4e4e7;
}

.wc-modal__title {
  font-size: 20px;
  font-weight: 600;
  color: #18181b;
  margin: 0;
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
  transform: scale(0.9);
}
</style> 