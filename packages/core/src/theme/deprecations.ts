const warned = new Set<string>()

const isProduction = (): boolean =>
  typeof process !== 'undefined' && process.env?.NODE_ENV === 'production'

export function warnThemeDeprecation(api: string, replacement: string): void {
  if (isProduction() || warned.has(api)) return
  warned.add(api)
  console.warn(
    `[Watercolor UI] ${api} is deprecated and will be removed in the next major version. Use ${replacement}.`,
  )
}
