<template>
  <div class="wc-select">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="selectId" 
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
      @click="toggleDropdown"
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
    >
      <div
        v-if="searchable"
        class="wc-select__search"
      >
        <input
          v-model="searchQuery"
          class="wc-select__search-input"
          placeholder="搜索..."
          @click.stop
        >
      </div>
      
      <div class="wc-select__options">
        <div
          v-for="option in filteredOptions"
          :key="getOptionValue(option)"
          :class="getOptionClasses(option)"
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
          v-if="filteredOptions.length === 0"
          class="wc-select__no-options"
        >
          没有找到选项
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
import { ref, computed, getCurrentInstance, onMounted, onUnmounted } from 'vue'
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
  const classes = ['wc-select__option']
  
  if (isSelected(option)) {
    classes.push('wc-select__option--selected')
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

 