<template>
  <div
    :class="copyClasses"
    @click="handleCopy"
  >
    <slot name="content">
      <span class="wc-copy-text">{{ text }}</span>
    </slot>
    <div class="wc-copy-action">
      <slot name="icon">
        <span class="wc-copy-icon" v-html="currentIcon"></span>
      </slot>
      <span v-if="showLabel" class="wc-copy-label">{{ currentLabel }}</span>
    </div>
    <div
      v-if="showTooltip && tooltipVisible"
      class="wc-copy-tooltip"
      :class="{ 'wc-copy-tooltip--success': copied }"
    >
      {{ tooltipText }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outlined', 'filled', 'minimal'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  showLabel: {
    type: Boolean,
    default: true
  },
  showTooltip: {
    type: Boolean,
    default: true
  },
  copyLabel: {
    type: String,
    default: '复制'
  },
  copiedLabel: {
    type: String,
    default: '已复制'
  },
  tooltipSuccess: {
    type: String,
    default: '复制成功!'
  },
  tooltipError: {
    type: String,
    default: '复制失败'
  },
  resetDelay: {
    type: Number,
    default: 2000
  }
})

const emit = defineEmits(['copy', 'error'])

const copied = ref(false)
const tooltipVisible = ref(false)
const copyError = ref(false)

const copyClasses = computed(() => [
  'wc-copy',
  `wc-copy--${props.variant}`,
  `wc-copy--${props.size}`,
  {
    'wc-copy--copied': copied.value,
    'wc-copy--error': copyError.value
  }
])

const currentIcon = computed(() => {
  if (copyError.value) return '❌'
  if (copied.value) return '✓'
  return '📋'
})

const currentLabel = computed(() => {
  if (copyError.value) return '错误'
  if (copied.value) return props.copiedLabel
  return props.copyLabel
})

const tooltipText = computed(() => {
  if (copyError.value) return props.tooltipError
  if (copied.value) return props.tooltipSuccess
  return ''
})

const handleCopy = async () => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(props.text)
    } else {
      // 降级方案
      const textArea = document.createElement('textarea')
      textArea.value = props.text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
    
    copied.value = true
    copyError.value = false
    emit('copy', props.text)
    
    if (props.showTooltip) {
      tooltipVisible.value = true
      setTimeout(() => {
        tooltipVisible.value = false
      }, 1500)
    }
    
    setTimeout(() => {
      copied.value = false
    }, props.resetDelay)
    
  } catch (err) {
    copyError.value = true
    copied.value = false
    emit('error', err)
    
    if (props.showTooltip) {
      tooltipVisible.value = true
      setTimeout(() => {
        tooltipVisible.value = false
      }, 1500)
    }
    
    setTimeout(() => {
      copyError.value = false
    }, props.resetDelay)
  }
}
</script>

<style scoped>
.wc-copy {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-family: var(--wc-font-family);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  background-color: var(--wc-neutral-50);
  user-select: none;
}

.wc-copy:hover {
  background-color: var(--wc-neutral-100);
}

.wc-copy--sm {
  padding: 4px 8px;
  gap: 6px;
  font-size: 12px;
  border-radius: 6px;
}

.wc-copy--md {
  padding: 8px 12px;
  gap: 8px;
  font-size: 14px;
  border-radius: 8px;
}

.wc-copy--lg {
  padding: 12px 16px;
  gap: 10px;
  font-size: 16px;
  border-radius: 10px;
}

.wc-copy-text {
  flex: 1;
  color: var(--wc-neutral-800);
  line-height: 1.4;
  word-break: break-all;
}

.wc-copy-action {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.wc-copy-icon {
  font-size: 16px;
  line-height: 1;
  transition: all 0.2s ease;
}

.wc-copy-label {
  color: var(--wc-neutral-600);
  font-size: 12px;
  font-weight: 500;
}

.wc-copy-tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--wc-neutral-900);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
}

.wc-copy-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: var(--wc-neutral-900);
}

.wc-copy-tooltip--success {
  background-color: var(--wc-success-500);
}

.wc-copy-tooltip--success::after {
  border-top-color: var(--wc-success-500);
}

/* 变体样式 */
.wc-copy--outlined {
  background-color: transparent;
  border-color: var(--wc-neutral-200);
}

.wc-copy--outlined:hover {
  border-color: var(--wc-primary-500);
  background-color: var(--wc-primary-50);
}

.wc-copy--filled {
  background-color: var(--wc-primary-500);
  color: white;
}

.wc-copy--filled .wc-copy-text {
  color: white;
}

.wc-copy--filled .wc-copy-label {
  color: rgba(255, 255, 255, 0.8);
}

.wc-copy--filled:hover {
  background-color: var(--wc-primary-600);
}

.wc-copy--minimal {
  background-color: transparent;
  border: none;
  padding: 4px 8px;
}

.wc-copy--minimal:hover {
  background-color: var(--wc-neutral-100);
}

/* 状态样式 */
.wc-copy--copied {
  background-color: var(--wc-success-50);
  border-color: var(--wc-success-500);
}

.wc-copy--copied .wc-copy-icon {
  color: var(--wc-success-500);
}

.wc-copy--copied .wc-copy-label {
  color: var(--wc-success-700);
}

.wc-copy--error {
  background-color: var(--wc-error-50);
  border-color: var(--wc-error-500);
}

.wc-copy--error .wc-copy-icon {
  color: var(--wc-error-500);
}

.wc-copy--error .wc-copy-label {
  color: var(--wc-error-700);
}

/* 深色模式 - 使用 .dark class */
.dark .wc-copy {
  background-color: var(--wc-neutral-800);
}

.dark .wc-copy:hover {
  background-color: var(--wc-neutral-700);
}

.dark .wc-copy-text {
  color: var(--wc-neutral-100);
}

.dark .wc-copy-label {
  color: var(--wc-neutral-400);
}

.dark .wc-copy--outlined {
  background-color: transparent;
  border-color: var(--wc-neutral-700);
}

.dark .wc-copy--outlined:hover {
  border-color: var(--wc-primary-400);
  background-color: var(--wc-primary-800);
}

.dark .wc-copy--filled {
  background-color: var(--wc-primary-400);
}

.dark .wc-copy--filled:hover {
  background-color: var(--wc-primary-500);
}

.dark .wc-copy--minimal:hover {
  background-color: var(--wc-neutral-700);
}

.dark .wc-copy--copied {
  background-color: var(--wc-success-800);
  border-color: var(--wc-success-500);
}

.dark .wc-copy--copied .wc-copy-label {
  color: var(--wc-success-200);
}

.dark .wc-copy--error {
  background-color: var(--wc-error-800);
  border-color: var(--wc-error-500);
}

.dark .wc-copy--error .wc-copy-label {
  color: var(--wc-error-200);
}

/* 响应式设计 */
@media (max-width: 480px) {
  .wc-copy {
    gap: 6px;
  }
  
  .wc-copy-text {
    font-size: 13px;
  }
  
  .wc-copy-label {
    font-size: 11px;
  }
  
  .wc-copy-icon {
    font-size: 14px;
  }
}
</style> 