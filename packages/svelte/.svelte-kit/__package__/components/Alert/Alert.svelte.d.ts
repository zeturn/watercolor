import type { Snippet } from 'svelte';
type $$ComponentProps = {
    severity?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    class?: string;
    children?: Snippet;
    onclose?: (event: MouseEvent) => void;
};
declare const Alert: import("svelte").Component<$$ComponentProps, {}, "">;
type Alert = ReturnType<typeof Alert>;
export default Alert;
