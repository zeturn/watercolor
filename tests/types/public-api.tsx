import React from 'react'
import {
  Button,
  Checkbox,
  Input,
  Menu,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  ThemeProvider,
  type ButtonProps,
  type SelectOption,
} from '@zeturn/watercolor-react'
import {
  Button as VueButton,
  Select as VueSelect,
  Tabs as VueTabs,
} from '@zeturn/watercolor-vue'

const options: SelectOption[] = [{ value: 'one', label: 'One' }]
const buttonProps: ButtonProps = { variant: 'primary', size: 'md', loading: false }

export const reactPublicApi = (
  <ThemeProvider defaultMode="system">
    <Stack gap="md" align="center">
      <Button {...buttonProps} onClick={(event) => event.currentTarget.focus()}>Save</Button>
      <Input label="Name" value="Ada" onChange={(event) => event.currentTarget.value} />
      <TextField multiline rows={3} error="Required" />
      <Select value="one" options={options} onChange={(event) => event.target.value} />
      <Checkbox value="terms" label="Terms" onChange={(event) => event.target.checked} />
      <RadioGroup value="a" onChange={(value) => value.toUpperCase()}>
        <Radio value="a">A</Radio>
      </RadioGroup>
      <Switch checked label="Enabled" onChange={(checked) => !checked} />
      <Menu items={[{ key: 'edit', label: 'Edit' }]} onSelect={(item) => item.key} />
      <Tabs tabs={[{ key: 'main', title: 'Main' }]} onChange={(index) => index} />
      <Modal open title="Confirm" onClose={() => undefined}>Body</Modal>
      <Table hover>
        <TableHead><TableRow><TableCell component="th">Name</TableCell></TableRow></TableHead>
        <TableBody><TableRow><TableCell>Ada</TableCell></TableRow></TableBody>
      </Table>
    </Stack>
  </ThemeProvider>
)

type VueButtonProps = InstanceType<typeof VueButton>['$props']
type VueSelectProps = InstanceType<typeof VueSelect>['$props']
type VueTabsSlots = InstanceType<typeof VueTabs>['$slots']

export const vueButtonProps: VueButtonProps = { variant: 'primary', loading: true }
export const vueSelectProps: VueSelectProps = { modelValue: 'one', options: [{ value: 'one', label: 'One' }] }
export const vueTabsDefaultSlot: VueTabsSlots['default'] = ({ activeIndex }) => activeIndex

// These assertions keep the public unions narrow enough to catch consumer mistakes.
// @ts-expect-error unsupported visual variant
export const invalidButtonProps: ButtonProps = { variant: 'glassmorphism' }
// @ts-expect-error Theme v2 only accepts light, dark, or system
export const invalidTheme = <ThemeProvider defaultMode="sepia" />
