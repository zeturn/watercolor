import type { Snippet } from 'svelte';
type $$ComponentProps = {
    size?: 'sm' | 'md' | 'lg';
    error?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    class?: string;
    children?: Snippet;
};
declare const FormControl: import("svelte").Component<$$ComponentProps, {}, "">;
type FormControl = ReturnType<typeof FormControl>;
export default FormControl;
