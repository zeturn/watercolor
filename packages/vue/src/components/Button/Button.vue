<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    :style="buttonStyles"
    @click="handleClick"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span
      v-if="loading"
      class="wc-btn__loading"
    >
      <svg
        class="animate-spin h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
    <span
      v-if="startIcon && !loading"
      class="wc-btn__start-icon"
    >
      <slot name="startIcon">{{ startIcon }}</slot>
    </span>
    <span
      class="wc-btn__content"
      :class="{ 'opacity-0': loading }"
    >
      <slot />
    </span>
    <span
      v-if="endIcon && !loading"
      class="wc-btn__end-icon"
    >
      <slot name="endIcon">{{ endIcon }}</slot>
    </span>
  </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { 
  isValidVariant, 
  isValidSize, 
  isValidType, 
  isValidRounded,
  isValidButtonStyle,
  getButtonClasses,
  getVariantStyles,
  handleButtonClick as utilHandleButtonClick
} from './utils.js'
import './style.css'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: isValidVariant
  },
  buttonStyle: {
    type: String,
    default: 'filled',
    validator: isValidButtonStyle
  },
  size: {
    type: String,
    default: 'md',
    validator: isValidSize
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
    validator: isValidType
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: '_self'
  },
  startIcon: {
    type: String,
    default: null
  },
  endIcon: {
    type: String,
    default: null
  },
  rounded: {
    type: [Boolean, String],
    default: true,
    validator: isValidRounded
  },
  uppercase: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['click', 'mouseover', 'mouseout', 'focus', 'blur'])

const isHovered = ref(false)
const isFocused = ref(false)

const buttonClasses = computed(() => getButtonClasses(props))

const buttonStyles = computed(() => ({}))

const handleClick = (event) => {
  utilHandleButtonClick({
    event,
    disabled: props.disabled,
    loading: props.loading,
    href: props.href,
    target: props.target,
    onClick: (e) => emit('click', e)
  })
}

const handleMouseOver = (event) => {
  isHovered.value = true
  emit('mouseover', event)
}

const handleMouseOut = (event) => {
  isHovered.value = false
  emit('mouseout', event)
}

const handleFocus = (event) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event) => {
  isFocused.value = false
  emit('blur', event)
}
</script> 