import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'

@Component({
  selector: 'wc-status',
  standalone: true,
  template: `
    <span class="wc-status wc-status--{{ tone() }} wc-status--{{ size() }} {{ className() }}">
      <span class="wc-status__dot"></span>
      @if (label()) {
        <span class="wc-status__label">{{ label() }}</span>
      }
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-status{display:inline-flex;align-items:center;gap:6px;color:var(--wc-text-secondary,#6b7280);font-size:0.8125rem}
.wc-status__dot{width:8px;height:8px;border-radius:50%;background:var(--wc-text-secondary,#6b7280);flex:0 0 auto}
.wc-status--sm .wc-status__dot{width:6px;height:6px}
.wc-status--success .wc-status__dot{background:var(--wc-success-600,#16a34a)}
.wc-status--success{color:var(--wc-success-600,#16a34a)}
.wc-status--warning .wc-status__dot{background:var(--wc-warning-600,#d97706)}
.wc-status--warning{color:var(--wc-warning-600,#d97706)}
.wc-status--error .wc-status__dot{background:var(--wc-danger,#ef4444)}
.wc-status--error{color:var(--wc-danger,#ef4444)}
.wc-status--info .wc-status__dot{background:var(--wc-info-600,#2563eb)}
.wc-status--info{color:var(--wc-info-600,#2563eb)}
.wc-status--processing .wc-status__dot{background:var(--wc-accent,#3b82f6);animation:wc-status-pulse 1.2s ease-in-out infinite}
.wc-status--processing{color:var(--wc-accent,#3b82f6)}
@keyframes wc-status-pulse{0%,100%{opacity:1}50%{opacity:0.3}}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Status {
  readonly tone = input<'neutral' | 'success' | 'warning' | 'error' | 'info' | 'processing'>('neutral')
  readonly label = input('')
  readonly size = input<'sm' | 'md'>('md')
  readonly className = input('')
}
