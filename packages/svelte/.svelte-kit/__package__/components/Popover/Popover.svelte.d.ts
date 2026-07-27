import type { Snippet } from 'svelte';
type $$ComponentProps = {
    trigger?: Snippet;
    open?: boolean;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    children?: Snippet;
};
declare const Popover: import("svelte").Component<$$ComponentProps, {}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
