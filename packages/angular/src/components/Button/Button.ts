import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core'
import { getButtonClasses, handleButtonClick } from './utils.js'

@Component({
  selector: 'wc-button',
  standalone: true,
  template: `
    <button
      [class]="buttonClasses()"
      [disabled]="disabled() || loading()"
      [type]="type()"
      (click)="handleClick($event)"
    >
      @if (loading()) {
        <span class="wc-btn__loading">
          <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </span>
      }
      @if (startIcon() && !loading()) {
        <span class="wc-btn__start-icon">{{ startIcon() }}</span>
      }
      <span class="wc-btn__content" [class.opacity-0]="loading()"><ng-content /></span>
      @if (endIcon() && !loading()) {
        <span class="wc-btn__end-icon">{{ endIcon() }}</span>
      }
    </button>
  `,
  styleUrl: './style.css',
  styles: [':host{display:contents}'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  readonly variant = input('primary')
  readonly buttonStyle = input('default')
  readonly size = input('md')
  readonly disabled = input(false)
  readonly loading = input(false)
  readonly fullWidth = input(false)
  readonly type = input<'button' | 'submit' | 'reset'>('button')
  readonly href = input<string | null>(null)
  readonly target = input('_self')
  readonly startIcon = input<string | null>(null)
  readonly endIcon = input<string | null>(null)
  readonly rounded = input<boolean | string>(true)
  readonly uppercase = input(false)
  readonly ripple = input(true)
  readonly clicked = output<MouseEvent>()

  readonly buttonClasses = computed(() =>
    getButtonClasses({
      variant: this.variant(),
      buttonStyle: this.buttonStyle(),
      size: this.size(),
      disabled: this.disabled(),
      loading: this.loading(),
      fullWidth: this.fullWidth(),
      uppercase: this.uppercase(),
      rounded: this.rounded(),
    }).join(' ')
  )

  handleClick(event: MouseEvent): void {
    handleButtonClick({
      event,
      disabled: this.disabled(),
      loading: this.loading(),
      href: this.href() ?? '',
      target: this.target(),
      onClick: (e) => this.clicked.emit(e),
    })
  }
}
