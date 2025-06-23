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
      <span v-html="iconContent" />
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
      ×
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getIconContent, getAlertClasses, isValidAlertType, isValidAlertVariant } from './utils.js'
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
    default: 'filled',
    validator: isValidAlertVariant
  }
})

const emit = defineEmits(['close'])

const visible = ref(true)

const alertClasses = computed(() => getAlertClasses(props.type, props.variant))

const iconContent = computed(() => getIconContent(props.type))

const handleClose = () => {
  visible.value = false
  emit('close')
}
</script> 