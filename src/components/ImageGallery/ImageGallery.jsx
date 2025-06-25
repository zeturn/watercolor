import React, { useState, useEffect } from 'react'
import './style.css'

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
  ...props
}) => {
  const [selected, setSelected] = useState(-1)
  const [page, setPage] = useState(1)
  const totalPages = showPagination ? Math.ceil(images.length / itemsPerPage) : 1

  const aspectMap = { sm: '75%', md: '66.67%', lg: '56.25%', xl: '50%' }

  const displayedImages = showPagination
    ? images.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : images

  const handleSelect = (idx) => {
    setSelected(idx)
    onSelect?.({ index: idx, image: displayedImages[idx] })
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

  // Simple lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={[
      'image-gallery',
      `gallery-layout-${layout}`,
      `gallery-size-${size}`,
      loading && 'gallery-loading',
      className
    ].filter(Boolean).join(' ')} style={style} {...props}>

      {(title || showCount) && (
        <div className="gallery-header">
          {title && <h2 className="gallery-title">{title}</h2>}
          {showCount && <div className="gallery-count">{images.length} 张图片</div>}
        </div>
      )}

      <div className="gallery-grid" style={{ gridTemplateColumns: `repeat(${columns},1fr)`, gap }}>
        {displayedImages.map((img, idx) => (
          <div
            key={img.id || idx}
            className="gallery-item"
            onClick={() => handleSelect(idx)}
            tabIndex={0}
            role="button"
            aria-label={`查看图片 ${idx + 1}`}
          >
            <div className="gallery-image-container" style={{ paddingBottom: aspectMap[size] }}>
              <img
                src={img.thumbnail || img.src}
                alt={img.alt || img.title}
                className="gallery-image"
                loading={lazyLoad ? 'lazy' : 'eager'}
              />
            </div>
            {showInfo && (img.title || img.description) && (
              <div className="gallery-info">
                {img.title && <div className="gallery-info-title">{img.title}</div>}
                {img.description && <div className="gallery-info-description">{img.description}</div>}
              </div>
            )}
          </div>
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <div className="gallery-pagination">
          <button className="gallery-page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>上一页</button>
          <span className="gallery-page-info">第 {page} 页，共 {totalPages} 页</span>
          <button className="gallery-page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>下一页</button>
        </div>
      )}

      {selected !== -1 && (
        <div 
          className="gallery-lightbox" 
          onClick={() => setSelected(-1)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div className="gallery-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={() => setSelected(-1)}>✕</button>
            <div className="gallery-lightbox-image-container">
              <img src={displayedImages[selected].src} alt={displayedImages[selected].alt} className="gallery-lightbox-image" />
            </div>
            <h3 id="lightbox-title" className="sr-only">{displayedImages[selected].title}</h3>
            {showDownload && (
              <button className="gallery-action-btn gallery-download-btn" onClick={() => handleDownload(displayedImages[selected])}>下载</button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

ImageGallery.displayName = 'ImageGallery'

export default ImageGallery