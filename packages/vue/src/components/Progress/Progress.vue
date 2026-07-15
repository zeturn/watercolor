<template>
  <div class="wc-progress-wrapper">
    <div
      v-if="label || showPercent"
      class="wc-progress-header"
    >
      <span
        v-if="label"
        class="wc-progress-label"
      >
        {{ label }}
      </span>
      <span
        v-if="showPercent"
        class="wc-progress-percent"
      >
        {{ Math.round(safeValue) }}%
      </span>
    </div>
    
    <div
      :class="progressClasses"
      role="progressbar"
      :aria-label="label || '进度'"
      :aria-valuenow="safeValue"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div 
        :class="barClasses"
        :style="barStyle"
      />
    </div>
  </div>
</template>

<script setup>
import './style.css'
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: [Number, String],
    default: 0,
    validator: (value) => {
      const num = Number(value)
      return !Number.isNaN(num)
    }
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

// 统一校正并限制进度值，防止出现 NaN 或非法数值导致宽度始终为 0%
const safeValue = computed(() => {
  const numeric = Number(props.value)
  if (Number.isNaN(numeric)) return 0
  return Math.max(0, Math.min(100, numeric))
})

const barClasses = computed(() => [
  'wc-progress__bar',
  `wc-progress__bar--${props.color}`,
  props.animated && 'wc-progress__bar--animated'
].filter(Boolean))

const barStyle = computed(() => ({
  width: `${safeValue.value}%`
}))
</script>
