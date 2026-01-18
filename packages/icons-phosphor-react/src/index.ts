import * as Phosphor from '@phosphor-icons/react'
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
 * Resolve a Phosphor React icon component by kebab-case name (e.g. "arrow-right").
 */
export function getIcon(name: string): ComponentType<any> {
  const mod: any = Phosphor
  const iconName = toPascalCase(name)
  return mod[iconName] || mod.Question || MissingIcon
}
