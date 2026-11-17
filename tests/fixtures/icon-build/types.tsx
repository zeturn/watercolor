import { createRef } from 'react'
import { Icon, Button } from '@zeturn/watercolor-react'
import DeepIcon from '@zeturn/watercolor-react/Icon'
import DeepButton, { type ButtonProps } from '@zeturn/watercolor-react/Button'
import { TableBody as NamedTableBody } from '@zeturn/watercolor-react/TableBody'
import NextButton from '@zeturn/watercolor-next/Button'
import Database from '@zeturn/watercolor-icons-lucide-react/Database'
import TablerDatabase from '@zeturn/watercolor-icons-tabler-react/IconDatabase'
import HeroHeart from '@zeturn/watercolor-icons-heroicons-react/24/outline/HeartIcon'
import PhosphorDatabase from '@zeturn/watercolor-icons-phosphor-react/Database'

const buttonProps: ButtonProps = { variant: 'primary' }
const ref = createRef<SVGSVGElement>()
export const icons = <>
  <Icon component={Database} label="Database" ref={ref} strokeWidth={1.5} />
  <DeepIcon component={TablerDatabase} aria-label="Database" />
  <DeepIcon component={HeroHeart} decorative />
  <DeepIcon component={PhosphorDatabase} weight="duotone" />
  <Button {...buttonProps}>Root</Button><DeepButton {...buttonProps}>Deep</DeepButton><NextButton>Next</NextButton>
  <table><NamedTableBody><tr><td>Typed</td></tr></NamedTableBody></table>
</>
// @ts-expect-error A number is not an icon component.
export const invalid = <Icon component={42} />
