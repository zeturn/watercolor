import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core'

let vcUid = 0

@Component({
  selector: 'wc-verification-code-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="wc-verification wc-verification--{{ size() }} {{ error() ? 'wc-verification--error' : '' }} {{ className() }}">
      @for (d of digits(); track $index) {
        <input
          [id]="cellId($index)"
          class="wc-verification__cell"
          maxlength="1"
          [attr.inputmode]="type() === 'number' ? 'numeric' : 'text'"
          [disabled]="disabled()"
          [value]="d"
          (input)="handleInput($index, $event)"
          (keydown)="handleKeydown($index, $event)"
        />
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `
    .wc-verification { display: inline-flex; gap: 8px; }
    .wc-verification__cell {
      width: 44px;
      height: 52px;
      text-align: center;
      font-size: 1.25rem;
      border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
      border-radius: 8px;
      background: var(--wc-surface-canvas, #fff);
      color: var(--wc-text-primary, #1a1a1a);
      outline: none;
    }
    .wc-verification__cell:focus { border-color: var(--wc-accent, #3b82f6); box-shadow: 0 0 0 3px var(--wc-state-focus-ring, rgba(59, 130, 246, 0.25)); }
    .wc-verification--sm .wc-verification__cell { width: 36px; height: 42px; font-size: 1rem; }
    .wc-verification--lg .wc-verification__cell { width: 52px; height: 62px; font-size: 1.5rem; }
    .wc-verification--error .wc-verification__cell { border-color: var(--wc-danger, #ef4444); }
    `,
  ],
})
export class VerificationCodeInput {
  readonly length = input(6)
  readonly value = model('')
  readonly disabled = input(false)
  readonly error = input(false)
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly type = input<'number' | 'text'>('number')
  readonly className = input('', { alias: 'class' })

  readonly changed = output<string>()
  readonly completed = output<string>()

  private readonly uid = vcUid++
  private readonly edited = signal<string[] | null>(null)

  readonly digits = computed(() => {
    const edited = this.edited()
    if (edited && edited.length === this.length()) return edited
    const v = this.value()
    return Array.from({ length: this.length() }, (_, i) => v[i] ?? '')
  })

  cellId(i: number): string {
    return `wc-vc-${this.uid}-${i}`
  }

  private sync(next: string[]): void {
    this.edited.set(next)
    const joined = next.join('')
    this.value.set(joined)
    this.changed.emit(joined)
    if (joined.length === this.length() && !next.includes('')) this.completed.emit(joined)
  }

  handleInput(i: number, event: Event): void {
    const inputEl = event.currentTarget as HTMLInputElement
    const next = [...this.digits()]
    next[i] = inputEl.value.slice(-1)
    inputEl.value = next[i]
    this.sync(next)
    if (next[i] && i < this.length() - 1) {
      document.getElementById(this.cellId(i + 1))?.focus()
    }
  }

  handleKeydown(i: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.digits()[i] && i > 0) {
      document.getElementById(this.cellId(i - 1))?.focus()
    }
  }
}
