import type { ComponentPropsWithoutRef, ComponentType, ElementType, ReactElement, ReactNode } from 'react'
import type {
  CompositionAlign,
  CompositionGap,
  InlineJustify,
  PageGutter,
  PageSize,
  SplitCollapse,
  SplitRatio,
} from '@zeturn/watercolor-core'

type WatercolorComponent = ComponentType<any>
type PolymorphicProps<T extends ElementType, OwnProps> = OwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps | 'as'> & { as?: T }
type CompositionBaseProps = { children?: ReactNode; className?: string }

export type PageProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  size?: PageSize
  gutter?: PageGutter
}>
export type StackProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  gap?: CompositionGap
  align?: CompositionAlign
}>
export type InlineProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  gap?: CompositionGap
  align?: CompositionAlign
  justify?: InlineJustify
  wrap?: boolean
}>
export type SplitProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  ratio?: SplitRatio
  gap?: CompositionGap
  align?: CompositionAlign
  collapse?: SplitCollapse
}>

export type {
  CompositionAlign,
  CompositionGap,
  InlineJustify,
  PageGutter,
  PageSize,
  SplitCollapse,
  SplitRatio,
} from '@zeturn/watercolor-core'

export const Accordion: WatercolorComponent
export const Alert: WatercolorComponent
export const AppBar: WatercolorComponent
export const Autocomplete: WatercolorComponent
export const Avatar: WatercolorComponent
export const Badge: WatercolorComponent
export const Banner: WatercolorComponent
export const Blockquote: WatercolorComponent
export const Box: WatercolorComponent
export const Breadcrumb: WatercolorComponent
export const Button: WatercolorComponent
export const Card: WatercolorComponent
export const CardActions: WatercolorComponent
export const CardContent: WatercolorComponent
export const Checkbox: WatercolorComponent
export const Chip: WatercolorComponent
export const CircularProgress: WatercolorComponent
export const ColorPicker: WatercolorComponent
export const Container: WatercolorComponent
export const Copy: WatercolorComponent
export const DatePicker: WatercolorComponent
export const Fab: WatercolorComponent
export const Feed: WatercolorComponent
export const Feature: WatercolorComponent
export const FileInput: WatercolorComponent
export const FormControl: WatercolorComponent
export const FormControlLabel: WatercolorComponent
export const FormGroup: WatercolorComponent
export const FormHelperText: WatercolorComponent
export const Grid: WatercolorComponent
export const HoverCard: WatercolorComponent
export const Icon: WatercolorComponent
export const IconButton: WatercolorComponent
export const ImageGallery: WatercolorComponent
export const Inline: <T extends ElementType = 'div'>(props: InlineProps<T>) => ReactElement | null
export const Input: WatercolorComponent
export const List: WatercolorComponent
export const ListItem: WatercolorComponent
export const ListItemIcon: WatercolorComponent
export const ListItemText: WatercolorComponent
export const Menu: WatercolorComponent
export const Modal: WatercolorComponent
export const NumberAnimation: WatercolorComponent
export const Pagination: WatercolorComponent
export const Page: <T extends ElementType = 'div'>(props: PageProps<T>) => ReactElement | null
export const Paper: WatercolorComponent
export const Popover: WatercolorComponent
export const PricingTable: WatercolorComponent
export const Progress: WatercolorComponent
export const Radio: WatercolorComponent
export const RadioGroup: WatercolorComponent
export const Rating: WatercolorComponent
export const Select: WatercolorComponent
export const Skeleton: WatercolorComponent
export const Slider: WatercolorComponent
export const SlideOver: WatercolorComponent
export const Split: <T extends ElementType = 'div'>(props: SplitProps<T>) => ReactElement | null
export const Stack: <T extends ElementType = 'div'>(props: StackProps<T>) => ReactElement | null
export const Snackbar: WatercolorComponent
export const Status: WatercolorComponent
export const Switch: WatercolorComponent
export const Table: WatercolorComponent
export const TableBody: WatercolorComponent
export const TableCell: WatercolorComponent
export const TableHead: WatercolorComponent
export const TableRow: WatercolorComponent
export const Tabs: WatercolorComponent
export const TextField: WatercolorComponent
export const Toolbar: WatercolorComponent
export const Tooltip: WatercolorComponent
export const Typography: WatercolorComponent
export const TypingText: WatercolorComponent
export const VerificationCodeInput: WatercolorComponent
export const VideoPlayer: WatercolorComponent
export const Watermark: WatercolorComponent

export * from './dist/src/utils/theme'
export { ThemeProvider, useTheme } from './dist/src/ThemeReact'
export type { ThemeContextValue, ThemeProviderProps } from './dist/src/ThemeReact'
