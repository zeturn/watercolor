type $$ComponentProps = {
    src?: string;
    alt?: string;
    label?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
};
declare const Avatar: import("svelte").Component<$$ComponentProps, {}, "">;
type Avatar = ReturnType<typeof Avatar>;
export default Avatar;
