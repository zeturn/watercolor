<template>
  <div
    class="wc-code-input"
    @paste.prevent="handlePaste"
  >
    <input
      v-for="(_, index) in boxes"
      :key="index"
      ref="inputs"
      class="wc-code-input__box"
      type="text"
      maxlength="1"
      autocomplete="one-time-code"
      inputmode="numeric"
      @input="onInput(index, $event)"
      @keydown.backspace.prevent="onBackspace(index, $event)"
      @focus="selectContent($event)"
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  length: {
    type: Number,
    default: 6
  },
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue', 'complete'])

const boxes = ref(Array.from({ length: props.length }))
const inputs = ref<HTMLInputElement[]>([] as unknown as HTMLInputElement[])

// Watch external value change
watch(
  () => props.modelValue,
  (val) => {
    if (val.length === props.length) {
      emit('complete', val)
    }
    // fill inputs
    boxes.value.forEach((_, i) => {
      if (inputs.value[i]) inputs.value[i].value = val[i] || ''
    })
  },
  { immediate: true }
)

function focusBox(idx: number) {
  nextTick(() => {
    const el = inputs.value[idx]
    if (el) el.focus()
  })
}

function onInput(index: number, e: Event) {
  const target = e.target as HTMLInputElement
  const val = target.value.replace(/[^0-9a-zA-Z]/g, '')
  target.value = val.toUpperCase()

  const current = inputs.value.map((el) => el.value).join('')
  emit('update:modelValue', current)

  if (val && index < props.length - 1) {
    focusBox(index + 1)
  }

  if (current.length === props.length) {
    emit('complete', current)
  }
}

function onBackspace(index: number, e: KeyboardEvent) {
  const target = e.target as HTMLInputElement
  if (!target.value && index > 0) {
    focusBox(index - 1)
  }
}

function selectContent(e: Event) {
  (e.target as HTMLInputElement).select()
}

function handlePaste(e: ClipboardEvent) {
  const text = (e.clipboardData?.getData('text') || '').trim().slice(0, props.length)
  if (!text) return
  text.split('').forEach((ch, i) => {
    if (inputs.value[i]) inputs.value[i].value = ch
  })
  emit('update:modelValue', text)
  if (text.length === props.length) emit('complete', text)
}
</script>

<style scoped>
.wc-code-input {
  display: flex;
  gap: 8px;
}

.wc-code-input__box {
  width: 40px;
  height: 48px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.wc-code-input__box:focus {
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}
</style> 