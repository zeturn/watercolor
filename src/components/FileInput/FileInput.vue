<template>
  <label
    :class="wrapperClasses"
    @dragover.prevent
    @drop.prevent="onDrop"
  >
    <input
      type="file"
      class="file-input"
      :multiple="multiple"
      :accept="accept"
      @change="onChange"
    />
    <div v-if="variant==='block'" class="file-input-content">
      <slot>{{ label }}</slot>
    </div>
    <span v-else-if="variant==='button'" class="file-button">{{ label }}</span>
    <span v-else-if="variant==='icon'" class="file-icon">⬆️</span>
  </label>
</template>

<script>
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
        'file-input-wrapper',
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

<style scoped>
/* 基础隐藏 */
.file-input{display:none;}
/* block 变体 */
.file-input-wrapper{display:flex;align-items:center;justify-content:center;padding:32px;border:2px dashed var(--color-border,#d1d5db);border-radius:8px;background:var(--color-gray-50,#f9fafb);cursor:pointer;text-align:center;transition:background 0.2s;}
.file-input-content strong{font-weight:600;}
.file-input-content .link{color:var(--color-primary,#3b82f6);text-decoration:underline;}
.file-input-wrapper:hover{background:var(--color-gray-100,#eef2f7);} 
/* button 变体 */
.variant-button{display:inline-flex;padding:8px 16px;border-radius:6px;background:var(--color-primary,#3b82f6);color:#fff;border:none;font-weight:500;}
.variant-button:hover{background:#2563eb;}
/* icon 变体 */
.variant-icon{display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;border:1px solid var(--color-border,#d1d5db);border-radius:50%;background:var(--color-gray-50,#f9fafb);} 

@media(prefers-color-scheme:dark){
  .file-input-wrapper{background:var(--color-dark-surface,#1f2937);border-color:var(--color-dark-border,#374151);} 
  .variant-icon{background:var(--color-dark-surface,#1f2937);} 
}
</style> 