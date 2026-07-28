import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-inline',
  standalone: true,
  template: `<div class="wc-inline wc-inline--gap-{{ gap() }} wc-inline--justify-{{ justify() }} wc-inline--align-{{ align() }} {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    `.wc-inline{display:inline-flex;flex-wrap:wrap;box-sizing:border-box}
.wc-inline--gap-none{gap:0}
.wc-inline--gap-xs{gap:0.25rem}
.wc-inline--gap-sm{gap:0.5rem}
.wc-inline--gap-md{gap:0.75rem}
.wc-inline--gap-lg{gap:1.25rem}
.wc-inline--gap-xl{gap:2rem}
.wc-inline--justify-start{justify-content:flex-start}
.wc-inline--justify-center{justify-content:center}
.wc-inline--justify-end{justify-content:flex-end}
.wc-inline--justify-between{justify-content:space-between}
.wc-inline--justify-around{justify-content:space-around}
.wc-inline--align-start{align-items:flex-start}
.wc-inline--align-center{align-items:center}
.wc-inline--align-end{align-items:flex-end}
.wc-inline--align-stretch{align-items:stretch}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inline {
  readonly gap = input<'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md')
  readonly justify = input<'start' | 'center' | 'end' | 'between' | 'around'>('start')
  readonly align = input<'start' | 'center' | 'end' | 'stretch'>('center')
  readonly className = input('')
}
