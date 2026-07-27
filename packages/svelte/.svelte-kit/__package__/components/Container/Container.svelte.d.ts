import type { Snippet } from 'svelte';
type $$ComponentProps = {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    gutter?: 'none' | 'sm' | 'md' | 'lg';
    class?: string;
    children?: Snippet;
};
declare const Container: import("svelte").Component<$$ComponentProps, {}, "">;
type Container = ReturnType<typeof Container>;
export default Container;
