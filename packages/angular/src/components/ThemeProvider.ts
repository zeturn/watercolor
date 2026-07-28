import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  afterNextRender,
  effect,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core'
import {
  applyThemeConfig,
  createThemeController,
  loadProviderThemeConfig,
  resetThemeConfig,
} from '@zeturn/watercolor-core'
import { WC_THEME, type ThemeStore } from '../hooks.js'

type ThemeMode = 'light' | 'dark' | 'system'
type ResolvedThemeMode = 'light' | 'dark'

@Component({
  selector: 'wc-theme-provider',
  standalone: true,
  template: '<ng-content />',
  styles: [':host{display:contents}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: WC_THEME, useExisting: forwardRef(() => ThemeProvider) }],
})
export class ThemeProvider implements ThemeStore, OnInit, OnDestroy {
  readonly config = input<any>(undefined)
  readonly defaultMode = input<ThemeMode>('system')
  readonly themeUrl = input<string | undefined>(undefined)
  readonly target = input<HTMLElement | null | undefined>(undefined)
  readonly modeInput = input<ThemeMode | undefined>(undefined, { alias: 'mode' })
  readonly initialResolvedMode = input<ResolvedThemeMode | undefined>(undefined)
  readonly storageKey = input<string | undefined>(undefined)
  readonly storage = input<any>(undefined)
  readonly themeLoad = output<any>()
  readonly themeError = output<any>()

  private controller: any = null
  private unsubscribeFn: (() => void) | null = null
  private mounted = false
  private requestId = 0
  private abortController: AbortController | null = null

  private readonly currentMode = signal<string>('system')
  private readonly currentResolvedMode = signal<string>('light')
  private readonly isDark = signal(false)

  get mode(): string {
    return this.currentMode()
  }
  get resolvedMode(): string {
    return this.currentResolvedMode()
  }
  get dark(): boolean {
    return this.isDark()
  }

  constructor() {
    effect(() => {
      const controlled = this.modeInput()
      if (controlled !== undefined) this.controller?.setMode(controlled)
    })
    effect(() => {
      // Track config/themeUrl reactively; re-run the theme request once mounted.
      const config = this.config()
      const themeUrl = this.themeUrl()
      if (this.mounted && (config !== undefined || themeUrl !== undefined)) this.runThemeRequest()
    })
    afterNextRender(() => {
      this.mounted = true
      this.controller?.start()
      this.runThemeRequest()
    })
  }

  ngOnInit(): void {
    this.controller = createThemeController({
      target: this.target() ?? undefined,
      initialMode: (this.modeInput() ?? this.defaultMode()) as ThemeMode,
      initialResolvedMode: this.initialResolvedMode(),
      storageKey: this.storageKey(),
      storage: this.storage(),
      readStorage: this.modeInput() === undefined,
    })
    this.currentMode.set(this.controller.mode)
    this.currentResolvedMode.set(this.controller.resolvedMode)
    this.isDark.set(this.controller.dark)
    this.unsubscribeFn = this.controller.subscribe((snapshot: any) => {
      this.currentMode.set(snapshot.mode)
      this.currentResolvedMode.set(snapshot.resolvedMode)
      this.isDark.set(snapshot.dark)
    })
  }

  setMode = (next: string): void => {
    if (this.modeInput() === undefined) this.controller?.setMode(next as ThemeMode)
  }

  toggleMode = (): void => {
    this.setMode(this.currentResolvedMode() === 'dark' ? 'light' : 'dark')
  }

  private runThemeRequest(): void {
    const currentRequest = ++this.requestId
    this.abortController?.abort()
    this.abortController = typeof AbortController === 'undefined' ? null : new AbortController()

    const config = this.config()
    const themeUrl = this.themeUrl()
    const target = this.target() ?? undefined

    if (config !== undefined) {
      const result = applyThemeConfig(config, { target })
      if (result.ok) this.themeLoad.emit(result)
      else this.themeError.emit(result)
    } else if (!themeUrl) {
      resetThemeConfig(target)
    }

    if (themeUrl) {
      void loadProviderThemeConfig(themeUrl, {
        target,
        isCurrent: () => currentRequest === this.requestId,
        signal: this.abortController?.signal,
      }).then((result: any) => {
        if (!result) return
        if (result.ok) this.themeLoad.emit(result)
        else if (!this.abortController?.signal.aborted) this.themeError.emit(result)
      })
    }
  }

  ngOnDestroy(): void {
    this.abortController?.abort()
    resetThemeConfig(this.target() ?? undefined)
    this.unsubscribeFn?.()
    this.controller?.destroy()
  }
}
