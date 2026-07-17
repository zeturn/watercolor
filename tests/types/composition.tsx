import { Inline, Page, Split, Stack } from '@zeturn/watercolor-react'

const page = <Page as="main" size="xl" gutter="lg" aria-label="Workspace" />
const stack = <Stack as="section" gap="2xl" align="start" />
const inline = <Inline as="nav" gap="xs" justify="between" wrap={false} />
const split = <Split ratio="sidebar-end" collapse="md" align="start" />

// @ts-expect-error page widths are deliberately limited to the shared scale
const badPage = <Page size="2xl" />
// @ts-expect-error arbitrary gaps bypass the composition spacing contract
const badStack = <Stack gap="17px" />
// @ts-expect-error distribution uses semantic names rather than CSS strings
const badInline = <Inline justify="space-between" />
// @ts-expect-error collapse only accepts named breakpoints or none
const badSplit = <Split collapse="tablet" />

void [page, stack, inline, split, badPage, badStack, badInline, badSplit]
