<template>
  <label
    class="form-control-label"
    :class="formControlLabelClasses"
    @click="handleClick"
  >
    <span
      v-if="labelPlacement === 'start'"
      class="form-control-label__text"
      :class="labelClasses"
    >
      {{ label }}
      <span
        v-if="required"
        class="form-control-label__required"
      >*</span>
    </span>
    
    <span class="form-control-label__control">
      <slot />
    </span>
    
    <span
      v-if="labelPlacement !== 'start'"
      class="form-control-label__text"
      :class="labelClasses"
    >
      {{ label }}
      <span
        v-if="required"
        class="form-control-label__required"
      >*</span>
    </span>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import './style.css'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  labelPlacement: {
    type: String,
    default: 'end',
    validator: (value) => ['start', 'end', 'top', 'bottom'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: undefined
  },
  value: {
    type: [String, Number, Boolean],
    default: undefined
  }
})

const emit = defineEmits(['change'])

const formControlLabelClasses = computed(() => {
  const classes = []
  
  // Placement
  if (props.labelPlacement === 'start') {
    classes.push('form-control-label--placement-start')
  } else if (props.labelPlacement === 'end') {
    classes.push('form-control-label--placement-end')
  } else if (props.labelPlacement === 'top') {
    classes.push('form-control-label--placement-top')
  } else if (props.labelPlacement === 'bottom') {
    classes.push('form-control-label--placement-bottom')
  }
  
  // States
  if (props.disabled) {
    classes.push('form-control-label--disabled')
  }
  
  return classes
})

const labelClasses = computed(() => {
  const classes = []
  
  if (props.disabled) {
    classes.push('form-control-label__text--disabled')
  }
  
  return classes
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('change', event)
  }
}
</script>
