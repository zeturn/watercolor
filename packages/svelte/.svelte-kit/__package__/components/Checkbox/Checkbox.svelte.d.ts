type $$ComponentProps = {
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    indeterminate?: boolean;
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any;
};
declare const Checkbox: import("svelte").Component<$$ComponentProps, {}, "checked">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
