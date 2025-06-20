<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
    :style="buttonStyles"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'filled', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  }
})

const emit = defineEmits(['click'])

const colorMap = {
  primary: { text: '#1a8cff', bg: '#1a8cff' },
  secondary: { text: '#71717a', bg: '#71717a' },
  success: { text: '#10b981', bg: '#10b981' },
  warning: { text: '#f59e0b', bg: '#f59e0b' },
  error: { text: '#ef4444', bg: '#ef4444' },
  purple: { text: '#a855f7', bg: '#a855f7' },
  orange: { text: '#f97316', bg: '#f97316' },
  cyan: { text: '#06b6d4', bg: '#06b6d4' },
  pink: { text: '#ec4899', bg: '#ec4899' }
}

const buttonClasses = computed(() => {
  return ['wc-btn', `wc-btn--${props.variant}`, `wc-btn--${props.size}`]
})

const buttonStyles = computed(() => {
  const colors = colorMap[props.variant] || colorMap.primary
  
  if (props.variant === 'filled') {
    return {
      backgroundColor: colors.bg,
      color: 'white'
    }
  } else {
    return {
      color: colors.text,
      backgroundColor: 'transparent'
    }
  }
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.wc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  border: none;
}

.wc-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.wc-btn--sm {
  padding: 6px 12px;
  font-size: 12px;
}

.wc-btn--md {
  padding: 8px 16px;
  font-size: 14px;
}

.wc-btn--lg {
  padding: 12px 24px;
  font-size: 16px;
}

/* 悬停和激活效果 */
.wc-btn--primary:not(:disabled):hover {
  background-color: #1a8cff !important;
  color: white !important;
}

.wc-btn--primary:not(:disabled):active {
  background-color: #0070f3 !important;
}

.wc-btn--secondary:not(:disabled):hover {
  background-color: #71717a !important;
  color: white !important;
}

.wc-btn--secondary:not(:disabled):active {
  background-color: #52525b !important;
}

.wc-btn--success:not(:disabled):hover {
  background-color: #10b981 !important;
  color: white !important;
}

.wc-btn--success:not(:disabled):active {
  background-color: #059669 !important;
}

.wc-btn--warning:not(:disabled):hover {
  background-color: #f59e0b !important;
  color: white !important;
}

.wc-btn--warning:not(:disabled):active {
  background-color: #d97706 !important;
}

.wc-btn--error:not(:disabled):hover {
  background-color: #ef4444 !important;
  color: white !important;
}

.wc-btn--error:not(:disabled):active {
  background-color: #dc2626 !important;
}

.wc-btn--purple:not(:disabled):hover {
  background-color: #a855f7 !important;
  color: white !important;
}

.wc-btn--purple:not(:disabled):active {
  background-color: #9333ea !important;
}

.wc-btn--orange:not(:disabled):hover {
  background-color: #f97316 !important;
  color: white !important;
}

.wc-btn--orange:not(:disabled):active {
  background-color: #ea580c !important;
}

.wc-btn--cyan:not(:disabled):hover {
  background-color: #06b6d4 !important;
  color: white !important;
}

.wc-btn--cyan:not(:disabled):active {
  background-color: #0891b2 !important;
}

.wc-btn--pink:not(:disabled):hover {
  background-color: #ec4899 !important;
  color: white !important;
}

.wc-btn--pink:not(:disabled):active {
  background-color: #db2777 !important;
}

.wc-btn--filled:not(:disabled):hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.wc-btn--filled:not(:disabled):active {
  opacity: 0.8;
  transform: translateY(0);
}
</style> 