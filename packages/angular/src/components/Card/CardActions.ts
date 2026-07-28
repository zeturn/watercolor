import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-card-actions',
  standalone: true,
  template: `<div class="wc-card-actions wc-card-actions--{{ align() }} {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    `.wc-card-actions{display:flex;align-items:center;gap:8px;padding-top:8px;margin-top:8px}
.wc-card-actions--left{justify-content:flex-start}
.wc-card-actions--center{justify-content:center}
.wc-card-actions--right{justify-content:flex-end}
.wc-card-actions--space-between{justify-content:space-between}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardActions {
  readonly align = input<'left' | 'center' | 'right' | 'space-between'>('left')
  readonly className = input('')
}
