import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-list-item-icon',
  standalone: true,
  template: `
    <span class="wc-list-item__icon {{ className() }}">
      @if (icon()) {
        <span [innerHTML]="icon()"></span>
      } @else {
        <ng-content />
      }
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-list-item__icon{display:inline-flex;align-items:center;justify-content:center;color:var(--wc-text-secondary,#6b7280);flex:0 0 auto}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemIcon {
  readonly icon = input('')
  readonly className = input('')
}
