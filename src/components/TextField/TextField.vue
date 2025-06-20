<template>
  <div class="wc-textfield">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="inputId" 
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="required-indicator">*</span>
    </label>
    
    <!-- Input Container -->
    <div :class="inputContainerClasses">
      <!-- Start Adornment -->
      <div v-if="$slots.startAdornment || startAdornment" class="adornment start-adornment">
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
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        v-bind="$attrs"
      />
      
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
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        v-bind="$attrs"
      ></textarea>
      
      <!-- End Adornment -->
      <div v-if="$slots.endAdornment || endAdornment || error" class="adornment end-adornment">
        <!-- Error Icon -->
        <svg v-if="error" class="error-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        
        <slot name="endAdornment">
          <span v-if="endAdornment">{{ endAdornment }}</span>
        </slot>
      </div>
    </div>
    
    <!-- Helper Text -->
    <div v-if="error || helperText" class="helper-text">
      <p v-if="error" class="error-text">{{ error }}</p>
      <p v-else-if="helperText" class="helper-text-content">{{ helperText }}</p>
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
    default: 'outlined',
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

<style scoped>
.wc-textfield {
  display: inline-block;
  font-family: var(--wc-font-family);
}

/* Label Styles */
.wc-textfield__label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
  transition: color 0.2s ease;
}

.wc-textfield__label--sm {
  font-size: 12px;
}

.wc-textfield__label--md {
  font-size: 14px;
}

.wc-textfield__label--lg {
  font-size: 16px;
}

.wc-textfield__label--error {
  color: #ef4444;
}

.required-indicator {
  color: #ef4444;
  margin-left: 4px;
}

/* Container Styles */
.wc-textfield__container {
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.2s ease;
  min-height: 40px;
}

.wc-textfield__container--full-width {
  width: 100%;
}

/* Size Variants */
.wc-textfield__container--sm {
  min-height: 32px;
}

.wc-textfield__container--md {
  min-height: 40px;
}

.wc-textfield__container--lg {
  min-height: 48px;
}

/* Variant Styles */
.wc-textfield__container--outlined {
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0 12px;
  background: #f8f9fa;
}

.wc-textfield__container--outlined:hover {
  background: #f1f3f4;
}

.wc-textfield__container--outlined.wc-textfield__container--focused {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background: #e9ecef;
}

.wc-textfield__container--filled {
  background: #f3f4f6;
  border: none;
  border-bottom: 2px solid #d1d5db;
  border-radius: 8px 8px 0 0;
  padding: 8px 12px 4px;
}

.wc-textfield__container--filled:hover {
  background: #e5e7eb;
}

.wc-textfield__container--filled.wc-textfield__container--focused {
  border-bottom-color: #3b82f6;
  background: #e5e7eb;
}

.wc-textfield__container--standard {
  border: none;
  border-bottom: 1px solid #d1d5db;
  border-radius: 0;
  padding: 4px 0;
  background: transparent;
}

.wc-textfield__container--standard:hover {
  border-bottom-color: #9ca3af;
}

.wc-textfield__container--standard.wc-textfield__container--focused {
  border-bottom-color: #3b82f6;
  border-bottom-width: 2px;
}

/* Error States */
.wc-textfield__container--error.wc-textfield__container--outlined {
  border-color: #ef4444;
  background: #fef2f2;
}

.wc-textfield__container--error.wc-textfield__container--filled {
  border-bottom-color: #ef4444;
}

.wc-textfield__container--error.wc-textfield__container--standard {
  border-bottom-color: #ef4444;
}

/* Disabled States */
.wc-textfield__container--disabled {
  background: #f9fafb;
  border-color: #e5e7eb;
  cursor: not-allowed;
}

.wc-textfield__container--disabled:hover {
  border-color: #e5e7eb;
}

/* Input Styles */
.wc-textfield__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #111827;
  font-family: inherit;
}

.wc-textfield__input--sm {
  font-size: 12px;
}

.wc-textfield__input--md {
  font-size: 14px;
}

.wc-textfield__input--lg {
  font-size: 16px;
}

.wc-textfield__input::placeholder {
  color: #9ca3af;
}

.wc-textfield__input:disabled {
  color: #9ca3af;
  cursor: not-allowed;
}

.wc-textfield__textarea {
  resize: vertical;
  min-height: 80px;
  padding: 8px 0;
}

/* Adornment Styles */
.adornment {
  display: flex;
  align-items: center;
  color: #6b7280;
  font-size: 14px;
}

.start-adornment {
  margin-right: 8px;
}

.end-adornment {
  margin-left: 8px;
}

.error-icon {
  width: 20px;
  height: 20px;
  color: #ef4444;
  margin-right: 4px;
}

/* Helper Text */
.helper-text {
  margin-top: 8px;
}

.helper-text-content {
  font-size: 12px;
  color: #6b7280;
  margin: 0;
}

.error-text {
  font-size: 12px;
  color: #ef4444;
  margin: 0;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .wc-textfield__container {
    background: #1f2937;
  }
  
  .wc-textfield__label {
    color: #d1d5db;
  }
  
  .wc-textfield__input {
    color: #f9fafb;
  }
  
  .wc-textfield__container--outlined {
    background: #374151;
    border-color: transparent;
  }
  
  .wc-textfield__container--outlined:hover {
    background: #4b5563;
  }
  
  .wc-textfield__container--outlined.wc-textfield__container--focused {
    background: #111827;
    border-color: #3b82f6;
  }
  
  .wc-textfield__container--error.wc-textfield__container--outlined {
    background: #450a0a;
    border-color: #ef4444;
  }
  
  .wc-textfield__container--filled {
    background: #374151;
  }
  
  .wc-textfield__container--disabled {
    background: #374151;
    border-color: #4b5563;
  }
}
</style> 