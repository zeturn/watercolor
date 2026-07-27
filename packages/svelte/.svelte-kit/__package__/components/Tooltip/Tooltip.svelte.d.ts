import type { Snippet } from 'svelte';
type $$ComponentProps = {
    text?: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    children?: Snippet;
};
declare const Tooltip: import("svelte").Component<$$ComponentProps, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
