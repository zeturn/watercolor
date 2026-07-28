import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-feed',
  standalone: true,
  template: `<div class="wc-feed wc-feed--gap-{{ gap() }} {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    `.wc-feed{display:flex;flex-direction:column;box-sizing:border-box}
.wc-feed--gap-none{gap:0}
.wc-feed--gap-sm{gap:8px}
.wc-feed--gap-md{gap:16px}
.wc-feed--gap-lg{gap:24px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feed {
  readonly gap = input<'none' | 'sm' | 'md' | 'lg'>('md')
  readonly className = input('')
}
