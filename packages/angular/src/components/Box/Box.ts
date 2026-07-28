import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-box',
  standalone: true,
  template: `<div class="wc-box {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    '.wc-box{box-sizing:border-box}',
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Box {
  /** Kept for cross-framework API parity; the rendered element is always a div. */
  readonly as = input('div')
  readonly className = input('')
}
