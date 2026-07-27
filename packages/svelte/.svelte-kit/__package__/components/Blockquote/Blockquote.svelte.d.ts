import type { Snippet } from 'svelte';
type $$ComponentProps = {
    cite?: string;
    variant?: 'default' | 'minimal' | 'card';
    noBorder?: boolean;
    interactive?: boolean;
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
    class?: string;
    children?: Snippet;
};
declare const Blockquote: import("svelte").Component<$$ComponentProps, {}, "">;
type Blockquote = ReturnType<typeof Blockquote>;
export default Blockquote;
