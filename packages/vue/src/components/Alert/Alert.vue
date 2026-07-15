<template>
  <div
    v-if="visible"
    :class="alertClasses"
    role="alert"
  >
    <div
      v-if="showIcon"
      class="wc-alert-icon"
    >
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" />
        <path v-if="type === 'success'" d="m6.8 10.1 2.1 2.1 4.4-4.6" />
        <template v-else-if="type === 'info'">
          <path d="M10 9v4" />
          <path d="M10 6.5h.01" />
        </template>
        <template v-else-if="type === 'warning'">
          <path d="M10 6.5v4.2" />
          <path d="M10 13.5h.01" />
        </template>
        <template v-else>
          <path d="m7.5 7.5 5 5" />
          <path d="m12.5 7.5-5 5" />
        </template>
      </svg>
    </div>
    <div class="wc-alert-content">
      <div
        v-if="title"
        class="wc-alert-title"
      >
        {{ title }}
      </div>
      <div class="wc-alert-message">
        <slot>{{ message }}</slot>
      </div>
    </div>
    <button
      v-if="closable"
      class="wc-alert-close"
      type="button"
      aria-label="关闭"
      @click="handleClose"
    >
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
        <path d="m6 6 8 8M14 6l-8 8" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getAlertClasses, isValidAlertType, isValidAlertVariant } from './utils.js'
import './style.css'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: isValidAlertType
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: false
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  variant: {
    type: String,
    default: 'standard',
    validator: isValidAlertVariant
  }
})

const emit = defineEmits(['close'])

const visible = ref(true)

const alertClasses = computed(() => getAlertClasses(props.type, props.variant))

const handleClose = () => {
  visible.value = false
  emit('close')
}
</script>
