<template>
  <div
    v-if="visible"
    :class="bannerClasses"
    :style="bannerStyles"
  >
    <div class="wc-banner-content">
      <div v-if="showIcon" class="wc-banner-icon">
        <span v-html="iconContent"></span>
      </div>
      <div class="wc-banner-text">
        <div v-if="title" class="wc-banner-title">{{ title }}</div>
        <div class="wc-banner-message">
          <slot>{{ message }}</slot>
        </div>
      </div>
      <div v-if="$slots.actions || showDefaultAction" class="wc-banner-actions">
        <slot name="actions">
          <button
            v-if="showDefaultAction"
            @click="handleAction"
            class="wc-banner-action-btn"
            type="button"
          >
            {{ actionText }}
          </button>
        </slot>
      </div>
      <button
        v-if="closable"
        @click="handleClose"
        class="wc-banner-close"
        type="button"
        aria-label="关闭"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'info', 'warning', 'error'].includes(value)
  },
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  showDefaultAction: {
    type: Boolean,
    default: false
  },
  actionText: {
    type: String,
    default: '立即行动'
  },
  sticky: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1000
  }
})

const emit = defineEmits(['close', 'action'])

const visible = ref(true)

const bannerClasses = computed(() => [
  'wc-banner',
  `wc-banner--${props.type}`,
  `wc-banner--${props.position}`,
  {
    'wc-banner--sticky': props.sticky
  }
])

const bannerStyles = computed(() => ({
  zIndex: props.zIndex
}))

const iconContent = computed(() => {
  const icons = {
    success: '✓',
    info: '📢',
    warning: '⚠',
    error: '✕'
  }
  return icons[props.type] || icons.info
})

const handleClose = () => {
  visible.value = false
  emit('close')
}

const handleAction = () => {
  emit('action')
}
</script>

<style scoped>
.wc-banner {
  width: 100%;
  font-family: var(--wc-font-family);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.wc-banner--sticky {
  position: fixed;
  left: 0;
  right: 0;
}

.wc-banner--top {
  top: 0;
}

.wc-banner--bottom {
  bottom: 0;
}

.wc-banner-content {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.wc-banner-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50%;
}

.wc-banner-text {
  flex: 1;
  min-width: 0;
}

.wc-banner-title {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  line-height: 1.4;
}

.wc-banner-message {
  font-size: 14px;
  line-height: 1.5;
}

.wc-banner-actions {
  flex-shrink: 0;
  display: flex;
  gap: 8px;
}

.wc-banner-action-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: inherit;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wc-banner-action-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.wc-banner-close {
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
  color: inherit;
}

.wc-banner-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Success Banner */
.wc-banner--success {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
}

.wc-banner--success .wc-banner-icon {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Info Banner */
.wc-banner--info {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

.wc-banner--info .wc-banner-icon {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Warning Banner */
.wc-banner--warning {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.wc-banner--warning .wc-banner-icon {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Error Banner */
.wc-banner--error {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}

.wc-banner--error .wc-banner-icon {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .wc-banner-content {
    padding: 12px 16px;
    gap: 12px;
    flex-wrap: wrap;
  }
  
  .wc-banner-title {
    font-size: 14px;
  }
  
  .wc-banner-message {
    font-size: 13px;
  }
  
  .wc-banner-actions {
    width: 100%;
    margin-top: 8px;
  }
  
  .wc-banner-action-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .wc-banner-content {
    padding: 10px 12px;
  }
  
  .wc-banner-icon {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
  
  .wc-banner-close {
    width: 20px;
    height: 20px;
    font-size: 18px;
  }
}
</style> 