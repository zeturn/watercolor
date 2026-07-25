/* 纯 SVG 国旗图标（非 emoji），统一 viewBox 30x20（3:2） */

function Star({ cx, cy, r, fill = '#FFDE00' }) {
  const pts = []
  for (let i = 0; i < 10; i++) {
    const R = i % 2 === 0 ? r : r * 0.4
    const a = (Math.PI / 5) * i - Math.PI / 2
    pts.push(`${(cx + R * Math.cos(a)).toFixed(2)},${(cy + R * Math.sin(a)).toFixed(2)}`)
  }
  return <polygon points={pts.join(' ')} fill={fill} />
}

/* 中国国旗 */
export function FlagCN(props) {
  return (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" fill="#DE2910" />
      <Star cx={5} cy={5} r={3} />
      <Star cx={10} cy={2} r={1} />
      <Star cx={12} cy={4.5} r={1} />
      <Star cx={12} cy={7.5} r={1} />
      <Star cx={10} cy={9.5} r={1} />
    </svg>
  )
}

/* 美国国旗 */
export function FlagUS(props) {
  const stripeH = 20 / 13
  const stripes = []
  for (let i = 0; i < 13; i += 2) {
    stripes.push(<rect key={i} y={i * stripeH} width="30" height={stripeH} fill="#B22234" />)
  }
  const stars = []
  for (let row = 0; row < 5; row++) {
    const cols = row % 2 === 0 ? 5 : 4
    const offset = row % 2 === 0 ? 1.4 : 2.6
    for (let col = 0; col < cols; col++) {
      stars.push(
        <circle
          key={`${row}-${col}`}
          cx={offset + col * 2.4}
          cy={1.3 + row * 2.05}
          r="0.45"
          fill="#fff"
        />
      )
    }
  }
  return (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" fill="#fff" />
      {stripes}
      <rect width="13" height={stripeH * 7} fill="#3C3B6E" />
      {stars}
    </svg>
  )
}

/* 日本国旗 */
export function FlagJP(props) {
  return (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="6" fill="#BC002D" />
    </svg>
  )
}
