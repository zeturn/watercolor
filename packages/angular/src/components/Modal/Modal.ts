import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation, input, model, output } from '@angular/core'

@Component({
  selector: 'wc-modal',
  standalone: true,
  template: `
    @if (open()) {
      <div class="wc-modal-overlay" role="presentation" (click)="backdrop($event)">
        <div class="wc-modal wc-modal--{{ size() }} {{ className() }}" role="dialog" aria-modal="true">
          @if (title() || showClose()) {
            <div class="wc-modal__header">
              @if (title()) {
                <div class="wc-modal__title">{{ title() }}</div>
              }
              @if (showClose()) {
                <button class="wc-modal__close" type="button" aria-label="Close" (click)="close()">×</button>
              }
            </div>
          }
          <div class="wc-modal__body"><ng-content /></div>
        </div>
      </div>
    }
  `,
  styles: [
    ':host{display:contents}',
    `.wc-modal-overlay{position:fixed;inset:0;z-index:1300;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.5);box-sizing:border-box}
.wc-modal{width:100%;max-height:90vh;display:flex;flex-direction:column;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a);border-radius:12px;box-shadow:0 16px 48px rgba(0,0,0,0.24);overflow:hidden}
.wc-modal--sm{max-width:400px}
.wc-modal--md{max-width:560px}
.wc-modal--lg{max-width:800px}
.wc-modal--xl{max-width:1040px}
.wc-modal--full{max-width:none;width:auto}
.wc-modal__header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-modal__title{font-size:1.125rem;font-weight:600}
.wc-modal__close{border:0;background:transparent;color:inherit;font-size:1.5rem;line-height:1;cursor:pointer;padding:0 4px}
.wc-modal__body{padding:20px;overflow-y:auto}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
  readonly open = model(false)
  readonly title = input('')
  readonly size = input<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
  readonly closeOnBackdrop = input(true)
  readonly showClose = input(true)
  readonly className = input('')
  readonly closed = output<void>()

  close(): void {
    this.open.set(false)
    this.closed.emit()
  }

  backdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget && this.closeOnBackdrop()) this.close()
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.open()) this.close()
  }
}
