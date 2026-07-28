import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-form-control',
  standalone: true,
  template: `
    <div class="wc-form-control wc-form-control--{{ size() }} {{ error() ? 'wc-form-control--error' : '' }} {{ disabled() ? 'wc-form-control--disabled' : '' }} {{ fullWidth() ? 'wc-form-control--full' : '' }} {{ className() }}">
      <ng-content />
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-form-control{display:inline-flex;flex-direction:column;gap:4px;box-sizing:border-box}
.wc-form-control--full{width:100%}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControl {
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly error = input(false)
  readonly disabled = input(false)
  readonly fullWidth = input(true)
  readonly className = input('')
}
