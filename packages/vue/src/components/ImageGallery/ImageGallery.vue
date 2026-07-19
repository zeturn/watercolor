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
        @click="selectImage(index)"
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
                :aria-label="messages.openImageInLightbox(index + 1)"
                @click.stop="openLightbox(index)"
              >
                <svg
                  class="gallery-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.75"
                  />
                </svg>
              </button>
              <button 
                v-if="showDownload"
                class="gallery-action-btn gallery-download-btn"
                :aria-label="messages.downloadImage(index + 1)"
                @click.stop="downloadImage(image)"
              >
                <svg
                  class="gallery-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3v11" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 20h14" />
                </svg>
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
        :aria-label="messages.previousPage"
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
        :aria-label="messages.nextPage"
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
            :aria-label="messages.closeLightbox"
            @click="closeLightbox"
          >
            <svg
              class="gallery-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m6 6 12 12" />
              <path d="M18 6 6 18" />
            </svg>
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
              :aria-label="messages.previousImage"
              @click="previousImage"
            >
              <svg
                class="gallery-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <span class="gallery-lightbox-counter">
              {{ lightboxIndex + 1 }} / {{ images.length }}
            </span>
            <button 
              class="gallery-lightbox-nav gallery-lightbox-next"
              :disabled="lightboxIndex === images.length - 1"
              :aria-label="messages.nextImage"
              @click="nextImage"
            >
              <svg
                class="gallery-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLocale } from '../../LocaleVUE'

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
    const { messages } = useLocale()
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
      onImageError,
      messages
    }
  }
}
</script>

<style src="./style.css"></style>
