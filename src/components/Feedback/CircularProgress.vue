<template>
  <div :class="progressClasses" role="progressbar" :aria-valuenow="value" :aria-valuemin="0" :aria-valuemax="100">
    <svg :width="size" :height="size" :viewBox="viewBox" class="wc-circular-progress-svg">
      <!-- Background circle -->
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="thickness"
        stroke="currentColor"
        fill="none"
        class="wc-circular-progress-bg"
      />
      
      <!-- Progress circle -->
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="thickness"
        stroke="currentColor"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        :class="circleClasses"
        class="wc-circular-progress-circle"
      />
    </svg>
    
    <!-- Value text -->
    <div v-if="showValue" class="wc-circular-progress-value">
      {{ Math.round(value) }}%
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
  size: {
    type: [Number, String],
    default: 40
  },
  thickness: {
    type: Number,
    default: 3.6
  },
  variant: {
    type: String,
    default: 'indeterminate',
    validator: (value) => ['determinate', 'indeterminate'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'warning', 'error', 'inherit'].includes(value)
  },
  showValue: {
    type: Boolean,
    default: false
  }
})

const sizeNumber = computed(() => {
  return typeof props.size === 'string' ? parseInt(props.size) : props.size
})

const center = computed(() => sizeNumber.value / 2)
const radius = computed(() => (sizeNumber.value - props.thickness) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const viewBox = computed(() => `0 0 ${sizeNumber.value} ${sizeNumber.value}`)

const strokeDashoffset = computed(() => {
  if (props.variant === 'determinate') {
    return circumference.value - (props.value / 100) * circumference.value
  }
  return 0
})

const progressClasses = computed(() => {
  const baseClasses = 'wc-circular-progress inline-flex relative items-center justify-center'
  const classes = [baseClasses]
  
  classes.push(`wc-circular-progress--${props.color}`)
  
  if (props.variant === 'indeterminate') {
    classes.push('wc-circular-progress--indeterminate')
  }
  
  return classes
})

const circleClasses = computed(() => {
  const classes = []
  
  if (props.variant === 'indeterminate') {
    classes.push('wc-circular-progress-circle--indeterminate')
  }
  
  return classes
})
</script>

<style scoped>
.wc-circular-progress {
  color: theme('colors.neutral.300');
}

.wc-circular-progress-svg {
  display: block;
  transform: rotate(-90deg);
}

.wc-circular-progress-bg {
  opacity: 0.3;
}

.wc-circular-progress-circle {
  transition: stroke-dashoffset 0.3s ease-in-out;
  stroke-linecap: round;
}

.wc-circular-progress-value {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 500;
  color: theme('colors.neutral.600');
}

.dark .wc-circular-progress-value {
  color: theme('colors.neutral.400');
}

/* Color variants */
.wc-circular-progress--primary {
  color: theme('colors.primary.500');
}

.wc-circular-progress--secondary {
  color: theme('colors.neutral.500');
}

.wc-circular-progress--success {
  color: theme('colors.success.500');
}

.wc-circular-progress--warning {
  color: theme('colors.warning.500');
}

.wc-circular-progress--error {
  color: theme('colors.error.500');
}

.wc-circular-progress--inherit {
  color: inherit;
}

/* Indeterminate animation */
.wc-circular-progress--indeterminate .wc-circular-progress-svg {
  animation: wc-circular-rotate 1.4s linear infinite;
}

.wc-circular-progress-circle--indeterminate {
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  animation: wc-circular-dash 1.4s ease-in-out infinite;
}

@keyframes wc-circular-rotate {
  100% {
    transform: rotate(270deg);
  }
}

@keyframes wc-circular-dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
}
</style> 