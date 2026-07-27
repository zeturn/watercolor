import type { Snippet } from 'svelte';
type $$ComponentProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline' | 'inherit';
    color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'muted' | 'inherit';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    gutterBottom?: boolean;
    noWrap?: boolean;
    strong?: boolean;
    class?: string;
    children?: Snippet;
    [key: string]: any;
};
declare const Typography: import("svelte").Component<$$ComponentProps, {}, "">;
type Typography = ReturnType<typeof Typography>;
export default Typography;
