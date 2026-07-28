import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
  afterNextRender,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core'

@Component({
  selector: 'wc-number-animation',
  standalone: true,
  template: `<span class="{{ numberAnimationClasses() }}">{{ displayValue() }}</span>`,
  styles: [
    ':host{display:contents}',
    `.wc-number-animation{display:inline-block;font-variant-numeric:tabular-nums}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberAnimation implements OnDestroy {
  readonly value = input<number | undefined>(undefined)
  readonly from = input(0)
  readonly duration = input(2000)
  readonly decimals = input(0)
  readonly separator = input('')
  readonly prefix = input('')
  readonly suffix = input('')
  readonly formatter = input<((value: number) => string) | null>(null)
  readonly easing = input<'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'>('linear')
  readonly autoPlay = input(true)
  readonly active = input<boolean | undefined>(undefined)
  readonly to = input<number | undefined>(undefined)
  readonly precision = input<number | undefined>(undefined)
  readonly showSeparator = input(false)
  readonly completed = output<void>()

  readonly currentValue = signal(0)
  readonly isAnimating = signal(false)

  private animationFrame: number | null = null
  private mounted = false

  readonly isAutoPlay = computed(() => (this.active() !== undefined ? !!this.active() : this.autoPlay()))
  readonly finalValue = computed(() => (this.to() !== undefined ? this.to()! : (this.value() ?? 0)))
  readonly decimalsComputed = computed(() => (this.precision() !== undefined ? this.precision()! : this.decimals()))
  readonly separatorComputed = computed(() => (this.showSeparator() ? this.separator() || ',' : this.separator()))

  readonly numberAnimationClasses = computed(() =>
    [
      'wc-number-animation',
      this.easing() ? `wc-number-animation--${this.easing()}` : '',
      this.isAnimating() || this.isAutoPlay() ? 'wc-number-animation--playing' : '',
    ]
      .filter(Boolean)
      .join(' ')
  )

  readonly displayValue = computed(() => {
    const raw = this.currentValue()
    const formatter = this.formatter()
    if (formatter) return formatter(raw)
    const decimals = this.decimalsComputed()
    let formatted = decimals > 0 ? raw.toFixed(decimals) : Math.round(raw).toString()
    const separator = this.separatorComputed()
    if (separator) {
      const parts = formatted.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
      formatted = parts.join('.')
    }
    return `${this.prefix()}${formatted}${this.suffix()}`
  })

  constructor() {
    this.currentValue.set(this.from())

    afterNextRender(() => {
      this.mounted = true
      if (this.isAutoPlay()) {
        this.animate()
      } else {
        this.currentValue.set(this.finalValue())
      }
    })

    effect(() => {
      const target = this.finalValue()
      if (!this.mounted) return
      this.stopAnimation()
      if (this.isAutoPlay()) {
        this.animate()
      } else {
        this.currentValue.set(target)
      }
    })
  }

  private easeProgress(progress: number): number {
    switch (this.easing()) {
      case 'ease-in':
        return progress * progress
      case 'ease-out':
        return 1 - (1 - progress) * (1 - progress)
      case 'ease-in-out':
        return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
      default:
        return progress
    }
  }

  private stopAnimation(): void {
    if (this.animationFrame !== null) {
      if (typeof window !== 'undefined') {
        cancelAnimationFrame(this.animationFrame)
      } else {
        clearTimeout(this.animationFrame as unknown as ReturnType<typeof setTimeout>)
      }
      this.animationFrame = null
    }
    this.isAnimating.set(false)
  }

  start(): void {
    this.animate()
  }

  stop(): void {
    this.stopAnimation()
  }

  private animate(): void {
    const startTime = Date.now()
    const startValue = this.currentValue()
    const target = this.finalValue()
    const valueChange = target - startValue
    this.isAnimating.set(true)

    const step = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / this.duration(), 1)
      this.currentValue.set(startValue + valueChange * this.easeProgress(progress))
      if (progress < 1) {
        if (typeof window !== 'undefined') {
          this.animationFrame = requestAnimationFrame(step)
        } else {
          this.animationFrame = setTimeout(step, 16) as unknown as number
        }
      } else {
        this.currentValue.set(target)
        this.isAnimating.set(false)
        this.completed.emit()
      }
    }

    step()
  }

  ngOnDestroy(): void {
    this.stopAnimation()
  }
}
