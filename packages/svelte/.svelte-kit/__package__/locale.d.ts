export interface WatercolorLocaleMessages {
    breadcrumb: string;
    closePopover: string;
    close: string;
    closeDialog: string;
    closeLightbox: string;
    downloadImage: (index: number) => string;
    colorPicker: string;
    circularProgress: string;
    enterFullscreen: string;
    loading: string;
    muteVideo: string;
    nextImage: string;
    nextMonth: string;
    nextPage: string;
    openCalendar: string;
    openImageInLightbox: (index: number) => string;
    page: (page: number) => string;
    pagination: string;
    pauseVideo: string;
    playVideo: string;
    previousImage: string;
    previousMonth: string;
    previousPage: string;
    progress: string;
    rating: string;
    ratingValue: (value: number, max: number) => string;
    remove: string;
    removeItem: (label?: string) => string;
    rowsPerPage: string;
    switchControl: string;
    tabList: string;
    unmuteVideo: string;
    jumpToPage: string;
    verificationCodeDigit: (index: number) => string;
    viewImage: (index: number, description?: string) => string;
    volume: string;
    videoProgress: string;
}
export interface LocaleStore {
    locale: string | undefined;
    messages: WatercolorLocaleMessages;
}
export declare const defaultLocaleMessages: WatercolorLocaleMessages;
