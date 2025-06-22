<template>
  <label
    :class="wrapperClasses"
    @dragover.prevent
    @drop.prevent="onDrop"
  >
    <input
      type="file"
      class="wc-file-input"
      :multiple="multiple"
      :accept="accept"
      @change="onChange"
    />
    <div v-if="variant==='block'" class="wc-file-input-content">
      <slot>{{ label }}</slot>
    </div>
    <span v-else-if="variant==='button'" class="wc-file-button">{{ label }}</span>
    <span v-else-if="variant==='icon'" class="wc-file-icon">⬆️</span>
  </label>
</template>

<script>
import './style.css'

export default {
  name: 'FileInput',
  props: {
    multiple: { type: Boolean, default: false },
    variant: { type: String, default: 'block' }, // block | button | icon
    accept: { type: String, default: '' },
    label: { type: String, default: '选择文件' },
  },
  emits: ['change', 'invalid'],
  computed: {
    wrapperClasses() {
      return [
        'wc-file-input-wrapper',
        `variant-${this.variant}`,
      ]
    },
  },
  methods: {
    validateFiles(files) {
      if (!this.accept) return true
      const acceptList = this.accept.split(',').map((a) => a.trim())
      const invalids = [...files].filter((file) => {
        return !acceptList.some((rule) => {
          if (rule.startsWith('.')) {
            return file.name.endsWith(rule)
          }
          return file.type === rule
        })
      })
      if (invalids.length) {
        this.$emit('invalid', invalids)
        return false
      }
      return true
    },
    onChange(e) {
      const files = e.target.files
      if (this.validateFiles(files)) this.$emit('change', files)
    },
    onDrop(e) {
      const files = e.dataTransfer.files
      if (this.validateFiles(files)) this.$emit('change', files)
    },
  }
}
</script>

 