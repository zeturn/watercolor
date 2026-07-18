import {
  computed,
  defineComponent,
  inject,
  provide,
  type ComputedRef,
  type PropType,
} from 'vue'

export interface WatercolorLocaleMessages {
  breadcrumb: string
  closePopover: string
  close: string
  closeDialog: string
  closeLightbox: string
  downloadImage: (index: number) => string
  colorPicker: string
  circularProgress: string
  enterFullscreen: string
  loading: string
  muteVideo: string
  nextImage: string
  nextMonth: string
  nextPage: string
  openCalendar: string
  openImageInLightbox: (index: number) => string
  page: (page: number) => string
  pagination: string
  pauseVideo: string
  playVideo: string
  previousMonth: string
  previousPage: string
  previousImage: string
  progress: string
  rating: string
  ratingValue: (value: number, max: number) => string
  remove: string
  removeItem: (label?: string) => string
  rowsPerPage: string
  switchControl: string
  tabList: string
  unmuteVideo: string
  jumpToPage: string
  verificationCodeDigit: (index: number) => string
  viewImage: (index: number, description?: string) => string
  volume: string
  videoProgress: string
}

export interface LocaleStore {
  locale: ComputedRef<string | undefined>
  messages: ComputedRef<WatercolorLocaleMessages>
}

export const defaultLocaleMessages: WatercolorLocaleMessages = {
  breadcrumb: 'Breadcrumb',
  close: 'Close',
  closeDialog: 'Close dialog',
  closeLightbox: 'Close lightbox',
  closePopover: 'Popover content',
  colorPicker: 'Choose color',
  circularProgress: 'Loading progress',
  downloadImage: (index) => `Download image ${index}`,
  enterFullscreen: 'Enter fullscreen',
  loading: 'Loading',
  muteVideo: 'Mute video',
  nextImage: 'Next image',
  nextMonth: 'Next month',
  nextPage: 'Next page',
  openCalendar: 'Choose date',
  openImageInLightbox: (index) => `Open image ${index} in lightbox`,
  page: (page) => `Page ${page}`,
  pagination: 'Pagination',
  pauseVideo: 'Pause video',
  playVideo: 'Play video',
  previousImage: 'Previous image',
  previousMonth: 'Previous month',
  previousPage: 'Previous page',
  progress: 'Progress',
  rating: 'Rating',
  ratingValue: (value, max) => `${value} of ${max}`,
  remove: 'Remove',
  removeItem: (label) => `Remove${label ? ` ${label}` : ''}`,
  rowsPerPage: 'Rows per page',
  switchControl: 'Switch',
  tabList: 'Content sections',
  unmuteVideo: 'Unmute video',
  jumpToPage: 'Jump to page',
  verificationCodeDigit: (index) => `Verification code digit ${index}`,
  viewImage: (index, description) => `View image ${index}${description ? `: ${description}` : ''}`,
  volume: 'Volume',
  videoProgress: 'Video progress',
}

const LOCALE_KEY = Symbol('WatercolorLocale')
const fallbackStore: LocaleStore = {
  locale: computed(() => undefined),
  messages: computed(() => defaultLocaleMessages),
}

export function useLocale (): LocaleStore {
  return inject<LocaleStore>(LOCALE_KEY, fallbackStore)
}

export const LocaleProvider = defineComponent({
  name: 'LocaleProvider',
  props: {
    locale: String,
    messages: Object as PropType<Partial<WatercolorLocaleMessages>>,
  },
  setup (props, { slots }) {
    const store: LocaleStore = {
      locale: computed(() => props.locale),
      messages: computed(() => ({ ...defaultLocaleMessages, ...props.messages })),
    }
    provide(LOCALE_KEY, store)
    return () => slots.default?.()
  },
})
