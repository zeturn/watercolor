import type { Snippet } from 'svelte';
type $$ComponentProps = {
    value?: any;
    name?: string;
    label?: string;
    options?: Array<{
        value: any;
        label?: string;
        disabled?: boolean;
    }>;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    direction?: 'row' | 'column';
    class?: string;
    children?: Snippet;
    onchange?: (value: any, event: Event) => void;
};
declare const RadioGroup: import("svelte").Component<$$ComponentProps, {}, "value">;
type RadioGroup = ReturnType<typeof RadioGroup>;
export default RadioGroup;
