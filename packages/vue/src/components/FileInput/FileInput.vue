<template>
  <label
    :class="wrapperClasses"
    @dragenter.prevent="dragActive = true"
    @dragover.prevent="dragActive = true"
    @dragleave.prevent="dragActive = false"
    @drop.prevent="onDrop"
  >
    <input
      type="file"
      class="wc-file-input"
      :multiple="multiple"
      :accept="accept"
      :disabled="disabled"
      :aria-label="label"
      @change="onChange"
    >

    <template v-if="variant === 'block'">
      <span class="wc-file-input__upload-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16V4m0 0L7 9m5-5 5 5" /><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" /></svg>
      </span>
      <span class="wc-file-input-content">
        <strong class="wc-file-input-content__title"><slot>{{ label }}</slot></strong>
        <span v-if="description" class="wc-file-input-content__subtitle">{{ description }}</span>
      </span>
    </template>

    <span v-else-if="variant === 'button'" class="wc-file-button">
      <span class="wc-file-input__inline-icon" aria-hidden="true">＋</span>{{ label }}
    </span>

    <span v-else class="wc-file-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16V4m0 0L7 9m5-5 5 5" /><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" /></svg>
    </span>
  </label>
</template>

<script>
import './style.css'

export default {
  name: 'FileInput',
  props: {
    multiple: { type: Boolean, default: false },
    variant: { type: String, default: 'block' },
    accept: { type: String, default: '' },
    label: { type: String, default: '选择文件' },
    description: { type: String, default: '或拖放到这里' },
    disabled: { type: Boolean, default: false }
  },
  emits: ['change', 'invalid'],
  data: () => ({ dragActive: false }),
  computed: {
    wrapperClasses() {
      return [
        'wc-file-input-wrapper',
        `variant-${this.variant}`,
        this.dragActive && 'drag-active',
        this.disabled && 'wc-file-input-wrapper--disabled'
      ].filter(Boolean)
    }
  },
  methods: {
    validateFiles(files) {
      if (!this.accept) return true
      const acceptList = this.accept.split(',').map((rule) => rule.trim().toLowerCase())
      const invalids = [...files].filter((file) => !acceptList.some((rule) => {
        if (rule.startsWith('.')) return file.name.toLowerCase().endsWith(rule)
        if (rule.endsWith('/*')) return file.type.toLowerCase().startsWith(rule.slice(0, -1))
        return file.type.toLowerCase() === rule
      }))
      if (invalids.length) {
        this.$emit('invalid', invalids)
        return false
      }
      return true
    },
    onChange(event) {
      if (this.disabled) return
      const files = event.target.files
      if (this.validateFiles(files)) this.$emit('change', files)
    },
    onDrop(event) {
      this.dragActive = false
      if (this.disabled) return
      const files = event.dataTransfer.files
      if (this.validateFiles(files)) this.$emit('change', files)
    }
  }
}
</script>
