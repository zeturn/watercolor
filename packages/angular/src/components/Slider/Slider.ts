import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input, model, output } from '@angular/core'

@Component({
  selector: 'wc-slider',
  standalone: true,
  template: `
    <input
      type="range"
      class="wc-slider wc-slider--{{ color() }} {{ disabled() ? 'wc-slider--disabled' : '' }} {{ className() }}"
      [value]="value()"
      [min]="min()"
      [max]="max()"
      [step]="step()"
      [disabled]="disabled()"
      (input)="handleInput($event)"
      (change)="changed.emit($event)"
      [style.--wc-slider-pct]="pct() + '%'"
    />
  `,
  styles: [
    ':host{display:contents}',
    `.wc-slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:999px;background:linear-gradient(to right,var(--wc-accent,#3b82f6) var(--wc-slider-pct),var(--wc-surface-subtle,#d1d5db) var(--wc-slider-pct));outline:none;cursor:pointer}
.wc-slider--disabled{opacity:0.6;cursor:not-allowed}
.wc-slider--secondary{background:linear-gradient(to right,var(--wc-text-secondary,#6b7280) var(--wc-slider-pct),var(--wc-surface-subtle,#d1d5db) var(--wc-slider-pct))}
.wc-slider--success{background:linear-gradient(to right,var(--wc-success-600,#16a34a) var(--wc-slider-pct),var(--wc-surface-subtle,#d1d5db) var(--wc-slider-pct))}
.wc-slider--warning{background:linear-gradient(to right,var(--wc-warning-600,#d97706) var(--wc-slider-pct),var(--wc-surface-subtle,#d1d5db) var(--wc-slider-pct))}
.wc-slider--error{background:linear-gradient(to right,var(--wc-danger,#ef4444) var(--wc-slider-pct),var(--wc-surface-subtle,#d1d5db) var(--wc-slider-pct))}
.wc-slider--info{background:linear-gradient(to right,var(--wc-info-600,#2563eb) var(--wc-slider-pct),var(--wc-surface-subtle,#d1d5db) var(--wc-slider-pct))}
.wc-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;border:2px solid var(--wc-accent,#3b82f6);box-shadow:0 1px 3px rgba(0,0,0,0.3)}
.wc-slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fff;border:2px solid var(--wc-accent,#3b82f6)}
.wc-slider--secondary::-webkit-slider-thumb{border-color:var(--wc-text-secondary,#6b7280)}
.wc-slider--success::-webkit-slider-thumb{border-color:var(--wc-success-600,#16a34a)}
.wc-slider--warning::-webkit-slider-thumb{border-color:var(--wc-warning-600,#d97706)}
.wc-slider--error::-webkit-slider-thumb{border-color:var(--wc-danger,#ef4444)}
.wc-slider--info::-webkit-slider-thumb{border-color:var(--wc-info-600,#2563eb)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slider {
  readonly value = model(0)
  readonly min = input(0)
  readonly max = input(100)
  readonly step = input(1)
  readonly disabled = input(false)
  readonly color = input<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('primary')
  readonly className = input('')
  readonly inputted = output<Event>()
  readonly changed = output<Event>()

  readonly pct = computed(() => ((Number(this.value()) - this.min()) / (this.max() - this.min())) * 100)

  handleInput(event: Event): void {
    this.value.set(Number((event.target as HTMLInputElement).value))
    this.inputted.emit(event)
  }
}
