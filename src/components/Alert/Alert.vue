<template>
  <div
    v-if="visible"
    :class="alertClasses"
    role="alert"
  >
    <div class="wc-alert-icon" v-if="showIcon">
      <span v-html="iconContent"></span>
    </div>
    <div class="wc-alert-content">
      <div v-if="title" class="wc-alert-title">{{ title }}</div>
      <div class="wc-alert-message">
        <slot>{{ message }}</slot>
      </div>
    </div>
    <button
      v-if="closable"
      @click="handleClose"
      class="wc-alert-close"
      type="button"
      aria-label="关闭"
    >
      ×
    </button>
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
    default: false
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outlined', 'standard'].includes(value)
  }
})

const emit = defineEmits(['close'])

const visible = ref(true)

const alertClasses = computed(() => [
  'wc-alert',
  `wc-alert--${props.type}`,
  `wc-alert--${props.variant}`
])

const iconContent = computed(() => {
  const icons = {
    success: '✓',
    info: 'ⓘ',
    warning: '⚠',
    error: '✕'
  }
  return icons[props.type] || icons.info
})

const handleClose = () => {
  visible.value = false
  emit('close')
}
</script>

<style scoped>
.wc-alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  font-family: var(--wc-font-family);
  position: relative;
}

.wc-alert-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
}

.wc-alert-content {
  flex: 1;
  min-width: 0;
}

.wc-alert-title {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  line-height: 1.4;
}

.wc-alert-message {
  font-size: 14px;
  line-height: 1.5;
}

.wc-alert-close {
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.wc-alert-close:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Success Alert */
.wc-alert--success.wc-alert--filled {
  background-color: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.wc-alert--success.wc-alert--filled .wc-alert-icon {
  background-color: #22c55e;
  color: white;
}

.wc-alert--success.wc-alert--outlined {
  background-color: transparent;
  color: #166534;
  border: 1px solid #22c55e;
}

.wc-alert--success.wc-alert--outlined .wc-alert-icon {
  color: #22c55e;
}

.wc-alert--success.wc-alert--standard {
  background-color: #f0fdf4;
  color: #166534;
  border: none;
}

.wc-alert--success.wc-alert--standard .wc-alert-icon {
  color: #22c55e;
}

/* Info Alert */
.wc-alert--info.wc-alert--filled {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #93c5fd;
}

.wc-alert--info.wc-alert--filled .wc-alert-icon {
  background-color: #3b82f6;
  color: white;
}

.wc-alert--info.wc-alert--outlined {
  background-color: transparent;
  color: #1e40af;
  border: 1px solid #3b82f6;
}

.wc-alert--info.wc-alert--outlined .wc-alert-icon {
  color: #3b82f6;
}

.wc-alert--info.wc-alert--standard {
  background-color: #eff6ff;
  color: #1e40af;
  border: none;
}

.wc-alert--info.wc-alert--standard .wc-alert-icon {
  color: #3b82f6;
}

/* Warning Alert */
.wc-alert--warning.wc-alert--filled {
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #fcd34d;
}

.wc-alert--warning.wc-alert--filled .wc-alert-icon {
  background-color: #f59e0b;
  color: white;
}

.wc-alert--warning.wc-alert--outlined {
  background-color: transparent;
  color: #92400e;
  border: 1px solid #f59e0b;
}

.wc-alert--warning.wc-alert--outlined .wc-alert-icon {
  color: #f59e0b;
}

.wc-alert--warning.wc-alert--standard {
  background-color: #fffbeb;
  color: #92400e;
  border: none;
}

.wc-alert--warning.wc-alert--standard .wc-alert-icon {
  color: #f59e0b;
}

/* Error Alert */
.wc-alert--error.wc-alert--filled {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}

.wc-alert--error.wc-alert--filled .wc-alert-icon {
  background-color: #ef4444;
  color: white;
}

.wc-alert--error.wc-alert--outlined {
  background-color: transparent;
  color: #991b1b;
  border: 1px solid #ef4444;
}

.wc-alert--error.wc-alert--outlined .wc-alert-icon {
  color: #ef4444;
}

.wc-alert--error.wc-alert--standard {
  background-color: #fef2f2;
  color: #991b1b;
  border: none;
}

.wc-alert--error.wc-alert--standard .wc-alert-icon {
  color: #ef4444;
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-alert-close:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* Success */
  .wc-alert--success.wc-alert--filled {
    background-color: #14532d;
    color: #bbf7d0;
    border-color: #16a34a;
  }

  .wc-alert--success.wc-alert--outlined {
    color: #bbf7d0;
  }

  .wc-alert--success.wc-alert--standard {
    background-color: #052e16;
    color: #bbf7d0;
  }

  /* Info */
  .wc-alert--info.wc-alert--filled {
    background-color: #1e3a8a;
    color: #93c5fd;
    border-color: #3b82f6;
  }

  .wc-alert--info.wc-alert--outlined {
    color: #93c5fd;
  }

  .wc-alert--info.wc-alert--standard {
    background-color: #1e3a8a;
    color: #93c5fd;
  }

  /* Warning */
  .wc-alert--warning.wc-alert--filled {
    background-color: #92400e;
    color: #fcd34d;
    border-color: #f59e0b;
  }

  .wc-alert--warning.wc-alert--outlined {
    color: #fcd34d;
  }

  .wc-alert--warning.wc-alert--standard {
    background-color: #451a03;
    color: #fcd34d;
  }

  /* Error */
  .wc-alert--error.wc-alert--filled {
    background-color: #991b1b;
    color: #fca5a5;
    border-color: #ef4444;
  }

  .wc-alert--error.wc-alert--outlined {
    color: #fca5a5;
  }

  .wc-alert--error.wc-alert--standard {
    background-color: #450a0a;
    color: #fca5a5;
  }
}
</style> 