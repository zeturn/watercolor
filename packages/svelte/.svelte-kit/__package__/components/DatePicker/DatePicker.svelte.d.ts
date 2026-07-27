type $$ComponentProps = {
    value?: Date | string | null;
    placeholder?: string;
    format?: string;
    disabled?: boolean;
    showToday?: boolean;
    minDate?: Date | string | null;
    maxDate?: Date | string | null;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outlined' | 'filled';
    onchange?: (value: Date | null) => void;
};
declare const DatePicker: import("svelte").Component<$$ComponentProps, {}, "value">;
type DatePicker = ReturnType<typeof DatePicker>;
export default DatePicker;
