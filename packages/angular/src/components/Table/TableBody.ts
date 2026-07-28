import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-table-body',
  standalone: true,
  template: `<tbody class="wc-table-body {{ className() }}"><ng-content /></tbody>`,
  styles: [':host{display:contents}'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBody {
  readonly className = input('')
}
