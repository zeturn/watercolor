<template>
  <blockquote class="wc-paradox" :title="tooltip">
    {{ content }}
  </blockquote>
</template>

<script setup lang="ts">
const props = defineProps({
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

<style scoped>
.wc-paradox {
  font-style: italic;
  position: relative;
  padding: 12px 16px;
  border-left: 4px solid #ccc;
  background: #f9f9f9;
  color: #333;
  cursor: default;
  user-select: none;
  transition: color 0.3s ease;
}

.wc-paradox:hover {
  color: #ff5f5f;
}
</style> 