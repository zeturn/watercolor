import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, output } from '@angular/core'

@Component({
  selector: 'wc-table-row',
  standalone: true,
  template: `<tr class="wc-table-row {{ className() }}" (click)="clicked.emit($event)"><ng-content /></tr>`,
  styles: [
    ':host{display:contents}',
    `.wc-table-row:hover td{background:var(--wc-state-hover-bg,rgba(0,0,0,0.03))}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRow {
  readonly className = input('')
  readonly clicked = output<MouseEvent>()
}
