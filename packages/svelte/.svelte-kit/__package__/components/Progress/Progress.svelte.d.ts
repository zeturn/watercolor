type $$ComponentProps = {
    value?: number;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
    indeterminate?: boolean;
    class?: string;
};
declare const Progress: import("svelte").Component<$$ComponentProps, {}, "">;
type Progress = ReturnType<typeof Progress>;
export default Progress;
