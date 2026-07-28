import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, signal } from '@angular/core'

@Component({
  selector: 'wc-copy',
  standalone: true,
  template: `
    <button class="wc-copy {{ className() }}" type="button" (click)="copy()">
      <ng-content />{{ copied() ? copiedLabel() : label() }}
    </button>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-copy{border:1px solid var(--wc-border-default,rgba(0,0,0,0.15));background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);padding:6px 12px;border-radius:8px;font:inherit;font-size:0.8125rem;cursor:pointer}
.wc-copy:hover{background:var(--wc-state-hover-bg,rgba(0,0,0,0.04))}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Copy {
  readonly text = input('')
  readonly label = input('Copy')
  readonly copiedLabel = input('Copied')
  readonly timeout = input(1500)
  readonly className = input('')

  readonly copied = signal(false)
  private timer: ReturnType<typeof setTimeout> | undefined

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.text())
      this.copied.set(true)
      clearTimeout(this.timer)
      this.timer = setTimeout(() => this.copied.set(false), this.timeout())
    } catch {
      /* clipboard unavailable */
    }
  }
}
