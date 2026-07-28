import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model, output } from '@angular/core'
import { Radio } from './Radio'

export interface RadioGroupOption {
  value: unknown
  label?: string
  disabled?: boolean
}

@Component({
  selector: 'wc-radio-group',
  standalone: true,
  imports: [Radio],
  template: `
    <fieldset class="wc-radio-group wc-radio-group--{{ direction() }} {{ className() }}" [disabled]="disabled()">
      @if (label()) {
        <legend class="wc-radio-group__label">{{ label() }}</legend>
      }
      @if (options().length) {
        @for (option of options(); track option.value) {
          <wc-radio
            [value]="option.value"
            [checked]="value() === option.value"
            [name]="groupName"
            [color]="color()"
            [disabled]="disabled() || !!option.disabled"
            [label]="option.label ?? '' + option.value"
            (changed)="handleChange(option.value, $event)"
          />
        }
      } @else {
        <ng-content />
      }
    </fieldset>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-radio-group{display:flex;gap:12px;margin:0;padding:0;border:0;box-sizing:border-box}
.wc-radio-group--column{flex-direction:column}
.wc-radio-group--row{flex-direction:row;flex-wrap:wrap}
.wc-radio-group__label{font-size:0.8125rem;font-weight:500;padding:0;margin-bottom:4px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroup {
  readonly value = model<unknown>(undefined)
  readonly name = input('')
  readonly label = input('')
  readonly options = input<RadioGroupOption[]>([])
  readonly disabled = input(false)
  readonly color = input<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('primary')
  readonly direction = input<'row' | 'column'>('column')
  readonly className = input('')
  readonly changed = output<{ value: unknown; event: Event }>()

  private readonly fallbackName = `wc-radio-group-${Math.random().toString(36).slice(2)}`

  get groupName(): string {
    return this.name() || this.fallbackName
  }

  handleChange(optionValue: unknown, event: Event): void {
    this.value.set(optionValue)
    this.changed.emit({ value: optionValue, event })
  }
}
