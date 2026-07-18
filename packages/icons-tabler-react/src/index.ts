import * as Tabler from '@tabler/icons-react'
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
 * Resolve a Tabler React icon component by kebab-case name (e.g. "alert-circle").
 */
export function getIcon(name: string): ReactIconComponent {
  const mod = Tabler as unknown as IconModule
  const iconName = 'Icon' + toPascalCase(name)
  return mod[iconName] || mod.IconHelp || MissingIcon
}
