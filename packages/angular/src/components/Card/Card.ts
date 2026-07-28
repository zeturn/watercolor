import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, output } from '@angular/core'

@Component({
  selector: 'wc-card',
  standalone: true,
  template: `
    <div
      class="wc-card wc-card--{{ variant() }} wc-card--{{ color() }} wc-card--{{ size() }} {{ className() }}"
      [attr.role]="interactive() ? 'button' : null"
      [attr.tabindex]="interactive() ? 0 : null"
      (click)="handleClick($event)"
      (keydown)="handleKeydown($event)"
    >
      <ng-content select="[wcHeader]" />
      @if (title()) {
        <div class="wc-card__title">{{ title() }}</div>
      }
      <div class="wc-card__body"><ng-content /></div>
      <ng-content select="[wcFooter]" />
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-card{display:flex;flex-direction:column;box-sizing:border-box;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);border:1px solid var(--wc-border-default,rgba(0,0,0,0.08));border-radius:12px;overflow:hidden}
.wc-card--minimal{border-color:transparent;background:transparent}
.wc-card--outlined{border-color:var(--wc-border-default,rgba(0,0,0,0.12))}
.wc-card--elevated{border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.06)}
.wc-card--filled{background:var(--wc-surface-subtle,#f1f3f5);border-color:transparent}
.wc-card--primary{border-color:var(--wc-accent,#3b82f6)}
.wc-card--secondary{border-color:var(--wc-text-secondary,#6b7280)}
.wc-card--success{border-color:var(--wc-success-600,#16a34a)}
.wc-card--warning{border-color:var(--wc-warning-600,#d97706)}
.wc-card--error{border-color:var(--wc-danger,#ef4444)}
.wc-card--info{border-color:var(--wc-info-600,#2563eb)}
.wc-card--small{padding:12px}
.wc-card--medium{padding:16px}
.wc-card--large{padding:24px}
.wc-card__title{font-weight:600;font-size:1.05rem;margin-bottom:8px}
.wc-card__body{flex:1 1 auto;min-width:0}
.wc-card[role='button']{cursor:pointer;transition:box-shadow 0.15s ease}
.wc-card[role='button']:hover{box-shadow:0 4px 10px rgba(0,0,0,0.1)}
.wc-card[role='button']:focus-visible{outline:2px solid var(--wc-accent,#3b82f6);outline-offset:2px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  readonly variant = input<'elevated' | 'outlined' | 'filled' | 'minimal'>('minimal')
  readonly color = input<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('default')
  readonly size = input<'small' | 'medium' | 'large'>('medium')
  readonly title = input('')
  readonly interactive = input(false)
  readonly className = input('')
  readonly clicked = output<Event>()

  handleClick(event: MouseEvent): void {
    if (this.interactive()) this.clicked.emit(event)
  }

  handleKeydown(event: KeyboardEvent): void {
    if (!this.interactive()) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      this.clicked.emit(event)
    }
  }
}
