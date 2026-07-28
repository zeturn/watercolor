import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, output } from '@angular/core'

@Component({
  selector: 'wc-list-item',
  standalone: true,
  template: `
    <li
      class="wc-list-item {{ disabled() ? 'wc-list-item--disabled' : '' }} {{ className() }}"
      [attr.role]="clickable() ? 'button' : null"
      [attr.tabindex]="clickable() && !disabled() ? 0 : null"
      (click)="handleClick($event)"
      (keydown)="handleKeydown($event)"
    >
      <ng-content />
    </li>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-list-item{display:flex;align-items:center;gap:12px;padding:10px 14px;color:var(--wc-text-primary,#1a1a1a);box-sizing:border-box}
.wc-list-item--disabled{opacity:0.55;cursor:not-allowed}
.wc-list-item[role='button']{cursor:pointer}
.wc-list-item[role='button']:hover{background:var(--wc-state-hover-bg,rgba(0,0,0,0.03))}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItem {
  readonly disabled = input(false)
  readonly clickable = input(false)
  readonly className = input('')
  readonly clicked = output<MouseEvent>()

  handleClick(event: MouseEvent): void {
    if (this.disabled()) return
    this.clicked.emit(event)
  }

  handleKeydown(event: KeyboardEvent): void {
    if (this.clickable() && !this.disabled() && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault()
      this.clicked.emit(event as unknown as MouseEvent)
    }
  }
}
