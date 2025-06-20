import React from 'react'

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
    <div className={`pricing-grid ${className}`.trim()} style={gridStyle}>
      {plans.map((plan) => (
        <div key={plan.name} className={`plan-card${plan.popular ? ' popular' : ''}`}>
          <h3 className="plan-name">{plan.name}</h3>
          <p className="plan-price">{plan.price}</p>
          <ul className="plan-features">
            {plan.features?.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <button className="plan-btn">{plan.button || '选择'}</button>
        </div>
      ))}
    </div>
  )
}