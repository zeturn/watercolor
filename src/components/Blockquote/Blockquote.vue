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
  position: relative;
  padding: 24px 32px;
  background: var(--color-gray-50, #f9fafb);
  border-radius: 12px;
  margin: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.quote-text {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text, #374151);
  line-height: 1.6;
}
.quote-cite {
  margin-top: 8px;
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6b7280);
  text-align: right;
}
@media (prefers-color-scheme: dark) {
  .wc-blockquote {
    background: var(--color-dark-gray, #374151);
  }
  .quote-text {
    color: var(--color-dark-text, #f9fafb);
  }
  .quote-cite {
    color: var(--color-dark-text-secondary, #d1d5db);
  }
}
</style> 