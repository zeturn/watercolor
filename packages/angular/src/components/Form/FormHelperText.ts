import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-form-helper-text',
  standalone: true,
  template: `
    <div class="wc-form-helper-text {{ error() ? 'wc-form-helper-text--error' : '' }} {{ className() }}" [attr.role]="error() ? 'alert' : null">
      <ng-content />
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-form-helper-text{font-size:0.75rem;line-height:1.4;color:var(--wc-text-secondary,#6b7280)}
.wc-form-helper-text--error{color:var(--wc-danger,#ef4444)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormHelperText {
  readonly error = input(false)
  readonly className = input('')
}
