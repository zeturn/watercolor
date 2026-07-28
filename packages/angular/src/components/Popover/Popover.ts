import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model } from '@angular/core'

@Component({
  selector: 'wc-popover',
  standalone: true,
  template: `
    <div class="wc-popover {{ className() }}">
      <button class="wc-popover__trigger" type="button" (click)="open.set(!open())" [attr.aria-expanded]="open()">
        <ng-content select="[wcTrigger]" />
      </button>
      @if (open()) {
        <div class="wc-popover__content wc-popover__content--{{ placement() }}" role="dialog">
          <ng-content />
        </div>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-popover{position:relative;display:inline-block}
.wc-popover__trigger{display:inline-flex;cursor:pointer}
.wc-popover__content{position:absolute;z-index:1100;min-width:160px;padding:10px 12px;background:var(--wc-surface-canvas,#fff);border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.12);color:var(--wc-text-primary,#1a1a1a)}
.wc-popover__content--top{bottom:100%;left:0;margin-bottom:8px}
.wc-popover__content--bottom{top:100%;left:0;margin-top:8px}
.wc-popover__content--left{right:100%;top:0;margin-right:8px}
.wc-popover__content--right{left:100%;top:0;margin-left:8px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Popover {
  readonly open = model(false)
  readonly placement = input<'top' | 'bottom' | 'left' | 'right'>('bottom')
  readonly className = input('')
}
