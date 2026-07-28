import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, signal } from '@angular/core'

export interface MenuItem {
  value: unknown
  label: string
  disabled?: boolean
  onclick?: () => void
}

@Component({
  selector: 'wc-menu',
  standalone: true,
  template: `
    <div class="wc-menu {{ className() }}">
      <button class="wc-menu__trigger" type="button" aria-haspopup="menu" [attr.aria-expanded]="open()" (click)="open.set(!open())">
        @if (trigger()) {
          <span [innerHTML]="trigger()"></span>
        } @else {
          ☰
        }
      </button>
      @if (open()) {
        <ul class="wc-menu__list wc-menu__list--{{ placement() }}" role="menu">
          @for (item of items(); track item.value) {
            <li role="none">
              <button class="wc-menu__item" role="menuitem" [disabled]="!!item.disabled" (click)="select(item)">{{ item.label }}</button>
            </li>
          }
          <ng-content />
        </ul>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-menu{position:relative;display:inline-block}
.wc-menu__trigger{border:0;background:transparent;cursor:pointer;font:inherit;color:inherit;padding:4px;border-radius:6px}
.wc-menu__trigger:hover{background:var(--wc-state-hover-bg,rgba(0,0,0,0.05))}
.wc-menu__list{position:absolute;z-index:1100;min-width:160px;margin:4px 0 0;padding:4px;list-style:none;background:var(--wc-surface-canvas,#fff);border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.12)}
.wc-menu__list--bottom-start{top:100%;left:0}
.wc-menu__list--bottom-end{top:100%;right:0}
.wc-menu__list--top-start{bottom:100%;left:0}
.wc-menu__list--top-end{bottom:100%;right:0}
.wc-menu__item{display:block;width:100%;text-align:left;padding:8px 12px;border:0;background:transparent;color:var(--wc-text-primary,#1a1a1a);font:inherit;cursor:pointer;border-radius:6px}
.wc-menu__item:hover:not(:disabled){background:var(--wc-state-hover-bg,rgba(0,0,0,0.05))}
.wc-menu__item:disabled{opacity:0.5;cursor:not-allowed}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  readonly trigger = input('')
  readonly items = input<MenuItem[]>([])
  readonly placement = input<'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'>('bottom-start')
  readonly className = input('')

  readonly open = signal(false)

  select(item: MenuItem): void {
    item.onclick?.()
    this.open.set(false)
  }
}
