import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    message?: string;
    actionText?: string;
    duration?: number;
    class?: string;
    children?: Snippet;
    onaction?: () => void;
    onclose?: () => void;
};
declare const Snackbar: import("svelte").Component<$$ComponentProps, {}, "open">;
type Snackbar = ReturnType<typeof Snackbar>;
export default Snackbar;
