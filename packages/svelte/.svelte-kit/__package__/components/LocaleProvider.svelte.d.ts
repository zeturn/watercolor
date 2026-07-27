import { type WatercolorLocaleMessages } from '../locale';
import type { Snippet } from 'svelte';
type $$ComponentProps = {
    locale?: string;
    messages?: Partial<WatercolorLocaleMessages>;
    children?: Snippet;
};
declare const LocaleProvider: import("svelte").Component<$$ComponentProps, {}, "">;
type LocaleProvider = ReturnType<typeof LocaleProvider>;
export default LocaleProvider;
