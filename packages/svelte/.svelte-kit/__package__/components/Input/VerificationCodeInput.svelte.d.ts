type $$ComponentProps = {
    length?: number;
    value?: string;
    disabled?: boolean;
    error?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type?: 'number' | 'text';
    class?: string;
    oninput?: (value: string) => void;
    oncomplete?: (value: string) => void;
};
declare const VerificationCodeInput: import("svelte").Component<$$ComponentProps, {}, "value">;
type VerificationCodeInput = ReturnType<typeof VerificationCodeInput>;
export default VerificationCodeInput;
