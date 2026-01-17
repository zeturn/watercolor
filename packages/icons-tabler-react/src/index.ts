import * as Tabler from '@tabler/icons-react'
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
 * Resolve a Tabler React icon component by kebab-case name (e.g. "alert-circle").
 */
export function getIcon(name: string): ComponentType<any> {
  const mod: any = Tabler
  const iconName = 'Icon' + toPascalCase(name)
  return mod[iconName] || mod.IconHelp || MissingIcon
}
