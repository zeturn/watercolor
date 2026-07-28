import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation, effect, input, signal } from '@angular/core'

@Component({
  selector: 'wc-typing-text',
  standalone: true,
  template: `
    <span class="typing-wrapper">
      <span class="typing-text">{{ displayText() }}</span>
      @if (showCursor()) {
        <span class="typing-cursor"></span>
      }
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.typing-wrapper{display:inline-flex;align-items:center}
.typing-cursor{display:inline-block;width:1px;height:1em;background:currentColor;margin-left:2px;animation:wc-typing-blink 1s steps(1) infinite}
@keyframes wc-typing-blink{0%,50%{opacity:1}51%,100%{opacity:0}}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingText implements OnDestroy {
  readonly text = input('Hello, Watercolor UI!')
  readonly speed = input(100)
  readonly pause = input(1500)
  readonly loop = input(false)
  readonly erase = input(false)
  readonly showCursor = input(true)

  readonly displayText = signal('')

  private timer: ReturnType<typeof setTimeout> | null = null

  constructor() {
    effect((onCleanup) => {
      // re-run when any option changes
      void this.speed()
      void this.pause()
      void this.loop()
      void this.erase()
      this.run(this.text())
      onCleanup(() => this.stopTimer())
    })
  }

  private stopTimer(): void {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  private run(currentText: string): void {
    this.stopTimer()
    this.displayText.set('')
    let index = 0
    let deleting = false

    const step = () => {
      if (!deleting) {
        index += 1
        this.displayText.set(currentText.slice(0, index))
        if (index >= currentText.length) {
          if (this.erase() && this.loop()) {
            deleting = true
            this.timer = setTimeout(step, this.pause())
          } else if (this.loop()) {
            this.timer = setTimeout(() => {
              index = 0
              this.displayText.set('')
              this.timer = setTimeout(step, this.speed())
            }, this.pause())
          }
          return
        }
        this.timer = setTimeout(step, this.speed())
      } else {
        index -= 1
        this.displayText.set(currentText.slice(0, index))
        if (index <= 0) {
          deleting = false
          this.timer = setTimeout(step, this.speed())
          return
        }
        this.timer = setTimeout(step, this.speed() / 2)
      }
    }

    this.timer = setTimeout(step, this.speed())
  }

  ngOnDestroy(): void {
    this.stopTimer()
  }
}
