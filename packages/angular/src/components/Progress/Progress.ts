import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core'

@Component({
  selector: 'wc-progress',
  standalone: true,
  template: `
    <div
      class="wc-progress wc-progress--{{ size() }} wc-progress--{{ color() }} {{ indeterminate() ? 'wc-progress--indeterminate' : '' }} {{ className() }}"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      [attr.aria-valuenow]="indeterminate() ? null : pct()"
    >
      <div class="wc-progress__bar" [style.width.%]="indeterminate() ? 40 : pct()"></div>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-progress{width:100%;background:var(--wc-surface-subtle,#f1f3f5);border-radius:999px;overflow:hidden;box-sizing:border-box}
.wc-progress--sm{height:4px}
.wc-progress--md{height:8px}
.wc-progress--lg{height:12px}
.wc-progress__bar{height:100%;background:var(--wc-accent,#3b82f6);border-radius:999px;transition:width 0.3s ease}
.wc-progress--secondary .wc-progress__bar{background:var(--wc-text-secondary,#6b7280)}
.wc-progress--success .wc-progress__bar{background:var(--wc-success-600,#16a34a)}
.wc-progress--warning .wc-progress__bar{background:var(--wc-warning-600,#d97706)}
.wc-progress--error .wc-progress__bar{background:var(--wc-danger,#ef4444)}
.wc-progress--info .wc-progress__bar{background:var(--wc-info-600,#2563eb)}
.wc-progress--indeterminate .wc-progress__bar{animation:wc-progress-indeterminate 1.2s ease-in-out infinite}
@keyframes wc-progress-indeterminate{0%{margin-left:-40%}100%{margin-left:100%}}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Progress {
  readonly value = input(0)
  readonly color = input<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('primary')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly indeterminate = input(false)
  readonly className = input('')

  readonly pct = computed(() => Math.max(0, Math.min(100, this.value())))
}
