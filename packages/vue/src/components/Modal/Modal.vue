<template>
  <Teleport to="body">
    <Transition
      name="modal"
      appear
    >
      <div
        v-if="isOpen"
        :class="modalWrapperClasses"
        :style="modalWrapperStyles"
        @click="handleOverlayClick"
      >
        <!-- 遮罩层 -->
        <div
          v-if="showOverlay"
          class="wc-modal__overlay"
        />
        
        <!-- 模态框主体 -->
        <div
          ref="modalRef"
          :class="modalClasses"
          :style="modalStyles"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title ? titleId : undefined"
          tabindex="-1"
          @click.stop
        >
          <!-- 关闭按钮 -->
          <Button
            v-if="shouldShowCloseButton"
            variant="text"
            size="sm"
            class="wc-modal__close"
            :aria-label="messages.closeDialog"
            @click="handleClose"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </Button>

          <!-- 头部 -->
          <div
            v-if="title || $slots.header"
            class="wc-modal__header"
          >
            <slot name="header">
              <h3
                v-if="title"
                :id="titleId"
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
  </Teleport>
</template>

<script setup>
import { computed, ref, getCurrentInstance } from 'vue'
import Button from '../Button/Button.vue'
import { useLocale } from '../../LocaleVUE'
import { useOverlayLayer } from '../../interactions'

const props = defineProps({
  // 基础属性
  visible: {
    type: Boolean,
    default: undefined
  },
  open: {
    type: Boolean,
    default: undefined
  },
  modelValue: {
    type: Boolean,
    default: undefined
  },
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  maxWidth: {
    type: String,
    default: null,
    validator: (value) => value === null || ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  // 显示控制
  closable: {
    type: Boolean,
    default: true
  },
  showCloseButton: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  closeOnOverlay: {
    type: Boolean,
    default: true
  },
  disableBackdropClick: {
    type: Boolean,
    default: false
  },
  disableEscapeKeyDown: {
    type: Boolean,
    default: false
  },
  
  // 布局
  centered: {
    type: Boolean,
    default: true
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  fullScreen: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'top', 'bottom'].includes(value)
  },
  
  // 滚动
  scroll: {
    type: String,
    default: 'paper',
    validator: (value) => ['paper', 'body'].includes(value)
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  
  // 样式
  zIndex: {
    type: Number,
    default: 1000
  },
  showOverlay: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close', 'update:modelValue'])

const instance = getCurrentInstance()
const titleId = `modal-title-${instance?.uid || Math.random().toString(36).substr(2, 9)}`
const modalRef = ref(null)
const { messages } = useLocale()

// 统一处理 visible/open/modelValue
const isOpen = computed({
  get() {
    if (props.modelValue !== undefined) return props.modelValue
    if (props.visible !== undefined) return props.visible
    if (props.open !== undefined) return props.open
    return false
  },
  set(val) {
    emit('update:modelValue', val)
    emit('close')
  }
})

// 计算实际使用的尺寸
const actualSize = computed(() => props.maxWidth || props.size)

// 计算样式类名
const modalWrapperClasses = computed(() => {
  const classes = ['wc-modal-overlay']
  if (props.position === 'center' && props.centered) {
    classes.push('wc-modal-overlay--centered')
  } else if (props.position && props.position !== 'center') {
    classes.push(`wc-modal-overlay--${props.position}`)
  }
  return classes
})

const modalClasses = computed(() => {
  const classes = ['wc-modal']
  
  // 尺寸
  if (actualSize.value && !props.fullScreen) {
    classes.push(`wc-modal--${actualSize.value}`)
  }
  
  // 全屏
  if (props.fullScreen) {
    classes.push('wc-modal--fullscreen')
  }
  
  // 全宽
  if (props.fullWidth && !props.fullScreen) {
    classes.push('wc-modal--full-width')
  }
  
  // 滚动行为
  if (props.scroll === 'body') {
    classes.push('wc-modal--scroll-body')
  } else {
    classes.push('wc-modal--scroll-paper')
  }
  
  return classes
})

const modalWrapperStyles = computed(() => {
  return {
    zIndex: props.zIndex
  }
})

const modalStyles = computed(() => {
  const styles = {}
  
  if (props.fullScreen) {
    styles.width = '100vw'
    styles.height = '100vh'
    styles.maxWidth = 'none'
    styles.maxHeight = 'none'
  }
  
  return styles
})

// 决定是否显示关闭按钮
const shouldShowCloseButton = computed(() => {
  return props.closable && props.showCloseButton
})

const handleClose = () => {
  // emit close 事件
  emit('close')
  // v-model 兼容
  emit('update:modelValue', false)
}

const handleOverlayClick = () => {
  if (props.maskClosable && props.closeOnOverlay && !props.disableBackdropClick) {
    handleClose()
  }
}

useOverlayLayer({
  open: isOpen,
  elementRef: modalRef,
  modal: true,
  lockScroll: props.lockScroll,
  restoreFocus: true,
  initialFocus: true,
  closeOnEscape: props.closable && !props.disableEscapeKeyDown,
  closeOnPointerDownOutside: false,
  onEscapeKeyDown: handleClose,
  zIndex: props.zIndex
})
</script>

<style src="./style.css"></style>
