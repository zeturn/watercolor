import * as Phosphor from '@phosphor-icons/react'
import type { ComponentType, SVGProps } from 'react'

type ReactIconComponent = ComponentType<SVGProps<SVGSVGElement>>
type IconModule = Record<string, ReactIconComponent | undefined>

function toPascalCase(input: string): string {
  return input
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

const MissingIcon: ReactIconComponent = () => null

/**
 * Resolve a Phosphor React icon component by kebab-case name (e.g. "arrow-right").
 */
export function getIcon(name: string): ReactIconComponent {
  const mod = Phosphor as unknown as IconModule
  const iconName = toPascalCase(name)
  return mod[iconName] || mod.Question || MissingIcon
}
