import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
  afterNextRender,
  computed,
  input,
  output,
  signal,
} from '@angular/core'
import { useLocale } from '../../hooks.js'

export interface GalleryImage {
  id?: string | number
  src: string
  thumbnail?: string
  alt?: string
  title?: string
  description?: string
}

@Component({
  selector: 'wc-image-gallery',
  standalone: true,
  template: `
    <div class="wc-gallery wc-gallery--{{ layout() }} wc-gallery--{{ size() }} {{ loading() ? 'wc-gallery--loading' : '' }} {{ className() }}">
      @if (title() || showCount()) {
        <div class="wc-gallery-header">
          @if (title()) {
            <h2 class="wc-gallery-title">{{ title() }}</h2>
          }
          @if (showCount()) {
            <div class="wc-gallery-count">{{ images().length }}</div>
          }
        </div>
      }

      <div class="wc-gallery-grid" [style.grid-template-columns]="'repeat(' + columns() + ', 1fr)'" [style.gap.px]="gap()">
        @for (image of paginatedImages(); track image.id ?? $index; let index = $index) {
          <div
            class="wc-gallery-item {{ selectedIndex() === index ? 'wc-gallery-item--selected' : '' }}"
            role="button"
            tabindex="0"
            (click)="selectImage(index)"
            (keydown)="handleItemKeydown($event, index)"
          >
            <div class="wc-gallery-image-container">
              <img
                [src]="image.thumbnail || image.src"
                [alt]="image.alt || image.title || ''"
                class="wc-gallery-image"
                [attr.loading]="lazyLoad() ? 'lazy' : 'eager'"
                (load)="onImageLoad(index)"
              />
              @if (!loadedImages()[index] && loading()) {
                <div class="wc-gallery-image-placeholder">
                  <div class="wc-gallery-spinner"></div>
                </div>
              }
              <div class="wc-gallery-overlay">
                <div class="wc-gallery-overlay-content">
                  <button
                    type="button"
                    class="wc-gallery-action-btn"
                    [attr.aria-label]="locale.messages.openImageInLightbox(index + 1)"
                    (click)="$event.stopPropagation(); openLightbox(index)"
                  >
                    <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                      <circle cx="12" cy="12" r="2.75" />
                    </svg>
                  </button>
                  @if (showDownload()) {
                    <button
                      type="button"
                      class="wc-gallery-action-btn"
                      [attr.aria-label]="locale.messages.downloadImage(index + 1)"
                      (click)="$event.stopPropagation(); downloadImage(image)"
                    >
                      <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 3v11" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 20h14" />
                      </svg>
                    </button>
                  }
                </div>
              </div>
              @if (showInfo() && (image.title || image.description)) {
                <div class="wc-gallery-info">
                  @if (image.title) {
                    <div class="wc-gallery-info-title">{{ image.title }}</div>
                  }
                  @if (image.description) {
                    <div class="wc-gallery-info-description">{{ image.description }}</div>
                  }
                </div>
              }
            </div>
          </div>
        }
      </div>

      @if (showPagination() && totalPages() > 1) {
        <div class="wc-gallery-pagination">
          <button
            type="button"
            class="wc-gallery-page-btn"
            [disabled]="currentPage() === 1"
            [attr.aria-label]="locale.messages.previousPage"
            (click)="goToPage(currentPage() - 1)"
          >‹</button>
          <span class="wc-gallery-page-info">{{ currentPage() }} / {{ totalPages() }}</span>
          <button
            type="button"
            class="wc-gallery-page-btn"
            [disabled]="currentPage() === totalPages()"
            [attr.aria-label]="locale.messages.nextPage"
            (click)="goToPage(currentPage() + 1)"
          >›</button>
        </div>
      }
    </div>

    @if (lightboxVisible()) {
      <div
        class="wc-gallery-lightbox"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        (click)="closeLightbox()"
        (keydown.escape)="closeLightbox()"
      >
        <div class="wc-gallery-lightbox-content" role="presentation" (click)="$event.stopPropagation()">
          <button
            type="button"
            class="wc-gallery-lightbox-close"
            [attr.aria-label]="locale.messages.closeLightbox"
            (click)="closeLightbox()"
          >
            <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12" />
              <path d="M18 6 6 18" />
            </svg>
          </button>
          @if (currentLightboxImage(); as image) {
            <div class="wc-gallery-lightbox-image-container">
              <img [src]="image.src" [alt]="image.alt || ''" class="wc-gallery-lightbox-image" />
            </div>
            @if (image.title || image.description) {
              <div class="wc-gallery-lightbox-info">
                @if (image.title) {
                  <h3 class="wc-gallery-lightbox-title">{{ image.title }}</h3>
                }
                @if (image.description) {
                  <p class="wc-gallery-lightbox-description">{{ image.description }}</p>
                }
              </div>
            }
          }
          <div class="wc-gallery-lightbox-navigation">
            <button
              type="button"
              class="wc-gallery-lightbox-nav"
              [disabled]="lightboxIndex() === 0"
              [attr.aria-label]="locale.messages.previousImage"
              (click)="previousImage()"
            >
              <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <span class="wc-gallery-lightbox-counter">{{ lightboxIndex() + 1 }} / {{ images().length }}</span>
            <button
              type="button"
              class="wc-gallery-lightbox-nav"
              [disabled]="lightboxIndex() === images().length - 1"
              [attr.aria-label]="locale.messages.nextImage"
              (click)="nextImage()"
            >
              <svg class="wc-gallery-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [
    ':host{display:contents}',
    `.wc-gallery{width:100%}
.wc-gallery-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.wc-gallery-title{margin:0;font-size:1.25rem;font-weight:600;color:var(--wc-text-primary,#1a1a1a)}
.wc-gallery-count{font-size:0.85rem;color:var(--wc-text-secondary,#666)}
.wc-gallery-grid{display:grid}
.wc-gallery-item{cursor:pointer;border-radius:var(--wc-radius-md,8px);overflow:hidden;outline:none}
.wc-gallery-item--selected{box-shadow:0 0 0 2px var(--wc-color-primary,#3b82f6)}
.wc-gallery-image-container{position:relative;aspect-ratio:4 / 3;background:var(--wc-surface-muted,#f5f5f5)}
.wc-gallery-image{width:100%;height:100%;object-fit:cover;display:block}
.wc-gallery-image-placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:var(--wc-surface-muted,#f5f5f5)}
.wc-gallery-spinner{width:24px;height:24px;border:2px solid var(--wc-border-default,rgba(0,0,0,0.1));border-top-color:var(--wc-color-primary,#3b82f6);border-radius:50%;animation:wc-gallery-spin 0.8s linear infinite}
@keyframes wc-gallery-spin{to{transform:rotate(360deg)}}
.wc-gallery-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.4);opacity:0;transition:opacity 0.2s ease}
.wc-gallery-item:hover .wc-gallery-overlay,.wc-gallery-item:focus-visible .wc-gallery-overlay{opacity:1}
.wc-gallery-overlay-content{display:flex;gap:8px}
.wc-gallery-action-btn{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;background:rgba(255,255,255,0.9);color:#1a1a1a;cursor:pointer}
.wc-gallery-icon{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.wc-gallery-info{position:absolute;left:0;right:0;bottom:0;padding:8px 12px;background:linear-gradient(transparent,rgba(0,0,0,0.65));color:#fff}
.wc-gallery-info-title{font-size:0.85rem;font-weight:600}
.wc-gallery-info-description{font-size:0.75rem;opacity:0.85}
.wc-gallery-pagination{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:16px}
.wc-gallery-page-btn{border:1px solid var(--wc-border-default,rgba(0,0,0,0.12));background:var(--wc-surface-default,#fff);color:var(--wc-text-primary,#1a1a1a);border-radius:var(--wc-radius-sm,6px);padding:4px 12px;cursor:pointer}
.wc-gallery-page-btn:disabled{opacity:0.5;cursor:not-allowed}
.wc-gallery-page-info{font-size:0.85rem;color:var(--wc-text-secondary,#666)}
.wc-gallery-lightbox{position:fixed;inset:0;z-index:var(--wc-z-modal,1300);display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85)}
.wc-gallery-lightbox-content{position:relative;max-width:min(90vw,960px);max-height:90vh;display:flex;flex-direction:column;gap:12px}
.wc-gallery-lightbox-close{position:absolute;top:-44px;right:0;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;background:rgba(255,255,255,0.15);color:#fff;cursor:pointer}
.wc-gallery-lightbox-image-container{display:flex;align-items:center;justify-content:center}
.wc-gallery-lightbox-image{max-width:100%;max-height:70vh;object-fit:contain;border-radius:var(--wc-radius-md,8px)}
.wc-gallery-lightbox-info{color:#fff;text-align:center}
.wc-gallery-lightbox-title{margin:0 0 4px;font-size:1rem}
.wc-gallery-lightbox-description{margin:0;font-size:0.85rem;opacity:0.8}
.wc-gallery-lightbox-navigation{display:flex;align-items:center;justify-content:center;gap:16px;color:#fff}
.wc-gallery-lightbox-nav{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;background:rgba(255,255,255,0.15);color:#fff;cursor:pointer}
.wc-gallery-lightbox-nav:disabled{opacity:0.4;cursor:not-allowed}
.wc-gallery-lightbox-counter{font-size:0.85rem}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGallery implements OnDestroy {
  readonly images = input<GalleryImage[]>([])
  readonly title = input('')
  readonly layout = input<'grid' | 'masonry' | 'carousel'>('grid')
  readonly size = input<'sm' | 'md' | 'lg' | 'xl'>('md')
  readonly columns = input(3)
  readonly gap = input(16)
  readonly showInfo = input(true)
  readonly showCount = input(true)
  readonly showDownload = input(false)
  readonly showPagination = input(false)
  readonly itemsPerPage = input(12)
  readonly lazyLoad = input(true)
  readonly loading = input(false)
  readonly className = input('')
  readonly selected = output<{ index: number; image: GalleryImage }>()
  readonly downloaded = output<GalleryImage>()
  readonly lightboxOpened = output<{ index: number; image: GalleryImage }>()
  readonly lightboxClosed = output<void>()

  readonly locale = useLocale()

  readonly selectedIndex = signal(-1)
  readonly lightboxVisible = signal(false)
  readonly lightboxIndex = signal(0)
  readonly currentPage = signal(1)
  readonly loadedImages = signal<Record<number, boolean>>({})

  readonly totalPages = computed(() =>
    this.showPagination() ? Math.ceil(this.images().length / this.itemsPerPage()) : 1
  )

  readonly paginatedImages = computed(() =>
    this.showPagination()
      ? this.images().slice((this.currentPage() - 1) * this.itemsPerPage(), this.currentPage() * this.itemsPerPage())
      : this.images()
  )

  readonly currentLightboxImage = computed(() => this.images()[this.lightboxIndex()])

  private readonly handleKeyDown = (e: KeyboardEvent) => {
    if (!this.lightboxVisible()) return
    if (e.key === 'ArrowLeft') this.previousImage()
    else if (e.key === 'ArrowRight') this.nextImage()
    else if (e.key === 'Escape') this.closeLightbox()
  }

  constructor() {
    afterNextRender(() => {
      document.addEventListener('keydown', this.handleKeyDown)
    })
  }

  selectImage(index: number): void {
    this.selectedIndex.set(index)
    this.selected.emit({ index, image: this.images()[index] })
  }

  handleItemKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      this.selectImage(index)
    }
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index)
    this.lightboxVisible.set(true)
    this.lightboxOpened.emit({ index, image: this.images()[index] })
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
  }

  closeLightbox(): void {
    this.lightboxVisible.set(false)
    this.lightboxClosed.emit()
    if (typeof document !== 'undefined') document.body.style.overflow = ''
  }

  previousImage(): void {
    if (this.lightboxIndex() > 0) this.lightboxIndex.set(this.lightboxIndex() - 1)
  }

  nextImage(): void {
    if (this.lightboxIndex() < this.images().length - 1) this.lightboxIndex.set(this.lightboxIndex() + 1)
  }

  downloadImage(image: GalleryImage): void {
    this.downloaded.emit(image)
    const link = document.createElement('a')
    link.href = image.src
    link.download = image.title || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  goToPage(page: number): void {
    this.currentPage.set(page)
  }

  onImageLoad(index: number): void {
    this.loadedImages.set({ ...this.loadedImages(), [index]: true })
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', this.handleKeyDown)
      document.body.style.overflow = ''
    }
  }
}
