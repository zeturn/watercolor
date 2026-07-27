import type { Snippet } from 'svelte';
type $$ComponentProps = {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outlined' | 'elevated';
    stickyHeader?: boolean;
    class?: string;
    children?: Snippet;
};
declare const Table: import("svelte").Component<$$ComponentProps, {}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
