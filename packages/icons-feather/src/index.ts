export interface FeatherSvgOptions { width?: number; height?: number; strokeWidth?: number }

/** Format one explicitly imported SVG, never a string lookup in a catalog. */
export function renderFeatherSvg(svg: string, options: FeatherSvgOptions = {}): string {
  if (!svg.trimStart().startsWith('<svg')) throw new TypeError('Pass an SVG imported from a Feather icon subpath.')
  const width = options.width ?? 24
  const height = options.height ?? width
  const stroke = options.strokeWidth ?? 2
  if (![width, height, stroke].every((value) => Number.isFinite(value) && value >= 0)) throw new TypeError('SVG dimensions and stroke must be non-negative numbers.')
  return svg.replace(/<svg\b[^>]*>/, (tag) => tag.replace(/\s(?:width|height|stroke-width)="[^"]*"/g, '').slice(0, -1) + ` width="${width}" height="${height}" stroke-width="${stroke}">`)
}
