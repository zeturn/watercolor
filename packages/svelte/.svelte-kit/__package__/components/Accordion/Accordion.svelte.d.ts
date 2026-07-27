import type { Snippet } from 'svelte';
type $$ComponentProps = {
    items?: Array<{
        title: string;
        content: string;
    }>;
    multiple?: boolean;
    class?: string;
    children?: Snippet;
};
declare const Accordion: import("svelte").Component<$$ComponentProps, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
