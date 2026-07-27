import type { Snippet } from 'svelte';
import './style.css';
type $$ComponentProps = {
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
    size?: 'sm' | 'md' | 'lg';
    edge?: boolean | 'start' | 'end';
    disabled?: boolean;
    icon?: string;
    children?: Snippet;
    onclick?: (event: MouseEvent) => void;
};
declare const IconButton: import("svelte").Component<$$ComponentProps, {}, "">;
type IconButton = ReturnType<typeof IconButton>;
export default IconButton;
