import { ChangeDetectionStrategy, Component, ViewEncapsulation, effect, input, model, output } from '@angular/core'

@Component({
  selector: 'wc-snackbar',
  standalone: true,
  template: `
    @if (open()) {
      <div class="wc-snackbar {{ className() }}" role="status">
        <span class="wc-snackbar__message">
          @if (message()) {
            {{ message() }}
          }
          <ng-content />
        </span>
        @if (actionText()) {
          <button class="wc-snackbar__action" (click)="act()">{{ actionText() }}</button>
        }
      </div>
    }
  `,
  styles: [
    ':host{display:contents}',
    `.wc-snackbar{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:1400;display:flex;align-items:center;gap:16px;max-width:90vw;padding:12px 16px;border-radius:8px;background:var(--wc-text-primary,#1a1a1a);color:var(--wc-surface-canvas,#fff);box-shadow:0 8px 24px rgba(0,0,0,0.24);font-size:0.875rem}
.wc-snackbar__message{flex:1 1 auto}
.wc-snackbar__action{border:0;background:transparent;color:var(--wc-accent,#3b82f6);font:inherit;font-weight:600;cursor:pointer;padding:0;white-space:nowrap}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Snackbar {
  readonly open = model(false)
  readonly message = input('')
  readonly actionText = input('')
  readonly duration = input(4000)
  readonly className = input('')
  readonly action = output<void>()
  readonly closed = output<void>()

  private timer: ReturnType<typeof setTimeout> | undefined

  constructor() {
    effect(() => {
      if (this.open() && this.duration() > 0) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.open.set(false)
          this.closed.emit()
        }, this.duration())
      }
    })
  }

  act(): void {
    this.action.emit()
    this.open.set(false)
  }
}
