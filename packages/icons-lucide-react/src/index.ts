/** Resolve only an explicitly supplied set. No upstream catalog is imported. */
export function createIconResolver<T>(icons: Readonly<Record<string, T>>) {
  return (name: string): T | undefined => Object.prototype.hasOwnProperty.call(icons, name) ? icons[name] : undefined
}

export type AdapterIconProps = import('react').SVGProps<SVGSVGElement> & {
  size?: string | number
  stroke?: string | number
  absoluteStrokeWidth?: boolean
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  mirrored?: boolean
}
