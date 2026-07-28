import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-table-head',
  standalone: true,
  template: `<thead class="wc-table-head {{ className() }}"><ng-content /></thead>`,
  styles: [
    ':host{display:contents}',
    `.wc-table-head th{text-align:left;font-weight:600;color:var(--wc-text-secondary,#555);border-bottom:1px solid var(--wc-border-default,rgba(0,0,0,0.1));background:var(--wc-surface-subtle,#f7f8fa)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHead {
  readonly className = input('')
}
