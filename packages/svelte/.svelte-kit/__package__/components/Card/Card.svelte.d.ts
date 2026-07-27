import type { Snippet } from 'svelte';
type $$ComponentProps = {
    variant?: 'elevated' | 'outlined' | 'filled' | 'minimal';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'small' | 'medium' | 'large';
    header?: Snippet;
    title?: string;
    footer?: Snippet;
    class?: string;
    children?: Snippet;
    onclick?: (event: MouseEvent) => void;
    [key: string]: any;
};
declare const Card: import("svelte").Component<$$ComponentProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
