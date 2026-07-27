import type { Snippet } from 'svelte';
import './style.css';
type $$ComponentProps = {
    variant?: 'circular' | 'extended';
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'inherit';
    disabled?: boolean;
    label?: string;
    icon?: string;
    children?: Snippet;
    onclick?: (event: MouseEvent) => void;
    onfocus?: (event: FocusEvent) => void;
    onblur?: (event: FocusEvent) => void;
};
declare const Fab: import("svelte").Component<$$ComponentProps, {}, "">;
type Fab = ReturnType<typeof Fab>;
export default Fab;
