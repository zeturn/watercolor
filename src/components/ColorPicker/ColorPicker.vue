<template>
  <div class="wc-color-picker">
    <label class="wc-color-picker__label">
      <input
        class="wc-color-picker__input"
        type="color"
        :value="modelValue"
        @input="onInput"
      />
      <span
        class="wc-color-picker__preview"
        :style="{ backgroundColor: modelValue }"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const { modelValue } = defineProps({
  modelValue: {
    type: String,
    default: '#ffffff'
  }
})
const emit = defineEmits(['update:modelValue'])

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>

<style scoped>
.wc-color-picker {
  display: inline-flex;
}

/* 隐藏原生 input，让预览元素作为触发区域 */
.wc-color-picker__label {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.wc-color-picker__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.wc-color-picker__preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--wc-neutral-200, #e5e7eb); /* 默认边框 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  display: inline-block;
}

/* 悬停与聚焦效果 */
.wc-color-picker__label:hover .wc-color-picker__preview,
.wc-color-picker__input:focus + .wc-color-picker__preview {
  transform: scale(1.05);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* 深色模式 */
:deep(.dark) .wc-color-picker__preview {
  border-color: var(--wc-neutral-600, #4b5563);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

:deep(.dark) .wc-color-picker__label:hover .wc-color-picker__preview,
:deep(.dark) .wc-color-picker__input:focus + .wc-color-picker__preview {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}
</style> 