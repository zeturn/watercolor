<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { useLocale } from '../../hooks'

  interface GalleryImage {
    id?: string | number
    src: string
    thumbnail?: string
    alt?: string
    title?: string
    description?: string
  }

  let {
    images = [],
    title = '',
    layout = 'grid',
    size = 'md',
    columns = 3,
    gap = 16,
    showInfo = true,
    showCount = true,
    showDownload = false,
    showPagination = false,
    itemsPerPage = 12,
    lazyLoad = true,
    loading = false,
    class: className = '',
    onselect,
    ondownload,
    onlightboxopen,
    onlightboxclose,
  }: {
    images?: GalleryImage[]
    title?: string
    layout?: 'grid' | 'masonry' | 'carousel'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    columns?: number
    gap?: number
    showInfo?: boolean
    showCount?: boolean
    showDownload?: boolean
    showPagination?: boolean
    itemsPerPage?: number
    lazyLoad?: boolean
    loading?: boolean
    class?: string
    onselect?: (payload: { index: number; image: GalleryImage }) => void
    ondownload?: (image: GalleryImage) => void
    onlightboxopen?: (payload: { index: number; image: GalleryImage }) => void
    onlightboxclose?: () => void
  } = $props()

  const localeStore = useLocale()

  let selectedIndex = $state(-1)
  let lightboxVisible = $state(false)
  let lightboxIndex = $state(0)
  let currentPage = $state(1)
  let loadedImages = $state<Record<number, boolean>>({})

  const totalPages = $derived(showPagination ? Math.ceil(images.length / itemsPerPage) : 1)
  const paginatedImages = $derived(
    showPagination ? images.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : images,
  )
  const currentLightboxImage = $derived(images[lightboxIndex])

  function selectImage(index: number) {
    selectedIndex = index
    onselect?.({ index, image: images[index] })
  }

  function openLightbox(index: number) {
    lightboxIndex = index
    lightboxVisible = true
    onlightboxopen?.({ index, image: images[index] })
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
  }

  function closeLightbox() {
    lightboxVisible = false
    onlightboxclose?.()
    if (typeof document !== 'undefined') document.body.style.overflow = ''
  }

  function previousImage() {
    if (lightboxIndex > 0) lightboxIndex -= 1
  }

  function nextImage() {
    if (lightboxIndex < images.length - 1) lightboxIndex += 1
  }

  function downloadImage(image: GalleryImage) {
    ondownload?.(image)
    const link = document.createElement('a')
    link.href = image.src
    link.download = image.title || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  function goToPage(page: number) {
    currentPage = page
  }

  function onImageLoad(index: number) {
    loadedImages[index] = true
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (!lightboxVisible) return
    if (e.key === 'ArrowLeft') previousImage()
    else if (e.key === 'ArrowRight') nextImage()
    else if (e.key === 'Escape') closeLightbox()
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  })
</script>

<div
  class={`wc-gallery wc-gallery--${layout} wc-gallery--${size} ${loading ? 'wc-gallery--loading' : ''} ${className}`.trim()}
>
  {#if title || showCount}
    <div class="wc-gallery-header">
      {#if title}
        <h2 class="wc-gallery-title">{title}</h2>
      {/if}
      {#if showCount}
        <div class="wc-gallery-count">{images.length}</div>
      {/if}
    </div>
  {/if}

  <div class="wc-gallery-grid" style={`grid-template-columns: repeat(${columns}, 1fr); gap: ${gap}px;`}>
    {#each paginatedImages as image, index (image.id ?? index)}
      <div
        class="wc-gallery-item"
        class:wc-gallery-item--selected={selectedIndex === index}
        role="button"
        tabindex="0"
        onclick={() => selectImage(index)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            selectImage(index)
          }
        }}
      >
        <div class="wc-gallery-image-container">
          <img
            src={image.thumbnail || image.src}
            alt={image.alt || image.title || ''}
            class="wc-gallery-image"
            loading={lazyLoad ? 'lazy' : 'eager'}
            onload={() => onImageLoad(index)}
          />
          {#if !loadedImages[index] && loading}
            <div class="wc-gallery-image-placeholder">
              <div class="wc-gallery-spinner"></div>
            </div>
          {/if}
          <div class="wc-gallery-overlay">
            <div class="wc-gallery-overlay-content">
              <button
                type="button"
                class="wc-gallery-action-btn"
                aria-label={localeStore.messages.openImageInLightbox(index + 1)}
                onclick={(e) => {
                  e.stopPropagation()
                  openLightbox(index)
                }}
              >
                <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                  <circle cx="12" cy="12" r="2.75" />
                </svg>
              </button>
              {#if showDownload}
                <button
                  type="button"
                  class="wc-gallery-action-btn"
                  aria-label={localeStore.messages.downloadImage(index + 1)}
                  onclick={(e) => {
                    e.stopPropagation()
                    downloadImage(image)
                  }}
                >
                  <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v11" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 20h14" />
                  </svg>
                </button>
              {/if}
            </div>
          </div>
          {#if showInfo && (image.title || image.description)}
            <div class="wc-gallery-info">
              {#if image.title}
                <div class="wc-gallery-info-title">{image.title}</div>
              {/if}
              {#if image.description}
                <div class="wc-gallery-info-description">{image.description}</div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  {#if showPagination && totalPages > 1}
    <div class="wc-gallery-pagination">
      <button
        type="button"
        class="wc-gallery-page-btn"
        disabled={currentPage === 1}
        aria-label={localeStore.messages.previousPage}
        onclick={() => goToPage(currentPage - 1)}
      >‹</button>
      <span class="wc-gallery-page-info">{currentPage} / {totalPages}</span>
      <button
        type="button"
        class="wc-gallery-page-btn"
        disabled={currentPage === totalPages}
        aria-label={localeStore.messages.nextPage}
        onclick={() => goToPage(currentPage + 1)}
      >›</button>
    </div>
  {/if}
</div>

{#if lightboxVisible}
  <div
    class="wc-gallery-lightbox"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    onclick={closeLightbox}
    onkeydown={(e) => {
      if (e.key === 'Escape') closeLightbox()
    }}
  >
    <div
      class="wc-gallery-lightbox-content"
      role="presentation"
      onclick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        class="wc-gallery-lightbox-close"
        aria-label={localeStore.messages.closeLightbox}
        onclick={closeLightbox}
      >
        <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </svg>
      </button>
      <div class="wc-gallery-lightbox-image-container">
        <img src={currentLightboxImage?.src} alt={currentLightboxImage?.alt || ''} class="wc-gallery-lightbox-image" />
      </div>
      {#if currentLightboxImage?.title || currentLightboxImage?.description}
        <div class="wc-gallery-lightbox-info">
          {#if currentLightboxImage?.title}
            <h3 class="wc-gallery-lightbox-title">{currentLightboxImage.title}</h3>
          {/if}
          {#if currentLightboxImage?.description}
            <p class="wc-gallery-lightbox-description">{currentLightboxImage.description}</p>
          {/if}
        </div>
      {/if}
      <div class="wc-gallery-lightbox-navigation">
        <button
          type="button"
          class="wc-gallery-lightbox-nav"
          disabled={lightboxIndex === 0}
          aria-label={localeStore.messages.previousImage}
          onclick={previousImage}
        >
          <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <span class="wc-gallery-lightbox-counter">{lightboxIndex + 1} / {images.length}</span>
        <button
          type="button"
          class="wc-gallery-lightbox-nav"
          disabled={lightboxIndex === images.length - 1}
          aria-label={localeStore.messages.nextImage}
          onclick={nextImage}
        >
          <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .wc-gallery {
    width: 100%;
  }
  .wc-gallery-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .wc-gallery-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-gallery-count {
    font-size: 0.85rem;
    color: var(--wc-text-secondary, #666);
  }
  .wc-gallery-grid {
    display: grid;
  }
  .wc-gallery-item {
    cursor: pointer;
    border-radius: var(--wc-radius-md, 8px);
    overflow: hidden;
    outline: none;
  }
  .wc-gallery-item--selected {
    box-shadow: 0 0 0 2px var(--wc-color-primary, #3b82f6);
  }
  .wc-gallery-image-container {
    position: relative;
    aspect-ratio: 4 / 3;
    background: var(--wc-surface-muted, #f5f5f5);
  }
  .wc-gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .wc-gallery-image-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--wc-surface-muted, #f5f5f5);
  }
  .wc-gallery-spinner {
    width: 24px;
    height: 24px;
    border: 2px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    border-top-color: var(--wc-color-primary, #3b82f6);
    border-radius: 50%;
    animation: wc-gallery-spin 0.8s linear infinite;
  }
  @keyframes wc-gallery-spin {
    to {
      transform: rotate(360deg);
    }
  }
  .wc-gallery-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .wc-gallery-item:hover .wc-gallery-overlay,
  .wc-gallery-item:focus-visible .wc-gallery-overlay {
    opacity: 1;
  }
  .wc-gallery-overlay-content {
    display: flex;
    gap: 8px;
  }
  .wc-gallery-action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    color: #1a1a1a;
    cursor: pointer;
  }
  .wc-gallery-icon {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .wc-gallery-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 12px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.65));
    color: #fff;
  }
  .wc-gallery-info-title {
    font-size: 0.85rem;
    font-weight: 600;
  }
  .wc-gallery-info-description {
    font-size: 0.75rem;
    opacity: 0.85;
  }
  .wc-gallery-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
  }
  .wc-gallery-page-btn {
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.12));
    background: var(--wc-surface-default, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    border-radius: var(--wc-radius-sm, 6px);
    padding: 4px 12px;
    cursor: pointer;
  }
  .wc-gallery-page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .wc-gallery-page-info {
    font-size: 0.85rem;
    color: var(--wc-text-secondary, #666);
  }
  .wc-gallery-lightbox {
    position: fixed;
    inset: 0;
    z-index: var(--wc-z-modal, 1300);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.85);
  }
  .wc-gallery-lightbox-content {
    position: relative;
    max-width: min(90vw, 960px);
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .wc-gallery-lightbox-close {
    position: absolute;
    top: -44px;
    right: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    cursor: pointer;
  }
  .wc-gallery-lightbox-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wc-gallery-lightbox-image {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: var(--wc-radius-md, 8px);
  }
  .wc-gallery-lightbox-info {
    color: #fff;
    text-align: center;
  }
  .wc-gallery-lightbox-title {
    margin: 0 0 4px;
    font-size: 1rem;
  }
  .wc-gallery-lightbox-description {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.8;
  }
  .wc-gallery-lightbox-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #fff;
  }
  .wc-gallery-lightbox-nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    cursor: pointer;
  }
  .wc-gallery-lightbox-nav:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .wc-gallery-lightbox-counter {
    font-size: 0.85rem;
  }
</style>
