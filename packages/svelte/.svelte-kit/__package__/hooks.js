import { getContext } from 'svelte';
import { defaultLocaleMessages } from './locale';
const fallbackLocaleStore = {
    locale: undefined,
    messages: defaultLocaleMessages,
};
export function useTheme() {
    const store = getContext('wc-theme');
    if (!store)
        throw new Error('useTheme must be used within ThemeProvider');
    return store;
}
export function useLocale() {
    return getContext('wc-locale') ?? fallbackLocaleStore;
}
