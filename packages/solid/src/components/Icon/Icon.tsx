import { createMemo, Show, createResource, type JSX } from 'solid-js'
import PropTypes from 'prop-types'
import './style.css'

type IconParams = {
  library: string
  name: string
  variant: string
  size: number | string
  strokeWidth: number | string
  color: string
  html: string
}

// Feather ships framework-agnostic SVG strings — no React needed and it bundles cleanly.
const FEATHER_LOADER = () => import('@zeturn/watercolor-icons-feather')

// lucide/heroicons/tabler/phosphor only ship React or Vue component packages upstream.
// There is no framework-agnostic or Solid-specific icon package yet, so Solid cannot
// render them without pulling in React. Fall back to a stub and warn the consumer.
const UNSUPPORTED = new Set(['lucide', 'heroicons', 'tabler', 'phosphor'])

const getSizeValue = (size: number | string): number => {
  if (typeof size === 'number') return size
  const sizeMap: Record<string, number> = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
  }
  return sizeMap[size] || parseInt(size as string, 10) || 24
}

const resolveSvg = async (p: IconParams): Promise<string> => {
  if (!p.name && p.library !== 'html') return ''

  if (p.library === 'html') return p.html || ''

  if (p.library === 'feather') {
    try {
      const mod = await FEATHER_LOADER()
      const svg = await mod.getFeatherSvg?.(p.name, {
        width: getSizeValue(p.size),
        height: getSizeValue(p.size),
        strokeWidth: Number(p.strokeWidth),
      })
      return svg || ''
    } catch (err) {
      console.warn('[Icon] failed to load feather icon', err)
      return ''
    }
  }

  if (UNSUPPORTED.has(p.library)) {
    console.warn(
      `[Icon] library "${p.library}" is not supported by @zeturn/watercolor-solid ` +
        '(no framework-agnostic or Solid icon package exists upstream). ' +
        'Use library="feather" or pass raw SVG markup via library="html".'
    )
  }
  return ''
}

export default function Icon(props: {
  library?: string
  name?: string
  html?: string
  size?: number | string
  color?: string
  strokeWidth?: number | string
  variant?: string
  className?: string
  children?: JSX.Element
}) {
  const library = props.library ?? 'feather'
  const name = props.name ?? ''
  const variant = props.variant ?? 'outline'
  const size = props.size ?? 24
  const strokeWidth = props.strokeWidth ?? 2
  const color = props.color ?? 'currentColor'
  const html = props.html ?? ''

  const params = createMemo<IconParams>(() => ({ library, name, variant, size, strokeWidth, color, html }))
  const [svg] = createResource(params, (p) => resolveSvg(p))

  const iconClasses = `wc-icon ${props.className ?? ''}`.trim()

  const iconStyles = createMemo<JSX.CSSProperties>(() => {
    const styles: Record<string, string> = {}
    if (color && color !== 'currentColor') styles.color = color
    const sizeValue = getSizeValue(size)
    styles.width = `${sizeValue}px`
    styles.height = `${sizeValue}px`
    return styles as JSX.CSSProperties
  })

  return (
    <Show
      when={svg()}
      fallback={<span class={iconClasses} style={iconStyles}>{props.children}</span>}
    >
      {(s) => <span class={iconClasses} style={iconStyles} innerHTML={s()} />}
    </Show>
  )
}

Icon.propTypes = {
  library: PropTypes.oneOf(['feather', 'html', 'lucide', 'heroicons', 'tabler', 'phosphor']),
  name: PropTypes.string,
  html: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['outline', 'solid', 'mini']),
  className: PropTypes.string,
  children: PropTypes.node,
}

export { Icon }
