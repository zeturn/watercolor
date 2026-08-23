/* Watercolor Solid smoke-test example.
 * Renders every public component exported from @zeturn/watercolor-solid
 * so that mechanical React->Solid conversion issues surface at runtime.
 */
import { createSignal, For } from 'solid-js'
import { render } from 'solid-js/web'
import {
  Accordion, Alert, AppBar, Autocomplete, Avatar, Badge, Banner, Blockquote,
  Box, Breadcrumb, Button, Card, CardActions, CardContent, Checkbox, Chip,
  CircularProgress, CodeBlock, ColorPicker, Container, Copy, DatePicker, Fab,
  Feature, Feed, FileInput, FormControl, FormControlLabel, FormGroup,
  FormHelperText, Grid, HoverCard, Icon, IconButton, ImageGallery, Inline,
  Input, List, ListItem, ListItemIcon, ListItemText, LocaleProvider, Menu,
  Modal, NumberAnimation, Page, Pagination, Paper, Popover, PricingTable,
  Progress, Radio, RadioGroup, Rating, Select, Skeleton, SlideOver, Slider,
  Snackbar, Split, Stack, Status, Switch, Table, TableBody, TableCell,
  TableHead, TableRow, Tabs, TextField, ThemeProvider, Toolbar, Tooltip,
  TypingText, Typography, VerificationCodeInput, VideoPlayer, Watermark,
} from '@zeturn/watercolor-solid'
import '@zeturn/watercolor-solid/style.css'

const Section = (props) => (
  <Stack gap="md">
    <Typography variant="h3">{props.title}</Typography>
    {props.children}
  </Stack>
)

function App() {
  const [modalOpen, setModalOpen] = createSignal(false)
  const [slideOverOpen, setSlideOverOpen] = createSignal(false)
  const [snackbarOpen, setSnackbarOpen] = createSignal(false)
  const [checked, setChecked] = createSignal(true)
  const [switchOn, setSwitchOn] = createSignal(false)
  const [radioValue, setRadioValue] = createSignal('a')
  const [selectValue, setSelectValue] = createSignal('one')
  const [autoValue, setAutoValue] = createSignal(null)
  const [sliderValue, setSliderValue] = createSignal(40)
  const [rating, setRating] = createSignal(3)
  const [page, setPage] = createSignal(1)
  const [text, setText] = createSignal('')
  const [date, setDate] = createSignal(null)
  const [color, setColor] = createSignal('#3384ff')

  const selectOptions = [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' },
  ]

  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <LocaleProvider locale="en">
        <Watermark text="watercolor">
          <Page size="lg" gutter="md">
            <Stack gap="xl">
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h2">Watercolor Solid Smoke Test</Typography>
                </Toolbar>
              </AppBar>

              <Section title="Typography / Text">
                <Typography variant="h1">Heading 1</Typography>
                <Typography color="secondary">Secondary body text.</Typography>
                <Blockquote>Blockquote content.</Blockquote>
                <TypingText text="Typing text animation" />
                <NumberAnimation value={1024} />
                <CodeBlock code={'const hello = "world"'} language="js" />
                <Copy text="copied-value">Copy me</Copy>
              </Section>

              <Section title="Buttons">
                <Inline gap="sm">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button disabled>Disabled</Button>
                  <IconButton aria-label="icon button"><Icon name="star" /></IconButton>
                  <Fab aria-label="fab"><Icon name="plus" /></Fab>
                </Inline>
              </Section>

              <Section title="Feedback">
                <Alert type="success" title="Success">Everything works.</Alert>
                <Banner type="info" title="Info banner">Banner content.</Banner>
                <Progress value={65} showPercent label="Progress" />
                <CircularProgress value={40} />
                <Skeleton width="200px" height="16px" />
                <Inline gap="sm">
                  <Status status="success" showText />
                  <Status status="error" showText />
                </Inline>
                <Inline gap="sm">
                  <Button onClick={() => setSnackbarOpen(true)}>Open snackbar</Button>
                </Inline>
                <Snackbar
                  open={snackbarOpen()}
                  message="Snackbar message"
                  severity="success"
                  autoHideDuration={2500}
                  onClose={() => setSnackbarOpen(false)}
                />
              </Section>

              <Section title="Data display">
                <Inline gap="sm">
                  <Avatar>WC</Avatar>
                  <Badge variant="primary">Badge</Badge>
                  <Badge dot variant="error" />
                  <Chip label="Chip" clickable onClick={() => {}} />
                  <Rating value={rating()} onChange={setRating} />
                </Inline>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell header>Name</TableCell>
                      <TableCell header>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ada</TableCell>
                      <TableCell>Engineer</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Grace</TableCell>
                      <TableCell>Admiral</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <List>
                  <ListItem>
                    <ListItemIcon><Icon name="check" /></ListItemIcon>
                    <ListItemText primary="List item" secondary="Secondary text" />
                  </ListItem>
                </List>
                <Feed
                  items={[
                    { id: 1, title: 'Feed item', description: 'Feed description' },
                  ]}
                />
                <Pagination value={page()} total={100} pageSize={10} onChange={setPage} />
              </Section>

              <Section title="Inputs">
                <Grid columns={2} gap="md">
                  <TextField label="TextField" value={text()} onChange={setText} placeholder="Type here" />
                  <Input placeholder="Input" />
                  <Select
                    label="Select"
                    value={selectValue()}
                    options={selectOptions}
                    onChange={setSelectValue}
                  />
                  <Autocomplete
                    label="Autocomplete"
                    value={autoValue()}
                    options={selectOptions}
                    onChange={setAutoValue}
                  />
                  <DatePicker value={date()} onChange={setDate} />
                  <ColorPicker value={color()} onChange={setColor} />
                  <FileInput label="File input" />
                  <VerificationCodeInput length={4} />
                </Grid>
                <FormControl>
                  <FormGroup>
                    <FormControlLabel
                      label="Checkbox via FormControlLabel"
                      control={<Checkbox checked={checked()} onChange={setChecked} />}
                    />
                  </FormGroup>
                  <FormHelperText>Helper text</FormHelperText>
                </FormControl>
                <Checkbox label="Standalone checkbox" checked={checked()} onChange={setChecked} />
                <Switch label="Switch" checked={switchOn()} onChange={setSwitchOn} />
                <RadioGroup value={radioValue()} onChange={setRadioValue} name="demo-radio">
                  <Radio value="a" label="Option A" />
                  <Radio value="b" label="Option B" />
                </RadioGroup>
                <Slider label="Slider" value={sliderValue()} onChange={setSliderValue} valueLabelDisplay="auto" />
              </Section>

              <Section title="Navigation">
                <Breadcrumb
                  items={[
                    { label: 'Home', href: '#' },
                    { label: 'Library', href: '#' },
                    { label: 'Current' },
                  ]}
                />
                <Tabs
                  tabs={[
                    { label: 'Tab 1', content: <Typography>Tab 1 content</Typography> },
                    { label: 'Tab 2', content: <Typography>Tab 2 content</Typography> },
                  ]}
                />
                <Menu
                  triggerText="Open menu"
                  items={[
                    { label: 'Item 1', value: 1 },
                    { label: 'Item 2', value: 2 },
                  ]}
                  onSelect={() => {}}
                />
              </Section>

              <Section title="Overlay">
                <Inline gap="sm">
                  <Button onClick={() => setModalOpen(true)}>Open modal</Button>
                  <Button onClick={() => setSlideOverOpen(true)}>Open slide over</Button>
                  <Tooltip text="Tooltip content"><Button variant="secondary">Hover me</Button></Tooltip>
                  <Popover content={<Typography>Popover content</Typography>}>
                    <Button variant="secondary">Popover</Button>
                  </Popover>
                  <HoverCard content={<Typography>Hover card content</Typography>}>
                    <Button variant="secondary">Hover card</Button>
                  </HoverCard>
                </Inline>
                <Modal visible={modalOpen()} title="Modal title" onClose={() => setModalOpen(false)}>
                  <Typography>Modal body content.</Typography>
                </Modal>
                <SlideOver open={slideOverOpen()} title="Slide over" onClose={() => setSlideOverOpen(false)}>
                  <Typography>Slide over content.</Typography>
                </SlideOver>
              </Section>

              <Section title="Layout / Surfaces">
                <Container size="md">
                  <Paper padding="md">
                    <Typography>Paper inside Container.</Typography>
                  </Paper>
                </Container>
                <Box padding="md">Box content</Box>
                <Split gap="md">
                  <Card>
                    <CardContent>
                      <Typography variant="h4">Card</Typography>
                      <Typography color="secondary">Card content.</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="sm">Action</Button>
                    </CardActions>
                  </Card>
                  <Feature title="Feature" description="Feature description" />
                </Split>
                <Accordion
                  items={[
                    { title: 'Section 1', content: 'Accordion content 1' },
                    { title: 'Section 2', content: 'Accordion content 2' },
                  ]}
                />
                <PricingTable
                  plans={[
                    { name: 'Free', price: '$0', features: ['Feature A'] },
                    { name: 'Pro', price: '$10', features: ['Feature A', 'Feature B'] },
                  ]}
                />
              </Section>

              <Section title="Media">
                <ImageGallery
                  images={[
                    { src: 'https://picsum.photos/seed/wc1/400/240', alt: 'Sample 1' },
                    { src: 'https://picsum.photos/seed/wc2/400/240', alt: 'Sample 2' },
                  ]}
                />
                <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
              </Section>
            </Stack>
          </Page>
        </Watermark>
      </LocaleProvider>
    </ThemeProvider>
  )
}

render(() => <App />, document.getElementById('root'))
