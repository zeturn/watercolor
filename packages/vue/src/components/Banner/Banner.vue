<template>
  <div
    v-if="visible"
    :class="bannerClasses"
    :style="bannerStyles"
    :role="type === 'error' ? 'alert' : 'status'"
    :aria-live="type === 'error' ? 'assertive' : 'polite'"
  >
    <div class="wc-banner-content">
      <div
        v-if="showIcon"
        class="wc-banner-icon"
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
      <div class="wc-banner-text">
        <div
          v-if="title"
          class="wc-banner-title"
        >
          {{ title }}
        </div>
        <div class="wc-banner-message">
          <slot>{{ message }}</slot>
        </div>
      </div>
      <div
        v-if="$slots.actions || showDefaultAction"
        class="wc-banner-actions"
      >
        <slot name="actions">
          <button
            v-if="showDefaultAction"
            class="wc-banner-action-btn"
            type="button"
            @click="handleAction"
          >
            {{ actionText }}
          </button>
        </slot>
      </div>
      <button
        v-if="closable"
        class="wc-banner-close"
        type="button"
        :aria-label="messages.close"
        @click="handleClose"
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
          <path d="m6 6 8 8M14 6l-8 8" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  isValidType,
  isValidPosition,
  getBannerClasses,
  getBannerStyles,
  handleBannerClose,
  handleBannerAction
} from './utils.js'
import { useLocale } from '../../LocaleVUE'
import './style.css'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: isValidType
  },
  position: {
    type: String,
    default: 'top',
    validator: isValidPosition
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
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  showDefaultAction: {
    type: Boolean,
    default: false
  },
  actionText: {
    type: String,
    default: '立即行动'
  },
  sticky: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1000
  }
})

const emit = defineEmits(['close', 'action'])
const { messages } = useLocale()

const visible = ref(true)

const bannerClasses = computed(() => getBannerClasses(props.type, props.position, props.sticky))

const bannerStyles = computed(() => getBannerStyles(props.zIndex))

const handleClose = () => {
  handleBannerClose((value) => { visible.value = value }, () => emit('close'))
}

const handleAction = () => {
  handleBannerAction(() => emit('action'))
}
</script>
