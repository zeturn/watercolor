import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core'

@Component({
  selector: 'wc-watermark',
  standalone: true,
  template: `
    <div class="wc-watermark {{ className() }}">
      <div class="wc-watermark__layer" [style.opacity]="opacity()" [style.--wc-wm-rotate]="rotate() + 'deg'" aria-hidden="true">
        @for (r of rows; track r) {
          <div class="wc-watermark__row">
            @for (c of cols; track c) {
              <span class="wc-watermark__item">{{ label() }}</span>
            }
          </div>
        }
      </div>
      <div class="wc-watermark__content"><ng-content /></div>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-watermark{position:relative;box-sizing:border-box}
.wc-watermark__layer{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:24px;pointer-events:none;overflow:hidden;transform:rotate(var(--wc-wm-rotate,-20deg));z-index:0}
.wc-watermark__row{display:flex;gap:48px;justify-content:center}
.wc-watermark__item{font-size:1.25rem;font-weight:700;color:var(--wc-text-primary,#1a1a1a);white-space:nowrap}
.wc-watermark__content{position:relative;z-index:1}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Watermark {
  readonly text = input('WATERMARK')
  readonly content = input('')
  readonly rotate = input(-20)
  readonly opacity = input(0.12)
  readonly className = input('')

  readonly rows = Array.from({ length: 9 }, (_, i) => i)
  readonly cols = Array.from({ length: 6 }, (_, i) => i)

  readonly label = computed(() => this.content() || this.text())
}
