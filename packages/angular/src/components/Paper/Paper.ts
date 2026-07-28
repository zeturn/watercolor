import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-paper',
  standalone: true,
  template: `<div class="wc-paper wc-paper--elevation-{{ elevation() }} wc-paper--rounded-{{ rounded() }} {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    `.wc-paper{box-sizing:border-box;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);border:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-paper--rounded-none{border-radius:0}
.wc-paper--rounded-sm{border-radius:4px}
.wc-paper--rounded-md{border-radius:8px}
.wc-paper--rounded-lg{border-radius:12px}
.wc-paper--rounded-xl{border-radius:16px}
.wc-paper--rounded-full{border-radius:999px}
.wc-paper--elevation-0{box-shadow:none}
.wc-paper--elevation-1{box-shadow:0 1px 2px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.06)}
.wc-paper--elevation-2{box-shadow:0 2px 4px rgba(0,0,0,0.08),0 4px 8px rgba(0,0,0,0.06)}
.wc-paper--elevation-3{box-shadow:0 4px 8px rgba(0,0,0,0.1),0 8px 16px rgba(0,0,0,0.08)}
.wc-paper--elevation-4{box-shadow:0 8px 16px rgba(0,0,0,0.12),0 16px 32px rgba(0,0,0,0.1)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Paper {
  readonly elevation = input<0 | 1 | 2 | 3 | 4>(0)
  readonly rounded = input<'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
  /** Kept for cross-framework API parity; the rendered element is always a div. */
  readonly as = input('div')
  readonly className = input('')
}
