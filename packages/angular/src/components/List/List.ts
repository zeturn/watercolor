import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-list',
  standalone: true,
  template: `<ul class="wc-list wc-list--{{ variant() }} {{ dense() ? 'wc-list--dense' : '' }} {{ className() }}"><ng-content /></ul>`,
  styles: [
    ':host{display:contents}',
    `.wc-list{list-style:none;margin:0;padding:0;box-sizing:border-box}
.wc-list--bordered{border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:8px;overflow:hidden}
.wc-list--divided > wc-list-item:not(:last-child) li,
.wc-list--divided > li:not(:last-child){border-bottom:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List {
  readonly variant = input<'default' | 'bordered' | 'divided'>('default')
  readonly dense = input(false)
  readonly className = input('')
}
