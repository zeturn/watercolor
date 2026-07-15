<template>
  <div :class="['wc-slider', { 'wc-slider--disabled': disabled }]">
    <div
      v-if="label || valueLabelDisplay !== 'off'"
      class="wc-slider__header"
    >
      <label
        v-if="label"
        :for="inputId"
        class="wc-slider__label"
      >{{ label }}</label>
      <output
        v-if="valueLabelDisplay !== 'off'"
        :for="inputId"
        class="wc-slider__value"
      >{{ modelValue }}</output>
    </div>

    <input
      :id="inputId"
      type="range"
      class="wc-slider__input"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      :disabled="disabled"
      :style="sliderStyle"
      :aria-label="label || 'Slider'"
      @input="handleInput"
      @change="handleChange"
    >
  </div>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'
import './style.css'

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: '' },
  valueLabelDisplay: { type: String, default: 'off' }
})

const emit = defineEmits(['update:modelValue', 'change'])
const instance = getCurrentInstance()
const inputId = `wc-slider-${instance?.uid || Math.random().toString(36).slice(2, 11)}`

const percentage = computed(() => {
  if (props.max === props.min) return 0
  const value = Math.min(Math.max(props.modelValue, props.min), props.max)
  return ((value - props.min) / (props.max - props.min)) * 100
})

const sliderStyle = computed(() => ({ '--wc-slider-percentage': `${percentage.value}%` }))

const handleInput = (event) => emit('update:modelValue', Number(event.target.value))
const handleChange = (event) => emit('change', Number(event.target.value))
</script>
