import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core'

type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body1' | 'body2' | 'subtitle1' | 'subtitle2'
  | 'caption' | 'overline' | 'inherit'

@Component({
  selector: 'wc-typography',
  standalone: true,
  template: `
    @switch (tag()) {
      @case ('h1') {<h1 [class]="classes()"><ng-content /></h1>}
      @case ('h2') {<h2 [class]="classes()"><ng-content /></h2>}
      @case ('h3') {<h3 [class]="classes()"><ng-content /></h3>}
      @case ('h4') {<h4 [class]="classes()"><ng-content /></h4>}
      @case ('h5') {<h5 [class]="classes()"><ng-content /></h5>}
      @case ('h6') {<h6 [class]="classes()"><ng-content /></h6>}
      @case ('p') {<p [class]="classes()"><ng-content /></p>}
      @default {<span [class]="classes()"><ng-content /></span>}
    }
  `,
  styles: [
    ':host{display:contents}',
    `.wc-typography{margin:0;font-family:var(--wc-font-family,inherit);color:var(--wc-text-primary,#1a1a1a)}
.wc-typography--h1{font-size:2.25rem;font-weight:700;line-height:1.2}
.wc-typography--h2{font-size:1.875rem;font-weight:700;line-height:1.25}
.wc-typography--h3{font-size:1.5rem;font-weight:600;line-height:1.3}
.wc-typography--h4{font-size:1.25rem;font-weight:600;line-height:1.35}
.wc-typography--h5{font-size:1.125rem;font-weight:600;line-height:1.4}
.wc-typography--h6{font-size:1rem;font-weight:600;line-height:1.45}
.wc-typography--body1{font-size:1rem;line-height:1.6}
.wc-typography--body2{font-size:0.875rem;line-height:1.55}
.wc-typography--subtitle1{font-size:1rem;font-weight:500;line-height:1.5}
.wc-typography--subtitle2{font-size:0.875rem;font-weight:500;line-height:1.5}
.wc-typography--caption{font-size:0.75rem;line-height:1.4}
.wc-typography--overline{font-size:0.6875rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em}
.wc-typography--strong{font-weight:700}
.wc-typography--gutter{margin-bottom:0.5em}
.wc-typography--nowrap{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wc-typography--align-inherit{text-align:inherit}
.wc-typography--align-left{text-align:left}
.wc-typography--align-center{text-align:center}
.wc-typography--align-right{text-align:right}
.wc-typography--align-justify{text-align:justify}
.wc-typography--color-default,
.wc-typography--color-inherit{color:inherit}
.wc-typography--color-primary{color:var(--wc-accent,#3b82f6)}
.wc-typography--color-secondary{color:var(--wc-text-secondary,#555)}
.wc-typography--color-accent{color:var(--wc-accent,#3b82f6)}
.wc-typography--color-success{color:var(--wc-success-600,#16a34a)}
.wc-typography--color-warning{color:var(--wc-warning-600,#d97706)}
.wc-typography--color-error{color:var(--wc-danger,#ef4444)}
.wc-typography--color-info{color:var(--wc-info-600,#2563eb)}
.wc-typography--color-muted{color:var(--wc-text-secondary,#6b7280)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Typography {
  readonly variant = input<TypographyVariant>('body1')
  readonly color = input<'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'muted' | 'inherit'>('default')
  readonly align = input<'inherit' | 'left' | 'center' | 'right' | 'justify'>('inherit')
  readonly gutterBottom = input(false)
  readonly noWrap = input(false)
  readonly strong = input(false)
  readonly className = input('')

  readonly tag = computed(() => {
    const variant = this.variant()
    if (variant.startsWith('h') && variant !== 'inherit') return variant
    if (variant === 'body1' || variant === 'body2' || variant === 'subtitle1' || variant === 'subtitle2') return 'p'
    return 'span'
  })

  readonly classes = computed(() =>
    [
      'wc-typography',
      `wc-typography--${this.variant()}`,
      `wc-typography--color-${this.color()}`,
      `wc-typography--align-${this.align()}`,
      this.gutterBottom() ? 'wc-typography--gutter' : '',
      this.noWrap() ? 'wc-typography--nowrap' : '',
      this.strong() ? 'wc-typography--strong' : '',
      this.className(),
    ]
      .filter(Boolean)
      .join(' ')
  )
}
