import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-table-cell',
  standalone: true,
  template: `
    @if (this.as() === 'th') {
      <th class="wc-table-cell wc-table-cell--{{ align() }} {{ className() }}"><ng-content /></th>
    } @else {
      <td class="wc-table-cell wc-table-cell--{{ align() }} {{ className() }}"><ng-content /></td>
    }
  `,
  styles: [
    ':host{display:contents}',
    `.wc-table-cell{border-bottom:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-table-cell--left{text-align:left}
.wc-table-cell--center{text-align:center}
.wc-table-cell--right{text-align:right}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCell {
  readonly as = input<'td' | 'th'>('td')
  readonly align = input<'left' | 'center' | 'right'>('left')
  readonly className = input('')
}
