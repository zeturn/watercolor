type $$ComponentProps = {
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    shape?: 'circle' | 'square' | 'rounded';
    disabled?: boolean;
    swatches?: string[];
    class?: string;
    onchange?: (value: string) => void;
};
declare const ColorPicker: import("svelte").Component<$$ComponentProps, {}, "value">;
type ColorPicker = ReturnType<typeof ColorPicker>;
export default ColorPicker;
