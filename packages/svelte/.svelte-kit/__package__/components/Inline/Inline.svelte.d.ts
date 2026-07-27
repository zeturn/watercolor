import type { Snippet } from 'svelte';
type $$ComponentProps = {
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    align?: 'start' | 'center' | 'end' | 'stretch';
    class?: string;
    children?: Snippet;
};
declare const Inline: import("svelte").Component<$$ComponentProps, {}, "">;
type Inline = ReturnType<typeof Inline>;
export default Inline;
