<template>
  <div v-if="visible" :class="spinnerClasses" :style="combinedStyle">
    <div v-if="text || $slots.default" class="wc-spinner__text">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { 
    type: Number, 
    default: 40 
  },
  color: { 
    type: String, 
    default: 'var(--wc-primary-500)' 
  },
  thickness: { 
    type: Number, 
    default: 4 
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'dots', 'pulse'].includes(value)
  },
  text: {
    type: String,
    default: ''
  },
  speed: {
    type: String,
    default: '1s'
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
  },
  visible: {
    type: Boolean,
    default: true
  }
})

const spinnerClasses = computed(() => {
  const classes = ['wc-spinner']
  
  if (props.variant !== 'default') {
    classes.push(`wc-spinner--${props.variant}`)
  }
  
  if (props.overlay) {
    classes.push('wc-spinner--overlay')
  }
  
  if (props.centered) {
    classes.push('wc-spinner--centered')
  }
  
  if (props.inline) {
    classes.push('wc-spinner--inline')
  }
  
  return classes
})

const combinedStyle = computed(() => {
  const styles = {
    width: props.size + 'px',
    height: props.size + 'px',
    borderWidth: props.thickness + 'px',
    borderTopColor: props.color
  }
  
  if (props.speed !== '1s') {
    styles['--spinner-speed'] = props.speed
  }
  
  return styles
})
</script>

<style scoped>
.wc-spinner {
  border: 4px solid var(--wc-neutral-200);
  border-top-color: var(--wc-primary-500);
  border-radius: 50%;
  animation: wc-spin var(--spinner-speed, 1s) linear infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.wc-spinner__text {
  font-size: 14px;
  color: var(--wc-neutral-600);
  position: absolute;
  white-space: nowrap;
  margin-top: calc(100% + 12px);
}

.wc-spinner--dots {
  border: none;
  background: radial-gradient(circle, var(--wc-primary-500) 2px, transparent 2px);
  background-size: 15px 10px;
  animation: wc-dots var(--spinner-speed, 1s) linear infinite;
}

.wc-spinner--overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.wc-spinner--centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wc-spinner--inline {
  display: inline-flex;
}

@keyframes wc-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes wc-dots {
  0%, 20% {
    background-position: 0 0, 15px 0, 30px 0;
  }
  40% {
    background-position: 0 -10px, 15px 0, 30px 0;
  }
  60% {
    background-position: 0 -10px, 15px -10px, 30px 0;
  }
  80%, 100% {
    background-position: 0 -10px, 15px -10px, 30px -10px;
  }
}
</style> 