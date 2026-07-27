<script lang="ts">
  import { setContext, onMount, onDestroy } from 'svelte'
  import {
    createThemeController,
    applyThemeConfig,
    loadProviderThemeConfig,
    resetThemeConfig,
  } from '@zeturn/watercolor-core'
  import type { Snippet } from 'svelte'

  type ThemeMode = 'light' | 'dark' | 'system'
  type ResolvedThemeMode = 'light' | 'dark'

  let {
    config = undefined,
    defaultMode = 'system',
    themeUrl = undefined,
    target = undefined,
    mode = undefined,
    initialResolvedMode = undefined,
    storageKey = undefined,
    storage = undefined,
    onThemeLoad = undefined,
    onThemeError = undefined,
    children,
  }: {
    config?: any
    defaultMode?: ThemeMode
    themeUrl?: string
    target?: HTMLElement | null
    mode?: ThemeMode
    initialResolvedMode?: ResolvedThemeMode
    storageKey?: string
    storage?: any
    onThemeLoad?: (result: any) => void
    onThemeError?: (result: any) => void
    children?: Snippet
  } = $props()

  // The controller is intentionally configured once; reactive mode changes are handled below.
  // svelte-ignore state_referenced_locally
  const controller = createThemeController({
    target,
    initialMode: (mode ?? defaultMode) as ThemeMode,
    initialResolvedMode: initialResolvedMode as ResolvedThemeMode | undefined,
    storageKey,
    storage,
    readStorage: mode === undefined,
  })

  let currentMode = $state(controller.mode)
  let currentResolvedMode = $state(controller.resolvedMode)
  let isDark = $state(controller.dark)

  const unsubscribe = controller.subscribe((snapshot: any) => {
    currentMode = snapshot.mode
    currentResolvedMode = snapshot.resolvedMode
    isDark = snapshot.dark
  })

  function setMode(next: ThemeMode) {
    if (mode === undefined) controller.setMode(next)
  }
  function toggleMode() {
    setMode(currentResolvedMode === 'dark' ? 'light' : 'dark')
  }

  const store = {
    get mode() {
      return currentMode
    },
    get resolvedMode() {
      return currentResolvedMode
    },
    get dark() {
      return isDark
    },
    setMode,
    toggleMode,
  }
  setContext('wc-theme', store)

  let mounted = false
  let requestId = 0
  let abortController: AbortController | null = null

  function emitThemeLoad(result: any) {
    onThemeLoad?.(result)
  }
  function emitThemeError(result: any) {
    onThemeError?.(result)
  }
  function runThemeRequest() {
    const currentRequest = ++requestId
    abortController?.abort()
    abortController = typeof AbortController === 'undefined' ? null : new AbortController()

    if (config !== undefined) {
      const result = applyThemeConfig(config, { target })
      if (result.ok) emitThemeLoad(result)
      else emitThemeError(result)
    } else if (!themeUrl) {
      resetThemeConfig(target)
    }

    if (themeUrl) {
      void loadProviderThemeConfig(themeUrl, {
        target,
        isCurrent: () => currentRequest === requestId,
        signal: abortController?.signal,
      }).then((result: any) => {
        if (!result) return
        if (result.ok) emitThemeLoad(result)
        else if (!abortController?.signal.aborted) emitThemeError(result)
      })
    }
  }

  onMount(() => {
    mounted = true
    controller.start()
    runThemeRequest()
  })

  onDestroy(() => {
    abortController?.abort()
    resetThemeConfig(target)
    unsubscribe()
    controller.destroy()
  })

  $effect(() => {
    if (mode !== undefined) controller.setMode(mode)
  })
  $effect(() => {
    if (mounted && (config !== undefined || themeUrl !== undefined)) runThemeRequest()
  })
</script>

{@render children?.()}
