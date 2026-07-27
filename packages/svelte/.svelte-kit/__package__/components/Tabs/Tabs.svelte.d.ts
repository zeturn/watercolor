import type { Snippet } from 'svelte';
type $$ComponentProps = {
    value?: any;
    variant?: 'default' | 'contained' | 'pill';
    options?: Array<{
        value: any;
        label: string;
        disabled?: boolean;
    }>;
    class?: string;
    children?: Snippet;
    onchange?: (value: any) => void;
};
declare const Tabs: import("svelte").Component<$$ComponentProps, {}, "value">;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
