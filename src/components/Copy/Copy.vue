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
  background-color: #f9fafb;
  user-select: none;
}

.wc-copy:hover {
  background-color: #f3f4f6;
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
  color: #374151;
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
  color: #6b7280;
  font-size: 12px;
  font-weight: 500;
}

.wc-copy-tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1f2937;
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
  border-top-color: #1f2937;
}

.wc-copy-tooltip--success {
  background-color: #22c55e;
}

.wc-copy-tooltip--success::after {
  border-top-color: #22c55e;
}

/* 变体样式 */
.wc-copy--outlined {
  background-color: transparent;
  border-color: #d1d5db;
}

.wc-copy--outlined:hover {
  border-color: #1a8cff;
  background-color: #f0f9ff;
}

.wc-copy--filled {
  background-color: #1a8cff;
  color: white;
}

.wc-copy--filled .wc-copy-text {
  color: white;
}

.wc-copy--filled .wc-copy-label {
  color: rgba(255, 255, 255, 0.8);
}

.wc-copy--filled:hover {
  background-color: #1976d2;
}

.wc-copy--minimal {
  background-color: transparent;
  border: none;
  padding: 4px 8px;
}

.wc-copy--minimal:hover {
  background-color: #f3f4f6;
}

/* 状态样式 */
.wc-copy--copied {
  background-color: #dcfce7;
  border-color: #22c55e;
}

.wc-copy--copied .wc-copy-icon {
  color: #22c55e;
}

.wc-copy--copied .wc-copy-label {
  color: #166534;
}

.wc-copy--error {
  background-color: #fee2e2;
  border-color: #ef4444;
}

.wc-copy--error .wc-copy-icon {
  color: #ef4444;
}

.wc-copy--error .wc-copy-label {
  color: #991b1b;
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-copy {
    background-color: #374151;
  }
  
  .wc-copy:hover {
    background-color: #4b5563;
  }
  
  .wc-copy-text {
    color: #f3f4f6;
  }
  
  .wc-copy-label {
    color: #d1d5db;
  }
  
  .wc-copy--outlined {
    background-color: transparent;
    border-color: #4b5563;
  }
  
  .wc-copy--outlined:hover {
    border-color: #60a5fa;
    background-color: #1e3a8a;
  }
  
  .wc-copy--filled {
    background-color: #60a5fa;
  }
  
  .wc-copy--filled:hover {
    background-color: #3b82f6;
  }
  
  .wc-copy--minimal:hover {
    background-color: #4b5563;
  }
  
  .wc-copy--copied {
    background-color: #14532d;
    border-color: #22c55e;
  }
  
  .wc-copy--copied .wc-copy-label {
    color: #bbf7d0;
  }
  
  .wc-copy--error {
    background-color: #991b1b;
    border-color: #ef4444;
  }
  
  .wc-copy--error .wc-copy-label {
    color: #fca5a5;
  }
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