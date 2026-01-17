import type { ComponentType } from 'react'

import * as Outline24 from '@heroicons/react/24/outline'
import * as Solid24 from '@heroicons/react/24/solid'
import * as Solid20 from '@heroicons/react/20/solid'

export type HeroiconsVariant = 'outline' | 'solid' | 'mini'

function toPascalCase(input: string): string {
  return input
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

const MissingIcon: ComponentType<any> = () => null

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
): ComponentType<any> {
  const componentName = `${toPascalCase(name)}Icon`

  const outlineMod: any = Outline24
  const solidMod: any = Solid24
  const miniMod: any = Solid20

  if (variant === 'solid') {
    return solidMod[componentName] || solidMod.QuestionMarkCircleIcon || MissingIcon
  }

  if (variant === 'mini') {
    return miniMod[componentName] || miniMod.QuestionMarkCircleIcon || MissingIcon
  }

  return outlineMod[componentName] || outlineMod.QuestionMarkCircleIcon || MissingIcon
}
