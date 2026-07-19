<template>
  <span
    ref="rootRef"
    :class="colorPickerClasses"
  >
    <button
      class="wc-color-picker__trigger"
      type="button"
      :disabled="disabled"
      :aria-label="messages.colorPicker"
      aria-haspopup="dialog"
      :aria-expanded="open"
      @click="togglePicker"
    >
      <span
        class="wc-color-picker__preview"
        :style="previewStyles"
      />
    </button>

    <div
      v-if="open"
      ref="popoverRef"
      class="wc-color-picker__popover"
      role="dialog"
      :aria-label="messages.colorPicker"
    >
      <div class="wc-color-picker__current">
        <span
          class="wc-color-picker__current-preview"
          :style="previewStyles"
        />
        <label class="wc-color-picker__field">
          <span class="wc-color-picker__field-label">Hex</span>
          <input
            class="wc-color-picker__hex-input"
            :value="draftValue"
            spellcheck="false"
            inputmode="text"
            @input="handleDraftInput"
            @blur="draftValue = normalizedValue"
          >
        </label>
      </div>

      <div
        class="wc-color-picker__swatches"
        role="listbox"
        aria-label="Color swatches"
      >
        <button
          v-for="swatch in normalizedSwatches"
          :key="swatch"
          type="button"
          :class="['wc-color-picker__swatch', { 'wc-color-picker__swatch--selected': swatch === normalizedValue }]"
          :style="getSwatchStyles(swatch)"
          :aria-label="swatch"
          :aria-selected="swatch === normalizedValue"
          role="option"
          @click="commitColor(swatch)"
        />
      </div>
    </div>
  </span>
</template>

<script setup lang="ts">
import { computed, ref, watch, type StyleValue } from 'vue'
import { useLocale } from '../../LocaleVUE'
import { useOverlayLayer } from '../../interactions'
import { getColorPickerClasses, getPreviewStyles, isValidHexColor } from './utils.js'
import './style.css'

const { messages } = useLocale()

function normalizeHex(value?: string) {
  if (!value || typeof value !== 'string') return '#ffffff'
  const nextValue = value.trim()
  if (!isValidHexColor(nextValue)) return '#ffffff'
  if (nextValue.length === 4) {
    return `#${nextValue[1]}${nextValue[1]}${nextValue[2]}${nextValue[2]}${nextValue[3]}${nextValue[3]}`.toLowerCase()
  }
  return nextValue.toLowerCase()
}

interface Props {
  modelValue?: string
  size?: 'sm' | 'md' | 'lg'
  shape?: 'circle' | 'square' | 'rounded'
  disabled?: boolean
  swatches?: string[]
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '#ffffff',
  size: 'md',
  shape: 'circle',
  disabled: false,
  swatches: () => [
    '#111827', '#4b5563', '#ffffff',
    '#2563eb', '#7c3aed', '#db2777',
    '#dc2626', '#ea580c', '#d97706',
    '#16a34a', '#0891b2', '#0f766e'
  ],
  className: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const open = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)

const normalizedValue = computed(() => normalizeHex(props.modelValue))
const draftValue = ref(normalizedValue.value)

watch(normalizedValue, (value) => {
  draftValue.value = value
})

useOverlayLayer({
  open,
  elementRef: popoverRef,
  refs: [rootRef],
  closeOnEscape: true,
  closeOnPointerDownOutside: true,
  onEscapeKeyDown: () => closePicker(),
  onPointerDownOutside: () => closePicker(),
  zIndex: 1000,
})

const colorPickerClasses = computed(() => {
  return getColorPickerClasses({
    size: props.size,
    shape: props.shape,
    disabled: props.disabled,
    className: props.className
  }).join(' ')
})

const previewStyles = computed<StyleValue>(() => {
  return getPreviewStyles(normalizedValue.value) as StyleValue
})

const normalizedSwatches = computed(() => props.swatches.map(normalizeHex))

function getSwatchStyles(value: string): StyleValue {
  return getPreviewStyles(value) as StyleValue
}

function togglePicker() {
  if (props.disabled) return
  open.value = !open.value
}

function closePicker() {
  open.value = false
}

function commitColor(value: string) {
  const nextValue = normalizeHex(value)
  draftValue.value = nextValue
  emit('update:modelValue', nextValue)
}

function handleDraftInput(e: Event) {
  const target = e.target as HTMLInputElement
  draftValue.value = target.value
  if (isValidHexColor(target.value)) {
    commitColor(target.value)
  }
}
</script> 
