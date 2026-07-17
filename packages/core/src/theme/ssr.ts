import {
  THEME_STORAGE_KEY,
  isThemeMode,
  resolveThemeMode,
  type ThemeMode,
} from './controller.js'

export interface ThemeInitScriptOptions {
  defaultMode?: ThemeMode
  storageKey?: string
}

export function createThemeInitScript(options: ThemeInitScriptOptions = {}): string {
  const defaultMode = isThemeMode(options.defaultMode) ? options.defaultMode : 'system'
  const storageKey = typeof options.storageKey === 'string' && options.storageKey.trim()
    ? options.storageKey
    : THEME_STORAGE_KEY
  const fallback = JSON.stringify(defaultMode)
  const key = JSON.stringify(storageKey).replace(/</g, '\\u003c')
  return `(()=>{const d=document.documentElement;let m=${fallback};try{const s=localStorage.getItem(${key});if(s==='light'||s==='dark'||s==='system')m=s}catch{}const r=m==='system'&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':m==='system'?'light':m;d.dataset.theme=m;d.dataset.resolvedTheme=r;d.classList.toggle('dark',r==='dark');d.classList.toggle('light',r==='light');d.style.colorScheme=r})()`
}

export { resolveThemeMode }
