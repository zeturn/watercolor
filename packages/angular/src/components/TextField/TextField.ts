import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model, output } from '@angular/core'
import { Input } from '../Input/Input'

@Component({
  selector: 'wc-text-field',
  standalone: true,
  imports: [Input],
  template: `
    <div class="wc-text-field {{ error() ? 'wc-text-field--error' : '' }} {{ disabled() ? 'wc-text-field--disabled' : '' }} {{ className() }}">
      @if (label()) {
        <label class="wc-text-field__label" [attr.for]="id() || null">
          {{ label() }}@if (required()) {<span class="wc-text-field__required">*</span>}
        </label>
      }
      <wc-input
        [value]="value()"
        (valueChange)="value.set($event)"
        [id]="id()"
        [type]="type()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [error]="error()"
        [size]="size()"
        (inputted)="inputted.emit($event)"
        (changed)="changed.emit($event)"
      />
      @if (helperText()) {
        <div class="wc-text-field__helper">{{ helperText() }}</div>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-text-field{display:flex;flex-direction:column;gap:4px;width:100%;box-sizing:border-box}
.wc-text-field__label{font-size:0.8125rem;font-weight:500;color:var(--wc-text-primary,#1a1a1a)}
.wc-text-field__required{color:var(--wc-danger,#ef4444);margin-left:2px}
.wc-text-field__helper{font-size:0.75rem;color:var(--wc-text-secondary,#6b7280)}
.wc-text-field--error .wc-text-field__helper{color:var(--wc-danger,#ef4444)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextField {
  readonly value = model('')
  readonly id = input('')
  readonly label = input('')
  readonly placeholder = input('')
  readonly helperText = input('')
  readonly error = input(false)
  readonly disabled = input(false)
  readonly required = input(false)
  readonly type = input('text')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly className = input('')
  readonly inputted = output<Event>()
  readonly changed = output<Event>()
}
