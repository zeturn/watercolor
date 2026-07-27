type $$ComponentProps = {
    value?: any;
    options?: Array<{
        value: any;
        label: string;
        disabled?: boolean;
    }>;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    multiple?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any;
};
declare const Select: import("svelte").Component<$$ComponentProps, {}, "value">;
type Select = ReturnType<typeof Select>;
export default Select;
