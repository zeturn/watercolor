import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, signal } from '@angular/core'

@Component({
  selector: 'wc-hover-card',
  standalone: true,
  template: `
    <span
      class="wc-hover-card {{ className() }}"
      role="presentation"
      (mouseenter)="open.set(true)"
      (mouseleave)="open.set(false)"
      (focusin)="open.set(true)"
      (focusout)="open.set(false)"
    >
      <ng-content select="[wcTrigger]" />
      @if (open()) {
        <span class="wc-hover-card__pop wc-hover-card__pop--{{ placement() }}" role="dialog">
          <ng-content />
        </span>
      }
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-hover-card{position:relative;display:inline-flex}
.wc-hover-card__pop{position:absolute;z-index:1100;max-width:280px;padding:10px 12px;border-radius:8px;background:var(--wc-surface-canvas,#fff);border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));box-shadow:0 4px 12px rgba(0,0,0,0.12);font-size:0.8125rem;color:var(--wc-text-primary,#1a1a1a)}
.wc-hover-card__pop--top{bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:8px}
.wc-hover-card__pop--bottom{top:100%;left:50%;transform:translateX(-50%);margin-top:8px}
.wc-hover-card__pop--left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}
.wc-hover-card__pop--right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverCard {
  readonly placement = input<'top' | 'bottom' | 'left' | 'right'>('top')
  readonly className = input('')

  readonly open = signal(false)
}
