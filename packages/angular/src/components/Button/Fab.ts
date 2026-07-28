import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core'

@Component({
  selector: 'wc-fab',
  standalone: true,
  template: `
    <button [class]="buttonClasses()" [disabled]="disabled()" type="button" (click)="handleClick($event)">
      <span class="fab-icon">
        @if (icon()) {
          <span [innerHTML]="icon()"></span>
        }
        @if (variant() !== 'extended') {
          <ng-content />
        }
      </span>
      @if (variant() === 'extended') {
        <span class="fab-label">{{ label() }}<ng-content /></span>
      }
    </button>
  `,
  styleUrl: './style.css',
  styles: [':host{display:contents}'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Fab {
  readonly variant = input<'circular' | 'extended'>('circular')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly color = input<'primary' | 'secondary' | 'inherit'>('primary')
  readonly disabled = input(false)
  readonly label = input('')
  readonly icon = input('')
  readonly clicked = output<MouseEvent>()

  readonly buttonClasses = computed(() =>
    [
      'wc-fab',
      `wc-fab--${this.variant()}`,
      `wc-fab--${this.size()}`,
      `wc-fab--${this.color()}`,
      this.disabled() && 'wc-fab--disabled',
    ]
      .filter(Boolean)
      .join(' ')
  )

  handleClick(event: MouseEvent): void {
    if (!this.disabled()) this.clicked.emit(event)
  }
}
