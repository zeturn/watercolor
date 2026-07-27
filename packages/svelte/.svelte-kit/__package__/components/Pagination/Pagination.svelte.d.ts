type $$ComponentProps = {
    page?: number;
    count?: number;
    class?: string;
    onchange?: (page: number) => void;
};
declare const Pagination: import("svelte").Component<$$ComponentProps, {}, "page">;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
