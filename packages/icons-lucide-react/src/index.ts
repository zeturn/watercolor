import * as Lucide from 'lucide-react'
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
 * Resolve a Lucide React icon component by kebab-case name (e.g. "log-in").
 */
export function getIcon(name: string): ReactIconComponent {
  const pascal = toPascalCase(name)
  const mod = Lucide as unknown as IconModule
  return mod[pascal] || mod.HelpCircle || MissingIcon
}
