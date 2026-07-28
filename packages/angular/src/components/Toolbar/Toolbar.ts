import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-toolbar',
  standalone: true,
  template: `<div class="wc-toolbar wc-toolbar--{{ variant() }} {{ dense() ? 'wc-toolbar--dense' : '' }} {{ className() }}"><ng-content /></div>`,
  styles: [
    ':host{display:contents}',
    `.wc-toolbar{display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--wc-surface-subtle,#f1f3f5);border-radius:8px;box-sizing:border-box}
.wc-toolbar--dense{padding:4px 8px}
.wc-toolbar--prominent{padding:12px 16px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toolbar {
  readonly variant = input<'default' | 'dense' | 'prominent'>('default')
  readonly dense = input(false)
  readonly className = input('')
}
