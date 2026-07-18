import type { ComponentType, SVGProps } from 'react'

import * as Outline24 from '@heroicons/react/24/outline'
import * as Solid24 from '@heroicons/react/24/solid'
import * as Solid20 from '@heroicons/react/20/solid'

export type HeroiconsVariant = 'outline' | 'solid' | 'mini'
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
 * Resolve a Heroicons React icon component by kebab-case name.
 * - `outline` => 24/outline
 * - `solid`   => 24/solid
 * - `mini`    => 20/solid
 *
 * Example: name="arrow-right" => ArrowRightIcon
 */
export function getIcon(
  name: string,
  variant: HeroiconsVariant = 'outline'
): ReactIconComponent {
  const componentName = `${toPascalCase(name)}Icon`

  const outlineMod = Outline24 as unknown as IconModule
  const solidMod = Solid24 as unknown as IconModule
  const miniMod = Solid20 as unknown as IconModule

  if (variant === 'solid') {
    return solidMod[componentName] || solidMod.QuestionMarkCircleIcon || MissingIcon
  }

  if (variant === 'mini') {
    return miniMod[componentName] || miniMod.QuestionMarkCircleIcon || MissingIcon
  }

  return outlineMod[componentName] || outlineMod.QuestionMarkCircleIcon || MissingIcon
}
