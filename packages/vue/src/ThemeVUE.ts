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
  createThemeController,
  THEME_MODES,
  type ResolvedThemeMode,
  type ThemeController,
  type ThemeMode,
  type ThemeStorage,
} from '@zeturn/watercolor-core'

export interface ThemeStore {
  mode: Ref<ThemeMode>
  resolvedMode: Ref<ResolvedThemeMode>
  dark: Ref<boolean>
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

const THEME_KEY = Symbol('WatercolorTheme')

export function useTheme (): ThemeStore {
  const store = inject<ThemeStore>(THEME_KEY)
  if (!store) throw new Error('useTheme must be used within ThemeProvider')
  return store
}

export const ThemeProvider = defineComponent({
  name: 'ThemeProvider',
  props: {
    defaultMode: {
      type: String as PropType<ThemeMode>,
      default: 'system',
      validator: (value: string) => THEME_MODES.includes(value as ThemeMode),
    },
    mode: {
      type: String as PropType<ThemeMode>,
      validator: (value: string | undefined) => value === undefined || THEME_MODES.includes(value as ThemeMode),
    },
    storageKey: String,
    storage: Object as PropType<ThemeStorage | null>,
  },
  emits: ['update:mode', 'mode-change', 'resolved-mode-change'],
  setup (props, { emit, slots }) {
    const controller: ThemeController = createThemeController({
      initialMode: props.mode ?? props.defaultMode,
      storageKey: props.storageKey,
      storage: props.storage,
      readStorage: props.mode === undefined,
    })
    const mode = ref<ThemeMode>(controller.mode)
    const resolvedMode = ref<ResolvedThemeMode>(controller.resolvedMode)
    const dark = ref(controller.dark)

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

    watch(() => props.mode, (value) => {
      if (value !== undefined) controller.setMode(value)
    })
    watch(resolvedMode, (value, previous) => {
      if (value !== previous) emit('resolved-mode-change', value)
    })
    onMounted(() => controller.start())
    onBeforeUnmount(() => {
      unsubscribe()
      controller.destroy()
    })

    return () => slots.default?.()
  },
})
