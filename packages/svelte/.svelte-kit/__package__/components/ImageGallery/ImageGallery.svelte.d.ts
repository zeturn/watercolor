interface GalleryImage {
    id?: string | number;
    src: string;
    thumbnail?: string;
    alt?: string;
    title?: string;
    description?: string;
}
type $$ComponentProps = {
    images?: GalleryImage[];
    title?: string;
    layout?: 'grid' | 'masonry' | 'carousel';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    columns?: number;
    gap?: number;
    showInfo?: boolean;
    showCount?: boolean;
    showDownload?: boolean;
    showPagination?: boolean;
    itemsPerPage?: number;
    lazyLoad?: boolean;
    loading?: boolean;
    class?: string;
    onselect?: (payload: {
        index: number;
        image: GalleryImage;
    }) => void;
    ondownload?: (image: GalleryImage) => void;
    onlightboxopen?: (payload: {
        index: number;
        image: GalleryImage;
    }) => void;
    onlightboxclose?: () => void;
};
declare const ImageGallery: import("svelte").Component<$$ComponentProps, {}, "">;
type ImageGallery = ReturnType<typeof ImageGallery>;
export default ImageGallery;
