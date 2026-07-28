import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model, output } from '@angular/core'

export interface SelectOption {
  value: unknown
  label: string
  disabled?: boolean
}

@Component({
  selector: 'wc-select',
  standalone: true,
  template: `
    <div class="wc-select wc-select--{{ size() }} {{ error() ? 'wc-select--error' : '' }} {{ disabled() ? 'wc-select--disabled' : '' }} {{ className() }}">
      @if (multiple()) {
        <select class="wc-select__field" [disabled]="disabled()" multiple (change)="handleMultipleChange($event)">
          @for (option of options(); track option.value) {
            <option [value]="option.value" [disabled]="!!option.disabled" [selected]="isSelected(option.value)">{{ option.label }}</option>
          }
        </select>
      } @else {
        <select class="wc-select__field" [disabled]="disabled()" (change)="handleChange($event)">
          @if (placeholder()) {
            <option value="" disabled [selected]="value() === ''">{{ placeholder() }}</option>
          }
          @for (option of options(); track option.value) {
            <option [value]="option.value" [disabled]="!!option.disabled" [selected]="value() === option.value">{{ option.label }}</option>
          }
        </select>
      }
      <span class="wc-select__arrow" aria-hidden="true">▾</span>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-select{position:relative;display:inline-flex;width:100%;box-sizing:border-box}
.wc-select__field{-webkit-appearance:none;appearance:none;width:100%;border:1px solid var(--wc-border-default,rgba(0,0,0,0.15));border-radius:8px;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);font:inherit;cursor:pointer;box-sizing:border-box}
.wc-select--sm .wc-select__field{min-height:32px;padding:0 28px 0 10px;font-size:0.8125rem}
.wc-select--md .wc-select__field{min-height:40px;padding:0 30px 0 12px;font-size:0.875rem}
.wc-select--lg .wc-select__field{min-height:48px;padding:0 32px 0 14px;font-size:1rem}
.wc-select__field:focus{outline:none;border-color:var(--wc-accent,#3b82f6);box-shadow:0 0 0 3px var(--wc-state-focus-ring,rgba(59,130,246,0.25))}
.wc-select--error .wc-select__field{border-color:var(--wc-danger,#ef4444)}
.wc-select--disabled .wc-select__field{background:var(--wc-surface-subtle,#f1f3f5);opacity:0.7;cursor:not-allowed}
.wc-select__arrow{position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--wc-text-secondary,#6b7280);font-size:0.75rem}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Select {
  readonly value = model<unknown>('')
  readonly options = input<SelectOption[]>([])
  readonly placeholder = input('')
  readonly disabled = input(false)
  readonly error = input(false)
  readonly multiple = input(false)
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly className = input('')
  readonly changed = output<Event>()

  isSelected(optionValue: unknown): boolean {
    const current = this.value()
    return Array.isArray(current) ? current.includes(optionValue) : current === optionValue
  }

  handleChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    const option = this.options()[select.selectedIndex - (this.placeholder() ? 1 : 0)]
    this.value.set(option ? option.value : select.value)
    this.changed.emit(event)
  }

  handleMultipleChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    const selected = Array.from(select.selectedOptions).map((opt) => {
      const match = this.options().find((o) => String(o.value) === opt.value)
      return match ? match.value : opt.value
    })
    this.value.set(selected)
    this.changed.emit(event)
  }
}
