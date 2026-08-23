/* Per-component render probe: renders each component in isolation and logs failures. */
import { render } from 'solid-js/web'
import * as m from '@zeturn/watercolor-solid'
import '@zeturn/watercolor-solid/style.css'

const opts = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
]

const cases = {
  Accordion: () => <m.Accordion items={[{ title: 't', content: 'c' }]} />,
  Alert: () => <m.Alert type="info" title="t">a</m.Alert>,
  AppBar: () => <m.AppBar position="static">x</m.AppBar>,
  Autocomplete: () => <m.Autocomplete options={opts} />,
  Avatar: () => <m.Avatar>AB</m.Avatar>,
  Badge: () => <m.Badge>1</m.Badge>,
  Banner: () => <m.Banner type="info">b</m.Banner>,
  Blockquote: () => <m.Blockquote>q</m.Blockquote>,
  Box: () => <m.Box>box</m.Box>,
  Breadcrumb: () => <m.Breadcrumb items={[{ label: 'a' }, { label: 'b' }]} />,
  Button: () => <m.Button>b</m.Button>,
  Card: () => <m.Card><m.CardContent>c</m.CardContent><m.CardActions>a</m.CardActions></m.Card>,
  Checkbox: () => <m.Checkbox label="c" checked />,
  Chip: () => <m.Chip label="chip" />,
  CircularProgress: () => <m.CircularProgress value={30} />,
  CodeBlock: () => <m.CodeBlock code="x" language="js" />,
  ColorPicker: () => <m.ColorPicker value="#fff" />,
  Container: () => <m.Container>c</m.Container>,
  Copy: () => <m.Copy text="x">copy</m.Copy>,
  DatePicker: () => <m.DatePicker />,
  Fab: () => <m.Fab aria-label="f">+</m.Fab>,
  Feature: () => <m.Feature title="f" description="d" />,
  Feed: () => <m.Feed items={[{ id: 1, title: 'f' }]} />,
  FileInput: () => <m.FileInput label="f" />,
  Form: () => (
    <m.FormControl>
      <m.FormGroup>
        <m.FormControlLabel label="l" control={<m.Checkbox />} />
      </m.FormGroup>
      <m.FormHelperText>h</m.FormHelperText>
    </m.FormControl>
  ),
  Grid: () => <m.Grid columns={2}><div>a</div><div>b</div></m.Grid>,
  HoverCard: () => <m.HoverCard content={<span>c</span>}><span>t</span></m.HoverCard>,
  Icon: () => <m.Icon name="star" />,
  IconButton: () => <m.IconButton aria-label="i">i</m.IconButton>,
  ImageGallery: () => <m.ImageGallery images={[{ src: 'x.png', alt: 'x' }]} />,
  Inline: () => <m.Inline>i</m.Inline>,
  Input: () => <m.Input placeholder="p" />,
  List: () => (
    <m.List>
      <m.ListItem>
        <m.ListItemIcon>i</m.ListItemIcon>
        <m.ListItemText primary="p" secondary="s" />
      </m.ListItem>
    </m.List>
  ),
  Menu: () => <m.Menu triggerText="t" items={[{ label: 'a', value: 1 }]} />,
  Modal: () => <m.Modal visible title="t">m</m.Modal>,
  NumberAnimation: () => <m.NumberAnimation value={42} />,
  Page: () => <m.Page>p</m.Page>,
  Pagination: () => <m.Pagination value={1} total={50} pageSize={10} />,
  Paper: () => <m.Paper>p</m.Paper>,
  Popover: () => <m.Popover>p</m.Popover>,
  PricingTable: () => <m.PricingTable plans={[{ name: 'n', price: '0', features: ['f'] }]} />,
  Progress: () => <m.Progress value={10} />,
  Radio: () => (
    <m.RadioGroup value="a" name="r">
      <m.Radio value="a" label="A" />
    </m.RadioGroup>
  ),
  Rating: () => <m.Rating value={2} />,
  Select: () => <m.Select options={opts} value="one" />,
  Skeleton: () => <m.Skeleton width="10px" height="10px" />,
  SlideOver: () => <m.SlideOver open title="t">s</m.SlideOver>,
  Slider: () => <m.Slider value={10} />,
  Snackbar: () => <m.Snackbar open message="msg" />,
  Split: () => <m.Split><div>a</div><div>b</div></m.Split>,
  Stack: () => <m.Stack>s</m.Stack>,
  Status: () => <m.Status status="success" showText />,
  Switch: () => <m.Switch label="s" />,
  Table: () => (
    <m.Table>
      <m.TableHead><m.TableRow><m.TableCell header>h</m.TableCell></m.TableRow></m.TableHead>
      <m.TableBody><m.TableRow><m.TableCell>c</m.TableCell></m.TableRow></m.TableBody>
    </m.Table>
  ),
  Tabs: () => <m.Tabs tabs={[{ label: 'a', content: 'x' }, { label: 'b', content: 'y' }]} />,
  TextField: () => <m.TextField label="t" value="" />,
  Toolbar: () => <m.Toolbar>t</m.Toolbar>,
  Tooltip: () => <m.Tooltip text="tip"><span>t</span></m.Tooltip>,
  TypingText: () => <m.TypingText text="t" />,
  Typography: () => <m.Typography variant="h1">t</m.Typography>,
  VerificationCodeInput: () => <m.VerificationCodeInput length={4} />,
  VideoPlayer: () => <m.VideoPlayer src="x.mp4" />,
  Watermark: () => <m.Watermark text="w"><div>c</div></m.Watermark>,
}

const failures = []
for (const [name, factory] of Object.entries(cases)) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  try {
    const dispose = render(
      () => (
        <m.ThemeProvider defaultMode="light">
          <m.LocaleProvider locale="en">{factory()}</m.LocaleProvider>
        </m.ThemeProvider>
      ),
      host,
    )
    dispose()
  } catch (err) {
    failures.push([name, String(err && err.message || err)])
  }
  host.remove()
}
console.log('PROBE2-RESULT:' + JSON.stringify(failures))
