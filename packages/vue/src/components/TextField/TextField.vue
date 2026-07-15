<template>
  <div class="wc-textfield" :class="{ 'wc-textfield--full-width': fullWidth, 'wc-textfield--multiline': multiline }">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="inputId" 
      :class="labelClasses"
    >
      {{ label }}
      <span
        v-if="required"
        class="wc-textfield__required required-indicator"
      >*</span>
    </label>
    
    <!-- Input Container -->
    <div :class="inputContainerClasses">
      <!-- Start Adornment -->
      <div
        v-if="$slots.startAdornment || startAdornment"
        class="wc-textfield__adornment wc-textfield__adornment--start adornment start-adornment"
      >
        <slot name="startAdornment">
          <span>{{ startAdornment }}</span>
        </slot>
      </div>
      
      <!-- Input -->
      <input
        v-if="!multiline"
        :id="inputId"
        :class="inputClasses"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :value="modelValue"
        :autocomplete="autocomplete"
        v-bind="$attrs"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      >
      
      <!-- Textarea for multiline -->
      <textarea
        v-else
        :id="inputId"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :rows="rows"
        :value="modelValue"
        v-bind="$attrs"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <!-- End Adornment -->
      <div
        v-if="$slots.endAdornment || endAdornment || error"
        class="wc-textfield__adornment wc-textfield__adornment--end adornment end-adornment"
      >
        <!-- Error Icon -->
        <svg
          v-if="error"
          class="wc-textfield__error-icon"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        
        <slot name="endAdornment">
          <span v-if="endAdornment">{{ endAdornment }}</span>
        </slot>
      </div>
    </div>
    
    <!-- Helper Text -->
    <div
      v-if="error || helperText"
      class="wc-textfield__helper-text helper-text helper-text-content"
      :class="{ 'wc-textfield__helper-text--error error-text': error }"
    >
      {{ error || helperText }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
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
  helperText: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['outlined', 'filled', 'standard'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  multiline: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 4
  },
  startAdornment: String,
  endAdornment: String,
  autocomplete: String
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'keydown'])

const instance = getCurrentInstance()
const inputId = ref(`textfield-${instance?.uid || Math.random().toString(36).substr(2, 9)}`)
const focused = ref(false)

const labelClasses = computed(() => {
  const classes = ['wc-textfield__label']
  
  classes.push(`wc-textfield__label--${props.size}`)
  
  if (props.error) {
    classes.push('wc-textfield__label--error')
  }
  
  return classes
})

const inputContainerClasses = computed(() => {
  const classes = ['wc-textfield__container']
  
  classes.push(`wc-textfield__container--${props.variant}`)
  classes.push(`wc-textfield__container--${props.size}`)
  
  if (props.fullWidth) {
    classes.push('wc-textfield__container--full-width')
  }
  
  if (props.disabled) {
    classes.push('wc-textfield__container--disabled')
  }
  
  if (props.error) {
    classes.push('wc-textfield__container--error')
  }
  
  if (focused.value) {
    classes.push('wc-textfield__container--focused')
  }
  
  return classes
})

const inputClasses = computed(() => {
  const classes = ['wc-textfield__input']
  
  classes.push(`wc-textfield__input--${props.size}`)
  
  if (props.multiline) {
    classes.push('wc-textfield__textarea')
  }
  
  return classes
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleFocus = (event) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event) => {
  focused.value = false
  emit('blur', event)
}

const handleKeydown = (event) => {
  emit('keydown', event)
}
</script>

<style src="./style.css" scoped></style>
