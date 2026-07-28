import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-list-item-text',
  standalone: true,
  template: `
    <span class="wc-list-item__text {{ className() }}">
      @if (primary()) {
        <span class="wc-list-item__primary">{{ primary() }}</span>
      }
      @if (secondary()) {
        <span class="wc-list-item__secondary">{{ secondary() }}</span>
      }
      <ng-content />
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-list-item__text{display:flex;flex-direction:column;min-width:0}
.wc-list-item__primary{font-size:0.875rem;color:var(--wc-text-primary,#1a1a1a)}
.wc-list-item__secondary{font-size:0.75rem;color:var(--wc-text-secondary,#6b7280)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemText {
  readonly primary = input('')
  readonly secondary = input('')
  readonly className = input('')
}
