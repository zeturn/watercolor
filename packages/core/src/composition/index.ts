/** Public option sets shared by the Vue and React composition primitives. */
export const COMPOSITION_GAPS = ['none', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const
export const COMPOSITION_ALIGNS = ['stretch', 'start', 'center', 'end'] as const
export const PAGE_SIZES = ['sm', 'md', 'lg', 'xl', 'full'] as const
export const PAGE_GUTTERS = ['none', 'sm', 'md', 'lg'] as const
export const INLINE_JUSTIFY = ['start', 'center', 'end', 'between', 'around'] as const
export const SPLIT_RATIOS = ['equal', 'sidebar', 'sidebar-end', 'wide-start', 'wide-end'] as const
export const SPLIT_COLLAPSE = ['none', 'sm', 'md', 'lg'] as const

export type CompositionGap = typeof COMPOSITION_GAPS[number]
export type CompositionAlign = typeof COMPOSITION_ALIGNS[number]
export type PageSize = typeof PAGE_SIZES[number]
export type PageGutter = typeof PAGE_GUTTERS[number]
export type InlineJustify = typeof INLINE_JUSTIFY[number]
export type SplitRatio = typeof SPLIT_RATIOS[number]
export type SplitCollapse = typeof SPLIT_COLLAPSE[number]
