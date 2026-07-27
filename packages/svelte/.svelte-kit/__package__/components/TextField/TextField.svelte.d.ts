type $$ComponentProps = {
    value?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
    type?: string;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    oninput?: (e: Event) => void;
    onchange?: (e: Event) => void;
};
declare const TextField: import("svelte").Component<$$ComponentProps, {}, "value">;
type TextField = ReturnType<typeof TextField>;
export default TextField;
