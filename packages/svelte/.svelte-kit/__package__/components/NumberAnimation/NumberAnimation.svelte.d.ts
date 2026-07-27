type $$ComponentProps = {
    value?: number;
    from?: number;
    duration?: number;
    decimals?: number;
    separator?: string;
    prefix?: string;
    suffix?: string;
    formatter?: ((value: number) => string) | null;
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
    autoPlay?: boolean;
    active?: boolean;
    to?: number;
    precision?: number;
    showSeparator?: boolean;
    oncomplete?: () => void;
};
declare const NumberAnimation: import("svelte").Component<$$ComponentProps, {
    start: () => void;
    stop: () => void;
}, "">;
type NumberAnimation = ReturnType<typeof NumberAnimation>;
export default NumberAnimation;
