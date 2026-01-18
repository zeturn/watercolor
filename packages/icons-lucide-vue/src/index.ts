import * as Lucide from 'lucide-vue-next'
import type { Component } from 'vue'

function toPascalCase(input: string): string {
  return input
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

/**
 * Resolve a Lucide Vue icon component by kebab-case name (e.g. "log-in").
 */
export function getIcon(name: string): Component | undefined {
  const pascal = toPascalCase(name)
  const mod: any = Lucide
  return mod[pascal] || mod.HelpCircle
}
