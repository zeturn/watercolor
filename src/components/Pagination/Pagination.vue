<template>
  <nav v-if="pageCount > 1" class="pagination" aria-label="分页导航">
    <button 
      class="page-btn" 
      :disabled="currentPageInternal === 1" 
      @click="select(currentPageInternal - 1)"
      aria-label="上一页"
    >
      ‹
    </button>

    <template v-for="page in pageItems" :key="page.key">
      <button 
        v-if="!page.ellipsis" 
        class="page-btn" 
        :class="{ active: page.num === currentPageInternal }" 
        @click="select(page.num)"
      >
        {{ page.num }}
      </button>
      <span v-else class="page-ellipsis">…</span>
    </template>

    <button 
      class="page-btn" 
      :disabled="currentPageInternal === pageCount" 
      @click="select(currentPageInternal + 1)"
      aria-label="下一页"
    >
      ›
    </button>
  </nav>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  name: 'Pagination',
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    siblingCount: {
      type: Number,
      default: 1
    },
    boundaryCount: {
      type: Number,
      default: 1
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const currentPageInternal = ref(props.modelValue)

    watch(() => props.modelValue, (val) => {
      currentPageInternal.value = val
    })

    const pageCount = computed(() => Math.max(1, Math.ceil(props.total / props.pageSize)))

    const range = (start, end) => {
      const arr = []
      for (let i = start; i <= end; i++) arr.push(i)
      return arr
    }

    const pageItems = computed(() => {
      const totalPages = pageCount.value
      const current = currentPageInternal.value
      const { siblingCount, boundaryCount } = props

      const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2
      if (totalPages <= totalNumbers) {
        return range(1, totalPages).map(n => ({ key: n, num: n }))
      }

      const leftSibling = Math.max(current - siblingCount, boundaryCount + 2)
      const rightSibling = Math.min(current + siblingCount, totalPages - boundaryCount - 1)

      const showLeftEllipsis = leftSibling > boundaryCount + 2
      const showRightEllipsis = rightSibling < totalPages - boundaryCount - 1

      const items = []
      // left boundary
      for (let i = 1; i <= boundaryCount; i++) items.push({ key: 'b' + i, num: i })
      if (showLeftEllipsis) items.push({ key: 'l-ellipsis', ellipsis: true })
      // middle
      for (let i = leftSibling; i <= rightSibling; i++) items.push({ key: 'm' + i, num: i })
      if (showRightEllipsis) items.push({ key: 'r-ellipsis', ellipsis: true })
      // right boundary
      for (let i = totalPages - boundaryCount + 1; i <= totalPages; i++) items.push({ key: 'e' + i, num: i })

      return items
    })

    const select = (page) => {
      if (page < 1 || page > pageCount.value || page === currentPageInternal.value) return
      currentPageInternal.value = page
      emit('update:modelValue', page)
      emit('change', page)
    }

    return { currentPageInternal, pageCount, pageItems, select }
  }
}
</script>

<style scoped>
.pagination {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.page-btn {
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid var(--color-border, #e5e7eb);
  background: white;
  color: var(--color-text, #374151);
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-btn:hover:not(:disabled) {
  background: var(--color-gray-50, #f9fafb);
  border-color: var(--color-primary, #3b82f6);
  color: var(--color-primary, #3b82f6);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn.active {
  background: var(--color-primary, #3b82f6);
  border-color: var(--color-primary, #3b82f6);
  color: white;
}

.page-ellipsis {
  padding: 0 6px;
  color: var(--color-text-secondary, #9ca3af);
  user-select: none;
}

@media (prefers-color-scheme: dark) {
  .page-btn {
    background: var(--color-dark-surface, #1f2937);
    color: var(--color-dark-text, #f9fafb);
    border-color: var(--color-dark-border, #374151);
  }
  .page-btn:hover:not(:disabled) {
    background: var(--color-dark-hover, #374151);
    border-color: var(--color-primary, #3b82f6);
  }
  .page-btn.active {
    background: var(--color-primary, #3b82f6);
  }
  .page-ellipsis {
    color: var(--color-dark-text-secondary, #6b7280);
  }
}
</style> 