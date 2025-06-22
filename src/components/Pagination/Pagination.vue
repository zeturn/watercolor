<template>
  <nav v-if="pageCount > 1" class="wc-pagination" aria-label="分页导航">
    <button 
      class="wc-page-btn" 
      :disabled="currentPageInternal === 1" 
      @click="select(currentPageInternal - 1)"
      aria-label="上一页"
    >
      ‹
    </button>

    <template v-for="page in pageItems" :key="page.key">
      <button 
        v-if="!page.ellipsis" 
        class="wc-page-btn" 
        :class="{ 'wc-page-btn--active': page.num === currentPageInternal }" 
        @click="select(page.num)"
      >
        {{ page.num }}
      </button>
      <span v-else class="wc-page-ellipsis">…</span>
    </template>

    <button 
      class="wc-page-btn" 
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
import './style.css'

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

 