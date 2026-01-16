<template>
  <div :class="wrapperClasses">
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
    >
      {{ label }}
      <span
        v-if="required"
        class="text-error-500 ml-1"
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
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-error-500"
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
      class="mt-2 text-sm text-error-500"
    >
      {{ error }}
    </p>
    <p
      v-else-if="helpText"
      class="mt-2 text-sm text-neutral-500 dark:text-neutral-400"
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
    classes.push('opacity-50', 'cursor-not-allowed')
  }
  return classes
})

const inputClasses = computed(() => {
  const classes = ['wc-input', `wc-input--${props.size}`, 'wc-input--filled']

  // 为了向后兼容以及满足测试用例，附加拟 Tailwind 大小工具类
  const sizeUtilityMap = {
    sm: ['px-2', 'py-1', 'text-sm'],
    md: ['px-3', 'py-2', 'text-sm'],
    lg: ['px-4', 'py-3', 'text-base']
  }

  classes.push(...sizeUtilityMap[props.size])

  if (props.error) {
    classes.push('wc-input--error')
  }

  if (props.disabled) {
    classes.push('wc-input--disabled')
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