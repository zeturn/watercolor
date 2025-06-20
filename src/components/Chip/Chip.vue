<template>
  <div :class="chipClasses" @click="handleClick">
    <!-- Avatar/Icon -->
    <div v-if="$slots.avatar || avatar" class="wc-chip-avatar">
      <slot name="avatar">
        <img v-if="avatar" :src="avatar" alt="" class="w-full h-full object-cover rounded-full" />
      </slot>
    </div>
    
    <!-- Label -->
    <span class="wc-chip-label">
      <slot>{{ label }}</slot>
    </span>
    
    <!-- Delete Icon -->
    <button 
      v-if="deletable || onDelete"
      type="button"
      class="wc-chip-delete"
      @click.stop="handleDelete"
      :aria-label="deleteIcon || '删除'"
    >
      <slot name="deleteIcon">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </slot>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  deletable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outlined'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary', 'success', 'warning', 'error'].includes(value)
  },
  deleteIcon: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click', 'delete'])

const chipClasses = computed(() => {
  const baseClasses = 'wc-chip inline-flex items-center gap-1 font-medium transition-all duration-200'
  const classes = [baseClasses]
  
  // Size classes
  classes.push(`wc-chip--${props.size}`)
  
  // Variant and color classes
  classes.push(`wc-chip--${props.variant}`)
  classes.push(`wc-chip--${props.color}`)
  
  // Interactive states
  if (props.clickable && !props.disabled) {
    classes.push('wc-chip--clickable')
  }
  
  if (props.disabled) {
    classes.push('wc-chip--disabled')
  }
  
  return classes
})

const handleClick = (event) => {
  if (!props.disabled && props.clickable) {
    emit('click', event)
  }
}

const handleDelete = (event) => {
  if (!props.disabled) {
    emit('delete', event)
  }
}
</script>

<style scoped>
.wc-chip {
  border-radius: 16px;
  border: 1px solid transparent;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: middle;
  box-sizing: border-box;
}

/* Size variants */
.wc-chip--sm {
  @apply px-2 py-1 text-xs min-h-[24px];
}

.wc-chip--md {
  @apply px-3 py-1.5 text-sm min-h-[32px];
}

.wc-chip--lg {
  @apply px-4 py-2 text-base min-h-[40px];
}

/* Filled variant colors */
.wc-chip--filled.wc-chip--default {
  @apply bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200;
}

.wc-chip--filled.wc-chip--primary {
  @apply bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200;
}

.wc-chip--filled.wc-chip--secondary {
  @apply bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200;
}

.wc-chip--filled.wc-chip--success {
  @apply bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200;
}

.wc-chip--filled.wc-chip--warning {
  @apply bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200;
}

.wc-chip--filled.wc-chip--error {
  @apply bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-200;
}

/* Outlined variant colors */
.wc-chip--outlined.wc-chip--default {
  @apply bg-transparent border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300;
}

.wc-chip--outlined.wc-chip--primary {
  @apply bg-transparent border-primary-300 text-primary-700 dark:border-primary-600 dark:text-primary-300;
}

.wc-chip--outlined.wc-chip--secondary {
  @apply bg-transparent border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300;
}

.wc-chip--outlined.wc-chip--success {
  @apply bg-transparent border-success-300 text-success-700 dark:border-success-600 dark:text-success-300;
}

.wc-chip--outlined.wc-chip--warning {
  @apply bg-transparent border-warning-300 text-warning-700 dark:border-warning-600 dark:text-warning-300;
}

.wc-chip--outlined.wc-chip--error {
  @apply bg-transparent border-error-300 text-error-700 dark:border-error-600 dark:text-error-300;
}

/* Interactive states */
.wc-chip--clickable {
  @apply cursor-pointer;
}

.wc-chip--clickable:hover:not(.wc-chip--disabled) {
  @apply opacity-80;
}

.wc-chip--disabled {
  @apply opacity-50 cursor-not-allowed pointer-events-none;
}

/* Avatar */
.wc-chip-avatar {
  @apply flex-shrink-0 overflow-hidden rounded-full;
}

.wc-chip--sm .wc-chip-avatar {
  @apply w-4 h-4 -ml-1;
}

.wc-chip--md .wc-chip-avatar {
  @apply w-5 h-5 -ml-1;
}

.wc-chip--lg .wc-chip-avatar {
  @apply w-6 h-6 -ml-1;
}

/* Label */
.wc-chip-label {
  @apply truncate;
}

/* Delete button */
.wc-chip-delete {
  @apply flex-shrink-0 rounded-full transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10;
}

.wc-chip--sm .wc-chip-delete {
  @apply p-0.5 -mr-1;
}

.wc-chip--md .wc-chip-delete {
  @apply p-1 -mr-1;
}

.wc-chip--lg .wc-chip-delete {
  @apply p-1 -mr-1;
}
</style> 