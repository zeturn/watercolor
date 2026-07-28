import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core'

@Component({
  selector: 'wc-grid',
  standalone: true,
  template: `<div class="wc-grid wc-grid--gap-{{ gap() }} {{ className() }}" [style.grid-template-columns]="gridTemplate()"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    `.wc-grid{display:grid;box-sizing:border-box}
.wc-grid--gap-none{gap:0}
.wc-grid--gap-xs{gap:0.25rem}
.wc-grid--gap-sm{gap:0.5rem}
.wc-grid--gap-md{gap:1rem}
.wc-grid--gap-lg{gap:1.5rem}
.wc-grid--gap-xl{gap:2.5rem}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Grid {
  readonly columns = input<number | string>(12)
  readonly gap = input<'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md')
  readonly className = input('')

  readonly gridTemplate = computed(() => {
    const columns = this.columns()
    return typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns
  })
}
