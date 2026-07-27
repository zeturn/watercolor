<script lang="ts">
  import { setContext } from 'svelte'
  import { defaultLocaleMessages, type WatercolorLocaleMessages } from '../locale'
  import type { Snippet } from 'svelte'

  let {
    locale = undefined,
    messages = undefined,
    children,
  }: {
    locale?: string
    messages?: Partial<WatercolorLocaleMessages>
    children?: Snippet
  } = $props()

  const store = {
    get locale() {
      return locale
    },
    get messages() {
      return { ...defaultLocaleMessages, ...(messages ?? {}) }
    },
  }
  setContext('wc-locale', store)
</script>

{@render children?.()}
