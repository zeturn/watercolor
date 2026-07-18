import * as Phosphor from '@phosphor-icons/vue'
import type { Component } from 'vue'

type IconModule = Record<string, Component | undefined>

function toPascalCase(input: string): string {
  return input
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

/**
 * Resolve a Phosphor Vue icon component by kebab-case name (e.g. "arrow-right").
 * Note: phosphor-vue exports are prefixed with `Ph`.
 */
export function getIcon(name: string): Component | undefined {
  const mod = Phosphor as unknown as IconModule
  const iconName = 'Ph' + toPascalCase(name)
  return mod[iconName] || mod.PhQuestion
}
