type $$ComponentProps = {
    variant?: 'text' | 'rect' | 'circle';
    width?: string | number;
    height?: string | number;
    animation?: boolean;
    class?: string;
};
declare const Skeleton: import("svelte").Component<$$ComponentProps, {}, "">;
type Skeleton = ReturnType<typeof Skeleton>;
export default Skeleton;
