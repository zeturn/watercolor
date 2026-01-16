<template>
  <span
    :class="statusClasses"
    :style="statusStyles"
    :title="statusText"
  >
    <span v-if="showText" class="wc-status__text">{{ statusText }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'success', 'error', 'warning', 'info', 'pending', 'processing', 'cancelled'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  showText: {
    type: Boolean,
    default: false
  },
  animated: {
    type: Boolean,
    default: false
  },
  animationType: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'pulse', 'spin', 'bounce', 'blink', 'shake', 'breathe', 'ripple', 'glow'].includes(value)
  }
})

const statusConfig = {
  default: { 
    bg: '#9ca3af', 
    text: '默认',
    darkBg: '#6b7280' 
  },
  success: { 
    bg: '#10b981', 
    text: '成功',
    darkBg: '#059669' 
  },
  error: { 
    bg: '#ef4444', 
    text: '失败',
    darkBg: '#dc2626' 
  },
  warning: { 
    bg: '#f59e0b', 
    text: '警告',
    darkBg: '#d97706' 
  },
  info: { 
    bg: '#3b82f6', 
    text: '信息',
    darkBg: '#2563eb' 
  },
  pending: { 
    bg: '#8b5cf6', 
    text: '等待中',
    darkBg: '#7c3aed' 
  },
  processing: { 
    bg: '#06b6d4', 
    text: '进行中',
    darkBg: '#0891b2' 
  },
  cancelled: { 
    bg: '#64748b', 
    text: '已取消',
    darkBg: '#475569' 
  }
}

const statusClasses = computed(() => {
  const classes = [
    'wc-status',
    `wc-status--${props.status}`,
    `wc-status--${props.size}`
  ]
  
  if (props.showText) {
    classes.push('wc-status--with-text')
  }
  
  if (props.animated) {
    const animationType = getAnimationType()
    classes.push('wc-status--animated', `wc-status--${animationType}`)
  }
  
  return classes
})

const getAnimationType = () => {
  if (props.animationType !== 'auto') {
    return props.animationType
  }
  
  // 根据状态自动选择动画类型
  const defaultAnimations = {
    processing: 'spin',
    pending: 'pulse',
    success: 'bounce',
    error: 'shake',
    warning: 'blink',
    info: 'ripple',
    cancelled: 'breathe',
    default: 'glow'
  }
  
  return defaultAnimations[props.status] || 'pulse'
}

const statusStyles = computed(() => {
  const config = statusConfig[props.status] || statusConfig.default
  
  return {
    '--status-color': config.bg
  }
})

const statusText = computed(() => {
  return statusConfig[props.status]?.text || '默认'
})
</script>

<style scoped>
.wc-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.wc-status::before {
  content: '';
  display: block;
  border-radius: 50%;
  background-color: var(--status-color);
  flex-shrink: 0;
}

/* 尺寸 */
.wc-status--sm::before {
  width: 8px;
  height: 8px;
}

.wc-status--md::before {
  width: 12px;
  height: 12px;
}

.wc-status--lg::before {
  width: 16px;
  height: 16px;
}

/* 文字样式 */
.wc-status__text {
  font-size: 14px;
  color: var(--wc-text-primary, #374151);
  font-weight: 500;
}

.wc-status--sm .wc-status__text {
  font-size: 12px;
}

.wc-status--lg .wc-status__text {
  font-size: 16px;
}

/* 动画效果 */
.wc-status--pulse::before {
  animation: wc-status-pulse 2s infinite;
}

.wc-status--spin::before {
  animation: wc-status-spin 1s linear infinite;
}

.wc-status--bounce::before {
  animation: wc-status-bounce 1.5s infinite;
}

.wc-status--blink::before {
  animation: wc-status-blink 1s infinite;
}

.wc-status--shake::before {
  animation: wc-status-shake 0.8s infinite;
}

.wc-status--breathe::before {
  animation: wc-status-breathe 3s infinite;
}

.wc-status--ripple::before {
  animation: wc-status-ripple 2s infinite;
}

.wc-status--glow::before {
  animation: wc-status-glow 2.5s infinite;
}

@keyframes wc-status-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

@keyframes wc-status-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes wc-status-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
  60% {
    transform: translateY(-3px);
  }
}

@keyframes wc-status-blink {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0.3;
  }
}

@keyframes wc-status-shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-2px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(2px);
  }
}

@keyframes wc-status-breathe {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

@keyframes wc-status-ripple {
  0% {
    box-shadow: 0 0 0 0 currentColor;
    opacity: 1;
  }
  70% {
    box-shadow: 0 0 0 6px transparent;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
    opacity: 0;
  }
}

@keyframes wc-status-glow {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5);
  }
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-status__text {
    color: var(--wc-text-primary-dark, #f9fafb);
  }
  
  .wc-status--default::before {
    background-color: #6b7280;
  }
  
  .wc-status--success::before {
    background-color: #059669;
  }
  
  .wc-status--error::before {
    background-color: #dc2626;
  }
  
  .wc-status--warning::before {
    background-color: #d97706;
  }
  
  .wc-status--info::before {
    background-color: #2563eb;
  }
  
  .wc-status--pending::before {
    background-color: #7c3aed;
  }
  
  .wc-status--processing::before {
    background-color: #0891b2;
  }
  
  .wc-status--cancelled::before {
    background-color: #475569;
  }
}
</style> 