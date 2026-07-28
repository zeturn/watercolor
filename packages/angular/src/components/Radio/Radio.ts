import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model, output } from '@angular/core'

@Component({
  selector: 'wc-radio',
  standalone: true,
  template: `
    <label class="wc-radio wc-radio--{{ color() }} {{ disabled() ? 'wc-radio--disabled' : '' }} {{ className() }}">
      <input
        type="radio"
        class="wc-radio__input"
        [checked]="checked()"
        [value]="value()"
        [attr.name]="name() || null"
        [disabled]="disabled()"
        (change)="handleChange($event)"
      />
      <span class="wc-radio__dot" aria-hidden="true"></span>
      @if (label()) {
        <span class="wc-radio__label">{{ label() }}</span>
      }
    </label>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-radio{display:inline-flex;align-items:center;gap:8px;cursor:pointer;color:var(--wc-text-primary,#1a1a1a);font-size:0.875rem}
.wc-radio--disabled{cursor:not-allowed;opacity:0.6}
.wc-radio__input{position:absolute;opacity:0;width:0;height:0}
.wc-radio__dot{display:inline-flex;width:20px;height:20px;border:2px solid var(--wc-border-strong,rgba(0,0,0,0.3));border-radius:50%;background:var(--wc-surface-canvas,#fff);box-sizing:border-box;transition:border-color 0.15s ease;position:relative}
.wc-radio__dot::after{content:'';position:absolute;inset:4px;border-radius:50%;background:var(--wc-accent,#3b82f6);transform:scale(0);transition:transform 0.15s ease}
.wc-radio__input:checked + .wc-radio__dot{border-color:var(--wc-accent,#3b82f6)}
.wc-radio__input:checked + .wc-radio__dot::after{transform:scale(1)}
.wc-radio--success .wc-radio__input:checked + .wc-radio__dot{border-color:var(--wc-success-600,#16a34a)}
.wc-radio--success .wc-radio__input:checked + .wc-radio__dot::after{background:var(--wc-success-600,#16a34a)}
.wc-radio--warning .wc-radio__input:checked + .wc-radio__dot{border-color:var(--wc-warning-600,#d97706)}
.wc-radio--warning .wc-radio__input:checked + .wc-radio__dot::after{background:var(--wc-warning-600,#d97706)}
.wc-radio--error .wc-radio__input:checked + .wc-radio__dot{border-color:var(--wc-danger,#ef4444)}
.wc-radio--error .wc-radio__input:checked + .wc-radio__dot::after{background:var(--wc-danger,#ef4444)}
.wc-radio--info .wc-radio__input:checked + .wc-radio__dot{border-color:var(--wc-info-600,#2563eb)}
.wc-radio--info .wc-radio__input:checked + .wc-radio__dot::after{background:var(--wc-info-600,#2563eb)}
.wc-radio__input:focus-visible + .wc-radio__dot{box-shadow:0 0 0 3px var(--wc-state-focus-ring,rgba(59,130,246,0.25))}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Radio {
  readonly checked = model(false)
  readonly value = input<unknown>(undefined)
  readonly label = input('')
  readonly disabled = input(false)
  readonly color = input<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('primary')
  readonly name = input('')
  readonly className = input('')
  readonly changed = output<Event>()

  handleChange(event: Event): void {
    this.checked.set((event.target as HTMLInputElement).checked)
    this.changed.emit(event)
  }
}
