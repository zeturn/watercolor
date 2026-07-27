import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    title?: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg';
    showClose?: boolean;
    class?: string;
    children?: Snippet;
    onclose?: () => void;
};
declare const SlideOver: import("svelte").Component<$$ComponentProps, {}, "open">;
type SlideOver = ReturnType<typeof SlideOver>;
export default SlideOver;
