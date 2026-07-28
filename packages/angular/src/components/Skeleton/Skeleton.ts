import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core'

@Component({
  selector: 'wc-skeleton',
  standalone: true,
  template: `
    <span
      class="wc-skeleton wc-skeleton--{{ variant() }} {{ animation() ? 'wc-skeleton--animated' : '' }} {{ className() }}"
      [style.width]="widthValue()"
      [style.height]="heightValue()"
      aria-hidden="true"
    ></span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-skeleton{display:block;background:var(--wc-surface-subtle,#f1f3f5);border-radius:4px;box-sizing:border-box}
.wc-skeleton--text{height:0.8em;border-radius:4px;margin-block:0.2em}
.wc-skeleton--rect{border-radius:8px;min-height:16px}
.wc-skeleton--circle{border-radius:50%;aspect-ratio:1 / 1}
.wc-skeleton--animated{background:linear-gradient(90deg,var(--wc-surface-subtle,#f1f3f5) 25%,rgba(0,0,0,0.06) 37%,var(--wc-surface-subtle,#f1f3f5) 63%);background-size:400% 100%;animation:wc-skeleton-shimmer 1.4s ease infinite}
@keyframes wc-skeleton-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skeleton {
  readonly variant = input<'text' | 'rect' | 'circle'>('text')
  readonly width = input<string | number>('100%')
  readonly height = input<string | number | undefined>(undefined)
  readonly animation = input(true)
  readonly className = input('')

  readonly widthValue = computed(() => {
    const width = this.width()
    return typeof width === 'number' ? `${width}px` : width
  })

  readonly heightValue = computed(() => {
    const height = this.height()
    if (height === undefined || height === null || height === '') return null
    return typeof height === 'number' ? `${height}px` : height
  })
}
