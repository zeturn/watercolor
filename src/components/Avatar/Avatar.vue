<template>
  <div :class="avatarClasses" :style="avatarStyles">
    <img v-if="src && !imgError" :src="src" :alt="alt" @error="handleImgError" @load="handleImgLoad" />
    <span v-else-if="!src && children" class="wc-avatar-text">
      {{ avatarText }}
    </span>
    <slot v-else />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  isValidSize, 
  isValidVariant, 
  isValidColor,
  getAvatarClasses,
  getAvatarStyles,
  generateAvatarText,
  handleImageError,
  handleImageLoad
} from './utils.js'
import './style.css'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  size: {
    type: [String, Number],
    default: 'md',
    validator: isValidSize
  },
  variant: {
    type: String,
    default: 'circular',
    validator: isValidVariant
  },
  color: {
    type: String,
    default: 'default',
    validator: isValidColor
  },
  children: {
    type: String,
    default: ''
  }
})

const imgError = ref(false)

const avatarClasses = computed(() => 
  getAvatarClasses({
    size: props.size,
    variant: props.variant,
    color: props.color,
    src: props.src,
    imgError: imgError.value
  })
)

const avatarStyles = computed(() => getAvatarStyles(props.size))

const avatarText = computed(() => generateAvatarText(props.children))

const handleImgError = () => handleImageError((value) => { imgError.value = value })

const handleImgLoad = () => handleImageLoad((value) => { imgError.value = value })
</script> 