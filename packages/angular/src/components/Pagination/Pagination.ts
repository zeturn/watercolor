import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input, model, output } from '@angular/core'

@Component({
  selector: 'wc-pagination',
  standalone: true,
  template: `
    <div class="wc-pagination {{ className() }}" role="navigation" aria-label="Pagination">
      <button class="wc-pagination__btn" [disabled]="page() <= 1" (click)="go(page() - 1)" aria-label="Previous">‹</button>
      @for (p of pages(); track p) {
        <button
          class="wc-pagination__btn {{ page() === p ? 'wc-pagination__btn--active' : '' }}"
          [attr.aria-current]="page() === p ? 'page' : null"
          (click)="go(p)"
        >{{ p }}</button>
      }
      <button class="wc-pagination__btn" [disabled]="page() >= count()" (click)="go(page() + 1)" aria-label="Next">›</button>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-pagination{display:inline-flex;align-items:center;gap:4px;box-sizing:border-box}
.wc-pagination__btn{min-width:36px;height:36px;padding:0 8px;border:1px solid var(--wc-border-default,rgba(0,0,0,0.12));background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);border-radius:8px;font:inherit;cursor:pointer}
.wc-pagination__btn:hover:not(:disabled){background:var(--wc-state-hover-bg,rgba(0,0,0,0.04))}
.wc-pagination__btn--active{background:var(--wc-accent,#3b82f6);border-color:var(--wc-accent,#3b82f6);color:#fff}
.wc-pagination__btn:disabled{opacity:0.5;cursor:not-allowed}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  readonly page = model(1)
  readonly count = input(1)
  readonly className = input('')
  readonly changed = output<number>()

  readonly pages = computed(() => Array.from({ length: Math.max(1, this.count()) }, (_, i) => i + 1))

  go(p: number): void {
    if (p >= 1 && p <= this.count() && p !== this.page()) {
      this.page.set(p)
      this.changed.emit(p)
    }
  }
}
