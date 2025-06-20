<template>
  <div class="wc-select">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="selectId" 
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="required-indicator">*</span>
    </label>
    
    <!-- Select Container -->
    <div :class="selectContainerClasses" @click="toggleDropdown">
      <!-- Display Value -->
      <div class="select-display">
        <span v-if="displayValue" class="select-value">{{ displayValue }}</span>
        <span v-else class="select-placeholder">{{ placeholder }}</span>
      </div>
      
      <!-- Arrow Icon -->
      <div class="select-arrow" :class="{ 'select-arrow--open': open }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </div>
    </div>
    
    <!-- Dropdown -->
    <div v-if="open" class="select-dropdown">
      <div v-if="searchable" class="select-search">
        <input
          v-model="searchQuery"
          class="select-search-input"
          placeholder="搜索..."
          @click.stop
        />
      </div>
      
      <div class="select-options">
        <div
          v-for="option in filteredOptions"
          :key="getOptionValue(option)"
          :class="getOptionClasses(option)"
          @click="selectOption(option)"
        >
          <span class="option-text">{{ getOptionLabel(option) }}</span>
          <svg
            v-if="isSelected(option)"
            class="option-check"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
        </div>
        
        <div v-if="filteredOptions.length === 0" class="select-no-options">
          没有找到选项
        </div>
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
import { ref, computed, getCurrentInstance, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: null
  },
  options: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请选择...'
  },
  disabled: {
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
  multiple: {
    type: Boolean,
    default: false
  },
  searchable: {
    type: Boolean,
    default: false
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  labelKey: {
    type: String,
    default: 'label'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const instance = getCurrentInstance()
const selectId = ref(`select-${instance?.uid || Math.random().toString(36).substr(2, 9)}`)
const open = ref(false)
const searchQuery = ref('')

const labelClasses = computed(() => {
  const classes = ['wc-select__label']
  
  classes.push(`wc-select__label--${props.size}`)
  
  if (props.error) {
    classes.push('wc-select__label--error')
  }
  
  return classes
})

const selectContainerClasses = computed(() => {
  const classes = ['wc-select__container']
  
  classes.push(`wc-select__container--${props.variant}`)
  classes.push(`wc-select__container--${props.size}`)
  
  if (props.disabled) {
    classes.push('wc-select__container--disabled')
  }
  
  if (props.error) {
    classes.push('wc-select__container--error')
  }
  
  if (open.value) {
    classes.push('wc-select__container--open')
  }
  
  return classes
})

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return props.options
  }
  
  return props.options.filter(option => {
    const label = getOptionLabel(option).toLowerCase()
    return label.includes(searchQuery.value.toLowerCase())
  })
})

const displayValue = computed(() => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    if (props.modelValue.length === 0) return ''
    if (props.modelValue.length === 1) {
      const option = props.options.find(opt => getOptionValue(opt) === props.modelValue[0])
      return option ? getOptionLabel(option) : ''
    }
    return `已选择 ${props.modelValue.length} 项`
  } else {
    const option = props.options.find(opt => getOptionValue(opt) === props.modelValue)
    return option ? getOptionLabel(option) : ''
  }
})

const getOptionValue = (option) => {
  return typeof option === 'object' ? option[props.valueKey] : option
}

const getOptionLabel = (option) => {
  return typeof option === 'object' ? option[props.labelKey] : option
}

const isSelected = (option) => {
  const value = getOptionValue(option)
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value)
  }
  return props.modelValue === value
}

const getOptionClasses = (option) => {
  const classes = ['select-option']
  
  if (isSelected(option)) {
    classes.push('select-option--selected')
  }
  
  return classes
}

const toggleDropdown = () => {
  if (props.disabled) return
  open.value = !open.value
  if (open.value) {
    searchQuery.value = ''
  }
}

const selectOption = (option) => {
  const value = getOptionValue(option)
  
  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = currentValue.indexOf(value)
    
    if (index > -1) {
      currentValue.splice(index, 1)
    } else {
      currentValue.push(value)
    }
    
    emit('update:modelValue', currentValue)
    emit('change', currentValue)
  } else {
    emit('update:modelValue', value)
    emit('change', value)
    open.value = false
  }
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.wc-select')) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.wc-select {
  position: relative;
  display: inline-block;
  font-family: var(--wc-font-family);
}

/* Label Styles */
.wc-select__label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
  transition: color 0.2s ease;
}

.wc-select__label--sm {
  font-size: 12px;
}

.wc-select__label--md {
  font-size: 14px;
}

.wc-select__label--lg {
  font-size: 16px;
}

.wc-select__label--error {
  color: #ef4444;
}

.required-indicator {
  color: #ef4444;
  margin-left: 4px;
}

/* Container Styles */
.wc-select__container {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #ffffff;
  min-height: 40px;
  min-width: 200px;
}

.wc-select__container--sm {
  min-height: 32px;
  font-size: 12px;
}

.wc-select__container--md {
  min-height: 40px;
  font-size: 14px;
}

.wc-select__container--lg {
  min-height: 48px;
  font-size: 16px;
}

/* Variant Styles */
.wc-select__container--outlined {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0 12px;
}

.wc-select__container--outlined:hover {
  border-color: #9ca3af;
}

.wc-select__container--outlined.wc-select__container--open {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.wc-select__container--filled {
  background: #f3f4f6;
  border: none;
  border-bottom: 2px solid #d1d5db;
  border-radius: 8px 8px 0 0;
  padding: 8px 12px 4px;
}

.wc-select__container--filled:hover {
  background: #e5e7eb;
}

.wc-select__container--filled.wc-select__container--open {
  border-bottom-color: #3b82f6;
  background: #e5e7eb;
}

.wc-select__container--standard {
  border: none;
  border-bottom: 1px solid #d1d5db;
  border-radius: 0;
  padding: 4px 0;
  background: transparent;
}

.wc-select__container--standard:hover {
  border-bottom-color: #9ca3af;
}

.wc-select__container--standard.wc-select__container--open {
  border-bottom-color: #3b82f6;
  border-bottom-width: 2px;
}

/* Error States */
.wc-select__container--error.wc-select__container--outlined {
  border-color: #ef4444;
}

.wc-select__container--error.wc-select__container--filled {
  border-bottom-color: #ef4444;
}

.wc-select__container--error.wc-select__container--standard {
  border-bottom-color: #ef4444;
}

/* Disabled States */
.wc-select__container--disabled {
  background: #f9fafb;
  border-color: #e5e7eb;
  cursor: not-allowed;
  opacity: 0.6;
}

.wc-select__container--disabled:hover {
  border-color: #e5e7eb;
}

/* Display */
.select-display {
  flex: 1;
  overflow: hidden;
}

.select-value {
  color: #111827;
}

.select-placeholder {
  color: #9ca3af;
}

/* Arrow */
.select-arrow {
  margin-left: 8px;
  width: 20px;
  height: 20px;
  color: #6b7280;
  transition: transform 0.2s ease;
}

.select-arrow--open {
  transform: rotate(180deg);
}

.select-arrow svg {
  width: 100%;
  height: 100%;
}

/* Dropdown */
.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin-top: 4px;
  max-height: 300px;
  overflow: hidden;
}

/* Search */
.select-search {
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;
}

.select-search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

.select-search-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Options */
.select-options {
  max-height: 240px;
  overflow-y: auto;
}

.select-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
}

.select-option:last-child {
  border-bottom: none;
}

.select-option:hover {
  background: #f9fafb;
}

.select-option--selected {
  background: #f0f9ff;
  color: #0369a1;
}

.option-text {
  flex: 1;
}

.option-check {
  width: 16px;
  height: 16px;
  color: #3b82f6;
}

.select-no-options {
  padding: 16px;
  text-align: center;
  color: #6b7280;
  font-size: 14px;
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
  .wc-select__container {
    background: #1f2937;
  }
  
  .wc-select__label {
    color: #d1d5db;
  }
  
  .select-value {
    color: #f9fafb;
  }
  
  .wc-select__container--outlined {
    border-color: #4b5563;
  }
  
  .wc-select__container--filled {
    background: #374151;
  }
  
  .select-dropdown {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .select-option:hover {
    background: #374151;
  }
  
  .select-option--selected {
    background: #1e3a8a;
    color: #93c5fd;
  }
}
</style> 