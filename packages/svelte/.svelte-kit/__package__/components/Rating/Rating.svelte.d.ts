type $$ComponentProps = {
    value?: number;
    max?: number;
    readonly?: boolean;
    ariaLabel?: string;
    onchange?: (value: number) => void;
};
declare const Rating: import("svelte").Component<$$ComponentProps, {}, "value">;
type Rating = ReturnType<typeof Rating>;
export default Rating;
