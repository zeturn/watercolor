import type {
  CompositionAlign,
  CompositionGap,
  InlineJustify,
  PageGutter,
  PageSize,
  SplitCollapse,
  SplitRatio,
} from '@zeturn/watercolor-core'

// Kept local so Storybook and source consumers do not require a prebuilt core dist.
// audit:composition verifies that these values match the core public contract.
export const COMPOSITION_GAPS = ['none', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const
export const COMPOSITION_ALIGNS = ['stretch', 'start', 'center', 'end'] as const
export const PAGE_SIZES = ['sm', 'md', 'lg', 'xl', 'full'] as const
export const PAGE_GUTTERS = ['none', 'sm', 'md', 'lg'] as const
export const INLINE_JUSTIFY = ['start', 'center', 'end', 'between', 'around'] as const
export const SPLIT_RATIOS = ['equal', 'sidebar', 'sidebar-end', 'wide-start', 'wide-end'] as const
export const SPLIT_COLLAPSE = ['none', 'sm', 'md', 'lg'] as const

export type {
  CompositionAlign,
  CompositionGap,
  InlineJustify,
  PageGutter,
  PageSize,
  SplitCollapse,
  SplitRatio,
} from '@zeturn/watercolor-core'
