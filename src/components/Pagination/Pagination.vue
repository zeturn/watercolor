<template>
  <nav
    v-if="pageCount > 1"
    :class="paginationClasses"
    aria-label="分页导航"
  >
    <!-- 上一页按钮 -->
    <button 
      class="wc-pagination__prev" 
      :class="{ 'disabled': currentPageInternal === 1 }"
      :disabled="currentPageInternal === 1" 
      aria-label="上一页"
      @click="select(currentPageInternal - 1)"
    >
      ‹
    </button>

    <!-- 页面按钮 -->
    <template
      v-for="page in pageItems"
      :key="page.key"
    >
      <button 
        v-if="!page.ellipsis" 
        class="wc-pagination__page" 
        :class="{ 'wc-pagination__page--active': page.num === currentPageInternal }" 
        @click="select(page.num)"
      >
        {{ page.num }}
      </button>
      <span
        v-else
        class="wc-pagination__ellipsis"
      >…</span>
    </template>

    <!-- 下一页按钮 -->
    <button 
      class="wc-pagination__next" 
      :class="{ 'disabled': currentPageInternal === pageCount }"
      :disabled="currentPageInternal === pageCount" 
      aria-label="下一页"
      @click="select(currentPageInternal + 1)"
    >
      ›
    </button>

    <!-- 页面大小选择器 -->
    <div
      v-if="showSizeChanger"
      class="wc-pagination__size-changer"
    >
      <select @change="handleSizeChange">
        <option
          v-for="size in pageSizeOptions"
          :key="size"
          :value="size"
          :selected="size === pageSize"
        >
          {{ size }} / 页
        </option>
      </select>
    </div>

    <!-- 快速跳转器 -->
    <div
      v-if="showQuickJumper"
      class="wc-pagination__quick-jumper"
    >
      <span>跳转到</span>
      <input 
        type="number" 
        :min="1" 
        :max="pageCount"
        placeholder="页码"
        @keyup.enter="handleQuickJump"
      >
    </div>
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
    currentPage: {
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
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  },
  emits: ['update:modelValue', 'change', 'page-change', 'size-change'],
  setup(props, { emit }) {
    const currentPageInternal = ref(props.currentPage || props.modelValue)

    watch(() => props.modelValue, (val) => {
      currentPageInternal.value = val
    })

    watch(() => props.currentPage, (val) => {
      currentPageInternal.value = val
    })

    const paginationClasses = computed(() => {
      const classes = ['wc-pagination']
      if (props.size !== 'md') {
        classes.push(`wc-pagination--${props.size}`)
      }
      return classes
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
      emit('page-change', page)
    }

    const handleSizeChange = (event) => {
      const newSize = parseInt(event.target.value)
      emit('size-change', newSize)
    }

    const handleQuickJump = (event) => {
      const page = parseInt(event.target.value)
      if (page >= 1 && page <= pageCount.value) {
        select(page)
        event.target.value = ''
      }
    }

    return { 
      currentPageInternal, 
      pageCount, 
      pageItems, 
      select, 
      paginationClasses,
      handleSizeChange,
      handleQuickJump
    }
  }
}
</script>

 