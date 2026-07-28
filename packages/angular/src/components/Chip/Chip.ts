import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input, output } from '@angular/core'

@Component({
  selector: 'wc-chip',
  standalone: true,
  template: `
    <span
      class="wc-chip wc-chip--{{ color() }} {{ disabled() ? 'wc-chip--disabled' : '' }} {{ className() }}"
      [attr.role]="clickable() ? 'button' : null"
      [attr.tabindex]="disabled() ? null : clickable() ? 0 : null"
      (click)="handleClick($event)"
      (keydown)="handleKeydown($event)"
    >
      @if (icon()) {
        <span class="wc-chip__icon" [innerHTML]="icon()"></span>
      }
      <span class="wc-chip__label">{{ label() }}<ng-content /></span>
      @if (closable()) {
        <button class="wc-chip__close" type="button" aria-label="Remove" (click)="handleClose($event)">×</button>
      }
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-chip{display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 12px;border-radius:999px;font-size:0.8125rem;font-weight:500;line-height:1;color:var(--wc-text-primary,#1a1a1a);background:var(--wc-surface-subtle,#f1f3f5);border:1px solid var(--wc-border-default,rgba(0,0,0,0.08));box-sizing:border-box;cursor:default;user-select:none}
.wc-chip--primary,
.wc-chip--secondary{color:#fff;background:var(--wc-accent,#3b82f6);border-color:transparent}
.wc-chip--success{color:#fff;background:var(--wc-success-600,#16a34a);border-color:transparent}
.wc-chip--warning{color:#fff;background:var(--wc-warning-600,#d97706);border-color:transparent}
.wc-chip--error{color:#fff;background:var(--wc-danger,#ef4444);border-color:transparent}
.wc-chip--info{color:#fff;background:var(--wc-info-600,#2563eb);border-color:transparent}
.wc-chip--disabled{opacity:0.55;cursor:not-allowed}
.wc-chip__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.wc-chip__icon{display:inline-flex}
.wc-chip__close{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin-right:-4px;padding:0;border:0;border-radius:50%;background:transparent;color:inherit;font-size:1rem;line-height:1;cursor:pointer}
.wc-chip__close:hover{background:rgba(0,0,0,0.08)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chip {
  readonly color = input<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('default')
  readonly label = input('')
  readonly icon = input('')
  readonly disabled = input(false)
  readonly clickable = input(false)
  readonly closable = input(false)
  readonly className = input('')
  readonly clicked = output<Event>()
  readonly closed = output<MouseEvent>()

  readonly chipClasses = computed(() =>
    ['wc-chip', `wc-chip--${this.color()}`, this.disabled() ? 'wc-chip--disabled' : '', this.className()]
      .filter(Boolean)
      .join(' ')
  )

  handleClick(event: MouseEvent): void {
    if (!this.disabled() && this.clickable()) this.clicked.emit(event)
  }

  handleKeydown(event: KeyboardEvent): void {
    if (this.disabled() || !this.clickable()) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      this.clicked.emit(event)
    }
  }

  handleClose(event: MouseEvent): void {
    event.stopPropagation()
    this.closed.emit(event)
  }
}
