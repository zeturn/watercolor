import * as Lucide from 'lucide-react'
import type { ComponentType } from 'react'

function toPascalCase(input: string): string {
  return input
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

const MissingIcon: ComponentType<any> = () => null

/**
 * Resolve a Lucide React icon component by kebab-case name (e.g. "log-in").
 */
export function getIcon(name: string): ComponentType<any> {
  const pascal = toPascalCase(name)
  const mod: any = Lucide
  return mod[pascal] || mod.HelpCircle || MissingIcon
}
