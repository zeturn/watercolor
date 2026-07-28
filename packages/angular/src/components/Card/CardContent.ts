import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-card-content',
  standalone: true,
  template: `<div class="wc-card-content {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    '.wc-card-content{flex:1 1 auto;min-width:0}',
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContent {
  readonly className = input('')
}
