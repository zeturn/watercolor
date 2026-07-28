import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-feature',
  standalone: true,
  template: `
    <div class="wc-feature wc-feature--{{ color() }} {{ className() }}">
      @if (icon()) {
        <div class="wc-feature__icon" [innerHTML]="icon()"></div>
      }
      @if (title()) {
        <div class="wc-feature__title">{{ title() }}</div>
      }
      @if (description()) {
        <div class="wc-feature__description">{{ description() }}</div>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-feature{display:flex;flex-direction:column;gap:8px;box-sizing:border-box}
.wc-feature__icon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:var(--wc-state-hover-bg,rgba(0,0,0,0.05));color:var(--wc-accent,#3b82f6);font-size:1.25rem}
.wc-feature--primary .wc-feature__icon{color:var(--wc-accent,#3b82f6)}
.wc-feature--success .wc-feature__icon{color:var(--wc-success-600,#16a34a)}
.wc-feature--warning .wc-feature__icon{color:var(--wc-warning-600,#d97706)}
.wc-feature--error .wc-feature__icon{color:var(--wc-danger,#ef4444)}
.wc-feature--info .wc-feature__icon{color:var(--wc-info-600,#2563eb)}
.wc-feature__title{font-size:1rem;font-weight:600;color:var(--wc-text-primary,#1a1a1a)}
.wc-feature__description{font-size:0.875rem;line-height:1.5;color:var(--wc-text-secondary,#6b7280)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature {
  readonly icon = input('')
  readonly title = input('')
  readonly description = input('')
  readonly color = input<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('default')
  readonly className = input('')
}
