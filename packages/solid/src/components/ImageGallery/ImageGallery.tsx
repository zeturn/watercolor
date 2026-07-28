import { createSignal, createEffect } from 'solid-js'

import './style.css'
import { useLocale } from '../../LocaleSolid.tsx'

const EyeIcon = () => (
  <svg class="gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
    <circle cx="12" cy="12" r="2.75" />
  </svg>
)

const DownloadIcon = () => (
  <svg class="gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v11" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
)

const CloseIcon = () => (
  <svg class="gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg class="gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg class="gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 6 6 6-6 6" />
  </svg>
)

const ImageGallery = ({
  images = [],
  title = '',
  layout = 'grid', // grid | masonry | carousel (only grid implemented)
  size = 'md', // sm | md | lg | xl (affects aspect ratio)
  columns = 3,
  gap = 16,
  showInfo = true,
  showCount = true,
  showDownload = false,
  showPagination = false,
  itemsPerPage = 12,
  lazyLoad = true,
  loading = false,
  className = '',
  style = {},
  onSelect,
  onDownload,
  onLightboxOpen,
  onLightboxClose,
  ...props
}) => {
  const [selected, setSelected] = createSignal(-1)
  const [page, setPage] = createSignal(1)
  const { messages } = useLocale()
  const totalPages = showPagination ? Math.ceil(images.length / itemsPerPage) : 1

  const aspectMap = { sm: '75%', md: '66.67%', lg: '56.25%', xl: '50%' }

  const displayedImages = showPagination
    ? images.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : images

  const handleSelect = (idx) => {
    const globalIdx = showPagination ? (page - 1) * itemsPerPage + idx : idx
    setSelected(globalIdx)
    const image = images[globalIdx]
    onSelect?.({ index: globalIdx, image })
    onLightboxOpen?.({ index: globalIdx, image })
  }

  const handleDownload = (image) => {
    onDownload?.(image)
    const link = document.createElement('a')
    link.href = image.src
    link.download = image.title || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const closeLightbox = () => {
    setSelected(-1)
    onLightboxClose?.()
  }

  const handlePrev = () => setSelected((idx) => (idx > 0 ? idx - 1 : idx))
  const handleNext = () => setSelected((idx) => (idx < images.length - 1 ? idx + 1 : idx))

  // Simple lightbox
  createEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (selected !== -1) {
        if (e.key === 'ArrowLeft') handlePrev()
        if (e.key === 'ArrowRight') handleNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <div class={[
      'image-gallery',
      `gallery-layout-${layout}`,
      `gallery-size-${size}`,
      loading && 'gallery-loading',
      className
    ].filter(Boolean).join(' ')} style={style} {...props}>

      {(title || showCount) && (
        <div class="gallery-header">
          {title && <h2 class="gallery-title">{title}</h2>}
          {showCount && <div class="gallery-count">{images.length} 张图片</div>}
        </div>
      )}

      <div
        class="gallery-grid"
        style={layout === 'grid'
          ? { gridTemplateColumns: `repeat(${columns},1fr)`, gap }
          : layout === 'masonry'
            ? { columnCount: columns, columnGap: gap }
            : { gap }}
      >
        {displayedImages.map((img, idx) => (
          <div
            key={img.id || idx}
            class="gallery-item"
            onClick={() => handleSelect(idx)}
          >
            <div class="gallery-image-container" style={{ paddingBottom: aspectMap[size] }}>
              <img
                src={img.thumbnail || img.src}
                alt={img.alt || img.title}
                class="gallery-image"
                loading={lazyLoad ? 'lazy' : 'eager'}
              />
              <div class="gallery-overlay">
                <div class="gallery-overlay-content">
                  <button
                    class="gallery-action-btn gallery-view-btn"
                    aria-label={messages.openImageInLightbox(idx + 1)}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(idx)
                    }}
                  >
                    <EyeIcon />
                  </button>
                  {showDownload && (
                    <button
                      class="gallery-action-btn gallery-download-btn"
                      aria-label={messages.downloadImage(idx + 1)}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(img)
                      }}
                    >
                      <DownloadIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
            {showInfo && (img.title || img.description) && (
              <div class="gallery-info">
                {img.title && <div class="gallery-info-title">{img.title}</div>}
                {img.description && <div class="gallery-info-description">{img.description}</div>}
              </div>
            )}
          </div>
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <div class="gallery-pagination">
          <button class="gallery-page-btn" disabled={page === 1} aria-label={messages.previousPage} onClick={() => setPage(p => p - 1)}>上一页</button>
          <span class="gallery-page-info">第 {page()} 页，共 {totalPages} 页</span>
          <button class="gallery-page-btn" disabled={page === totalPages} aria-label={messages.nextPage} onClick={() => setPage(p => p + 1)}>下一页</button>
        </div>
      )}

      {selected !== -1 && (
        <div 
          class="gallery-lightbox" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div class="gallery-lightbox-content" onClick={e => e.stopPropagation()}>
            <button class="gallery-lightbox-close" aria-label={messages.closeLightbox} onClick={closeLightbox}><CloseIcon /></button>
            <div class="gallery-lightbox-image-container">
              <img src={images[selected].src} alt={images[selected].alt} class="gallery-lightbox-image" />
            </div>
            {(images[selected].title || images[selected].description) && (
              <div class="gallery-lightbox-info">
                {images[selected].title && <h3 id="lightbox-title" class="gallery-lightbox-title">{images[selected].title}</h3>}
                {images[selected].description && <p class="gallery-lightbox-description">{images[selected].description}</p>}
              </div>
            )}
            <div class="gallery-lightbox-navigation">
              <button
                class="gallery-lightbox-nav gallery-lightbox-prev"
                disabled={selected === 0}
                aria-label={messages.previousImage}
                onClick={handlePrev}
              >
                <ChevronLeftIcon />
              </button>
              <span class="gallery-lightbox-counter">{selected + 1} / {images.length}</span>
              <button
                class="gallery-lightbox-nav gallery-lightbox-next"
                disabled={selected === images.length - 1}
                aria-label={messages.nextImage}
                onClick={handleNext}
              >
                <ChevronRightIcon />
              </button>
            </div>
            {showDownload && (
              <button class="gallery-action-btn gallery-download-btn" aria-label={messages.downloadImage(selected + 1)} onClick={() => handleDownload(images[selected])}><DownloadIcon /></button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

ImageGallery.displayName = 'ImageGallery'

export default ImageGallery
