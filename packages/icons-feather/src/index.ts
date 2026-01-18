/// <reference path="./feather-icons.d.ts" />

export interface FeatherSvgOptions {
  width?: number
  height?: number
  /** feather-icons uses 'stroke-width' attribute */
  strokeWidth?: number
}

/**
 * Returns an SVG string for a Feather icon name (e.g. "heart", "log-in").
 * This is framework-agnostic so React/Vue wrappers can render it via innerHTML.
 */
export async function getFeatherSvg(
  name: string,
  options: FeatherSvgOptions = {}
): Promise<string> {
  const feather = await import('feather-icons')
  const featherLib: any = (feather as any).default || feather

  const icon = featherLib?.icons?.[name]
  if (!icon?.toSvg) return ''

  const width = options.width ?? 24
  const height = options.height ?? width
  const strokeWidth = options.strokeWidth ?? 2

  return icon.toSvg({
    width,
    height,
    'stroke-width': strokeWidth,
  })
}
