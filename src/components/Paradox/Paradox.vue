<template>
  <blockquote class="wc-paradox" :title="tooltip">
    {{ content }}
  </blockquote>
</template>

<script setup lang="ts">
const { content, tooltip } = defineProps({
  /** 显示的悖论文本 */
  content: {
    type: String,
    default: '这句话是假。'
  },
  /** 鼠标悬停提示 */
  tooltip: {
    type: String,
    default: '若此句为真，则为假；若此句为假，则为真。'
  }
})
</script>

<style>
.wc-paradox {
  font-style: italic;
  position: relative;
  padding: 12px 16px;
  border-left: 4px solid var(--wc-primary-500);
  background: var(--wc-neutral-50);
  color: var(--wc-neutral-900);
  cursor: default;
  user-select: none;
  transition: color 0.3s ease;
}

.wc-paradox:hover {
  color: var(--wc-primary-600);
}

/* Dark mode */
.dark .wc-paradox {
  background: var(--wc-neutral-800);
  color: var(--wc-neutral-100);
  border-left-color: var(--wc-primary-400);
}

.dark .wc-paradox:hover {
  color: var(--wc-primary-300);
}
</style> 