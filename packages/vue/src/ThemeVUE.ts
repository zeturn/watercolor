import {
  defineComponent,
  inject,
  onBeforeUnmount,
  provide,
  ref,
  watch,
  type PropType,
  type Ref,
} from 'vue'
import {
  createThemeController,
  THEME_MODES,
  type ColorTheme,
  type ResolvedThemeMode,
  type ThemeController,
  type ThemeMode,
  type ThemeStorage,
} from '@zeturn/watercolor-core'

export interface ThemeStore {
  color: Ref<ColorTheme>
  mode: Ref<ThemeMode>
  resolvedMode: Ref<ResolvedThemeMode>
  dark: Ref<boolean>
  setColor: (color: ColorTheme) => void
  setMode: (mode: ThemeMode) => void
  toggleDark: () => void
}

interface ProvideThemeOptions {
  defaultColor?: ColorTheme
  defaultMode?: ThemeMode
  storageKey?: string
  storage?: ThemeStorage | null
  controller?: ThemeController
}

const THEME_KEY = Symbol('WatercolorTheme')

export function provideTheme (options: ProvideThemeOptions = {}): ThemeStore {
  const controller = options.controller ?? createThemeController(options)
  const color = ref<ColorTheme>(controller.color)
  const mode = ref<ThemeMode>(controller.mode)
  const resolvedMode = ref<ResolvedThemeMode>(controller.resolvedMode)
  const dark = ref(controller.dark)

  const unsubscribe = controller.subscribe((snapshot) => {
    color.value = snapshot.color
    mode.value = snapshot.mode
    resolvedMode.value = snapshot.resolvedMode
    dark.value = snapshot.dark
  })
  onBeforeUnmount(() => {
    unsubscribe()
    if (!options.controller) controller.destroy()
  })

  const store: ThemeStore = {
    color,
    mode,
    resolvedMode,
    dark,
    setColor: controller.setColor,
    setMode: controller.setMode,
    toggleDark: controller.toggleDark,
  }
  provide(THEME_KEY, store)
  return store
}

export function useTheme (): ThemeStore {
  const store = inject<ThemeStore>(THEME_KEY)
  if (!store) throw new Error('useTheme must be used within ThemeProvider')
  return store
}

export const ThemeProvider = defineComponent({
  name: 'ThemeProvider',
  props: {
    defaultColor: { type: String as PropType<ColorTheme>, default: 'default' },
    defaultMode: {
      type: String as PropType<ThemeMode>,
      default: 'system',
      validator: (value: string) => THEME_MODES.includes(value as ThemeMode),
    },
    color: String as PropType<ColorTheme>,
    mode: {
      type: String as PropType<ThemeMode>,
      validator: (value: string | undefined) => value === undefined || THEME_MODES.includes(value as ThemeMode),
    },
    storageKey: String,
    storage: Object as PropType<ThemeStorage | null>,
  },
  emits: ['update:color', 'update:mode', 'mode-change'],
  setup (props, { emit, slots }) {
    const controller = createThemeController({
      defaultColor: props.color ?? props.defaultColor,
      defaultMode: props.mode ?? props.defaultMode,
      storageKey: props.storageKey,
      storage: props.storage,
    })
    // Controlled props are authoritative, including on the first frame when
    // persisted preferences disagree with the host application.
    if (props.mode) controller.setMode(props.mode)
    if (props.color) controller.setColor(props.color)
    const store = provideTheme({ controller })

    watch(() => props.mode, (value) => {
      if (value) controller.setMode(value)
    })
    watch(() => props.color, (value) => {
      if (value) controller.setColor(value)
    })
    watch(store.mode, (value) => {
      emit('update:mode', value)
      emit('mode-change', value, store.resolvedMode.value)
    })
    watch(store.color, (value) => emit('update:color', value))
    onBeforeUnmount(() => controller.destroy())

    return () => slots.default?.()
  },
})
