import type { Snippet } from 'svelte';
type $$ComponentProps = {
    items?: Array<{
        label: string;
        href?: string;
    }>;
    class?: string;
    children?: Snippet;
};
declare const Breadcrumb: import("svelte").Component<$$ComponentProps, {}, "">;
type Breadcrumb = ReturnType<typeof Breadcrumb>;
export default Breadcrumb;
