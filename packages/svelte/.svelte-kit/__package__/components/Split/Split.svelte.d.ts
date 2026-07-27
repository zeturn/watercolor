import type { Snippet } from 'svelte';
type $$ComponentProps = {
    ratio?: 'equal' | 'sidebar' | 'sidebar-end' | 'wide-start' | 'wide-end';
    sidebar?: Snippet;
    content?: Snippet;
    class?: string;
    children?: Snippet;
};
declare const Split: import("svelte").Component<$$ComponentProps, {}, "">;
type Split = ReturnType<typeof Split>;
export default Split;
