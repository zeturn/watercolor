type $$ComponentProps = {
    value?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    thickness?: number;
    indeterminate?: boolean;
    class?: string;
};
declare const CircularProgress: import("svelte").Component<$$ComponentProps, {}, "">;
type CircularProgress = ReturnType<typeof CircularProgress>;
export default CircularProgress;
