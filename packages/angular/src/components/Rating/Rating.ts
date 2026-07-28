import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model, output, signal } from '@angular/core'
import { useLocale } from '../../hooks.js'

@Component({
  selector: 'wc-rating',
  standalone: true,
  template: `
    <div class="wc-rating" role="radiogroup" [attr.aria-label]="ariaLabel() || locale.messages.rating">
      @for (n of items(); track n) {
        <button
          type="button"
          class="wc-rating-item {{ n <= hovered() || n <= value() ? 'wc-rating-item--active' : '' }}"
          [attr.aria-label]="locale.messages.ratingValue(n, max())"
          [attr.aria-checked]="n === value()"
          role="radio"
          [disabled]="readonly()"
          (mouseenter)="hover(n)"
          (mouseleave)="hover(0)"
          (click)="select(n)"
        >★</button>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-rating{display:inline-flex;gap:2px}
.wc-rating-item{background:none;border:none;padding:2px;font-size:1.25rem;line-height:1;cursor:pointer;color:var(--wc-border-default,rgba(0,0,0,0.2));transition:color 0.15s ease,transform 0.15s ease}
.wc-rating-item:disabled{cursor:default}
.wc-rating-item--active{color:var(--wc-color-warning,#f59e0b)}
.wc-rating-item:not(:disabled):hover{transform:scale(1.15)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rating {
  readonly value = model(0)
  readonly max = input(5)
  readonly readonly = input(false)
  readonly ariaLabel = input('')
  readonly changed = output<number>()

  readonly locale = useLocale()
  readonly hovered = signal(0)

  items(): number[] {
    return Array.from({ length: this.max() }, (_, i) => i + 1)
  }

  select(next: number): void {
    if (this.readonly()) return
    const nextValue = next === this.value() ? 0 : next
    this.value.set(nextValue)
    this.changed.emit(nextValue)
  }

  hover(next: number): void {
    if (!this.readonly()) this.hovered.set(next)
  }
}
