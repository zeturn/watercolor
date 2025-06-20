<template>
  <span class="wc-number-animation">{{ formattedValue }}</span>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3000
  },
  from: {
    type: Number,
    default: 0
  },
  to: {
    type: Number,
    required: true
  },
  locale: {
    type: String,
    default: ''
  },
  precision: {
    type: Number,
    default: 0
  },
  showSeparator: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['finish'])

const currentValue = ref(props.from)
let startTime: number | null = null
let rafId: number | null = null

function step(timestamp: number) {
  if (startTime === null) startTime = timestamp
  const progress = Math.min((timestamp - startTime) / props.duration, 1)
  currentValue.value = props.from + (props.to - props.from) * progress
  if (progress < 1 && props.active) {
    rafId = requestAnimationFrame(step)
  } else {
    currentValue.value = props.to
    emit('finish')
  }
}

function startAnimation() {
  cancelAnimation()
  startTime = null
  if (props.active) {
    rafId = requestAnimationFrame(step)
  } else {
    currentValue.value = props.to
  }
}

function cancelAnimation() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

// Watcher for prop changes
watch(
  () => [props.active, props.to, props.from, props.duration],
  () => {
    startAnimation()
  },
  { immediate: true }
)

onMounted(() => {
  if (props.active) startAnimation()
})

onBeforeUnmount(cancelAnimation)

function formatNumber(value: number): string {
  const fixed = value.toFixed(props.precision)
  if (props.showSeparator) {
    const num = Number(fixed)
    return num.toLocaleString(props.locale || undefined, {
      minimumFractionDigits: props.precision,
      maximumFractionDigits: props.precision
    })
  }
  return fixed
}

const formattedValue = computed(() => formatNumber(currentValue.value))
</script>

<style scoped>
.wc-number-animation {
  font-variant-numeric: tabular-nums;
}
</style> 