import type { Snippet } from 'svelte';
type $$ComponentProps = {
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    dot?: boolean;
    max?: number;
    value?: number;
    class?: string;
    children?: Snippet;
};
declare const Badge: import("svelte").Component<$$ComponentProps, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
