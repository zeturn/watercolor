import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, signal } from '@angular/core'

@Component({
  selector: 'wc-tooltip',
  standalone: true,
  template: `
    <span
      class="wc-tooltip {{ className() }}"
      role="presentation"
      (mouseenter)="visible.set(true)"
      (mouseleave)="visible.set(false)"
      (focusin)="visible.set(true)"
      (focusout)="visible.set(false)"
    >
      <ng-content />
      @if (visible() && text()) {
        <span class="wc-tooltip__bubble wc-tooltip__bubble--{{ placement() }}" role="tooltip">{{ text() }}</span>
      }
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-tooltip{position:relative;display:inline-flex}
.wc-tooltip__bubble{position:absolute;z-index:1200;padding:4px 8px;border-radius:6px;background:var(--wc-text-primary,#1a1a1a);color:var(--wc-surface-canvas,#fff);font-size:0.75rem;line-height:1.4;white-space:nowrap;pointer-events:none}
.wc-tooltip__bubble--top{bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:6px}
.wc-tooltip__bubble--bottom{top:100%;left:50%;transform:translateX(-50%);margin-top:6px}
.wc-tooltip__bubble--left{right:100%;top:50%;transform:translateY(-50%);margin-right:6px}
.wc-tooltip__bubble--right{left:100%;top:50%;transform:translateY(-50%);margin-left:6px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip {
  readonly text = input('')
  readonly placement = input<'top' | 'bottom' | 'left' | 'right'>('top')
  readonly className = input('')

  readonly visible = signal(false)
}
