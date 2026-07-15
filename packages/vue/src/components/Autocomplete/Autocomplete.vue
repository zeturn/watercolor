<template>
  <div class="wc-autocomplete">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="autocompleteId" 
      :class="labelClasses"
    >
      {{ label }}
      <span
        v-if="required"
        class="wc-autocomplete__required"
      >*</span>
    </label>
    
    <!-- Input Container -->
    <div
      :class="inputContainerClasses"
    >
      <!-- Input -->
      <input
        :id="autocompleteId"
        v-model="searchQuery"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        class="wc-autocomplete__input"
        autocomplete="off"
        role="combobox"
        aria-autocomplete="list"
        :aria-expanded="open"
        :aria-controls="`${autocompleteId}-options`"
        :aria-activedescendant="highlightedIndex >= 0 ? `${autocompleteId}-option-${highlightedIndex}` : undefined"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @keydown="handleKeydown"
      >
      
      <!-- Clear Button -->
      <button
        v-if="clearable && searchQuery"
        type="button"
        class="wc-autocomplete__clear"
        @click="handleClear"
        tabindex="-1"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
      
      <!-- Arrow Icon -->
      <div class="wc-autocomplete__indicators">
        <div :class="['wc-autocomplete__arrow', { 'wc-autocomplete__arrow--open': open && filteredOptions.length > 0 }]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Dropdown -->
    <div
      v-if="open && filteredOptions.length > 0"
      class="wc-autocomplete__dropdown"
      :id="`${autocompleteId}-options`"
      role="listbox"
    >
      <div class="wc-autocomplete__options">
        <div
          v-for="(option, index) in filteredOptions"
          :key="getOptionValue(option)"
          :id="`${autocompleteId}-option-${index}`"
          :class="getOptionClasses(option, index)"
          role="option"
          :aria-selected="isSelected(option)"
          @click="selectOption(option)"
          @mouseenter="highlightedIndex = index"
        >
          <slot name="option" :option="option">
            <span class="wc-autocomplete__option-text">{{ getOptionLabel(option) }}</span>
          </slot>
          <svg
            v-if="isSelected(option)"
            class="wc-autocomplete__option-check"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="20,6 9,17 4,12" />
          </svg>
        </div>
      </div>
    </div>
    
    <!-- No Results -->
    <div
      v-if="open && searchQuery && filteredOptions.length === 0"
      class="wc-autocomplete__dropdown"
      role="status"
    >
      <div class="wc-autocomplete__no-options">
        <slot name="no-options">
          {{ noOptionsText }}
        </slot>
      </div>
    </div>
    
    <!-- Helper Text / Error -->
    <div v-if="error || helperText">
      <p
        v-if="error"
        class="wc-autocomplete__error"
      >
        {{ error }}
      </p>
      <p
        v-else-if="helperText"
        class="wc-autocomplete__helper"
      >
        {{ helperText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance, onMounted, onUnmounted, watch } from 'vue'
import './style.css'

const props = defineProps({
  modelValue: {
    type: [String, Number, Object, Array],
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
    default: '请输入或选择...'
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
  multiple: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: true
  },
  freeSolo: {
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
  },
  filterOptions: {
    type: Function,
    default: null
  },
  noOptionsText: {
    type: String,
    default: '没有找到选项'
  },
  minSearchLength: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue', 'change', 'input-change', 'focus', 'blur'])

const instance = getCurrentInstance()
const autocompleteId = ref(`autocomplete-${instance?.uid || Math.random().toString(36).substr(2, 9)}`)
const open = ref(false)
const searchQuery = ref('')
const highlightedIndex = ref(-1)

const labelClasses = computed(() => {
  const classes = ['wc-autocomplete__label']
  
  classes.push(`wc-autocomplete__label--${props.size}`)
  
  if (props.error) {
    classes.push('wc-autocomplete__label--error')
  }
  
  return classes
})

const inputContainerClasses = computed(() => {
  const classes = ['wc-autocomplete__container']
  
  classes.push(`wc-autocomplete__container--${props.variant}`)
  classes.push(`wc-autocomplete__container--${props.size}`)
  
  if (props.disabled) {
    classes.push('wc-autocomplete__container--disabled')
  }
  
  if (props.error) {
    classes.push('wc-autocomplete__container--error')
  }
  
  if (open.value) {
    classes.push('wc-autocomplete__container--open')
  }
  
  return classes
})

const filteredOptions = computed(() => {
  if (searchQuery.value.length < props.minSearchLength) {
    return []
  }
  
  if (props.filterOptions) {
    return props.filterOptions(props.options, searchQuery.value)
  }
  
  if (!searchQuery.value) {
    return props.options
  }
  
  return props.options.filter(option => {
    const label = getOptionLabel(option).toLowerCase()
    return label.includes(searchQuery.value.toLowerCase())
  })
})

const getOptionValue = (option) => {
  if (!option) return null
  return typeof option === 'object' ? option[props.valueKey] : option
}

const getOptionLabel = (option) => {
  if (!option) return ''
  return typeof option === 'object' ? option[props.labelKey] : option
}

const isSelected = (option) => {
  const value = getOptionValue(option)
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.some(v => 
      (typeof v === 'object' ? getOptionValue(v) : v) === value
    )
  }
  if (!props.modelValue) return false
  const currentValue = typeof props.modelValue === 'object' 
    ? getOptionValue(props.modelValue) 
    : props.modelValue
  return currentValue === value
}

const getOptionClasses = (option, index) => {
  const classes = ['wc-autocomplete__option']
  
  if (isSelected(option)) {
    classes.push('wc-autocomplete__option--selected')
  }
  
  if (index === highlightedIndex.value) {
    classes.push('wc-autocomplete__option--highlighted')
  }
  
  return classes
}

const handleFocus = (e) => {
  open.value = true
  emit('focus', e)
}

const handleBlur = (e) => {
  setTimeout(() => {
    open.value = false
    emit('blur', e)
  }, 200)
}

const handleInput = (e) => {
  open.value = true
  highlightedIndex.value = -1
  emit('input-change', searchQuery.value)
  
  if (props.freeSolo) {
    emit('update:modelValue', searchQuery.value)
    emit('change', searchQuery.value)
  }
}

const handleClear = () => {
  searchQuery.value = ''
  open.value = false
  highlightedIndex.value = -1
  emit('update:modelValue', props.multiple ? [] : null)
  emit('change', props.multiple ? [] : null)
}

const selectOption = (option) => {
  const value = getOptionValue(option)
  const label = getOptionLabel(option)
  
  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = currentValue.findIndex(v => 
      (typeof v === 'object' ? getOptionValue(v) : v) === value
    )
    
    if (index > -1) {
      currentValue.splice(index, 1)
    } else {
      currentValue.push(option)
    }
    
    emit('update:modelValue', currentValue)
    emit('change', currentValue)
    searchQuery.value = ''
  } else {
    emit('update:modelValue', option)
    emit('change', option)
    searchQuery.value = label
    open.value = false
  }
  
  highlightedIndex.value = -1
}

const handleKeydown = (e) => {
  if (!open.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    open.value = true
    e.preventDefault()
    return
  }
  
  if (!open.value || filteredOptions.value.length === 0) return
  
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      highlightedIndex.value = Math.min(
        highlightedIndex.value + 1,
        filteredOptions.value.length - 1
      )
      break
    case 'ArrowUp':
      e.preventDefault()
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      break
    case 'Enter':
      e.preventDefault()
      if (highlightedIndex.value >= 0 && highlightedIndex.value < filteredOptions.value.length) {
        selectOption(filteredOptions.value[highlightedIndex.value])
      }
      break
    case 'Escape':
      open.value = false
      highlightedIndex.value = -1
      break
  }
}

// Watch modelValue changes to update searchQuery
watch(() => props.modelValue, (newValue) => {
  if (!props.multiple && newValue) {
    if (typeof newValue === 'object') {
      searchQuery.value = getOptionLabel(newValue)
    } else {
      const option = props.options.find(opt => getOptionValue(opt) === newValue)
      searchQuery.value = option ? getOptionLabel(option) : String(newValue)
    }
  } else if (!newValue) {
    searchQuery.value = ''
  }
}, { immediate: true })

const handleClickOutside = (event) => {
  if (!event.target.closest('.wc-autocomplete')) {
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
