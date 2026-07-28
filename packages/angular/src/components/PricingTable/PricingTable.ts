import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, output } from '@angular/core'

export interface PricingPlan {
  name: string
  price?: string
  features?: string[]
  cta?: string
  highlighted?: boolean
}

@Component({
  selector: 'wc-pricing-table',
  standalone: true,
  template: `
    <div class="wc-pricing {{ className() }}">
      @for (plan of plans(); track plan.name) {
        <div class="wc-pricing__card {{ plan.highlighted ? 'wc-pricing__card--highlighted' : '' }}">
          <div class="wc-pricing__name">{{ plan.name }}</div>
          @if (plan.price) {
            <div class="wc-pricing__price">{{ plan.price }}</div>
          }
          @if (plan.features) {
            <ul class="wc-pricing__features">
              @for (feature of plan.features; track feature) {
                <li>{{ feature }}</li>
              }
            </ul>
          }
          @if (plan.cta) {
            <button class="wc-pricing__cta" (click)="selected.emit(plan)">{{ plan.cta }}</button>
          }
        </div>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-pricing{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;box-sizing:border-box}
.wc-pricing__card{display:flex;flex-direction:column;gap:12px;padding:24px;border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:12px;background:var(--wc-surface-canvas,#fff);color:var(--wc-text-primary,#1a1a1a)}
.wc-pricing__card--highlighted{border-color:var(--wc-accent,#3b82f6);box-shadow:0 4px 16px rgba(59,130,246,0.15)}
.wc-pricing__name{font-size:1.125rem;font-weight:700}
.wc-pricing__price{font-size:2rem;font-weight:800}
.wc-pricing__features{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;font-size:0.875rem;color:var(--wc-text-secondary,#6b7280)}
.wc-pricing__cta{margin-top:auto;padding:10px 16px;border:0;border-radius:8px;background:var(--wc-accent,#3b82f6);color:#fff;font:inherit;font-weight:600;cursor:pointer}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingTable {
  readonly plans = input<PricingPlan[]>([])
  readonly className = input('')
  readonly selected = output<PricingPlan>()
}
