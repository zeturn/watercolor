<template>
  <label :class="containerClasses">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :class="radioClasses"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <span :class="radioButtonClasses">
      <span
        v-if="isChecked"
        class="radio-dot"
      />
    </span>
    <span
      v-if="$slots.default || label"
      class="radio-label"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import './style.css'

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  value: {
    type: [String, Number, Boolean],
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'error', 'warning', 'info'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

// RadioGroup context
const radioGroup = inject('radioGroup', null)

const focused = ref(false)

const isChecked = computed(() => {
  if (radioGroup) {
    return radioGroup.modelValue.value === props.value
  }
  return props.modelValue === props.value
})

const computedName = computed(() => {
  if (radioGroup) {
    return radioGroup.name.value
  }
  return props.name
})

const computedDisabled = computed(() => {
  if (radioGroup) {
    return radioGroup.disabled.value || props.disabled
  }
  return props.disabled
})

const containerClasses = computed(() => {
  const classes = ['wc-radio']
  
  classes.push(`wc-radio--${props.size}`)
  
  if (computedDisabled.value) {
    classes.push('wc-radio--disabled')
  }
  
  if (focused.value) {
    classes.push('wc-radio--focused')
  }
  
  return classes
})

const radioClasses = computed(() => ['wc-radio__input'])

const radioButtonClasses = computed(() => {
  const classes = ['wc-radio__button']
  
  classes.push(`wc-radio__button--${props.color}`)
  classes.push(`wc-radio__button--${props.size}`)
  
  if (isChecked.value) {
    classes.push('wc-radio__button--checked')
  }
  
  return classes
})

const handleChange = (event) => {
  if (computedDisabled.value) return
  
  const value = props.value
  
  if (radioGroup) {
    radioGroup.updateValue(value)
  } else {
    emit('update:modelValue', value)
  }
  
  emit('change', value)
}

const handleFocus = () => {
  focused.value = true
}

const handleBlur = () => {
  focused.value = false
}
</script>

 