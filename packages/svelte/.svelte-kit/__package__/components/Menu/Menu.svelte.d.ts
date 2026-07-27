import type { Snippet } from 'svelte';
type $$ComponentProps = {
    trigger?: Snippet;
    items?: Array<{
        value: any;
        label: string;
        disabled?: boolean;
        onclick?: () => void;
    }>;
    placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
    class?: string;
    children?: Snippet;
};
declare const Menu: import("svelte").Component<$$ComponentProps, {}, "">;
type Menu = ReturnType<typeof Menu>;
export default Menu;
