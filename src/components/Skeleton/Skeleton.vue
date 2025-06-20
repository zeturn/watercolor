<template>
  <component
    :is="component"
    :class="skeletonClasses"
    :style="skeletonStyles"
    role="status"
    aria-live="polite"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  /** 动画效果。false 表示无动画，pulse 脉冲动画，wave 波浪动画 */
  animation: {
    type: [String, Boolean],
    default: 'pulse',
    validator: (value: boolean | string) => [false, 'pulse', 'wave'].includes(value as any)
  },
  /** 根元素类型 */
  component: {
    type: String,
    default: 'div'
  },
  /** 组件高度，支持 number(px) 或 string */
  height: {
    type: [String, Number],
    default: undefined
  },
  /** 组件宽度，支持 number(px) 或 string */
  width: {
    type: [String, Number],
    default: undefined
  },
  /** 形状变体 */
  variant: {
    type: String,
    default: 'text',
    validator: (value: string) => ['text', 'rectangular', 'rounded', 'circular'].includes(value)
  }
})

const skeletonClasses = computed(() => {
  const classes: string[] = ['wc-skeleton']

  // Variant
  classes.push(`wc-skeleton--${props.variant}`)

  // Animation
  if (props.animation === 'pulse') {
    classes.push('wc-skeleton--pulse')
  } else if (props.animation === 'wave') {
    classes.push('wc-skeleton--wave')
  }

  // Default size when width / height not provided handled in style

  return classes.join(' ')
})

const skeletonStyles = computed(() => {
  const styles: Record<string, string> = {}

  // Width / height props override defaults
  if (props.width !== undefined) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width as string
  }
  if (props.height !== undefined) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height as string
  }

  // When not provided, set reasonable defaults
  if (!props.width && !props.height) {
    if (props.variant === 'circular') {
      styles.width = '40px'
      styles.height = '40px'
    } else if (props.variant === 'text') {
      styles.width = '100%'
      styles.height = '16px'
    } else {
      styles.width = '100%'
      styles.height = '128px'
    }
  }

  return styles
})
</script>

<style scoped>
/* Variant shapes */
.wc-skeleton {
  background-color: #e5e7eb; /* 灰色背景 */
  display: block;
  position: relative;
  overflow: hidden;
}

.wc-skeleton--text {
  border-radius: 4px;
}

.wc-skeleton--rectangular {
  border-radius: 4px;
}

.wc-skeleton--rounded {
  border-radius: 8px;
}

.wc-skeleton--circular {
  border-radius: 50%;
}

/* Pulse animation */
.wc-skeleton--pulse {
  animation: wc-skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes wc-skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

/* Wave animation */
.wc-skeleton--wave::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: wc-skeleton-wave 1.6s linear infinite;
}

@keyframes wc-skeleton-wave {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style> 