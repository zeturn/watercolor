type $$ComponentProps = {
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    label?: string;
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any;
};
declare const FileInput: import("svelte").Component<$$ComponentProps, {}, "">;
type FileInput = ReturnType<typeof FileInput>;
export default FileInput;
