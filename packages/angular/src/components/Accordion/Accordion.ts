import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, signal } from '@angular/core'

@Component({
  selector: 'wc-accordion',
  standalone: true,
  template: `
    <div class="wc-accordion {{ className() }}">
      @for (item of items(); track $index) {
        <div class="wc-accordion__item">
          <button
            class="wc-accordion__header"
            type="button"
            [attr.aria-expanded]="openSet().has($index)"
            (click)="toggle($index)"
          >
            <span>{{ item.title }}</span>
            <span class="wc-accordion__icon">{{ openSet().has($index) ? '−' : '+' }}</span>
          </button>
          @if (openSet().has($index)) {
            <div class="wc-accordion__panel">{{ item.content }}</div>
          }
        </div>
      }
      <ng-content />
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-accordion{border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:8px;overflow:hidden;box-sizing:border-box}
.wc-accordion__item + .wc-accordion__item{border-top:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px 16px;border:0;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);font:inherit;font-weight:500;text-align:left;cursor:pointer}
.wc-accordion__header:hover{background:var(--wc-state-hover-bg,rgba(0,0,0,0.03))}
.wc-accordion__icon{font-size:1.25rem;line-height:1}
.wc-accordion__panel{padding:0 16px 12px;font-size:0.875rem;color:var(--wc-text-secondary,#6b7280);line-height:1.5}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accordion {
  readonly items = input<Array<{ title: string; content: string }>>([])
  readonly multiple = input(false)
  readonly className = input('')

  readonly openSet = signal(new Set<number>())

  toggle(index: number): void {
    const next = new Set(this.openSet())
    if (next.has(index)) next.delete(index)
    else {
      if (!this.multiple()) next.clear()
      next.add(index)
    }
    this.openSet.set(next)
  }
}
