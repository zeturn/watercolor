<template>
  <blockquote class="wc-blockquote">
    <p class="quote-text"><slot>这里是引用内容</slot></p>
    <footer v-if="cite" class="quote-cite">— {{ cite }}</footer>
  </blockquote>
</template>

<script>
export default {
  name: 'Blockquote',
  props: {
    cite: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.wc-blockquote {
  padding: 24px 32px;
  border-radius: 12px;
  margin: 0;
  background-color: var(--wc-neutral-50, #f9fafb);
  color: var(--wc-neutral-800, #374151);
  border-left: 4px solid var(--wc-primary-500, #3D5AFE);
}

/* 文本 */
.quote-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}

.quote-cite {
  margin-top: 8px;
  font-size: 0.875rem;
  color: var(--wc-neutral-500, #6b7280);
  text-align: right;
}

/* 暗色模式 */
:deep(.dark) .wc-blockquote {
  background-color: var(--wc-neutral-800, #374151);
  color: var(--wc-neutral-50, #f9fafb);
  border-left-color: var(--wc-primary-400, #6D85FE);
}
:deep(.dark) .quote-cite {
  color: var(--wc-neutral-400, #9ca3af);
}

/* 响应式保持原样 */
</style> 