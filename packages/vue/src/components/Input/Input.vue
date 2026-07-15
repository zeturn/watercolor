<template>
  <div :class="wrapperClasses">
    <label
      v-if="label"
      :for="inputId"
      class="wc-input-label"
    >
      {{ label }}
      <span
        v-if="required"
        class="wc-input-label__required"
      >*</span>
    </label>
    
    <div class="wc-input-wrapper">
      <input
        :id="inputId"
        :class="inputClasses"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :value="modelValue"
        v-bind="$attrs"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      
      <div
        v-if="error"
        class="wc-input-validation-icon wc-input-validation-icon--error"
      >
        <svg
          class="wc-input-error-icon"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    
    <p
      v-if="error"
      class="wc-input-helper-text wc-input-helper-text--error"
    >
      {{ error }}
    </p>
    <p
      v-else-if="helpText"
      class="wc-input-helper-text"
    >
      {{ helpText }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  helpText: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const instance = getCurrentInstance()
const inputId = ref(`input-${instance?.uid || Math.random().toString(36).substr(2, 9)}`)

const wrapperClasses = computed(() => {
  const classes = ['wc-input-container']
  if (props.disabled) {
    classes.push('wc-input-container--disabled')
  }
  return classes
})

const inputClasses = computed(() => {
  const classes = ['wc-input', `wc-input--${props.size}`, 'wc-input--filled']

  if (props.error) {
    classes.push('wc-input--error')
  }

  if (props.disabled) {
    classes.push('wc-input--disabled')
  }

  if (props.readonly) {
    classes.push('wc-input--readonly')
  }

  return classes
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleFocus = (event) => {
  emit('focus', event)
}

const handleBlur = (event) => {
  emit('blur', event)
}
</script> 

<style src="./style.css"></style>
