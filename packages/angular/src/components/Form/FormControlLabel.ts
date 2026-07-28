import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-form-control-label',
  standalone: true,
  template: `
    <label class="wc-form-control-label {{ disabled() ? 'wc-form-control-label--disabled' : '' }} {{ className() }}">
      <span class="wc-form-control-label__control"><ng-content /></span>
      @if (label()) {
        <span class="wc-form-control-label__text">{{ label() }}</span>
      }
    </label>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-form-control-label{display:inline-flex;align-items:center;gap:8px;cursor:pointer;color:var(--wc-text-primary,#1a1a1a);font-size:0.875rem}
.wc-form-control-label--disabled{cursor:not-allowed;opacity:0.6}
.wc-form-control-label__control{display:inline-flex}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlLabel {
  readonly label = input('')
  readonly disabled = input(false)
  readonly className = input('')
}
