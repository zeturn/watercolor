import { type LocaleStore } from './locale';
export interface ThemeStore {
    mode: string;
    resolvedMode: string;
    dark: boolean;
    setMode: (mode: string) => void;
    toggleMode: () => void;
}
export declare function useTheme(): ThemeStore;
export declare function useLocale(): LocaleStore;
