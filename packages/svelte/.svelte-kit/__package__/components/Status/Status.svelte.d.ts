type $$ComponentProps = {
    tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'processing';
    label?: string;
    size?: 'sm' | 'md';
    class?: string;
};
declare const Status: import("svelte").Component<$$ComponentProps, {}, "">;
type Status = ReturnType<typeof Status>;
export default Status;
