import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closeOnBackdrop?: boolean;
    showClose?: boolean;
    class?: string;
    children?: Snippet;
    onclose?: () => void;
};
declare const Modal: import("svelte").Component<$$ComponentProps, {}, "open">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
