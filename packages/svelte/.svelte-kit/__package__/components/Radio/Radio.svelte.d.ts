type $$ComponentProps = {
    checked?: boolean;
    value?: any;
    label?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    name?: string;
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any;
};
declare const Radio: import("svelte").Component<$$ComponentProps, {}, "checked">;
type Radio = ReturnType<typeof Radio>;
export default Radio;
