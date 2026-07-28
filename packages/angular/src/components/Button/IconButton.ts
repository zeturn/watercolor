import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core'

@Component({
  selector: 'wc-icon-button',
  standalone: true,
  template: `
    <button type="button" [class]="buttonClasses()" [disabled]="disabled()" (click)="handleClick($event)">
      <span class="icon-button-icon">
        <ng-content />
        @if (icon()) {
          <span [innerHTML]="icon()"></span>
        }
      </span>
    </button>
  `,
  styleUrl: './style.css',
  styles: [':host{display:contents}'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButton {
  readonly color = input<'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'>('default')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly edge = input<boolean | 'start' | 'end'>(false)
  readonly disabled = input(false)
  readonly icon = input('')
  readonly clicked = output<MouseEvent>()

  readonly buttonClasses = computed(() =>
    [
      'wc-icon-button',
      `wc-icon-button--${this.color()}`,
      `wc-icon-button--${this.size()}`,
      this.edge() && `wc-icon-button--edge-${this.edge()}`,
      this.disabled() && 'wc-icon-button--disabled',
    ]
      .filter(Boolean)
      .join(' ')
  )

  handleClick(event: MouseEvent): void {
    if (!this.disabled()) this.clicked.emit(event)
  }
}
