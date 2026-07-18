<template>
  <component
    :is="component"
    v-if="loading"
    :class="skeletonClasses"
    :style="skeletonStyles"
    role="status"
    aria-live="polite"
    :aria-label="messages.loading"
    aria-busy="true"
  />
  <template v-else>
    <slot />
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../../LocaleVUE'
import './style.css'

const { messages } = useLocale()

const props = defineProps({
  /** 是否显示加载状态 */
  loading: {
    type: Boolean,
    default: true
  },
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
