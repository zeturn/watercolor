import type { Snippet } from 'svelte';
type $$ComponentProps = {
    title?: string;
    color?: 'default' | 'primary' | 'secondary' | 'surface';
    position?: 'static' | 'sticky' | 'fixed';
    class?: string;
    start?: Snippet;
    end?: Snippet;
    children?: Snippet;
};
declare const AppBar: import("svelte").Component<$$ComponentProps, {}, "">;
type AppBar = ReturnType<typeof AppBar>;
export default AppBar;
