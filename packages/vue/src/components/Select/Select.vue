<template>
  <div ref="selectRef" class="wc-select">
    <!-- Label -->
    <label 
      v-if="label" 
      :id="`${selectId}-label`"
      :class="labelClasses"
    >
      {{ label }}
      <span
        v-if="required"
        class="wc-select__required"
      >*</span>
    </label>
    
    <!-- Select Container -->
    <div
      :class="selectContainerClasses"
      :id="selectId"
      :tabindex="disabled ? -1 : 0"
      role="combobox"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-disabled="disabled"
      :aria-required="required"
      :aria-labelledby="label ? `${selectId}-label` : undefined"
      :aria-controls="`${selectId}-options`"
      :aria-activedescendant="open && activeIndex >= 0 ? `${selectId}-option-${activeIndex}` : undefined"
      @click="toggleDropdown"
      @keydown="handleKeydown"
    >
      <!-- Display Value -->
      <div class="wc-select__value">
        <span v-if="displayValue">{{ displayValue }}</span>
        <span
          v-else
          class="wc-select__placeholder"
        >{{ placeholder }}</span>
      </div>
      
      <!-- Arrow Icon -->
      <div class="wc-select__indicators">
        <div :class="['wc-select__arrow', { 'wc-select__arrow--open': open }]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Dropdown -->
    <div
      v-if="open"
      class="wc-select__dropdown"
      :id="`${selectId}-options`"
      ref="dropdownRef"
      role="listbox"
      :aria-multiselectable="multiple || undefined"
    >
      <div class="wc-select__options">
        <div
          v-for="(option, index) in options"
          :key="getOptionValue(option)"
          :id="`${selectId}-option-${index}`"
          :class="getOptionClasses(option)"
          role="option"
          :aria-selected="isSelected(option)"
          :data-active="activeIndex === index ? 'true' : undefined"
          @click="selectOption(option)"
        >
          <span class="wc-select__option-text">{{ getOptionLabel(option) }}</span>
          <svg
            v-if="isSelected(option)"
            class="wc-select__option-check"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="20,6 9,17 4,12" />
          </svg>
        </div>
        
        <div
          v-if="options.length === 0"
          class="wc-select__no-options"
        >
          没有可选项
        </div>
      </div>
    </div>
    
    <!-- Helper Text -->
    <div v-if="error || helperText">
      <p
        v-if="error"
        class="wc-select__error"
      >
        {{ error }}
      </p>
      <p
        v-else-if="helperText"
        class="wc-select__helper"
      >
        {{ helperText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import { useOverlayLayer } from '../../interactions'
import './style.css'

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
    default: 'filled',
    validator: (value) => ['outlined', 'filled', 'standard'].includes(value)
  },
  multiple: {
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
const activeIndex = ref(-1)
const selectRef = ref(null)
const dropdownRef = ref(null)

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
  const classes = ['wc-select__option']
  
  if (isSelected(option)) {
    classes.push('wc-select__option--selected')
  }
  
  return classes
}

const toggleDropdown = () => {
  if (props.disabled) return
  if (open.value) {
    closeDropdown()
  } else {
    openDropdown()
  }
}

const enabledOptionIndexes = computed(() => props.options
  .map((option, index) => ({ option, index }))
  .filter(({ option }) => !option.disabled)
  .map(({ index }) => index)
)

const openDropdown = (initialIndex = enabledOptionIndexes.value[0] ?? -1) => {
  open.value = true
  activeIndex.value = initialIndex
}

const closeDropdown = () => {
  open.value = false
  activeIndex.value = -1
}

const moveActiveIndex = (offset) => {
  const indexes = enabledOptionIndexes.value
  if (!indexes.length) return
  const currentIndex = indexes.indexOf(activeIndex.value)
  const nextIndex = currentIndex < 0
    ? 0
    : (currentIndex + offset + indexes.length) % indexes.length
  activeIndex.value = indexes[nextIndex]
}

const handleKeydown = (event) => {
  if (props.disabled) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    if (open.value && activeIndex.value >= 0) {
      selectOption(props.options[activeIndex.value])
    } else {
      openDropdown()
    }
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    if (!open.value) openDropdown()
    else moveActiveIndex(1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (!open.value) openDropdown(enabledOptionIndexes.value[enabledOptionIndexes.value.length - 1] ?? -1)
    else moveActiveIndex(-1)
  } else if (event.key === 'Home') {
    event.preventDefault()
    activeIndex.value = enabledOptionIndexes.value[0] ?? -1
  } else if (event.key === 'End') {
    event.preventDefault()
    activeIndex.value = enabledOptionIndexes.value[enabledOptionIndexes.value.length - 1] ?? -1
  } else if (event.key === 'Escape') {
    closeDropdown()
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
    closeDropdown()
  }
}

const handleClickOutside = (event) => {
  if (!selectRef.value?.contains(event.target)) closeDropdown()
}

useOverlayLayer({
  open,
  elementRef: dropdownRef,
  refs: [selectRef],
  closeOnEscape: true,
  closeOnPointerDownOutside: true,
  onEscapeKeyDown: closeDropdown,
  onPointerDownOutside: closeDropdown,
  zIndex: 1000
})
</script>
