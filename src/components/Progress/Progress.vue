<template>
  <div class="wc-progress-wrapper">
    <div
      v-if="label || showPercent"
      class="wc-progress-header"
    >
      <label
        v-if="label"
        class="wc-progress-label"
      >
        {{ label }}
      </label>
      <span
        v-if="showPercent"
        class="wc-progress-percent"
      >
        {{ Math.round(value) }}%
      </span>
    </div>
    
    <div
      :class="progressClasses"
    >
      <div 
        :class="barClasses"
        :style="barStyle"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  },
  label: {
    type: String,
    default: ''
  },
  showPercent: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  animated: {
    type: Boolean,
    default: false
  }
})

const progressClasses = computed(() => ['wc-progress', `wc-progress--${props.size}`])

const barClasses = computed(() => [
  'wc-progress__bar',
  `wc-progress__bar--${props.color}`,
  props.animated && 'wc-progress__bar--animated'
].filter(Boolean))

const barStyle = computed(() => ({
  width: `${Math.max(0, Math.min(100, props.value))}%`
}))
</script>

<style scoped>
.wc-progress-wrapper {
  width: 100%;
}

.wc-progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.wc-progress-label {
  font-size: 14px;
  font-weight: 500;
  color: #3f3f46;
}

.wc-progress-percent {
  font-size: 14px;
  color: #71717a;
}

.wc-progress {
  width: 100%;
  background-color: #e4e4e7;
  border-radius: 9999px;
  overflow: hidden;
}

.wc-progress--sm {
  height: 4px;
}

.wc-progress--md {
  height: 8px;
}

.wc-progress--lg {
  height: 12px;
}

.wc-progress__bar {
  height: 100%;
  border-radius: 9999px;
  transition: all 0.5s ease;
}

.wc-progress__bar--animated {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-progress-label {
    color: #d4d4d8;
  }
  
  .wc-progress-percent {
    color: #a1a1aa;
  }
  
  .wc-progress {
    background-color: #3f3f46;
  }
}
</style> 