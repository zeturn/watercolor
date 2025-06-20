<template>
  <div :class="avatarClasses" :style="avatarStyles">
    <img v-if="src && !imgError" :src="src" :alt="alt" @error="handleImgError" @load="handleImgLoad" />
    <span v-else-if="!src && children" class="wc-avatar-text">
      {{ avatarText }}
    </span>
    <slot v-else />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  size: {
    type: [String, Number],
    default: 'md',
    validator: (value) => {
      if (typeof value === 'number') return value > 0
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  variant: {
    type: String,
    default: 'circular',
    validator: (value) => ['circular', 'rounded', 'square'].includes(value)
  },
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary', 'success', 'warning', 'error'].includes(value)
  },
  children: {
    type: String,
    default: ''
  }
})

const imgError = ref(false)

const avatarClasses = computed(() => {
  const baseClasses = 'wc-avatar inline-flex items-center justify-center overflow-hidden font-medium select-none'
  const classes = [baseClasses]
  
  // Size classes
  if (typeof props.size === 'string') {
    classes.push(`wc-avatar--${props.size}`)
  }
  
  // Variant classes
  classes.push(`wc-avatar--${props.variant}`)
  
  // Color classes
  if (!props.src || imgError.value) {
    classes.push(`wc-avatar--${props.color}`)
  }
  
  return classes
})

const avatarStyles = computed(() => {
  const styles = {}
  
  // Custom size
  if (typeof props.size === 'number') {
    styles.width = `${props.size}px`
    styles.height = `${props.size}px`
    styles.fontSize = `${props.size * 0.4}px`
  }
  
  return styles
})

const avatarText = computed(() => {
  if (!props.children) return ''
  
  // Generate initials from text
  const words = props.children.trim().split(' ')
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase()
  } else if (words.length >= 2) {
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
  }
  return ''
})

const handleImgError = () => {
  imgError.value = true
}

const handleImgLoad = () => {
  imgError.value = false
}
</script>

<style scoped>
.wc-avatar {
  position: relative;
}

.wc-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Size variants */
.wc-avatar--xs {
  @apply w-6 h-6 text-xs;
}

.wc-avatar--sm {
  @apply w-8 h-8 text-sm;
}

.wc-avatar--md {
  @apply w-10 h-10 text-base;
}

.wc-avatar--lg {
  @apply w-12 h-12 text-lg;
}

.wc-avatar--xl {
  @apply w-16 h-16 text-xl;
}

/* Shape variants */
.wc-avatar--circular {
  @apply rounded-full;
}

.wc-avatar--rounded {
  @apply rounded-lg;
}

.wc-avatar--square {
  @apply rounded-none;
}

/* Color variants */
.wc-avatar--default {
  @apply bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300;
}

.wc-avatar--primary {
  @apply bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300;
}

.wc-avatar--secondary {
  @apply bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300;
}

.wc-avatar--success {
  @apply bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300;
}

.wc-avatar--warning {
  @apply bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300;
}

.wc-avatar--error {
  @apply bg-error-100 text-error-700 dark:bg-error-900 dark:text-error-300;
}

.wc-avatar-text {
  line-height: 1;
}
</style> 