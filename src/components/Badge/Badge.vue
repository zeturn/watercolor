<template>
  <span :class="badgeClasses" :style="badgeStyles">
    <slot v-if="!dot" />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  dot: {
    type: Boolean,
    default: false
  }
})

const colorMap = {
  primary: { bg: '#e8f4ff', text: '#0070f3', darkBg: '#001559', darkText: '#a3d2ff' },
  secondary: { bg: '#f4f4f5', text: '#3f3f46', darkBg: '#09090b', darkText: '#d4d4d8' },
  success: { bg: '#ecfdf5', text: '#047857', darkBg: '#022c22', darkText: '#a7f3d0' },
  warning: { bg: '#fffbeb', text: '#b45309', darkBg: '#431407', darkText: '#fde68a' },
  error: { bg: '#fef2f2', text: '#b91c1c', darkBg: '#7f1d1d', darkText: '#fecaca' },
  purple: { bg: '#faf5ff', text: '#7c3aed', darkBg: '#3b0764', darkText: '#e9d5ff' },
  orange: { bg: '#fff7ed', text: '#c2410c', darkBg: '#431407', darkText: '#fed7aa' },
  cyan: { bg: '#ecfeff', text: '#0e7490', darkBg: '#083344', darkText: '#a5f3fc' },
  pink: { bg: '#fdf2f8', text: '#be185d', darkBg: '#500724', darkText: '#fbcfe8' }
}

const badgeClasses = computed(() => {
  return ['wc-badge', `wc-badge--${props.variant}`, `wc-badge--${props.size}`, props.dot ? 'wc-badge--dot' : '']
})

const badgeStyles = computed(() => {
  const colors = colorMap[props.variant] || colorMap.primary
  
  return {
    backgroundColor: colors.bg,
    color: colors.text
  }
})
</script>

<style scoped>
.wc-badge {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  border-radius: 9999px;
}

.wc-badge--sm {
  padding: 2px 8px;
  font-size: 12px;
}

.wc-badge--md {
  padding: 2px 10px;
  font-size: 12px;
}

.wc-badge--lg {
  padding: 4px 12px;
  font-size: 14px;
}

.wc-badge--dot.wc-badge--sm {
  width: 8px;
  height: 8px;
  padding: 0;
}

.wc-badge--dot.wc-badge--md {
  width: 10px;
  height: 10px;
  padding: 0;
}

.wc-badge--dot.wc-badge--lg {
  width: 12px;
  height: 12px;
  padding: 0;
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-badge--primary {
    background-color: #001559 !important;
    color: #a3d2ff !important;
  }
  
  .wc-badge--secondary {
    background-color: #09090b !important;
    color: #d4d4d8 !important;
  }
  
  .wc-badge--success {
    background-color: #022c22 !important;
    color: #a7f3d0 !important;
  }
  
  .wc-badge--warning {
    background-color: #431407 !important;
    color: #fde68a !important;
  }
  
  .wc-badge--error {
    background-color: #7f1d1d !important;
    color: #fecaca !important;
  }
  
  .wc-badge--purple {
    background-color: #3b0764 !important;
    color: #e9d5ff !important;
  }
  
  .wc-badge--orange {
    background-color: #431407 !important;
    color: #fed7aa !important;
  }
  
  .wc-badge--cyan {
    background-color: #083344 !important;
    color: #a5f3fc !important;
  }
  
  .wc-badge--pink {
    background-color: #500724 !important;
    color: #fbcfe8 !important;
  }
}
</style> 