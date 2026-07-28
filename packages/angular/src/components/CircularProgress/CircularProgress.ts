import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core'

const R = 42
const CIRCUMFERENCE = 2 * Math.PI * R

@Component({
  selector: 'wc-circular-progress',
  standalone: true,
  template: `
    <svg
      class="wc-circular-progress wc-circular-progress--{{ color() }} {{ indeterminate() ? 'wc-circular-progress--indeterminate' : '' }} {{ className() }}"
      [attr.width]="dim()"
      [attr.height]="dim()"
      viewBox="0 0 100 100"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      [attr.aria-valuenow]="indeterminate() ? null : pct()"
    >
      <circle class="wc-circular-progress__track" cx="50" cy="50" [attr.r]="r" fill="none" [attr.stroke-width]="thickness()" />
      <circle
        class="wc-circular-progress__bar"
        cx="50"
        cy="50"
        [attr.r]="r"
        fill="none"
        [attr.stroke-width]="thickness()"
        [attr.stroke-dasharray]="circumference"
        [attr.stroke-dashoffset]="indeterminate() ? circumference * 0.75 : offset()"
        stroke-linecap="round"
        transform="rotate(-90 50 50)"
      />
    </svg>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-circular-progress{display:inline-block}
.wc-circular-progress__track{stroke:var(--wc-surface-subtle,#f1f3f5)}
.wc-circular-progress__bar{stroke:var(--wc-accent,#3b82f6);transition:stroke-dashoffset 0.3s ease}
.wc-circular-progress--secondary .wc-circular-progress__bar{stroke:var(--wc-text-secondary,#6b7280)}
.wc-circular-progress--success .wc-circular-progress__bar{stroke:var(--wc-success-600,#16a34a)}
.wc-circular-progress--warning .wc-circular-progress__bar{stroke:var(--wc-warning-600,#d97706)}
.wc-circular-progress--error .wc-circular-progress__bar{stroke:var(--wc-danger,#ef4444)}
.wc-circular-progress--info .wc-circular-progress__bar{stroke:var(--wc-info-600,#2563eb)}
.wc-circular-progress--indeterminate{animation:wc-circular-spin 1s linear infinite}
@keyframes wc-circular-spin{to{transform:rotate(360deg)}}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularProgress {
  readonly value = input(0)
  readonly size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md')
  readonly color = input<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('primary')
  readonly thickness = input(4)
  readonly indeterminate = input(false)
  readonly className = input('')

  readonly r = R
  readonly circumference = CIRCUMFERENCE
  readonly pct = computed(() => Math.max(0, Math.min(100, this.value())))
  readonly offset = computed(() => CIRCUMFERENCE * (1 - this.pct() / 100))
  readonly dim = computed(() => ({ xs: 24, sm: 32, md: 40, lg: 56, xl: 72 })[this.size()] ?? 40)
}
