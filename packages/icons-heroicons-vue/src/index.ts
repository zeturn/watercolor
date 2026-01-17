import type { Component } from 'vue'

import * as Outline24 from '@heroicons/vue/24/outline'
import * as Solid24 from '@heroicons/vue/24/solid'
import * as Solid20 from '@heroicons/vue/20/solid'

export type HeroiconsVariant = 'outline' | 'solid' | 'mini'

function toPascalCase(input: string): string {
  return input
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

/**
 * Resolve a Heroicons Vue icon component by kebab-case name.
 * - `outline` => 24/outline
 * - `solid`   => 24/solid
 * - `mini`    => 20/solid
 *
 * Example: name="arrow-right" => ArrowRightIcon
 */
export function getIcon(
  name: string,
  variant: HeroiconsVariant = 'outline'
): Component | undefined {
  const componentName = `${toPascalCase(name)}Icon`

  const outlineMod: any = Outline24
  const solidMod: any = Solid24
  const miniMod: any = Solid20

  if (variant === 'solid') {
    return solidMod[componentName] || solidMod.QuestionMarkCircleIcon
  }

  if (variant === 'mini') {
    return miniMod[componentName] || miniMod.QuestionMarkCircleIcon
  }

  return outlineMod[componentName] || outlineMod.QuestionMarkCircleIcon
}
