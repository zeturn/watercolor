type $$ComponentProps = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    class?: string;
    oninput?: (e: Event) => void;
    onchange?: (e: Event) => void;
    [key: string]: any;
};
declare const Slider: import("svelte").Component<$$ComponentProps, {}, "value">;
type Slider = ReturnType<typeof Slider>;
export default Slider;
