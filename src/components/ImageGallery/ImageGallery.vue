<template>
  <div 
    class="image-gallery"
    :class="[
      `gallery-layout-${layout}`,
      `gallery-size-${size}`,
      loading && 'gallery-loading'
    ]"
  >
    <!-- 画廊标题 -->
    <div
      v-if="title || $slots.title"
      class="gallery-header"
    >
      <slot name="title">
        <h2 class="gallery-title">
          {{ title }}
        </h2>
      </slot>
      <div
        v-if="showCount"
        class="gallery-count"
      >
        {{ images.length }} 张图片
      </div>
    </div>

    <!-- 图片网格 -->
    <div 
      class="gallery-grid"
      :style="gridStyle"
    >
      <div
        v-for="(image, index) in paginatedImages"
        :key="image.id || index"
        class="gallery-item"
        :class="{ 'gallery-item-selected': selectedIndex === index }"
        :tabindex="0"
        role="button"
        :aria-label="`查看图片 ${index + 1}: ${image.alt || image.title || '无描述'}`"
        @click="selectImage(index)"
        @keydown.enter="selectImage(index)"
        @keydown.space.prevent="selectImage(index)"
      >
        <!-- 图片容器 -->
        <div class="gallery-image-container">
          <img
            :src="image.thumbnail || image.src"
            :alt="image.alt || image.title"
            class="gallery-image"
            :loading="lazyLoad ? 'lazy' : 'eager'"
            @load="onImageLoad(index)"
            @error="onImageError(index)"
          >
          
          <!-- 加载状态 -->
          <div
            v-if="!loadedImages[index] && loading"
            class="gallery-image-placeholder"
          >
            <div class="gallery-loading-spinner" />
          </div>
          
          <!-- 悬停遮罩 -->
          <div class="gallery-overlay">
            <div class="gallery-overlay-content">
              <button 
                class="gallery-action-btn gallery-view-btn"
                :aria-label="`在灯箱中查看图片 ${index + 1}`"
                @click.stop="openLightbox(index)"
              >
                👁️
              </button>
              <button 
                v-if="showDownload"
                class="gallery-action-btn gallery-download-btn"
                :aria-label="`下载图片 ${index + 1}`"
                @click.stop="downloadImage(image)"
              >
                📥
              </button>
            </div>
          </div>
          
          <!-- 图片信息 -->
          <div
            v-if="showInfo"
            class="gallery-info"
          >
            <div
              v-if="image.title"
              class="gallery-info-title"
            >
              {{ image.title }}
            </div>
            <div
              v-if="image.description"
              class="gallery-info-description"
            >
              {{ image.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div
      v-if="showPagination && totalPages > 1"
      class="gallery-pagination"
    >
      <button 
        class="gallery-page-btn"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        上一页
      </button>
      
      <span class="gallery-page-info">
        第 {{ currentPage }} 页，共 {{ totalPages }} 页
      </span>
      
      <button 
        class="gallery-page-btn"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        下一页
      </button>
    </div>

    <!-- 灯箱模态框 -->
    <teleport to="body">
      <div 
        v-if="lightboxVisible"
        class="gallery-lightbox"
        tabindex="-1"
        @click="closeLightbox"
        @keydown.esc="closeLightbox"
      >
        <div
          class="gallery-lightbox-content"
          @click.stop
        >
          <button 
            class="gallery-lightbox-close"
            aria-label="关闭灯箱"
            @click="closeLightbox"
          >
            ✕
          </button>
          
          <div class="gallery-lightbox-image-container">
            <img
              :src="currentLightboxImage?.src"
              :alt="currentLightboxImage?.alt"
              class="gallery-lightbox-image"
            >
          </div>
          
          <div class="gallery-lightbox-info">
            <h3
              v-if="currentLightboxImage?.title"
              class="gallery-lightbox-title"
            >
              {{ currentLightboxImage.title }}
            </h3>
            <p
              v-if="currentLightboxImage?.description"
              class="gallery-lightbox-description"
            >
              {{ currentLightboxImage.description }}
            </p>
          </div>
          
          <div class="gallery-lightbox-navigation">
            <button 
              class="gallery-lightbox-nav gallery-lightbox-prev"
              :disabled="lightboxIndex === 0"
              aria-label="上一张图片"
              @click="previousImage"
            >
              ‹
            </button>
            <span class="gallery-lightbox-counter">
              {{ lightboxIndex + 1 }} / {{ images.length }}
            </span>
            <button 
              class="gallery-lightbox-nav gallery-lightbox-next"
              :disabled="lightboxIndex === images.length - 1"
              aria-label="下一张图片"
              @click="nextImage"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'ImageGallery',
  props: {
    images: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    layout: {
      type: String,
      default: 'grid',
      validator: (value) => ['grid', 'masonry', 'carousel'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    columns: {
      type: Number,
      default: 3
    },
    gap: {
      type: Number,
      default: 16
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    showCount: {
      type: Boolean,
      default: true
    },
    showDownload: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: Boolean,
      default: false
    },
    itemsPerPage: {
      type: Number,
      default: 12
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select', 'download', 'lightbox-open', 'lightbox-close'],
  setup(props, { emit }) {
    const selectedIndex = ref(-1)
    const lightboxVisible = ref(false)
    const lightboxIndex = ref(0)
    const currentPage = ref(1)
    const loadedImages = ref({})

    const gridStyle = computed(() => {
      return {
        gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
        gap: `${props.gap}px`
      }
    })

    const totalPages = computed(() => {
      if (!props.showPagination) return 1
      return Math.ceil(props.images.length / props.itemsPerPage)
    })

    const paginatedImages = computed(() => {
      if (!props.showPagination) return props.images
      const start = (currentPage.value - 1) * props.itemsPerPage
      const end = start + props.itemsPerPage
      return props.images.slice(start, end)
    })

    const currentLightboxImage = computed(() => {
      return props.images[lightboxIndex.value]
    })

    const selectImage = (index) => {
      selectedIndex.value = index
      emit('select', { index, image: props.images[index] })
    }

    const openLightbox = (index) => {
      lightboxIndex.value = index
      lightboxVisible.value = true
      emit('lightbox-open', { index, image: props.images[index] })
      
      // 禁用页面滚动
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      lightboxVisible.value = false
      emit('lightbox-close')
      
      // 恢复页面滚动
      document.body.style.overflow = ''
    }

    const previousImage = () => {
      if (lightboxIndex.value > 0) {
        lightboxIndex.value--
      }
    }

    const nextImage = () => {
      if (lightboxIndex.value < props.images.length - 1) {
        lightboxIndex.value++
      }
    }

    const downloadImage = (image) => {
      emit('download', image)
      
      const link = document.createElement('a')
      link.href = image.src
      link.download = image.title || 'image'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    const goToPage = (page) => {
      currentPage.value = page
    }

    const onImageLoad = (index) => {
      loadedImages.value[index] = true
    }

    const onImageError = (index) => {
      console.warn(`Failed to load image at index ${index}`)
    }

    const handleKeyDown = (e) => {
      if (!lightboxVisible.value) return
      
      switch (e.key) {
        case 'ArrowLeft':
          previousImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'Escape':
          closeLightbox()
          break
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleKeyDown)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    })

    return {
      selectedIndex,
      lightboxVisible,
      lightboxIndex,
      currentPage,
      loadedImages,
      gridStyle,
      totalPages,
      paginatedImages,
      currentLightboxImage,
      selectImage,
      openLightbox,
      closeLightbox,
      previousImage,
      nextImage,
      downloadImage,
      goToPage,
      onImageLoad,
      onImageError
    }
  }
}
</script>

<style scoped>
.image-gallery {
  width: 100%;
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border, #e5e7eb);
}

.gallery-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text, #111827);
}

.gallery-count {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6b7280);
}

.gallery-grid {
  display: grid;
  width: 100%;
}

.gallery-item {
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: var(--color-gray-100, #f3f4f6);
}

.gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.gallery-item:focus {
  outline: 2px solid var(--color-primary, #3b82f6);
  outline-offset: 2px;
}

.gallery-item-selected {
  ring: 2px solid var(--color-primary, #3b82f6);
}

.gallery-image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* 4:3 比例 */
  overflow: hidden;
}

.gallery-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-200, #e5e7eb);
}

.gallery-loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--wc-neutral-300, #d1d5db);
  border-top: 2px solid var(--color-primary, #3b82f6);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay-content {
  display: flex;
  gap: 8px;
}

.gallery-action-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-text, #111827);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s ease;
}

.gallery-action-btn:hover {
  background: white;
  transform: scale(1.1);
}

.gallery-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 20px 12px 12px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-info {
  transform: translateY(0);
}

.gallery-info-title {
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 4px;
}

.gallery-info-description {
  font-size: 0.75rem;
  opacity: 0.9;
  line-height: 1.4;
}

/* 分页 */
.gallery-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border, #e5e7eb);
}

.gallery-page-btn {
  padding: 8px 16px;
  border: 1px solid var(--color-border, #d1d5db);
  border-radius: 6px;
  background: white;
  color: var(--color-text, #111827);
  cursor: pointer;
  transition: all 0.2s ease;
}

.gallery-page-btn:hover:not(:disabled) {
  background: var(--wc-neutral-50, #f9fafb);
  border-color: var(--color-primary, #3b82f6);
}

.gallery-page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.gallery-page-info {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6b7280);
}

/* 灯箱 */
.gallery-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.gallery-lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.gallery-lightbox-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.gallery-lightbox-image-container {
  max-height: 70vh;
  overflow: hidden;
}

.gallery-lightbox-image {
  width: 100%;
  height: auto;
  display: block;
}

.gallery-lightbox-info {
  padding: 16px;
}

.gallery-lightbox-title {
  margin: 0 0 8px 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.gallery-lightbox-description {
  margin: 0;
  color: var(--color-text-secondary, #6b7280);
  line-height: 1.5;
}

.gallery-lightbox-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  background: var(--wc-neutral-50, #f9fafb);
}

.gallery-lightbox-nav {
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border, #d1d5db);
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease;
}

.gallery-lightbox-nav:hover:not(:disabled) {
  background: var(--color-primary, #3b82f6);
  color: white;
  border-color: var(--color-primary, #3b82f6);
}

.gallery-lightbox-nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.gallery-lightbox-counter {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6b7280);
}

/* 尺寸变体 */
.gallery-size-sm .gallery-image-container {
  padding-bottom: 75%;
}

.gallery-size-md .gallery-image-container {
  padding-bottom: 66.67%; /* 3:2 比例 */
}

.gallery-size-lg .gallery-image-container {
  padding-bottom: 56.25%; /* 16:9 比例 */
}

.gallery-size-xl .gallery-image-container {
  padding-bottom: 50%; /* 2:1 比例 */
}

/* 布局变体 */
.gallery-layout-masonry .gallery-grid {
  columns: var(--columns, 3);
  column-gap: var(--gap, 16px);
}

.gallery-layout-masonry .gallery-item {
  break-inside: avoid;
  margin-bottom: var(--gap, 16px);
}

.gallery-layout-masonry .gallery-image-container {
  padding-bottom: 0;
  height: auto;
}

.gallery-layout-masonry .gallery-image {
  position: relative;
  height: auto;
}

/* 响应式 */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr !important;
  }
  
  .gallery-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .gallery-lightbox-content {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .gallery-lightbox-info {
    padding: 12px;
  }
  
  .gallery-lightbox-navigation {
    padding: 12px;
  }
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .gallery-title {
    color: var(--color-dark-text, #f9fafb);
  }
  
  .gallery-count {
    color: var(--color-dark-text-secondary, #d1d5db);
  }
  
  .gallery-item {
    background: var(--color-dark-gray, #374151);
  }
  
  .gallery-page-btn {
    background: var(--wc-neutral-800, #1f2937);
    border-color: var(--color-dark-border, #374151);
    color: var(--color-dark-text, #f9fafb);
  }
  
  .gallery-page-btn:hover:not(:disabled) {
    background: var(--color-dark-hover, #374151);
  }
  
  .gallery-page-info {
    color: var(--color-dark-text-secondary, #d1d5db);
  }
  
  .gallery-lightbox-content {
    background: var(--wc-neutral-800, #1f2937);
  }
  
  .gallery-lightbox-title {
    color: var(--color-dark-text, #f9fafb);
  }
  
  .gallery-lightbox-description {
    color: var(--color-dark-text-secondary, #d1d5db);
  }
  
  .gallery-lightbox-navigation {
    background: var(--color-dark-gray, #374151);
  }
  
  .gallery-lightbox-nav {
    background: var(--wc-neutral-800, #1f2937);
    border-color: var(--color-dark-border, #374151);
    color: var(--color-dark-text, #f9fafb);
  }
  
  .gallery-lightbox-counter {
    color: var(--color-dark-text-secondary, #d1d5db);
  }
}
</style> 