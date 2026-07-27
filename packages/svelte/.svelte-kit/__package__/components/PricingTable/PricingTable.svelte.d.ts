type $$ComponentProps = {
    plans?: Array<{
        name: string;
        price?: string;
        features?: string[];
        cta?: string;
        highlighted?: boolean;
    }>;
    class?: string;
    onselect?: (plan: any) => void;
};
declare const PricingTable: import("svelte").Component<$$ComponentProps, {}, "">;
type PricingTable = ReturnType<typeof PricingTable>;
export default PricingTable;
