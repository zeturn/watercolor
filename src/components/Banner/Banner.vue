<template>
  <div
    v-if="visible"
    :class="bannerClasses"
    :style="bannerStyles"
  >
    <div class="wc-banner-content">
      <div
        v-if="showIcon"
        class="wc-banner-icon"
      >
        <span v-html="iconContent" />
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
        aria-label="关闭"
        @click="handleClose"
      >
        ×
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
  getBannerIcon,
  getBannerStyles,
  handleBannerClose,
  handleBannerAction
} from './utils.js'
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

const visible = ref(true)

const bannerClasses = computed(() => getBannerClasses(props.type, props.position, props.sticky))

const bannerStyles = computed(() => getBannerStyles(props.zIndex))

const iconContent = computed(() => getBannerIcon(props.type))

const handleClose = () => {
  handleBannerClose((value) => { visible.value = value }, () => emit('close'))
}

const handleAction = () => {
  handleBannerAction(() => emit('action'))
}
</script> 