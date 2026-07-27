import type { Snippet } from 'svelte';
type $$ComponentProps = {
    direction?: 'row' | 'column';
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    wrap?: boolean;
    class?: string;
    children?: Snippet;
};
declare const Stack: import("svelte").Component<$$ComponentProps, {}, "">;
type Stack = ReturnType<typeof Stack>;
export default Stack;
