import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-table',
  standalone: true,
  template: `
    <div class="wc-table-wrapper {{ className() }}">
      <table class="wc-table wc-table--{{ size() }} wc-table--{{ variant() }} {{ stickyHeader() ? 'wc-table--sticky' : '' }}">
        <ng-content />
      </table>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-table-wrapper{width:100%;overflow-x:auto;box-sizing:border-box}
.wc-table{width:100%;border-collapse:collapse;font-size:0.875rem;color:var(--wc-text-primary,#1a1a1a)}
.wc-table--sm td,.wc-table--sm th{padding:6px 10px}
.wc-table--md td,.wc-table--md th{padding:10px 14px}
.wc-table--lg td,.wc-table--lg th{padding:14px 18px}
.wc-table--outlined,.wc-table--elevated{border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:8px}
.wc-table--elevated{box-shadow:0 2px 8px rgba(0,0,0,0.06)}
.wc-table--sticky thead th{position:sticky;top:0;background:var(--wc-surface-canvas,#fff);z-index:1}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table {
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly variant = input<'default' | 'outlined' | 'elevated'>('default')
  readonly stickyHeader = input(false)
  readonly className = input('')
}
