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
import './style.css'

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