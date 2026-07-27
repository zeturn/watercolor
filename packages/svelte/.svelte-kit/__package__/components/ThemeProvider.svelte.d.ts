import type { Snippet } from 'svelte';
type ThemeMode = 'light' | 'dark' | 'system';
type ResolvedThemeMode = 'light' | 'dark';
type $$ComponentProps = {
    config?: any;
    defaultMode?: ThemeMode;
    themeUrl?: string;
    target?: HTMLElement | null;
    mode?: ThemeMode;
    initialResolvedMode?: ResolvedThemeMode;
    storageKey?: string;
    storage?: any;
    onThemeLoad?: (result: any) => void;
    onThemeError?: (result: any) => void;
    children?: Snippet;
};
declare const ThemeProvider: import("svelte").Component<$$ComponentProps, {}, "">;
type ThemeProvider = ReturnType<typeof ThemeProvider>;
export default ThemeProvider;
