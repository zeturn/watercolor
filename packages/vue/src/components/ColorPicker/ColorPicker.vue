<template>
  <label :class="colorPickerClasses">
    <input
      class="wc-color-picker__input"
      type="color"
      :value="modelValue"
      :disabled="disabled"
      @input="handleInput"
    >
    <span
      class="wc-color-picker__preview"
      :style="previewStyles"
    />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getColorPickerClasses, getPreviewStyles } from './utils.js'
import './style.css'

interface Props {
  modelValue?: string
  size?: 'sm' | 'md' | 'lg'
  shape?: 'circle' | 'square' | 'rounded'
  disabled?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '#ffffff',
  size: 'md',
  shape: 'circle',
  disabled: false,
  className: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const colorPickerClasses = computed(() => {
  return getColorPickerClasses({
    size: props.size,
    shape: props.shape,
    disabled: props.disabled,
    className: props.className
  }).join(' ')
})

const previewStyles = computed(() => {
  return getPreviewStyles(props.modelValue) as any
})

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (!props.disabled) {
    emit('update:modelValue', target.value)
  }
}
</script> 