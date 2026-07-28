import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-split',
  standalone: true,
  template: `
    <div class="wc-split wc-split--{{ ratio() }} {{ className() }}">
      <aside class="wc-split__sidebar"><ng-content select="[wcSidebar]" /></aside>
      <div class="wc-split__content"><ng-content /></div>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-split{display:flex;gap:16px;align-items:flex-start;box-sizing:border-box}
.wc-split__sidebar:empty{display:none}
.wc-split__content{flex:1 1 auto;min-width:0}
.wc-split--sidebar .wc-split__sidebar,
.wc-split--wide-end .wc-split__sidebar{flex:0 0 280px}
.wc-split--sidebar-end .wc-split__sidebar{flex:0 0 280px;order:2}
.wc-split--wide-start .wc-split__sidebar{flex:0 0 360px}
.wc-split--wide-end .wc-split__content{flex:0 0 360px;order:2}
.wc-split--equal > *{flex:1 1 0}
.wc-split--sidebar-end .wc-split__content{order:1}
@media (max-width:768px){
  .wc-split,.wc-split--sidebar-end,.wc-split--wide-start,.wc-split--wide-end{flex-direction:column}
  .wc-split__sidebar,.wc-split--wide-end .wc-split__sidebar,.wc-split--wide-start .wc-split__sidebar{flex:1 1 auto;width:100%;order:0}
  .wc-split--wide-end .wc-split__content{order:0}
}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Split {
  readonly ratio = input<'equal' | 'sidebar' | 'sidebar-end' | 'wide-start' | 'wide-end'>('sidebar')
  readonly className = input('')
}
