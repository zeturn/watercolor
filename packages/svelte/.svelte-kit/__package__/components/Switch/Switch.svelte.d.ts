type $$ComponentProps = {
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any;
};
declare const Switch: import("svelte").Component<$$ComponentProps, {}, "checked">;
type Switch = ReturnType<typeof Switch>;
export default Switch;
