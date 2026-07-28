import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-form-group',
  standalone: true,
  template: `
    <fieldset class="wc-form-group {{ row() ? 'wc-form-group--row' : '' }} {{ className() }}">
      @if (label()) {
        <legend class="wc-form-group__label">{{ label() }}</legend>
      }
      <ng-content />
    </fieldset>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-form-group{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;border:0;box-sizing:border-box}
.wc-form-group--row{flex-direction:row;flex-wrap:wrap}
.wc-form-group__label{font-size:0.8125rem;font-weight:500;padding:0;margin-bottom:2px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroup {
  readonly label = input('')
  readonly row = input(false)
  readonly className = input('')
}
