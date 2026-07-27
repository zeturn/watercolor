import type { Snippet } from 'svelte';
type $$ComponentProps = {
    severity?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    class?: string;
    children?: Snippet;
    onclose?: (event: MouseEvent) => void;
};
declare const Banner: import("svelte").Component<$$ComponentProps, {}, "">;
type Banner = ReturnType<typeof Banner>;
export default Banner;
