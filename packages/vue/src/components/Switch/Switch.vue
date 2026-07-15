<template>
  <div class="wc-switch-wrapper">
    <label
      v-if="label"
      :id="labelId"
      :for="inputId"
      class="wc-switch__label"
    >
      {{ label }}
      <span
        v-if="required"
        class="wc-switch__required"
      >*</span>
    </label>

    <div class="wc-switch__container">
      <label
        :class="switchClasses"
        :aria-disabled="disabled"
      >
        <input
          :id="inputId"
          type="checkbox"
          class="wc-switch__input"
          :checked="modelValue"
          :disabled="disabled"
          :required="required"
          role="switch"
          :aria-checked="modelValue"
          :aria-labelledby="label ? labelId : undefined"
          @change="handleChange"
        >
        <span class="wc-switch__track">
          <span class="wc-switch__thumb" />
        </span>
      </label>

      <span
        v-if="description"
        class="wc-switch__description"
      >
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'
import './style.css'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' },
  description: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])
const instance = getCurrentInstance()
const uid = instance?.uid || Math.random().toString(36).slice(2, 11)
const inputId = `wc-switch-${uid}`
const labelId = `${inputId}-label`

const switchClasses = computed(() => [
  'wc-switch',
  `wc-switch--${props.color}`,
  props.size !== 'md' && `wc-switch--${props.size}`,
  props.disabled && 'wc-switch--disabled'
].filter(Boolean))

const handleChange = (event) => {
  if (props.disabled) return
  emit('update:modelValue', event.target.checked)
  emit('change', event.target.checked)
}
</script>
