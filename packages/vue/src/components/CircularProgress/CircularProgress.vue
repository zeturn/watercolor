<template>
  <div
    :class="progressClasses"
    role="progressbar"
    :aria-valuenow="variantAriaValueNow"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-label="messages.circularProgress"
  >
    <svg
      :width="size"
      :height="size"
      :viewBox="viewBox"
      class="wc-circular-progress-svg"
    >
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
    <div
      v-if="showValue"
      class="wc-circular-progress-value"
    >
      {{ Math.round(value) }}%
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLocale } from '../../LocaleVUE'
import './style.css'

const { messages } = useLocale()

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
  },
  overlay: {
    type: Boolean,
    default: false
  },
  centered: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  }
})

const sizeNumber = computed(() => (typeof props.size === 'string' ? parseInt(props.size) : props.size))
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
  const classes = ['wc-circular-progress']
  classes.push(`wc-circular-progress--${props.color}`)
  if (props.variant === 'indeterminate') classes.push('wc-circular-progress--indeterminate')
  if (props.overlay) classes.push('wc-circular-progress--overlay')
  if (props.centered) classes.push('wc-circular-progress--centered')
  if (props.inline) classes.push('wc-circular-progress--inline')
  return classes
})

const circleClasses = computed(() => (props.variant === 'indeterminate' ? ['wc-circular-progress-circle--indeterminate'] : []))

const variantAriaValueNow = computed(() => (props.variant === 'determinate' ? props.value : undefined))
</script>
