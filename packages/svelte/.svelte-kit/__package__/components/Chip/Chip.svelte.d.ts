import type { Snippet } from 'svelte';
type $$ComponentProps = {
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    label?: string;
    icon?: string;
    disabled?: boolean;
    class?: string;
    children?: Snippet;
    onclick?: (event: MouseEvent) => void;
    onclose?: (event: MouseEvent) => void;
};
declare const Chip: import("svelte").Component<$$ComponentProps, {}, "">;
type Chip = ReturnType<typeof Chip>;
export default Chip;
