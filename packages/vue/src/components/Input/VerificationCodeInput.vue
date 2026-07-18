<template>
  <div
    class="wc-input-code"
    @paste.prevent="handlePaste"
  >
    <input
      v-for="(_, index) in boxes"
      :key="index"
      ref="inputs"
      :id="`wc-input-code-${index}`"
      :name="`wc-input-code-${index}`"
      class="wc-input-code__box"
      type="text"
      maxlength="1"
      autocomplete="one-time-code"
      inputmode="numeric"
      :aria-label="messages.verificationCodeDigit(index + 1)"
      @input="onInput(index, $event)"
      @keydown.backspace.prevent="onBackspace(index, $event)"
      @focus="selectContent($event)"
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import { useLocale } from '../../LocaleVUE'
import '@/components/Input/style.css'

const { messages } = useLocale()

const props = defineProps({
  length: {
    type: Number,
    default: 6
  },
  modelValue: {
    type: String,
    default: ''
  },
  autoFocus: {
    type: Boolean,
    default: false
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

onMounted(() => {
  if (props.autoFocus) {
    focusBox(0)
  }
})
</script>
