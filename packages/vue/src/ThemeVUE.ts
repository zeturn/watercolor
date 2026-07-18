import {
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  type PropType,
  type Ref,
} from 'vue'
import {
  applyThemeConfig,
  createThemeController,
  loadProviderThemeConfig,
  resetThemeConfig,
  THEME_MODES,
  type ThemeApplyResult,
  type ResolvedThemeMode,
  type ThemeController,
  type ThemeLoadResult,
  type ThemeMode,
  type ThemeStorage,
  type WatercolorThemeConfig,
} from '@zeturn/watercolor-core'

export interface ThemeStore {
  mode: Ref<ThemeMode>
  resolvedMode: Ref<ResolvedThemeMode>
  dark: Ref<boolean>
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

type ThemeErrorResult = Extract<ThemeApplyResult | ThemeLoadResult, { ok: false }>

const THEME_KEY = Symbol('WatercolorTheme')

export function useTheme (): ThemeStore {
  const store = inject<ThemeStore>(THEME_KEY)
  if (!store) throw new Error('useTheme must be used within ThemeProvider')
  return store
}

export const ThemeProvider = defineComponent({
  name: 'ThemeProvider',
  props: {
    config: Object as PropType<WatercolorThemeConfig>,
    defaultMode: {
      type: String as PropType<ThemeMode>,
      default: 'system',
      validator: (value: string) => THEME_MODES.includes(value as ThemeMode),
    },
    themeUrl: String,
    target: Object as PropType<HTMLElement | null>,
    mode: {
      type: String as PropType<ThemeMode>,
      validator: (value: string | undefined) => value === undefined || THEME_MODES.includes(value as ThemeMode),
    },
    initialResolvedMode: String as PropType<ResolvedThemeMode>,
    storageKey: String,
    storage: Object as PropType<ThemeStorage | null>,
    onThemeLoad: Function as PropType<(result: ThemeApplyResult | ThemeLoadResult) => void>,
    onThemeError: Function as PropType<(result: ThemeErrorResult) => void>,
  },
  emits: ['update:mode', 'mode-change', 'resolved-mode-change', 'theme-load', 'theme-error'],
  setup (props, { emit, slots }) {
    const controller: ThemeController = createThemeController({
      target: props.target,
      initialMode: props.mode ?? props.defaultMode,
      initialResolvedMode: props.initialResolvedMode,
      storageKey: props.storageKey,
      storage: props.storage,
      readStorage: props.mode === undefined,
    })
    const mode = ref<ThemeMode>(controller.mode)
    const resolvedMode = ref<ResolvedThemeMode>(controller.resolvedMode)
    const dark = ref(controller.dark)
    const target = props.target
    let mounted = false
    let requestId = 0
    let abortController: AbortController | null = null

    const unsubscribe = controller.subscribe((snapshot) => {
      mode.value = snapshot.mode
      resolvedMode.value = snapshot.resolvedMode
      dark.value = snapshot.dark
    })

    const setMode = (next: ThemeMode): void => {
      if (props.mode === undefined) controller.setMode(next)
      emit('update:mode', next)
      emit('mode-change', next)
    }
    const toggleMode = (): void => setMode(controller.resolvedMode === 'dark' ? 'light' : 'dark')
    const store: ThemeStore = { mode, resolvedMode, dark, setMode, toggleMode }
    provide(THEME_KEY, store)

    const emitThemeLoad = (result: ThemeApplyResult | ThemeLoadResult): void => {
      props.onThemeLoad?.(result)
      emit('theme-load', result)
    }
    const emitThemeError = (result: ThemeErrorResult): void => {
      props.onThemeError?.(result)
      emit('theme-error', result)
    }
    const runThemeRequest = (): void => {
      const currentRequest = ++requestId
      abortController?.abort()
      abortController = typeof AbortController === 'undefined' ? null : new AbortController()

      if (props.config !== undefined) {
        const result = applyThemeConfig(props.config, { target })
        if (result.ok) emitThemeLoad(result)
        else emitThemeError(result)
      } else if (!props.themeUrl) {
        resetThemeConfig(target)
      }

      if (props.themeUrl) {
        void loadProviderThemeConfig(props.themeUrl, {
          target,
          isCurrent: () => currentRequest === requestId,
          signal: abortController?.signal,
        }).then((result) => {
          if (!result) return
          if (result.ok) emitThemeLoad(result)
          else if (!abortController?.signal.aborted) emitThemeError(result)
        })
      }
    }

    watch(() => props.mode, (value) => {
      if (value !== undefined) controller.setMode(value)
    })
    watch(resolvedMode, (value, previous) => {
      if (value !== previous) emit('resolved-mode-change', value)
    })
    watch(() => [props.config, props.themeUrl] as const, () => {
      if (mounted) runThemeRequest()
    })
    onMounted(() => {
      mounted = true
      controller.start()
      runThemeRequest()
    })
    onBeforeUnmount(() => {
      abortController?.abort()
      resetThemeConfig(target)
      unsubscribe()
      controller.destroy()
    })

    return () => slots.default?.()
  },
})
