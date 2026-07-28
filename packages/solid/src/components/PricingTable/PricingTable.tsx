
import './style.css'

/**
 * PricingTable – React 组件
 * Props
 *   plans   Array<{name,price,features,button,popular}>
 *   columns number
 */
export default function PricingTable({ plans = [], columns = 3, className = '' }) {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
  }

  return (
    <div class={`pricing-grid ${className}`.trim()} style={gridStyle}>
      {plans.map((plan) => (
        <div key={plan.name} class={`plan-card${plan.popular ? ' popular' : ''}`}>
          <h3 class="plan-name">{plan.name}</h3>
          <p class="plan-price">{plan.price}</p>
          <ul class="plan-features">
            {plan.features?.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <button class="plan-btn">{plan.button || '选择'}</button>
        </div>
      ))}
    </div>
  )
}