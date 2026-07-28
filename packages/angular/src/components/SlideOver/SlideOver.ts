import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model, output } from '@angular/core'

@Component({
  selector: 'wc-slide-over',
  standalone: true,
  template: `
    @if (open()) {
      <div class="wc-slideover-overlay" role="presentation" (click)="backdrop($event)">
        <div class="wc-slideover wc-slideover--{{ side() }} wc-slideover--{{ size() }} {{ className() }}" role="dialog" aria-modal="true">
          @if (title() || showClose()) {
            <div class="wc-slideover__header">
              @if (title()) {
                <div class="wc-slideover__title">{{ title() }}</div>
              }
              @if (showClose()) {
                <button class="wc-slideover__close" type="button" aria-label="Close" (click)="close()">×</button>
              }
            </div>
          }
          <div class="wc-slideover__body"><ng-content /></div>
        </div>
      </div>
    }
  `,
  styles: [
    ':host{display:contents}',
    `.wc-slideover-overlay{position:fixed;inset:0;z-index:1300;background:rgba(0,0,0,0.5);box-sizing:border-box}
.wc-slideover{position:absolute;display:flex;flex-direction:column;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);box-shadow:0 16px 48px rgba(0,0,0,0.24)}
.wc-slideover--right{top:0;right:0;height:100%}
.wc-slideover--left{top:0;left:0;height:100%}
.wc-slideover--top{top:0;left:0;right:0}
.wc-slideover--bottom{bottom:0;left:0;right:0}
.wc-slideover--sm{width:320px}
.wc-slideover--md{width:440px}
.wc-slideover--lg{width:600px}
.wc-slideover--top,.wc-slideover--bottom{width:auto;max-height:60vh}
.wc-slideover__header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-slideover__title{font-size:1.0625rem;font-weight:600}
.wc-slideover__close{border:0;background:transparent;color:inherit;font-size:1.5rem;line-height:1;cursor:pointer;padding:0 4px}
.wc-slideover__body{padding:20px;overflow-y:auto}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideOver {
  readonly open = model(false)
  readonly title = input('')
  readonly side = input<'left' | 'right' | 'top' | 'bottom'>('right')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly showClose = input(true)
  readonly className = input('')
  readonly closed = output<void>()

  close(): void {
    this.open.set(false)
    this.closed.emit()
  }

  backdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close()
  }
}
