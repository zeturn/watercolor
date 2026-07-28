import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-container',
  standalone: true,
  template: `<div class="wc-container wc-container--{{ size() }} wc-container--gutter-{{ gutter() }} {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    `.wc-container{width:100%;margin-inline:auto;box-sizing:border-box;padding-inline:1rem}
.wc-container--sm{max-width:640px}
.wc-container--md{max-width:960px}
.wc-container--lg{max-width:1280px}
.wc-container--xl{max-width:1536px}
.wc-container--full{max-width:none}
.wc-container--gutter-none{padding-inline:0}
.wc-container--gutter-sm{padding-inline:0.5rem}
.wc-container--gutter-lg{padding-inline:2rem}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Container {
  readonly size = input<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
  readonly gutter = input<'none' | 'sm' | 'md' | 'lg'>('md')
  readonly className = input('')
}
