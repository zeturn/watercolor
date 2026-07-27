type $$ComponentProps = {
    icon?: string;
    title?: string;
    description?: string;
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    class?: string;
};
declare const Feature: import("svelte").Component<$$ComponentProps, {}, "">;
type Feature = ReturnType<typeof Feature>;
export default Feature;
